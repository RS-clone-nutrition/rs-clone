import api from '../api/api';
import Cal from '../utils/generateCalendar';
import { IRecipeData, IInputCheckbox } from '../utils/types';
// import Item from '../utils/addItem';
import { $ } from '../utils/helpers';
const calendar = new Cal('divCal');
class MyFatSecret {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  async render() {
    this.main.innerHTML = `
    <div class="container">
    <div class="myfatsecret">
      <ul class="bread-crumbs">
        <li>
          <a href="/">
            <img src="./img/nav_breadcrumb_home.png" alt="">
          </a>  
        </li>
        <li>></li>
        <li><a href="/myfatsecret">MyFatSecret</a></li>
      </ul>
      <div class="myfatsecret__tabs">
        <button class="myfatsecret__card calendar">
          <img src="./img/myfatsecret/calender-icon.svg" alt="calendar">
          <span class="myfatsecret__info-calendar">WED 01</span>
        </button>
        <button class="myfatsecret__card food">
          <img src="./img/myfatsecret/food-icon.svg" alt="food">
          <span class="myfatsecret__info-food">0 kcal</span>
        </button>
        <button class="myfatsecret__card fitness">
          <img src="./img/myfatsecret/fitness-icon.svg" alt="fitness">
          <span class="myfatsecret__info-fitness">0 kcal</span>
        </button>
        <button class="myfatsecret__card cookbook">
          <img src="./img/myfatsecret/cookbook.png" alt="cook book">
          <span class="myfatsecret__info-cookbook">0 recipes</span>
        </button>
      </div>
    </div>
    <div class="myfatsecret__block">
    ${this.getBlockCalendar()}
    </div>
  </div>
  <div class="popup">
        <div class="popup__container">
          <div class="popup__body">
            <div class="popup__block">
              <button class="popup__addItem">
                <img src="./img/myfatsecret/additem.svg" alt="additem">
                Add Item
              </button>
              <div class="search">
                <input class="search__input" type="text" placeholder="Enter search">
                <button class="search__button"><i class="fa-solid fa-magnifying-glass fa-circle"></i></button>
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
  </div>
    `;
    const tabs = document.querySelectorAll('.myfatsecret__card');
    tabs.forEach((el) =>
      el.addEventListener('click', (e) => {
        this.showBlock(e);
      })
    );
  }

  showBlock(e: Event) {
    const block = document.querySelector('.myfatsecret__block') as HTMLElement;
    const target = e.currentTarget as HTMLElement;
    const nameTab = target.className.split(' ')[1];

    switch (nameTab) {
      case 'calendar':
        block.innerHTML = `${this.getBlockCalendar()}`;
        break;
      case 'food':
        block.innerHTML = `${this.getBlockFood()}`;
        this.eventListener();
        break;
      case 'fitness':
        block.innerHTML = `${this.getBlockFitness()}`;
        this.eventListener();
        break;
      case 'cookbook':
        block.innerHTML = `${this.getBlockCookBook()}`;
        this.fillCookBook();
        this.eventListener();
        break;
    }
  }

  getBlockCalendar() {
    return `
    <h2>My Diet Calendars</h2>
    <h2>Recent Food & Exercise Entries</h2>
    <div class="calendar-wrapper">
      <h2 class='calendar-month'>Feb 2023</h2>
      <div class="calendar-btn">
          <button id="btnPrev" type="button"></button>
          <button id="btnNext" type="button"></button>
      </div>
      <div id="divCal">${calendar.createCalendar()}</div>
    </div>
    `;
  }

