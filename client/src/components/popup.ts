import { IRecipeData, IInputCheckbox, IRecipe } from '../utils/types';
import { $, $All } from '../utils/helpers';
import api from '../api/api';
import blockFood from './MFSblockFood';
import { allExerciseArray, DataExercise } from './dataFitExercise';
import blockFitness from './MFSblockFitness';
const popup = {
  render() {
    return `
    <div class="popup">
    <div class="popup__container">
      <div class="popup__body">
        <div class="popup__block">
          <button class="popup__addItem">
            <span><i style='color:#32B34C' class="fa-solid fa-square-plus fa-2xl"></i></span>
            Add Item
          </button>
          <div class="search">
            <input class="search__popup-input" type="text" placeholder="Enter search">
            <button class="search__popup"><i class="fa-solid fa-magnifying-glass fa-circle"></i></button>
          </div>
          <button class="popup__exit"><img src="./img/myfatsecret/exit-button.svg" alt="additem"></button>
        </div>
        <div class="popup__products-table">
          <div class="popup__products-table__header">
            <span class="popup__products-table__food-text">
              Food
            </span> 
            <span class="popup__products-table__amount-text">
              Amount
            </span>
            <span class="popup__products-table__calories-text">
              Calories
            </span>
          </div>
          <div class="popup__products-table__add-block">
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
  },
  renderNotFoundPage() {
    const block = (<HTMLElement>$('.popup__products-table__add-block')) as HTMLElement;
    block.innerHTML = `
    <div class='popup__products-table__add-block__not-found'>
      <h1>Nothing found</h1>
    </div>
    `;
  },

  changeLabel(label: string) {
    const block = document.querySelector('.popup__products-table__food-text') as HTMLElement;
    console.log(block);

    block.innerHTML = label;
    return block;
  },
  addIdForBlock(mealType: string, type: string) {
    const block = <HTMLElement>$('.search__popup-input');
    block.id = `${mealType + ' ' + type}`;
  },

  searchItemFood(arr: IRecipeData) {
    const block = (<HTMLElement>$('.popup__products-table__add-block')) as HTMLElement;
    block.innerHTML = ``;
    const calories: number[] = [];
    const label: string[] = [];
    const uri: string[] = [];
    const amount: number[] = [];
    arr.forEach((el) => calories.push(el.recipe.calories));
    arr.forEach((el) => label.push(el.recipe.label));
    arr.forEach((el) => uri.push(el.recipe.uri));
    arr.forEach((el) => amount.push(el.recipe.yield));
    for (let i = 0; i < label.length; i++) {
      this.getItem(Math.round(calories[i]), label[i], uri[i], amount[i]);
    }
  },
  searchItemFitness(arr: DataExercise[]) {
    const block = (<HTMLElement>$('.popup__products-table__add-block')) as HTMLElement;
    block.innerHTML = ``;
    const calories: number[] = [];
    const label: string[] = [];
    const id: string[] = [];
    arr.forEach((el) => id.push(`${el.name}`));
    arr.forEach((el) => label.push(el.name));
    arr.forEach((el) => calories.push(el.calsInHr));
    for (let i = 0; i < label.length; i++) {
      this.getItem(Math.round(calories[i]), label[i], id[i]);
    }
  },

  getItem(cal: number, label: string, uri: string, amount?: number) {
    const from = uri.search('#');
    const to = uri.length;
    const newstr = uri.substring(from + 1, to);

    const block = document.querySelector('.popup__products-table__add-block') as HTMLElement;
    block.innerHTML += `
    <div class = "popup__products-table__add-block__add-item">
      <span class="popup__products-table__food">
      <input type="checkbox" class="checkbox-addItem" id="${!Number.isNaN(+uri) ? uri : [newstr]}">
      ${label}
      </span>
      <span class="popup__products-table__amount">
      1
      </span>
      <span class="popup__products-table__calories">
      ${amount ? Math.round(cal / amount) : cal}
      </span>
    </div>
    `;
  },
  async setLocalStorage(arr: IRecipe) {
    const storage = JSON.parse(`${localStorage.getItem('storage')}`);
    const input = <HTMLElement>$('.search__popup-input');
    const type = input.id.split(' ')[1];
    const mealType = input.id.split(' ')[0];
    if (type == 'fitness') {
      storage[`${type}`][`${mealType}`].push({
        id: arr.id,
        label: arr.name,
        time: 60,
        cal: arr.calsInHr,
      });
    } else {
      storage[`${type}`][`${mealType}`].push({
        label: arr.recipe.label,
        cal: Math.round((arr.recipe.calories * 100) / arr.recipe.totalWeight),
        fat: Math.round((arr.recipe.totalNutrients.FAT.quantity * 100) / arr.recipe.totalWeight),
        carb: Math.round((arr.recipe.totalNutrients.CA.quantity * 100) / arr.recipe.totalWeight),
        prot: Math.round((arr.recipe.totalNutrients.PROCNT.quantity * 100) / arr.recipe.totalWeight),
        totalWeight: arr.recipe.totalWeight,
        gramm: 100,
      });
    }
    storage[`${type}`][`${mealType}`] = storage[`${type}`][`${mealType}`].reduce(
      (
        o: {
          push(i: { label: string }): unknown;
          find(arg0: (v: { label: string }) => boolean): unknown;
          label: string;
        },
        i: { label: string }
      ) => {
        if (!o.find((v) => v.label == i.label)) {
          o.push(i);
        }
        return o;
      },
      []
    );
    localStorage.setItem('storage', JSON.stringify(storage));
  },

  eventListener() {
    const exitPopup = <HTMLElement>$('.popup__exit');
    const searchBtn = <HTMLElement>$('.search__popup');
    const searchInput = <HTMLInputElement>$('.search__popup-input');
    const openPopup = $All('.addItem');
    const popupContainer = <HTMLElement>$('.popup');
    const addItemBtn = <HTMLElement>$('.popup__addItem');
    openPopup.forEach((el) =>
      el.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const mealType = target.className.split(' ')[1];
        const type = target.className.split(' ')[2];
        this.addIdForBlock(mealType, type);
        searchInput.value = '';
        const block = (<HTMLElement>$('.popup__products-table__add-block')) as HTMLElement;
        block.innerHTML = ``;
        popupContainer.style.display = 'block';
      })
    );

    exitPopup?.addEventListener('click', () => {
      popupContainer.style.display = 'none';
    });
    searchBtn.onclick = async function () {
      let result;
      if (searchInput.id.split(' ')[1] != 'fitness') {
        result = await api.getRecipeFoodSearch(searchInput.value, searchInput.id.split(' ')[0]);
        popup.searchItemFood(result.hits);
        if (result.hits.length == 0) {
          popup.renderNotFoundPage();
        }
      } else {
        const arr = allExerciseArray.filter((el) => el.name.toLowerCase().includes(searchInput.value));
        result = arr;
        console.log(arr);
        popup.searchItemFitness(result);
        if (result.length == 0) {
          popup.renderNotFoundPage();
        }
      }
    };
    addItemBtn.onclick = function () {
      const item: IInputCheckbox = document.querySelectorAll('.checkbox-addItem');
      item.forEach(async (el) => {
        if (el.checked) {
          const id = el.parentElement?.children[0].id as string;
          console.log('id:', id);
          if (id.includes('recipe')) {
            const result = await api.getSingleRecipe(id);
            await popup.setLocalStorage(result);
            blockFood.drawItem();
          } else {
            const result = allExerciseArray.find((elem) => elem.name == id) as unknown as IRecipe;
            console.log(result);

            await popup.setLocalStorage(result);
            blockFitness.drawItem();
          }
        }
      });
      popupContainer.style.display = 'none';
    };
  },
};
export default popup;
