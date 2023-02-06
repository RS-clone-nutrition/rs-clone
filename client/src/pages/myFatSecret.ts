import Cal from '../utils/generateCalendar';
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
            <img src="../src/img/nav_breadcrumb_home.png" alt="">
          </a>  
        </li>
        <li>></li>
        <li><a href="/myfatsecret">MyFatSecret</a></li>
      </ul>
      <div class="myfatsecret__tabs">
        <button class="myfatsecret__card calendar">
          <img src="../src/img/calender-icon.svg" alt="calendar">
          <span class="myfatsecret__info-calendar">WED 01</span>
        </button>
        <button class="myfatsecret__card food">
          <img src="../src/img/food-icon.svg" alt="food">
          <span class="myfatsecret__info-food">0 kcal</span>
        </button>
        <button class="myfatsecret__card fitness">
          <img src="../src/img/fitness-icon.svg" alt="fitness">
          <span class="myfatsecret__info-fitness">0 kcal</span>
        </button>
      </div>
    </div>
    <div class="myfatsecret__block">
    ${this.getBlockCalendar()}
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
        break;
      case 'fitness':
        block.innerHTML = `${this.getBlockFitness()}`;
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
      <img src="../src/img/additem.svg" alt="additem">
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
      <img src="../src/img/additem.svg" alt="additem">
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
      <img src="../src/img/additem.svg" alt="additem">
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
      <img src="../src/img/additem.svg" alt="additem">
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
      <img src="../src/img/additem.svg" alt="additem">
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
      <img src="../src/img/additem.svg" alt="additem">
      Add Item
    </button>
    </div>
    `;
  }
}
export { MyFatSecret };
