import '../styles/recipes.scss';
import api from '../api/api';
import { $ } from '../utils/helpers';
import groupsRecipes from '../consts/dataGroupsRecipes';
import blockRecipe from '../components/blockRecipe';
import { IRecipe } from '../utils/types';

class Recipes {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    this.main.innerHTML = `
    <div class="recipes">
        <div class="container">
          <div class="crumbs">
            <img class="crumbs__home-img" src="./img/home-icon.svg" alt="home icon">
            <span class="crumbs__sep">></span>
            <a href="/recipes" class="crumbs__link">Recipes</a>
          </div>
          <div class="recipes-main-wrapper">
            <div>
              <div class="recipes__main main-recipes">
                <h1 class="main-recipes__title">Recipes</h1>
                <div class="main-recipes__undertitle">Find great recipes for any meal, food or diet, rated and reviewed for
                  you.</div>
              </div>
              <div class="recipes__popular popular-recipes">
                <h2 class="popular-recipes__title">Recently Popular Recipes</h2>
                <ul class="popular-recipes__list">
                  
                </ul>
                <a href="#" class="popular-recipes__more">view more recipes</a>
              </div>
            </div>
            <div class="recipes-category">
              <p class="category-title title">Diet:</p>
              <ul class="diet-list">
                ${groupsRecipes.Diet.map((e) => `<li class="item-btn" id="diet">${e}</li>`).join('')}
              </ul>
              <p class="category-title title">Health:</p>
              <ul class="diet-list">
                ${groupsRecipes.Health.map((e) => `<li class="item-btn" id="health">${e}</li>`).join('')}
              </ul>
              <p class="category-title title">Mael type:</p>
              <ul class="diet-list">
                ${groupsRecipes.MealType.map((e) => `<li class="item-btn" id="mealType">${e}</li>`).join('')}
              </ul>
              <p class="category-title title">Dish type:</p>
              <ul class="diet-list">
                ${groupsRecipes.DishType.map((e) => `<li class="item-btn" id="dishType">${e}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
    this.fill();
    this.eventListener();
  }

  async fill() {
    const randomRecipes = await api.getRandomRecipes();
    const listRecipes = <HTMLElement>$('.popular-recipes__list');
    const arrayRecipes = randomRecipes.hits;
    const blocksRecipes = arrayRecipes
      .map((e: IRecipe) =>
        blockRecipe(
          e.recipe.image,
          e.recipe.label,
          e.recipe.ingredientLines,
          e.recipe.calories,
          e.recipe.totalNutrients.FAT.quantity,
          e.recipe.totalNutrients.CHOCDF.quantity,
          e.recipe.totalNutrients.PROCNT.quantity
        )
      )
      .join('');
    listRecipes.innerHTML = blocksRecipes;
  }

  eventListener() {
    const blockCategory = <HTMLElement>$('.recipes-category');
    const arrayItemCategory: HTMLElement[] = Array.from(document.querySelectorAll('.item-btn'));
    const titleCategory = <HTMLElement>$('.popular-recipes__title');
    const breadCrumbs = <HTMLElement>$('.crumbs');
    async function showCategoryRecipes(category: string, type: string) {
      const typeResipes = await api.getRecipesType(category, type);
      const listRecipes = <HTMLElement>$('.popular-recipes__list');
      const arrayRecipes = typeResipes.hits;
      const blocksRecipes = arrayRecipes
        .map((e: IRecipe) =>
          blockRecipe(
            e.recipe.image,
            e.recipe.label,
            e.recipe.ingredientLines,
            e.recipe.calories,
            e.recipe.totalNutrients.FAT.quantity,
            e.recipe.totalNutrients.CHOCDF.quantity,
            e.recipe.totalNutrients.PROCNT.quantity
          )
        )
        .join('');
      listRecipes.innerHTML = blocksRecipes;
      breadCrumbs.innerHTML = `<img class="crumbs__home-img" src="./img/home-icon.svg" alt="home icon">
                              <span class="crumbs__sep">></span>
                              <a href="/recipes" class="crumbs__link">Recipes</a>
                              <span class="crumbs__sep">></span>
                              <p class="crumbs__link">${type}</p>`;
      titleCategory.innerHTML = `${type.toUpperCase()} RECIPES`;
    }
    blockCategory.addEventListener('click', (e) => {
      const itemCategory = <HTMLElement>e.target;
      if (itemCategory.classList.contains('item-btn')) {
        for (let i = 0; i < arrayItemCategory.length; i++) {
          arrayItemCategory[i].classList.remove('active-item');
        }
        itemCategory.classList.add('active-item');
        console.log(itemCategory.id, itemCategory.innerHTML);
        showCategoryRecipes(itemCategory.id, itemCategory.innerHTML);
      }
    });
  }
}

export { Recipes };
