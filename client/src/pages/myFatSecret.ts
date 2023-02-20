import blockCalendar from '../components/MFSblockCalendar';
import blockFood from '../components/MFSblockFood';
import blockFitness from '../components/MFSblockFitness';
import popup from '../components/popup';
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
      </div>
    </div>
    <div class="myfatsecret__block">
    ${blockCalendar.render()}
    </div>
  </div>
    ${popup.render()}
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
        block.innerHTML = `${blockCalendar.render()}`;
        break;
      case 'food':
        block.innerHTML = `${blockFood.render()}`;
        blockFood.drawItem();
        popup.eventListener();
        this.eventListener();
        break;
      case 'fitness':
        block.innerHTML = `${blockFitness.render()}`;
        this.eventListener();
        popup.eventListener();
        blockFitness.drawItem();
        break;
    }
  }

  createLocalStorage() {
    if (localStorage.getItem('storage')) {
      return;
    }
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

  eventListener() {}
}

export { MyFatSecret };
