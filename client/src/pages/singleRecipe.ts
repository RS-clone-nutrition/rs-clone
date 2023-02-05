import '../styles/singleRecipe.scss';

class SingleRecipe {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    this.main.innerHTML = `
   <div class="single-recipe">
      <div class="container">
          <div class="crumbs">
            <img class="crumbs__home-img" src="../src/img/home-icon.svg" alt="home icon">
            <span class="crumbs__sep">></span>
            <a href="#" class="crumbs__link">Recipes</a>
            <span class="crumbs__sep">></span>
            <a href="#" class="crumbs__link">Apple Crisp</a>
          </div>
          <div class="recipe">
            <div class="recipe__main">
              <div class="recipe__info">
                <div class="info__left left-info">
                  <div class="left-info__icon">
                    <img class="left-info__img" src="../src/img/singleRecipe/dish.png" alt="dish icon">
                  </div>
                  <div class="left__viewicon">View photos</div>
                  <div class="left-info__actions">
                    <div class="action-left cookbook">
                      <img src="../src/img/singleRecipe/icons/plus.svg" alt="add coolbook" class="action__img cookbook">
                      <span class="action__text cookbook">Add to my cookbook</span>
                    </div>
                    <div class="action-left diary">
                      <img src="../src/img/singleRecipe/icons/add-to-diary.svg" alt="add diary" class="action__img diary">
                      <span class="action__text diary">Add to food diary</span>
                    </div>
                  </div>
                  <div class="left-info__box serving">
                    <div class="left-box__icon serving__icon">
                      <img class="left-box__img serving__img" src="../src/img/singleRecipe/icons/person.svg" alt="person">
                    </div>
                    <div class="left-box__text serving__text">
                      <p class="left-box__title serving__title black">Yields</p>
                      <p class="left-box__info serving__info">6 servings</p>
                    </div>
                  </div>
                  <div class="left-info__box time">
                    <div class="left-box__icon time__icon">
                      <img class="left-box__img time__img" src="../src/img/singleRecipe/icons/clock.svg" alt="person">
                    </div>
                    <div class="left-box__text time__text">
                      <p class="left-box__title time__title black">Cook Time:</p>
                      <p class="left-box__info time__info">30 mins</p>
                    </div>
                  </div>
                  <div class="left-info__box type">
                    <div class="left-box__icon type__icon">
                      <img class="left-box__img type__img" src="../src/img/singleRecipe/icons/fork-spoon.avif"
                        alt="person">
                    </div>
                    <div class="left-box__text type__text">
                      <p class="left-box__title type__title black">Meal Type:</p>
                      <p class="left-box__info type__info">Desserts</p>
                    </div>
                  </div>
                </div>
                <div class="recipe__detail detail-recipe">
                  <h2 class="detail-recipe__name black">Apple Crisp</h2>
                  <div class="detail-recipe__undertitle">Delicious sweet baked apple crisp</div>
                  <div class="detail-recipe__ingridients ingridients">
                    <h3 class="ingridients__title">Ingridients</h3>
                    <ul class="ingridients__list">
                      <li class="ingridients__item">6 medium apples</li>
                    </ul>
                  </div>
                  <div class="detail-recipe__directions directions">
                    <h3 class="directions__title">Directions</h3>
                    <ul class="directions__list">
                      <li class="directions__item">Peel and slice apples</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="recipe__nutrition nutrition">
                <div class="nutrition__summary summary">
                  <h3 class="summary__title black">Nutrition summary:</h3>
                  <div class="summary__text calorie">There are <span class="summary__calories-number black">263
                      calories</span>
                    in 1 serving of Apple Crisp.</div>
                  <div class="summary__text percent">Calorie break-down: <span class="summary__fat-percent black">13%
                      fat</span>, 80% carbs, 7% protein.</div>
                </div>
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
                      <p class="facts-category__text black">Total Carbohydrate<span
                          class="size-facts__number">55.08g</span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
    `;
  }
}

export { SingleRecipe };
