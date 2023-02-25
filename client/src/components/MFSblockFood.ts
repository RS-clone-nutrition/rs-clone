// import { $ } from '../utils/helpers';
import { $, $All } from '../utils/helpers';
import { updateLocalStorageFood } from '../utils/updateLocalStorage';
import popup from './popup';
const blockFood = {
  render() {
    popup.changeLabel('Food');
    return `
  <div class="myfatsecret-food-fitness">
    <h2>My Food Diary</h2>
    <div class="myfatsecret-food-fitness__col-category">
      <div></div>
      <p>Amount,g</p>
      <p>Fat</p>
      <p>Carbs</p>
      <p>Prot</p>
      <p>Cals</p>
    </div>
    <div class="myfatsecret-food-fitness__row-category breakfast">
      <div class="myfatsecret-food-fitness__row-category__header">
        <h2>Breakfast</h2>
        <p class="amount-all"></p>
        <p class="fat-all">0</p>
        <p class="carbs-all">0</p>
        <p class="prot-all">0</p>
        <p class="cals-all">0</p>
      </div>
      <div class="new-item breakfast">
        
      </div>
      <button class="addItem breakfast food" type="button">
        <span><i style='color:#32B34C' class="fa-solid fa-square-plus fa-2xl"></i></span>
        Add Item
      </button>
    </div>
    <div class="myfatsecret-food-fitness__row-category lunch">
      <div class="myfatsecret-food-fitness__row-category__header">
        <h2>Lunch</h2>
        <p class="amount-all"></p>
        <p class="fat-all">0</p>
        <p class="carbs-all">0</p>
        <p class="prot-all">0</p>
        <p class="cals-all">0</p>
      </div>
      <div class="new-item lunch">
      </div>
      <button class="addItem lunch food" type="button">
        <span><i style='color:#32B34C' class="fa-solid fa-square-plus fa-2xl"></i></span>
        Add Item
      </button>
    </div>
    <div class="myfatsecret-food-fitness__row-category dinner">
      <div class="myfatsecret-food-fitness__row-category__header">
        <h2>Dinner</h2>
        <p class="amount-all"></p>
        <p class="fat-all">4222</p>
        <p class="carbs-all">4</p>
        <p class="prot-all">4</p>
        <p class="cals-all">4</p>
      </div>
      <div class="new-item dinner">
      </div>
      <button class="addItem dinner food" type="button">
        <span><i style='color:#32B34C' class="fa-solid fa-square-plus fa-2xl"></i></span>
        Add Item
      </button>
    </div>
    <div class="myfatsecret-food-fitness__row-category snack">
      <div class="myfatsecret-food-fitness__row-category__header">
        <h2>Snacks</h2>
        <p class="amount-all"></p>
        <p class="fat-all">4222</p>
        <p class="carbs-all">4</p>
        <p class="prot-all">4</p>
        <p class="cals-all">4</p>
      </div>
      <div class="new-item snack">
      </div>
      <button class="addItem snack food" type="button">
        <span><i style='color:#32B34C' class="fa-solid fa-square-plus fa-2xl"></i></span>
        Add Item
      </button>
    </div>

    <div class="day-summary">
      <p class="day-summary__maintext">Day summary</p>
      <div class="day-summary__category">
        <div class="day-summary__block cal">
          <h3>Calories</h3>
          <p>0</p>
        </div>
        <div class="day-summary__block fat">
          <h3>Fat</h3>
          <p>0</p>
        </div>
        <div class="day-summary__block carbs">
          <h3>Carbs</h3>
          <p>0</p>
        </div>
        <div class="day-summary__block protein">
          <h3>Protein</h3>
          <p>0</p>
        </div>
        <div class="day-summary__block RDI">
          <h4>0</h4>
          <div class="rdi-block">
            <p>of RDI*</p>
          </div>
        </div>
        <p>* Based on your RDI of <span>1491</span> calories</p>
      </div>
    </div>
    `;
  },
  drawItem() {
    const storage = JSON.parse(`${localStorage.getItem('storage')}`);
    const subType = ['breakfast', 'lunch', 'dinner', 'snack'];
    this.deleteItem();
    for (let y = 0; y < 4; y++) {
      const block = document.getElementsByClassName(`new-item ${subType[y]}`)[0];
      this.getAllInformation(subType[y]);
      block.innerHTML = ``;
      for (let i = 0; i < storage.food[`${subType[y]}`].length; i++) {
        const arr = storage.food[`${subType[y]}`][i];
        block.innerHTML += `
          <div class="new-item__cart">
            <h3>${arr.label}</h3>
            <p class="amount">${arr.gramm}</p>
            <p class="fat">${arr.fat}</p>
            <p class="carbs">${arr.carb}</p>
            <p class="prot">${arr.prot}</p>
            <p class="cals">${arr.cal}</p>
            <button class="new-item__delete" id ="${subType[y] + ' ' + [i]}">
              <i class="fa-sharp fa-solid fa-circle-xmark"></i>
            </button>
          </div>
    `;
      }
    }
    this.getDaySummary();
    this.changeGramm();
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
      delete storage.food[`${mealtype}`][`${stringFood}`];
      storage.food[`${mealtype}`].sort((el: number) => Boolean(el)).pop();
      localStorage.setItem('storage', JSON.stringify(storage));
      blockFood.drawItem();
    };
  },
  getAllInformation(mealType: string) {
    const block = document.getElementsByClassName(`myfatsecret-food-fitness__row-category ${mealType}`)[0];
    const allFatText = block.children[0].children[2];
    const allCarbsText = block.children[0].children[3];
    const allProtText = block.children[0].children[4];
    const allCalText = block.children[0].children[5];
    let allFat = 0;
    let allCarbs = 0;
    let allProt = 0;
    let allCal = 0;
    const storage = JSON.parse(`${localStorage.getItem('storage')}`);
    for (let i = 0; i < storage.food[`${mealType}`].length; i++) {
      allFat += storage.food[`${mealType}`][i].fat;
      allCarbs += storage.food[`${mealType}`][i].carb;
      allProt += storage.food[`${mealType}`][i].prot;
      allCal += storage.food[`${mealType}`][i].cal;
    }
    allFatText.innerHTML = `${allFat.toFixed(2)}`;
    allCarbsText.innerHTML = `${allCarbs.toFixed(2)}`;
    allProtText.innerHTML = `${allProt.toFixed(2)}`;
    allCalText.innerHTML = `${allCal.toFixed(2)}`;
    this.changeColor();
  },
  getDaySummary() {
    const arr = [$All('.fat-all'), $All('.carbs-all'), $All('.prot-all'), $All('.cals-all'), $All('.cals-all')];
    const dayCount = [
      $('.day-summary__block.fat p '),
      $('.day-summary__block.carbs p'),
      $('.day-summary__block.protein p'),
      $('.day-summary__block.cal p'),
      $('.day-summary__block.RDI h4'),
    ];
    for (let i = 0; i < arr.length; i++) {
      let res = 0;
      for (const el of arr[i]) {
        res += +el.innerHTML;
      }
      dayCount[i]!.innerHTML = i != 4 ? `${res}` : res != 0 ? `${+(res / 1495).toFixed(1) * 100}%` : `0%`;
    }
  },
  changeGramm() {
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
        input.addEventListener('keydown', function (elem) {
          if (elem.code == 'Enter') {
            paragraph.textContent = input.value;
            localStorage.setItem('storage', JSON.stringify(storage));
            updateLocalStorageFood(mealFood, id, input);
            section?.replaceChild(paragraph, input);
            blockFood.drawItem();
          }
        });
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
export default blockFood;
