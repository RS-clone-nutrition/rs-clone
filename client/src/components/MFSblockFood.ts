// import { $ } from '../utils/helpers';
import { $, $All } from '../utils/helpers';
import popup from './popup';
const blockFood = {
  render() {
    popup.changeLabel('Food');
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
      <div class="myfatsecret-food-fitness__row-category__header">
        <h2>Breakfast</h2>
        <p class="fat-all">0</p>
        <p class="carbs-all">0</p>
        <p class="prot-all">0</p>
        <p class="cals-all">0</p>
      </div>
      <div class="new-item breakfast">
        
      </div>
      <button class="addItem breakfast food" type="button">
        <img src="./img/myfatsecret/additem.svg" alt="additem">
        Add Item
      </button>
    </div>
    <div class="myfatsecret-food-fitness__row-category lunch">
      <div class="myfatsecret-food-fitness__row-category__header">
        <h2>Lunch</h2>
        <p class="fat-all">0</p>
        <p class="carbs-all">0</p>
        <p class="prot-all">0</p>
        <p class="cals-all">0</p>
      </div>
      <div class="new-item lunch">
      </div>
      <button class="addItem lunch food" type="button">
        <img src="./img/myfatsecret/additem.svg" alt="additem">
        Add Item
      </button>
    </div>
    <div class="myfatsecret-food-fitness__row-category dinner">
      <div class="myfatsecret-food-fitness__row-category__header">
        <h2>Dinner</h2>
        <p class="fat-all">4222</p>
        <p class="carbs-all">4</p>
        <p class="prot-all">4</p>
        <p class="cals-all">4</p>
      </div>
      <div class="new-item dinner">
      </div>
      <button class="addItem dinner food" type="button">
        <img src="./img/myfatsecret/additem.svg" alt="additem">
        Add Item
      </button>
    </div>
    <div class="myfatsecret-food-fitness__row-category snack">
      <div class="myfatsecret-food-fitness__row-category__header">
        <h2>Snacks</h2>
        <p class="fat-all">4222</p>
        <p class="carbs-all">4</p>
        <p class="prot-all">4</p>
        <p class="cals-all">4</p>
      </div>
      <div class="new-item snack">
      </div>
      <button class="addItem snack food" type="button">
        <img src="./img/myfatsecret/additem.svg" alt="additem">
        Add Item
      </button>
    </div>

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
          </div>
        </div>
        <p>* Based on your RDI of 1491 calories</p>
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
    const allFatText = block.children[0].children[1];
    const allCarbsText = block.children[0].children[2];
    const allProtText = block.children[0].children[3];
    const allCalText = block.children[0].children[4];
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
    allFatText.innerHTML = `${allFat}`;
    allCarbsText.innerHTML = `${allCarbs}`;
    allProtText.innerHTML = `${allProt}`;
    allCalText.innerHTML = `${allCal}`;
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
      dayCount[i]!.innerHTML = i != 4 ? `${res}` : res != 0 ? `${+(res / 1495).toFixed(2) * 100}%` : `0%`;
    }
  },
};
export default blockFood;
