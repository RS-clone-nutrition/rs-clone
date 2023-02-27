import { $, $All } from '../utils/helpers';
import api from '../api/api';
import { IRecipe } from '../utils/types';
const blockCookBook = {
  render() {
    return `
    <div class="myfatsecret-cookcook">
    <h2>My Cook Book</h2>
    <p class='find-recipes'><a href='/recipes' class='find-recipes__link'>Find Recipes</a></p>
    <div class='empty-cookbook'>
      <p class='empty-cookbook__text'>You have not yet added any recipes to your cook book</p>
    </div>
    <ul class="cookbook-recipes__list">
    </ul>
  </div>
  `;
  },
  async fillCookBook() {
    const locStrIdRecipes = localStorage.getItem('arrRecipes');
    const listRecipes = <HTMLElement>$('.cookbook-recipes__list');
    const emptyBook = <HTMLElement>$('.empty-cookbook');
    const infoCookbook = <HTMLElement>$(`.myfatsecret__info-cookbook`);
    let arrayIdRecipes: string[];
    function blockRecipe(
      img: string,
      title: string,
      kcal: number,
      fat: number,
      carbs: number,
      prot: number,
      id: string
    ) {
      return `
      <li class="popular-recipes__item" data-id='${id}'>
        <div class="popular-recipes__icon">
          <img src="${img}" alt="popular dish" class="popular-recipes__img">
        </div>
        <div class="popular-recipes__info info-popular">
          <h2 class="info-popular__name">
              <a class="info-popular__link blue" href="/recipe/${id}">${title}</a>
          </h2>
          <div class="info-popular__details-cookbook">
              <span>Per serve - Energy: ${Math.round(kcal)}kcal | 
              Carb: ${carbs.toFixed(2)}g | Prot: ${prot.toFixed(2)}g | 
              Fat: ${fat.toFixed(2)}g</span>
          </div>
          <ul class="list-recipes-settings">
            <li class="list-settings__item item-add" id='${id}'>add to food diary</li>
            <li class="list-settings__item">|</li>
            <li class="list-settings__item">
              <a href="/recipe/${id}">view recipe</a>
            </li>
            <li class="list-settings__item">|</li>
            <li class="list-settings__item item-remove" id='${id}'>remove from cook book</li>
          </ul>
        </div>
      </li>`;
    }
    if (locStrIdRecipes) {
      arrayIdRecipes = JSON.parse(locStrIdRecipes);
      if (arrayIdRecipes.length > 0) {
        emptyBook.style.display = 'none';
        for (let i = 0; i < arrayIdRecipes.length; i++) {
          const singleRecipe = await api.getSingleRecipe(arrayIdRecipes[i]);
          listRecipes.innerHTML += blockRecipe(
            singleRecipe.recipe.image,
            singleRecipe.recipe.label,
            singleRecipe.recipe.calories / singleRecipe.recipe.yield,
            singleRecipe.recipe.totalNutrients.FAT.quantity / singleRecipe.recipe.yield,
            singleRecipe.recipe.totalNutrients.CHOCDF.quantity / singleRecipe.recipe.yield,
            singleRecipe.recipe.totalNutrients.PROCNT.quantity / singleRecipe.recipe.yield,
            arrayIdRecipes[i]
          );
        }
        listRecipes.addEventListener('click', (e) => {
          const eventElem = <HTMLElement>e.target;
          if (eventElem.classList.contains('item-remove')) {
            for (let i = 0; i < arrayIdRecipes.length; i++) {
              if (arrayIdRecipes[i] === eventElem.id) {
                arrayIdRecipes.splice(i, 1);
              }
            }
            infoCookbook.innerHTML = `${arrayIdRecipes.length} recipes`;
            localStorage.setItem('arrRecipes', JSON.stringify(arrayIdRecipes));
            const arrayLiRecipes: Array<HTMLElement> = Array.from(document.querySelectorAll('.popular-recipes__item'));
            for (let i = 0; i < arrayLiRecipes.length; i++) {
              if (arrayLiRecipes[i].dataset.id === eventElem.id) {
                arrayLiRecipes[i].remove();
              }
            }
            if (arrayIdRecipes.length === 0) {
              emptyBook.style.display = 'block';
            }
          }
        });
      }
    }
    await this.eventListener();
  },
  async eventListener() {
    const addFoodDiary = $All('.item-add');
    addFoodDiary.forEach((el) =>
      el.addEventListener('click', async (e) => {
        const target = e.target as HTMLElement;
        const result: IRecipe = await api.getSingleRecipe(target.id);
        const storage = JSON.parse(`${localStorage.getItem('storage')}`);
        const mealType = [...result.recipe.mealType][0] as string;
        console.log(mealType);
        storage.food[`${mealType.split('/')[0]}`].push({
          label: result.recipe.label,
          cal: Math.round((result.recipe.calories * 100) / result.recipe.totalWeight),
          fat: Math.round((result.recipe.totalNutrients.FAT.quantity * 100) / result.recipe.totalWeight),
          carb: Math.round((result.recipe.totalNutrients.CA.quantity * 100) / result.recipe.totalWeight),
          prot: Math.round((result.recipe.totalNutrients.PROCNT.quantity * 100) / result.recipe.totalWeight),
          totalWeight: result.recipe.totalWeight,
          gramm: 100,
        });
        // storage.food[`${mealType.split('/')[0]}}`] = storage.food[`${mealType.split('/')[0]}}`].reduce(
        //   (
        //     o: {
        //       push(i: { label: string }): unknown;
        //       find(arg0: (v: { label: string }) => boolean): unknown;
        //       label: string;
        //     },
        //     i: { label: string }
        //   ) => {
        //     if (!o.find((v) => v.label == i.label)) {
        //       o.push(i);
        //     }
        //     return o;
        //   },
        //   []
        // );
        localStorage.setItem('storage', JSON.stringify(storage));
      })
    );
  },
  changeColorFindLink() {
    const changeColorInput = <HTMLInputElement>document.querySelector('.change_color_input');
    const colorLocalStr = localStorage.getItem('color');
    const findLink = <HTMLElement>$('.find-recipes__link');
    if (colorLocalStr) {
      changeColorInput.value = colorLocalStr;
    }
    findLink.style.color = changeColorInput.value;
    changeColorInput.addEventListener('change', () => {
      findLink.style.color = changeColorInput.value;
    });
  },
};
export default blockCookBook;
