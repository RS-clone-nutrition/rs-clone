import '../styles/foods.scss';

class Foods {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    this.main.innerHTML = `
    <div class="foods">
        <div class="container">
          <div class="crumbs">
            <img class="crumbs__home-img" src="../src/img/home-icon.svg" alt="home icon">
            <span class="crumbs__sep">></span>
            <a href="#" class="crumbs__link">Foods</a>
          </div>
          <div class="foods__top top-foods">
            <div class="top-foods__content">
              <div class="top-foods__icon">
                <img src="../src/img/foods/fork.svg" alt="dishes icon" class="top-foods__img">
              </div>
              <div class="top-foods__text">
                <h1 class="top-foods__title">Foods</h1>
                <div class="top-foods__text">Browse common foods and products from your favorite brands and restaurants.
                </div>
              </div>
            </div>
          </div>
          <h2 class="foods__title">Browse Common Foods</h2>
          <div class="foods__main main-foods">
            <div class="main-foods__content">
              <ul class="main-foods__list">
                <li class="main-foods__item item-foods">
                  <div class="item-foods__icon">
                    <img src="../src/img/foods/dish.png" alt="food icon" class="item-foods__img">
                  </div>
                  <div class="item-foods__info">
                    <div class="item-foods__name">
                      <a href="#" class="item-foods__link blue">Beans & Legumes</a>
                    </div>
                    <div class="item-foods__description">All types of beans and legumes like baked beans, green beans,
                      refried beans and lentils.</div>
                    <div class="item-foods__more blue">more</div>
                  </div>
                </li>
                <li class="main-foods__item item-foods">
                  <div class="item-foods__icon">
                    <img src="../src/img/foods/dish.png" alt="food icon" class="item-foods__img">
                  </div>
                  <div class="item-foods__info">
                    <div class="item-foods__name">
                      <a href="#" class="item-foods__link blue">Beans & Legumes</a>
                    </div>
                    <div class="item-foods__description">All types of beans and legumes like baked beans, green beans,
                      refried beans and lentils.</div>
                    <div class="item-foods__more blue">more</div>
                  </div>
                </li>
                <li class="main-foods__item item-foods">
                  <div class="item-foods__icon">
                    <img src="../src/img/foods/dish.png" alt="food icon" class="item-foods__img">
                  </div>
                  <div class="item-foods__info">
                    <div class="item-foods__name">
                      <a href="#" class="item-foods__link blue">Beans & Legumes</a>
                    </div>
                    <div class="item-foods__description">All types of beans and legumes like baked beans, green beans,
                      refried beans and lentils.</div>
                    <div class="item-foods__more blue">more</div>
                  </div>
                </li>
                <li class="main-foods__item item-foods">
                  <div class="item-foods__icon">
                    <img src="../src/img/foods/dish.png" alt="food icon" class="item-foods__img">
                  </div>
                  <div class="item-foods__info">
                    <div class="item-foods__name">
                      <a href="#" class="item-foods__link blue">Beans & Legumes</a>
                    </div>
                    <div class="item-foods__description">All types of beans and legumes like baked beans, green beans,
                      refried beans and lentils.</div>
                    <div class="item-foods__more blue">more</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export { Foods };
