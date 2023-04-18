import blockCalendar from '../components/MFSblockCalendar';
import blockFood from '../components/MFSblockFood';
import blockFitness from '../components/MFSblockFitness';
import blockCookBook from '../components/MFSblockCookBook';
import popup from '../components/popup';
import { $ } from '../utils/helpers';
class MyFatSecret {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  async render() {
    this.createLocalStorage();
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
      <button class="myfatsecret__card food">
      <p class="myfatsecret__card-title title">Food diary</p>
      <span class="myfatsecret__info-food">0 kcal</span>
      </button>
      <button class="myfatsecret__card fitness">
      <p class="myfatsecret__card-title title">Exercise diary</p>
      <span class="myfatsecret__info-fitness">0 kcal</span>
      </button>
      <button class="myfatsecret__card calendar">
        <p class="myfatsecret__card-title title">Calendar</p>
        <span class="myfatsecret__info-calendar">WED 01</span>
      </button>
      <button class="myfatsecret__card cookbook">
      <p class="myfatsecret__card-title title">Cookbook</p>
          <span class="myfatsecret__info-cookbook">0 recipes</span>
        </button>
      </div>
    </div>
    <div class="myfatsecret__block">
    ${blockCookBook.render()}
    ${(function cookBook() {
      setTimeout(() => {
        blockCookBook.fillCookBook();
      }, 0);
      return '';
    })()}
    </div>
    </div>
    ${popup.render()}
</div>
    `;
    this.getAllInformation();
    const tabs = document.querySelectorAll('.myfatsecret__card');
    tabs.forEach((el) =>
      el.addEventListener('click', (e) => {
        this.showBlock(e);
      })
    );
    this.changeColor();
  }

  async showBlock(e: Event) {
    const block = document.querySelector('.myfatsecret__block') as HTMLElement;
    const target = e.currentTarget as HTMLElement;
    const nameTab = target.className.split(' ')[1];
    switch (nameTab) {
      case 'calendar':
        block.innerHTML = `${blockCalendar.render()}`;
        blockCalendar.getInformation();
        break;
      case 'food':
        block.innerHTML = `${blockFood.render()}`;
        blockFood.drawItem();
        this.getAllInformation();
        popup.eventListener();
        break;
      case 'fitness':
        block.innerHTML = `${blockFitness.render()}`;
        popup.eventListener();
        this.getAllInformation();

        blockFitness.drawItem();
        break;
      case 'cookbook':
        block.innerHTML = `${blockCookBook.render()}`;
        blockCookBook.fillCookBook();
        this.getAllInformation();
        blockCookBook.changeColorFindLink();
        break;
    }
  }

  createLocalStorage() {
    if (localStorage.getItem('storage') != undefined) return;
    const storage = {
      food: {
        breakfast: [],
        lunch: [],
        dinner: [],
        snack: [],
      },
      fitness: {
        activity: [],
        sleep: [],
      },
    };
    localStorage.setItem('storage', JSON.stringify(storage));
  }

  changeColor() {
    const changeColorInput = <HTMLInputElement>document.querySelector('.change_color_input');
    const colorLocalStr = localStorage.getItem('color');
    const borderTitle = <HTMLElement>document.querySelector('.myfatsecret__block');
    const arrBtnFatsecret: HTMLElement[] = Array.from(document.querySelectorAll('.myfatsecret__card'));
    if (colorLocalStr) {
      changeColorInput.value = colorLocalStr;
    }

    borderTitle.style.borderColor = changeColorInput.value;
    for (let i = 0; i < arrBtnFatsecret.length; i++) {
      arrBtnFatsecret[i].style.background = changeColorInput.value;
    }
    changeColorInput.addEventListener('change', () => {
      borderTitle.style.borderColor = changeColorInput.value;
      for (let i = 0; i < arrBtnFatsecret.length; i++) {
        arrBtnFatsecret[i].style.background = changeColorInput.value;
      }
    });
  }

  getAllInformation() {
    const storage = JSON.parse(`${localStorage.getItem('storage')}`);
    const infoCalendar = <HTMLElement>$(`.myfatsecret__info-calendar`);
    const infoFood = <HTMLElement>$(`.myfatsecret__info-food`);
    const infoFitness = <HTMLElement>$(`.myfatsecret__info-fitness`);
    const infoCookbook = <HTMLElement>$(`.myfatsecret__info-cookbook`);
    infoCalendar.innerHTML = `${new Date().toLocaleDateString()}`;
    if (storage.fitness.calSum) {
      infoFitness.innerHTML = `${storage.fitness.calSum} kcal`;
    }
    if (storage.food.calSum) {
      infoFood.innerHTML = `${storage.food.calSum} kcal`;
    } else {
      infoFood.innerHTML = `0 kcal`;
      infoFitness.innerHTML = `0 kcal`;
    }
    const today = new Date();
    const dayNumber = today.getDate();
    const getDayWeek = today.getDay();
    let dayWeek = '';
    switch (getDayWeek) {
      case 0:
        dayWeek = 'SUN';
        break;
      case 1:
        dayWeek = 'MON';
        break;
      case 2:
        dayWeek = 'TUE';
        break;
      case 3:
        dayWeek = 'WED';
        break;
      case 4:
        dayWeek = 'THU';
        break;
      case 5:
        dayWeek = 'FRI';
        break;
      case 6:
        dayWeek = 'SAT';
        break;
    }
    infoCalendar.innerHTML = `${dayWeek} ${dayNumber}`;
    const locStrIdRecipes = localStorage.getItem('arrRecipes');
    if (locStrIdRecipes) {
      const arrayIdRecipes = JSON.parse(locStrIdRecipes);
      infoCookbook.innerHTML = `${arrayIdRecipes.length} recipes`;
    }
    infoFood.innerHTML = `${storage.food.calSum} kcal`;
    infoFitness.innerHTML = `${storage.fitness.calSum} kcal`;
  }
}

export { MyFatSecret };
