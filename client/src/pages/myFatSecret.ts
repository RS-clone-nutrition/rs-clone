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
    <h2>My Food Diary</h2>
    `;
  }

  getBlockFitness() {
    return `
    <h1>Fitness</h1>
    `;
  }
}
export { MyFatSecret };
