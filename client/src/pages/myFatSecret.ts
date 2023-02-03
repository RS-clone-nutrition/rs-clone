class MyFatSecret {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    this.main.innerHTML = `
    <div class="container">
    <div class="myfatsecret">
      <div class="myfatsecret__tabs">
        <button class="myfatsecret__card">
          <img src="../src/img/calender-icon.svg" alt="calendar">
          <span class="myfatsecret__info-calendar">WED 01</span>
        </button>
        <button class="myfatsecret__card">
          <img src="../src/img/food-icon.svg" alt="food">
          <span class="myfatsecret__info-food">0 kcal</span>
        </button>
        <button class="myfatsecret__card">
          <img src="../src/img/fitness-icon.svg" alt="fitness">
          <span class="myfatsecret__info-fitness">0 kcal</span>
        </button>
      </div>
    </div>
  </div>
    `;
  }
}

export { MyFatSecret };