  getBlockFood() {
    return `
  <div class="myfatsecret-food-fitness">
    <h2>My Food Diary</h2>
    <div class="myfatsecret-food-fitness__col-category">
      <div></div>
      <p>Fat</p>
      <p>Carbs</p>
      <p>Prot</p>
      <p>Cals</p>
    </div>
    <div class="myfatsecret-food-fitness__row-category breakfast">
      <h2>Breakfast</h2>
      <p class="fat-all">4222</p>
      <p class="carbs-all">4</p>
      <p class="prot-all">4</p>
      <p class="cals-all">4</p>
    </div>
    <div class="new-item">
      <h3>coffe</h3>
      <p class="fat">4222</p>
      <p class="carbs">4</p>
      <p class="prot">4</p>
      <p class="cals">4</p>
    </div>
    <div class="new-item">
      <h3>coffe</h3>
      <p class="fat">4222</p>
      <p class="carbs">4</p>
      <p class="prot">4</p>
      <p class="cals">4</p>
    </div>
    <button class="addItem breakBlock" type="button">
      <img src="./img/myfatsecret/additem.svg" alt="additem">
      Add Item
    </button>
    <div class="myfatsecret-food-fitness__row-category lunch">
      <h2>Lunch</h2>
      <p class="fat-all">4222</p>
      <p class="carbs-all">4</p>
      <p class="prot-all">4</p>
      <p class="cals-all">4</p>
    </div>
    <div class="new-item">
      <h3>coffe</h3>
      <p class="fat">4222</p>
      <p class="carbs">4</p>
      <p class="prot">4</p>
      <p class="cals">4</p>
    </div>
    <div class="new-item">
      <h3>coffe</h3>
      <p class="fat">4222</p>
      <p class="carbs">4</p>
      <p class="prot">4</p>
      <p class="cals">4</p>
    </div>
    <button class="addItem lunchBlock" type="button">
      <img src="./img/myfatsecret/additem.svg" alt="additem">
      Add Item
    </button>
    <div class="myfatsecret-food-fitness__row-category dinner">
      <h2>Dinner</h2>
      <p class="fat-all">4222</p>
      <p class="carbs-all">4</p>
      <p class="prot-all">4</p>
      <p class="cals-all">4</p>
    </div>
    <div class="new-item">
      <h3>coffe</h3>
      <p class="fat">4222</p>
      <p class="carbs">4</p>
      <p class="prot">4</p>
      <p class="cals">4</p>
    </div>
    <div class="new-item">
      <h3>coffe</h3>
      <p class="fat">4222</p>
      <p class="carbs">4</p>
      <p class="prot">4</p>
      <p class="cals">4</p>
    </div>
    <button class="addItem dinnerBlock" type="button">
      <img src="./img/myfatsecret/additem.svg" alt="additem">
      Add Item
    </button>
    <div class="myfatsecret-food-fitness__row-category snacks">
      <h2>Snacks</h2>
      <p class="fat-all">4222</p>
      <p class="carbs-all">4</p>
      <p class="prot-all">4</p>
      <p class="cals-all">4</p>
    </div>
    <div class="new-item">
      <h3>coffe</h3>
      <p class="fat">4222</p>
      <p class="carbs">4</p>
      <p class="prot">4</p>
      <p class="cals">4</p>
    </div>
    <div class="new-item">
      <h3>coffe</h3>
      <p class="fat">4222</p>
      <p class="carbs">4</p>
      <p class="prot">4</p>
      <p class="cals">4</p>
    </div>
    <button class="addItem snacksBlock" type="button">
      <img src="./img/myfatsecret/additem.svg" alt="additem">
      Add Item
    </button>

    <div class="day-summary">
      <p class="day-summary__maintext">Day summary</p>
      <div class="day-summary__category">
        <div class="day-summary__block cal">
          <h3>Calories</h3>
          <p>130</p>
        </div>
        <div class="day-summary__block fat">
          <h3>Fat</h3>
          <p>130</p>
        </div>
        <div class="day-summary__block carbs">
          <h3>Carbs</h3>
          <p>130</p>
        </div>
        <div class="day-summary__block protein">
          <h3>Protein</h3>
          <p>130</p>
        </div>
        <div class="day-summary__block RDI">
          <h4>75%</h4>
          <div class="rdi-block">
            <p>of RDI*</p>
            <p class="rdi-block__calories">(1100 calories)</p>
            </div>
        </div>
        <p>* Based on your RDI of 1491 calories</p>
      </div>
    </div>
    `;
  }

