import '../styles/SingleFood.scss';

class SingleFood {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    this.main.innerHTML = `
    <div class="product">
    <div class="container">
      <div class="crumbs">
        <img class="crumbs__home-img" src="../src/img/home-icon.svg" alt="home icon">
        <span class="crumbs__sep">></span>
        <a href="#" class="crumbs__link">Foods</a>
        <span class="crumbs__sep">></span>
        <a href="#" class="crumbs__link">Avocado</a>
      </div>
      <div class="product__top product-top">
        <div class="product-top__content">
          <div class="product-top__description">Food database and calorie counter</div>
          <div class="product-top__text">
            <h1 class="product-top__title">Avocado</h1>
          </div>
        </div>
      </div>
      <div class="product__content">
        <div class="nutrition__facts facts">
          <div class="facts__container">
            <div class="facts__title black">Nutrition Facts</div>
            <div class="facts__size">
              <span class="size-facts__text black">Serving Size</span>
              <span class="size-facts__serving black">1 serving</span>
            </div>
            <div class="facts__divider-thick"></div>
            <div class="facts__amount-left black">Amount Per Serving</div>
            <div class="facts__calorie facts-calorie">
              <span class="facts-calorie__text black">Calories</span>
              <span class="facts-calorie__number black">263</span>
            </div>
            <div class="facts__divider-medium"></div>
            <div class="facts__percent black">% Daily Values*</div>
            <div class="facts__category facts-category">
              <p class="facts-category__text black">Total Fat <span class="size-facts__number">4.02g</span></p>
              <p class="facts-category__percent black">5%</p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Saturated Fat <span class="size-facts__number">0.65g</span></p>
              <p class="facts-category__percent black">3%</p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Trans Fat <span class="size-facts__number">-</span></p>
              <p class="facts-category__percent black"></p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Polyunsaturated Fat<span class="size-facts__number">1.54g</span></p>
              <p class="facts-category__percent black"></p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Monounsaturated Fat <span class="size-facts__number">1.33g</span>
              </p>
              <p class="facts-category__percent black"></p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text black">Cholesterol<span class="size-facts__number">0mg</span></p>
              <p class="facts-category__percent black">0%</p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text black">Sodium<span class="size-facts__number">83mg</span></p>
              <p class="facts-category__percent black">4%</p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text black">Total Carbohydrate<span class="size-facts__number">55.08g</span>
              </p>
              <p class="facts-category__percent black">20%</p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Dietary Fiber<span class="size-facts__number">6.7g</span></p>
              <p class="facts-category__percent black">24%</p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Sugars<span class="size-facts__number">32g</span></p>
              <p class="facts-category__percent black"></p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text black">Protein<span class="size-facts__number">4.79g</span>
              </p>
              <p class="facts-category__percent black">4%</p>
            </div>
            <div class="facts__divider-thick"></div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Vitamin D<span class="size-facts__number">52mg</span></p>
              <p class="facts-category__percent black"></p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Calcium<span class="size-facts__number">2.17mg</span></p>
              <p class="facts-category__percent black">7%</p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Iron<span class="size-facts__number">2.17mg</span></p>
              <p class="facts-category__percent black">12%</p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Potassium<span class="size-facts__number">86mcg</span></p>
              <p class="facts-category__percent black">10%</p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Vitamin A<span class="size-facts__number">32g</span></p>
              <p class="facts-category__percent black"></p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Vitamin C<span class="size-facts__number">6.7mg</span></p>
              <p class="facts-category__percent black">7%</p>
            </div>
            <div class="facts__divider-medium"></div>
            <div class="facts__description">* The % Daily Value (DV) tells you how much a nutrient in a serving of
              food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</div>
          </div>
          <div class="rdi__container rdi">
            <div class="rdi__number black">13%</div>
            <div class="rdi__text">
              <p class="rdi__text-title">of RDI*</p>
              <p class="rdi__text-undertitle">(263 calories)</p>
            </div>
          </div>
          <div class="breakdown__container rdi">
            <div class="breakdown__number black">Calorie Breakdown:</div>
            <div class="breakdown__detail">
              <p class="breakdown__item carbohydrate">Carbohydrate (80%)</p>
              <p class="breakdown__item fat">Fat (13%)</p>
              <p class="breakdown__item protein">Protein (7%)</p>
            </div>
          </div>
          <div class="rdi__info black">Based on a RDI of 2000 calories</div>
          <h4 class="facts-photos__title">
            <img src="../src/img/foods/camer.gif" alt="camer icon" class="facts-photos__img">
            Photos
          </h4>
          <div class="facts-photos__items">
            <img src="../src/img/foods/avocado.png" alt="product photo" class="facts-photos__img">
            <img src="../src/img/foods/avocado.png" alt="product photo" class="facts-photos__img">
            <img src="../src/img/foods/avocado.png" alt="product photo" class="facts-photos__img">
          </div>
        </div>
        <div class="product__detail detail-product">
          <div class="detail-product__summary summary-product">
            <div class="summary-product__content">
              <h4 class="summary-product__title">Nutrition summary:</h4>
              <div class="summary-product__pcf pcf-summary">
                <div class="pcf-summary__item pcf-item calories">
                  <p class="pcf-item__title">Calories</p>
                  <p class="pcf-item__number">130</p>
                </div>
                <div class="pcf-summary__item pcf-item fat">
                  <p class="pcf-item__title">Fat</p>
                  <p class="pcf-item__number">12g</p>
                </div>
                <div class="pcf-summary__item pcf-item carbs">
                  <p class="pcf-item__title">Carbs</p>
                  <p class="pcf-item__number">1g</p>
                </div>
                <div class="pcf-summary__item pcf-item protein">
                  <p class="pcf-item__title">Protein</p>
                  <p class="pcf-item__number">1g</p>
                </div>
              </div>
              <p class="summary-product__calories">There are <b>130 calories</b> in 1/2 medium avocado (75 g) of
                Calavo
                Avocado</p>
              <p class="summary-product__fat">Calorie breakdown: <b>93% fat</b>, 3% carbs, 3% protein.</p>
            </div>
          </div>
          <div class="detail-product__links detail-links">
            <div class="detail-links__category category-detail-links">
              <h4 class="category-detail-links__name">Related Avocados:</h4>
              <ul class="category-detail-links__list">
                <li class="category-detail-links__item">
                  <a href="#" class="category-detail-links__link">Pico de Gallo Guacamole</a>
                </li>
              </ul>
            </div>
            <div class="detail-links__category category-detail-links">
              <h4 class="category-detail-links__name">Other Types of Avocados::</h4>
              <ul class="category-detail-links__list">
                <li class="category-detail-links__item">
                  <a href="#" class="category-detail-links__link">Pico de Gallo Guacamole</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
  }
}

export { SingleFood };
