import '../styles/recipes.scss';
import api from '../api/api';
import { $, getURL } from '../utils/helpers';
import groupsRecipes from '../consts/dataGroupsRecipes';
import blockRecipe from '../components/blockRecipe';
import { IRecipe } from '../utils/types';
import loader from '../components/loader';

class Recipes {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    const searchValue = <string>getURL().split('/').slice(-1).toString();

    this.main.innerHTML = `
    <div class="recipes">
        <div class="container">
          <div class="crumbs">
            <a href="/" class="crumbs__link">
              <img class="crumbs__home-img" src="./img/home-icon.svg" alt="home icon">
            </a>
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
                <div class="popular-recipes__list-container"}>
                  <ul class="popular-recipes__list">
                    
                  </ul>
                </div>
                <p class="popular-recipes__more">view more recipes</p>
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

    if (searchValue === 'recipes') {
      this.fill();
    } else {
      this.searchRecipes(searchValue);
    }
    this.eventListener();
    this.changeColor();
  }

  changeColor() {
    const changeColorInput = <HTMLInputElement>document.querySelector('.change_color_input');
    const colorLocalStr = localStorage.getItem('color');
    const borderTitle = <HTMLElement>$('.main-recipes');
    if (colorLocalStr) {
      changeColorInput.value = colorLocalStr;
    }
    const arrCategorTitle: HTMLElement[] = Array.from(document.querySelectorAll('.category-title'));
    const arrayItemBtn: HTMLElement[] = Array.from(document.querySelectorAll('.item-btn'));

    borderTitle.style.borderColor = changeColorInput.value;
    for (let i = 0; i < arrCategorTitle.length; i++) {
      arrCategorTitle[i].style.background = changeColorInput.value;
    }

    changeColorInput.addEventListener('change', () => {
      borderTitle.style.borderColor = changeColorInput.value;
      for (let i = 0; i < arrCategorTitle.length; i++) {
        arrCategorTitle[i].style.background = changeColorInput.value;
      }
      for (let j = 0; j < arrayItemBtn.length; j++) {
        if (arrayItemBtn[j].classList.contains('active-item')) {
          arrayItemBtn[j].style.background = changeColorInput.value;
        }
      }
    });
  }

  async searchRecipes(value: string) {
    const container = <HTMLElement>$('.popular-recipes__list-container');
    loader.show(container);
    const titleSearch = <HTMLElement>$('.popular-recipes__title');
    const listRecipes = <HTMLElement>$('.popular-recipes__list');
    const foundRecipes = await api.getRecipeFoodSearch(value);
    loader.remove(container);
    if (foundRecipes.count === 0) {
      titleSearch.innerHTML = 'NOT FOUND RECIPES';
    } else {
      titleSearch.innerHTML = `FOUND RECIPES ON REQUEST '${value.toUpperCase()}'`;
      const arrayRecipes = foundRecipes.hits;
      const blocksRecipes = arrayRecipes
        .map((e: IRecipe) =>
          blockRecipe(
            e.recipe.image,
            e.recipe.label,
            e.recipe.ingredients,
            e.recipe.calories / e.recipe.yield,
            e.recipe.totalNutrients.FAT.quantity / e.recipe.yield,
            e.recipe.totalNutrients.CHOCDF.quantity / e.recipe.yield,
            e.recipe.totalNutrients.PROCNT.quantity / e.recipe.yield,
            e.recipe.uri.split('#')[1]
          )
        )
        .join('');
      listRecipes.innerHTML = blocksRecipes;
    }
  }

  async fill() {
    const container = <HTMLElement>$('.popular-recipes__list-container');
    loader.show(container);
    const randomRecipes = await api.getRandomRecipes();
    const listRecipes = <HTMLElement>$('.popular-recipes__list');
    const arrayRecipes = randomRecipes.hits;
    loader.remove(container);
    const blocksRecipes = arrayRecipes
      .map((e: IRecipe) =>
        blockRecipe(
          e.recipe.image,
          e.recipe.label,
          e.recipe.ingredients,
          e.recipe.calories / e.recipe.yield,
          e.recipe.totalNutrients.FAT.quantity / e.recipe.yield,
          e.recipe.totalNutrients.CHOCDF.quantity / e.recipe.yield,
          e.recipe.totalNutrients.PROCNT.quantity / e.recipe.yield,
          e.recipe.uri.split('#')[1]
        )
      )
      .join('');
    listRecipes.innerHTML = blocksRecipes;
  }

  eventListener() {
    const changeColorInput = <HTMLInputElement>document.querySelector('.change_color_input');
    const colorLocalStr = localStorage.getItem('color');
    if (colorLocalStr) {
      changeColorInput.value = colorLocalStr;
    }
    const blockCategory = <HTMLElement>$('.recipes-category');
    const arrayItemCategory: HTMLElement[] = Array.from(document.querySelectorAll('.item-btn'));
    const titleCategory = <HTMLElement>$('.popular-recipes__title');
    const breadCrumbs = <HTMLElement>$('.crumbs');
    const viewMore = <HTMLElement>$('.popular-recipes__more');
    let viewMoreLink: string;
    function updateUrl(query: string, params: string) {
      const url = new URL(location.href);
      url.searchParams.set(query, params);
      if (!params) url.searchParams.delete(query);
      history.replaceState({}, '', url);
    }
    async function showCategoryRecipes(category: string, type: string) {
      const typeResipes = await api.getRecipesType(category, type);
      const listRecipes = <HTMLElement>$('.popular-recipes__list');
      const arrayRecipes = typeResipes.hits;
      viewMoreLink = typeResipes._links.next.href;
      const blocksRecipes = arrayRecipes
        .map((e: IRecipe) =>
          blockRecipe(
            e.recipe.image,
            e.recipe.label,
            e.recipe.ingredients,
            e.recipe.calories / e.recipe.yield,
            e.recipe.totalNutrients.FAT.quantity / e.recipe.yield,
            e.recipe.totalNutrients.CHOCDF.quantity / e.recipe.yield,
            e.recipe.totalNutrients.PROCNT.quantity / e.recipe.yield,
            e.recipe.uri.split('#')[1]
          )
        )
        .join('');
      listRecipes.innerHTML = blocksRecipes;
      breadCrumbs.innerHTML = `<a href="/" class="crumbs__link">
                                <img class="crumbs__home-img" src="./img/home-icon.svg" alt="home icon">
                              </a>
                              <span class="crumbs__sep">></span>
                              <a href="/recipes" class="crumbs__link">Recipes</a>
                              <span class="crumbs__sep">></span>
                              <p class="crumbs__link">${type}</p>`;
      titleCategory.innerHTML = `${type.toUpperCase()} RECIPES`;
    }
    async function showNextRecipes(path: string) {
      const typeResipes = await api.getNextPageRecipes(path);
      const listRecipes = <HTMLElement>$('.popular-recipes__list');
      const arrayRecipes = typeResipes.hits;
      viewMoreLink = typeResipes._links.next.href;
      const blocksRecipes = arrayRecipes
        .map((e: IRecipe) =>
          blockRecipe(
            e.recipe.image,
            e.recipe.label,
            e.recipe.ingredients,
            e.recipe.calories / e.recipe.yield,
            e.recipe.totalNutrients.FAT.quantity / e.recipe.yield,
            e.recipe.totalNutrients.CHOCDF.quantity / e.recipe.yield,
            e.recipe.totalNutrients.PROCNT.quantity / e.recipe.yield,
            e.recipe.uri.split('#')[1]
          )
        )
        .join('');
      listRecipes.innerHTML += blocksRecipes;
    }
    blockCategory.addEventListener('click', (e) => {
      const itemCategory = <HTMLElement>e.target;
      if (itemCategory.classList.contains('item-btn')) {
        for (let i = 0; i < arrayItemCategory.length; i++) {
          arrayItemCategory[i].classList.remove('active-item');
          arrayItemCategory[i].style.background = '';
          arrayItemCategory[i].style.color = '#000000';
        }
        itemCategory.classList.add('active-item');
        itemCategory.style.background = changeColorInput.value;
        itemCategory.style.color = '#FFFFFF';
        showCategoryRecipes(itemCategory.id, itemCategory.innerHTML);
        viewMore.style.display = 'block';
        updateUrl('type', itemCategory.innerHTML);
      }
    });
    blockCategory.onmouseover = function (e) {
      const elem = <HTMLElement>e.target;
      if (elem.classList.contains('item-btn')) {
        elem.style.background = changeColorInput.value;
        elem.style.color = '#FFFFFF';
      }
    };
    blockCategory.onmouseout = function (e) {
      const elem = <HTMLElement>e.target;
      if (elem.classList.contains('item-btn')) {
        if (elem.classList.contains('active-item')) {
          elem.style.background = changeColorInput.value;
          elem.style.color = '#FFFFFF';
        } else {
          elem.style.background = '';
          elem.style.color = '#000000';
        }
      }
    };
    viewMore.addEventListener('click', () => {
      showNextRecipes(viewMoreLink);
    });
    const sortByQueryParams = () => {
      const getAllQueryParams = (url: string) => {
        const paramArr = url.slice(url.indexOf('?') + 1).split('&');
        const params: { [index: string]: string } = {};
        paramArr.map((param) => {
          const [key, val] = param.split('=');
          params[key] = decodeURIComponent(val);
        });
        return params;
      };
      const params = getAllQueryParams(location.search);
      for (const key in params) {
        if (key === 'type') {
          for (let j = 0; j < arrayItemCategory.length; j++) {
            if (params[key].split('+').join(' ') === arrayItemCategory[j].innerHTML) {
              arrayItemCategory[j].classList.add('active-item');
              arrayItemCategory[j].style.background = changeColorInput.value;
              arrayItemCategory[j].style.color = '#FFFFFF';
              viewMore.style.display = 'block';
              showCategoryRecipes(arrayItemCategory[j].id, arrayItemCategory[j].innerHTML);
            }
          }
        }
      }
      const handleLocation = () => {
        window.addEventListener('popstate', handleLocation);
        window.addEventListener('DOMContentLoaded', handleLocation);
      };
      handleLocation();
    };
    sortByQueryParams();
  }
}

export { Recipes };