  getBlockFitness() {
    return `
    <div class="myfatsecret-food-fitness">
    <h2>My Exercise Diary</h2>
    <div class="myfatsecret-food-fitness__col-category">
      <div></div>
      <p></p>
      <p></p>
      <p>Time spent</p>
      <p>Cals</p>
    </div>
    <div class="myfatsecret-food-fitness__row-category activity">
      <h2>Activity & Exercise</h2>
      <p></p>
      <p></p>
      <p class="time-all">25 min</p>
      <p class="cals-all">850</p>
    </div>
    <div class="new-item">
      <h3>Runnind - 10/mph</h3>
      <p></p>
      <p></p>
      <p class="prot">10 mins</p>
      <p class="cals">425</p>
    </div>
    <div class="new-item">
    <h3>Runnind - 10/mph</h3>
    <p></p>
    <p></p>
    <p class="prot">10 mins</p>
    <p class="cals">425</p>
  </div>
    <button class="addItem activityBlock" type="button">
      <img src="./img/myfatsecret/additem.svg" alt="additem">
      Add Item
    </button>
    <div class="myfatsecret-food-fitness__row-category sleep">
      <h2>Sleep/Rest</h2>
      <p></p>
      <p></p>
      <p class="time-all">25 min</p>
      <p class="cals-all">400</p>
    </div>
    <div class="new-item">
      <h3>Sleeping</h3>
      <p></p>
      <p></p>
      <p class="prot">4</p>
      <p class="cals">4</p>
    </div>
    <div class="new-item">
      <h3>Resting</h3>
      <p></p>
      <p></p>
      <p class="prot">4</p>
      <p class="cals">4</p>
    </div>
    <button class="addItem sleepBlock" type="button">
      <img src="./img/myfatsecret/additem.svg" alt="additem">
      Add Item
    </button>
    </div>
    `;
  }

  getBlockCookBook() {
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
  }

  async fillCookBook() {
    const locStrIdRecipes = localStorage.getItem('arrRecipes');
    const listRecipes = <HTMLElement>$('.cookbook-recipes__list');
    const emptyBook = <HTMLElement>$('.empty-cookbook');
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
            <li class="list-settings__item">add to food diary</li>
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
  }

  searchItem(arr: IRecipeData) {
    const calories: number[] = [];
    const label: string[] = [];
    arr.forEach((el) => calories.push(el.recipe.calories));
    arr.forEach((el) => label.push(el.recipe.label));
    const block = document.querySelector('.popup__products-table__add-block') as HTMLElement;
    block.innerHTML = ``;
    for (let i = 0; i < label.length; i++) {
      this.getItem(Math.round(calories[i]), label[i]);
    }
  }

  getItem(cal: number, label: string) {
    const block = document.querySelector('.popup__products-table__add-block') as HTMLElement;
    block.innerHTML += `
    <div class = "popup__products-table__add-block__add-item">
      <span class="popup__products-table__food">
      <input type="checkbox" class="checkbox-addItem">
      ${label}
      </span>
      <span class="popup__products-table__amount">
      1
      </span>
      <span class="popup__products-table__calories">
      ${cal}
      </span>
    </div>
    `;
  }

  //drawItem(el: string) {}

  eventListener() {
    const exitPopup = document.querySelector('.popup__exit');
    const openPopup = document.querySelectorAll('.addItem');
    const searchBtn = document.querySelectorAll('.search__button');
    const addItem = document.querySelector('.popup__addItem');

    searchBtn.forEach((el) =>
      el.addEventListener('click', async (e) => {
        const target = e.currentTarget as HTMLElement;
        const inputTarget = target.previousElementSibling as HTMLInputElement;
        const value = inputTarget.value;
        console.log(value);
        const result = await api.getRecipeFoodSearch(value);
        console.log(result.hits);
        // this.searchItem(result.hits);
      })
    );

    openPopup.forEach((el) =>
      el.addEventListener('click', () => {
        const popupContainer = document.querySelector('.popup') as HTMLElement;
        popupContainer.style.display = 'block';
      })
    );

    exitPopup?.addEventListener('click', () => {
      const popupContainer = document.querySelector('.popup') as HTMLElement;
      popupContainer.style.display = 'none';
    });

    addItem?.addEventListener('click', () => {
      const item: IInputCheckbox = document.querySelectorAll('.checkbox-addItem');
      item.forEach((el) => {
        if (el.checked) {
          console.log(el.parentElement?.parentElement);
        }
      });
    });
  }
}

export { MyFatSecret };
