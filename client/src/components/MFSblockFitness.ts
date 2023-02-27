import popup from './popup';
import { $, $All } from '../utils/helpers';
import { updateLocalStorage } from '../utils/updateLocalStorage';
const blockFitness = {
  render() {
    popup.changeLabel('Fitness');
    return `
  <div class="myfatsecret-food-fitness">
    <h2>My Exercise Diary</h2>
    <div class="myfatsecret-food-fitness__col-category">
      <div></div>
      <p></p>
      <p></p>
      <p>Time spent,min</p>
      <p>Cals</p>
    </div>
    <div class="myfatsecret-food-fitness__row-category activity">
      <div class="myfatsecret-food-fitness__row-category__header">
        <h2>Activity & Exercise</h2>
        <p class="fat-all"></p>
        <p class="carbs-all"></p>
        <p class="time-all">0</p>
        <p class="cals-all">0</p>
      </div>
      <div class="new-item activity">
        
      </div>
      <button class="addItem activity fitness" type="button">
        <span><i style='color:#32B34C' class="fa-solid fa-square-plus fa-2xl"></i></span>
        Add Item
      </button>
    </div>
    <div class="myfatsecret-food-fitness__row-category sleep">
      <div class="myfatsecret-food-fitness__row-category__header">
        <h2>Sleep/Rest</h2>
        <p class="fat-all"></p>
        <p class="carbs-all"></p>
        <p class="time-all">0</p>
        <p class="cals-all">0</p>
      </div>
      <div class="new-item sleep">
        
      </div>
      <button class="addItem sleep fitness" type="button">
        <span><i style='color:#32B34C' class="fa-solid fa-square-plus fa-2xl"></i></span>
        Add Item
      </button>
    </div>
  </div>
  `;
  },
  drawItem() {
    const storage = JSON.parse(`${localStorage.getItem('storage')}`);
    const subType = ['activity', 'sleep'];
    this.deleteItem();
    for (let y = 0; y < 2; y++) {
      const block = document.getElementsByClassName(`new-item ${subType[y]}`)[0];
      this.getAllInformation(subType[y]);
      block.innerHTML = ``;
      for (let i = 0; i < storage.fitness[`${subType[y]}`].length; i++) {
        const arr = storage.fitness[`${subType[y]}`][i];
        block.innerHTML += `
          <div class="new-item__cart">
            <h3>${arr.label}</h3>
            <p class="fat"></p>
            <p class="carbs"></p>
            <p class="amount">${arr.time}</p>
            <p class="cals">${arr.cal}</p>
            <button class="new-item__delete" id ="${subType[y] + ' ' + [i]}">
              <i class="fa-sharp fa-solid fa-circle-xmark"></i>
            </button>
          </div>
          
    `;
        this.changeHour();
      }
    }
  },
  deleteItem() {
    document.onclick = function (e) {
      const target = e.target as HTMLElement;
      const elem = target.parentElement;
      if (elem?.className != 'new-item__delete') {
        return;
      }
      const mealtype = elem.id.split(' ')[0];
      const stringFood = elem.id.split(' ')[1];
      const storage = JSON.parse(`${localStorage.getItem('storage')}`);
      delete storage.fitness[`${mealtype}`][`${stringFood}`];
      storage.fitness[`${mealtype}`].sort((el: number) => Boolean(el)).pop();
      localStorage.setItem('storage', JSON.stringify(storage));
      blockFitness.drawItem();
    };
  },
  getAllInformation(mealType: string) {
    const block = document.getElementsByClassName(`myfatsecret-food-fitness__row-category ${mealType}`)[0];
    const allTimeText = block.children[0].children[3];
    const allCalText = block.children[0].children[4];
    let allTime = 0;
    let allCal = 0;
    const storage = JSON.parse(`${localStorage.getItem('storage')}`);
    for (let i = 0; i < storage.fitness[`${mealType}`].length; i++) {
      allTime += storage.fitness[`${mealType}`][i].time;
      allCal += storage.fitness[`${mealType}`][i].cal;
    }
    allTimeText.innerHTML = `${allTime} min`;
    allCalText.innerHTML = `${allCal}`;
    const infoFitness = <HTMLElement>$(`.myfatsecret__info-fitness`);
    const sumCal: number[] = [];
    $All('.cals-all').forEach((el) => sumCal.push(+el.innerHTML));
    infoFitness.innerHTML = `${sumCal.reduce((el, sum) => el + sum, 0)} kcal`;
    storage.fitness.calSum = `${sumCal.reduce((el, sum) => el + sum, 0)}`;
    localStorage.setItem('storage', JSON.stringify(storage));
    this.changeColor();
  },
  changeHour() {
    const textP = $All('.amount');
    textP.forEach((el) =>
      el.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const mealFood = target.parentElement?.lastElementChild?.id.split(' ')[0] as string;
        const id = target.parentElement?.lastElementChild?.id.split(' ')[1] as string;
        const storage = JSON.parse(`${localStorage.getItem('storage')}`);
        const paragraph = e.target as HTMLElement;
        const section = paragraph.parentNode;
        const name = paragraph.className;
        const input = document.createElement('input');
        input.name = name;
        input.type = 'text';
        input.value = `${paragraph.textContent}`;
        section?.replaceChild(input, paragraph);
        input.focus();
        input.onkeydown = function (elem) {
          if (elem.code == 'Enter') {
            paragraph.textContent = `${
              Number.isNaN(parseInt(input.value)) ? 1 : parseInt(input.value) == 0 ? 1 : parseInt(input.value)
            }`;
            localStorage.setItem('storage', JSON.stringify(storage));
            updateLocalStorage(mealFood, id, input);
            section?.replaceChild(paragraph, input);
            blockFitness.drawItem();
          }
        };
      })
    );
  },
  changeColor() {
    const changeColorInput = <HTMLInputElement>document.querySelector('.change_color_input');
    const colorLocalStr = localStorage.getItem('color');
    const subtitleColor = <HTMLElement>document.querySelector('.myfatsecret-food-fitness__col-category');
    const arrBorderBtn: HTMLElement[] = Array.from(
      document.querySelectorAll('.myfatsecret-food-fitness__row-category')
    );
    const arriconColor: HTMLElement[] = Array.from(document.querySelectorAll('.fa-square-plus'));
    if (colorLocalStr) {
      changeColorInput.value = colorLocalStr;
    }

    subtitleColor.style.color = changeColorInput.value;
    for (let i = 0; i < arriconColor.length; i++) {
      arriconColor[i].style.color = changeColorInput.value;
    }
    for (let i = 0; i < arrBorderBtn.length; i++) {
      arrBorderBtn[i].style.borderColor = changeColorInput.value;
    }
    changeColorInput.addEventListener('change', () => {
      subtitleColor.style.color = changeColorInput.value;
      for (let i = 0; i < arriconColor.length; i++) {
        arriconColor[i].style.color = changeColorInput.value;
      }
      for (let i = 0; i < arrBorderBtn.length; i++) {
        arrBorderBtn[i].style.borderColor = changeColorInput.value;
      }
    });
  },
};
export default blockFitness;
