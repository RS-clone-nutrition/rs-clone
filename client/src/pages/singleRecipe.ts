import '../styles/singleRecipe.scss';
import { $, getURL } from '../utils/helpers';
import api from '../api/api';
import { IRecipe } from '../utils/types';

class SingleRecipe {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  async render() {
    const idRecipe = <string>getURL().split('/').slice(-1).toString();
    const oneRecipe: IRecipe = await api.getSingleRecipe(idRecipe);

    this.main.innerHTML = `
   <div class="single-recipe">
      <div class="container">
          <div class="crumbs">
            <a href="/" class="crumbs__link">  
              <img class="crumbs__home-img" src="./img/home-icon.svg" alt="home icon">
            </a>
            <span class="crumbs__sep">></span>
            <a href="/recipes" class="crumbs__link">Recipes</a>
            <span class="crumbs__sep">></span>
            <p class="crumbs__link">${oneRecipe.recipe.label}</p>
          </div>
          <div class="recipe">
            <div class="recipe__main">
              <div class="recipe__info">
                <div class="info__left left-info">
                  <div class="left-info__icon">
                    <img class="left-info__img" src="${oneRecipe.recipe.image}" alt="dish icon">
                  </div>
                  <div class="left-info__actions">
                    <div class="action-left cookbook">
                      <img src="./img/singleRecipe/icons/plus.svg" alt="add coolbook" class="action__img-cook cookbook">
                      <span class="action__text cookbook">Add to my cookbook</span>
                    </div>
                    <div class="action-left diary">
                      <img src="./img/singleRecipe/icons/add-to-diary.svg" alt="add diary" class="action__img-diary diary">
                      <span class="action__text diary">Add to food diary</span>
                    </div>
                  </div>
                  <div class="left-info__box serving">
                    <div class="left-box__icon serving__icon">
                      <img class="left-box__img serving__img" src="./img/singleRecipe/icons/person.svg" alt="person">
                    </div>
                    <div class="left-box__text serving__text">
                      <p class="left-box__title serving__title black">Yields</p>
                      <p class="left-box__info serving__info">${oneRecipe.recipe.yield} servings</p>
                    </div>
                  </div>
                  <div class="left-info__box type">
                    <div class="left-box__icon type__icon">
                      <img class="left-box__img type__img" src="./img/singleRecipe/icons/fork-spoon.avif"
                        alt="person">
                    </div>
                    <div class="left-box__text type__text">
                      <p class="left-box__title type__title black">Meal Type:</p>
                      ${oneRecipe.recipe.mealType.map((e) => `<p class="left-box__info type__info">${e}</p>`).join('')}
                    </div>
                  </div>
                  <div class="left-info__box type">
                    <div class="left-box__icon type__icon">
                      <img class="left-box__img type__img" src="./img/singleRecipe/icons/fork-spoon.avif"
                        alt="person">
                    </div>
                    <div class="left-box__text type__text">
                      <p class="left-box__title type__title black">Dish Type:</p>
                      ${oneRecipe.recipe.dishType.map((e) => `<p class="left-box__info type__info">${e}</p>`).join('')}
                    </div>
                  </div>
                  <div class="left-info__box type">
                    <div class="left-box__icon type__icon">
                      <img class="left-box__img type__img" src="./img/singleRecipe/icons/fork-spoon.avif"
                        alt="person">
                    </div>
                    <div class="left-box__text type__text">
                      <p class="left-box__title type__title black">Cuisine Type:</p>
                      ${oneRecipe.recipe.cuisineType
                        .map((e) => `<p class="left-box__info type__info">${e}</p>`)
                        .join('')}
                    </div>
                  </div>
                  <div class="left-info__box type">
                    <div class="left-box__icon type__icon">
                      <img class="left-box__img type__img" src="./img/singleRecipe/icons/fork-spoon.avif"
                        alt="person">
                    </div>
                    <div class="left-box__text type__text">
                      <p class="left-box__title type__title black">Diet Type:</p>
                      ${oneRecipe.recipe.dietLabels
                        .map((e) => `<p class="left-box__info type__info">${e}</p>`)
                        .join('')}
                    </div>
                  </div>
                </div>
                <div class="recipe__detail detail-recipe">
                  <h2 class="detail-recipe__name black">${oneRecipe.recipe.label}</h2>
                  <div class="detail-recipe__ingridients ingridients">
                    <h3 class="ingridients__title">Ingridients</h3>
                    <ul class="ingridients__list">
                      ${[...new Set(oneRecipe.recipe.ingredients)]
                        .map(
                          (e) => `<li class="ingridients__item"><a href="/foods/product/${e.food}">${e.text}</a></li>`
                        )
                        .join('')}
                    </ul>
                  </div>
                  <div class="detail-recipe__directions directions">
                    <h3 class="directions__title">Health label</h3>
                    <ul class="directions__list">
                        ${oneRecipe.recipe.healthLabels.map((e) => `<li class="directions__item">${e}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              </div>
              <div class="recipe__nutrition nutrition">
                <div class="nutrition__summary summary">
                  <h3 class="summary__title black">Nutrition summary:</h3>
                  <div class="summary__text calorie">There are <span class="summary__calories-number black">${Math.round(
                    oneRecipe.recipe.calories
                  )}
                      calories</span>
                    in ${oneRecipe.recipe.yield} serving of ${oneRecipe.recipe.label}.</div>
                  <div class="summary__text percent">Calorie break-down: <span class="summary__fat-percent black">${Math.round(
                    oneRecipe.recipe.totalDaily.FAT.quantity
                  )}%
                      fat</span>, ${Math.round(oneRecipe.recipe.totalDaily.CHOCDF.quantity)}% carbs, ${Math.round(
      oneRecipe.recipe.totalDaily.PROCNT.quantity
    )}% protein.</div>
                </div>
                <div class="nutrition__facts facts">
                  <div class="facts__container">
                    <div class="facts__title black">Nutrition Facts</div>
                    <div class="facts__size">
                      <span class="size-facts__text black">Serving Size</span>
                      <span class="size-facts__serving black">${oneRecipe.recipe.yield} serving</span>
                    </div>
                    <div class="facts__divider-thick"></div>
                    <div class="facts__amount-left black">Amount Per Serving</div>
                    <div class="facts__calorie facts-calorie">
                      <span class="facts-calorie__text black">Calories</span>
                      <span class="facts-calorie__number black">${Math.round(oneRecipe.recipe.calories)}</span>
                    </div>
                    <div class="facts__divider-medium"></div>
                    <div class="facts__percent black">% Daily Values*</div>
                    <div class="facts__category facts-category">
                      <p class="facts-category__text black">Total Fat <span class="size-facts__number">${oneRecipe.recipe.totalNutrients.FAT.quantity.toFixed(
                        2
                      )}g</span></p>
                      <p class="facts-category__percent black">${Math.round(
                        oneRecipe.recipe.totalDaily.FAT.quantity
                      )}%</p>
                    </div>
                    <div class="facts__category facts-category">
                      <p class="facts-category__text">Saturated Fat <span class="size-facts__number">${oneRecipe.recipe.totalNutrients.FASAT.quantity.toFixed(
                        2
                      )}g</span></p>
                      <p class="facts-category__percent black">${Math.round(
                        oneRecipe.recipe.totalDaily.FASAT.quantity
                      )}%</p>
                    </div>
                    <div class="facts__category facts-category">
                      <p class="facts-category__text">Trans Fat <span class="size-facts__number">-</span></p>
                      <p class="facts-category__percent black"></p>
                    </div>
                    <div class="facts__category facts-category">
                      <p class="facts-category__text black">Cholesterol<span class="size-facts__number">${oneRecipe.recipe.totalNutrients.CHOLE.quantity.toFixed(
                        2
                      )}mg</span></p>
                      <p class="facts-category__percent black">${Math.round(
                        oneRecipe.recipe.totalDaily.CHOLE.quantity
                      )}%</p>
                    </div>
                    <div class="facts__category facts-category">
                      <p class="facts-category__text black">Sodium<span class="size-facts__number">${oneRecipe.recipe.totalNutrients.NA.quantity.toFixed(
                        2
                      )}mg</span></p>
                      <p class="facts-category__percent black">${Math.round(
                        oneRecipe.recipe.totalDaily.NA.quantity
                      )}%</p>
                    </div>
                    <div class="facts__category facts-category">
                      <p class="facts-category__text black">Total Carbohydrate<span
                          class="size-facts__number">-</span>
                      </p>
                      <p class="facts-category__percent black">-</p>
                    </div>
                    <div class="facts__category facts-category">
                      <p class="facts-category__text">Dietary Fiber<span class="size-facts__number">${oneRecipe.recipe.totalNutrients.FIBTG.quantity.toFixed(
                        2
                      )}g</span></p>
                      <p class="facts-category__percent black">${Math.round(
                        oneRecipe.recipe.totalDaily.FIBTG.quantity
                      )}%</p>
                    </div>
                    <div class="facts__category facts-category">
                      <p class="facts-category__text">Sugars<span class="size-facts__number">${oneRecipe.recipe.totalNutrients.SUGAR.quantity.toFixed(
                        2
                      )}g</span></p>
                      <p class="facts-category__percent black"></p>
                    </div>
                    <div class="facts__category facts-category">
                      <p class="facts-category__text black">Protein<span class="size-facts__number">${oneRecipe.recipe.totalNutrients.PROCNT.quantity.toFixed(
                        2
                      )}g</span>
                      </p>
                      <p class="facts-category__percent black">${Math.round(
                        oneRecipe.recipe.totalDaily.PROCNT.quantity
                      )}%</p>
                    </div>
                    <div class="facts__divider-thick"></div>
                    <div class="facts__category facts-category">
                      <p class="facts-category__text">Vitamin D<span class="size-facts__number">${oneRecipe.recipe.totalNutrients.VITD.quantity.toFixed(
                        2
                      )}mg</span></p>
                      <p class="facts-category__percent black"></p>
                    </div>
                    <div class="facts__category facts-category">
                      <p class="facts-category__text">Calcium<span class="size-facts__number">${oneRecipe.recipe.totalNutrients.CA.quantity.toFixed(
                        2
                      )}mg</span></p>
                      <p class="facts-category__percent black">${Math.round(
                        oneRecipe.recipe.totalDaily.CA.quantity
                      )}%</p>
                    </div>
                    <div class="facts__category facts-category">
                      <p class="facts-category__text">Iron<span class="size-facts__number">${oneRecipe.recipe.totalNutrients.FE.quantity.toFixed(
                        2
                      )}mg</span></p>
                      <p class="facts-category__percent black">${Math.round(
                        oneRecipe.recipe.totalDaily.FE.quantity
                      )}%</p>
                    </div>
                    <div class="facts__category facts-category">
                      <p class="facts-category__text">Potassium<span class="size-facts__number">${oneRecipe.recipe.totalNutrients.K.quantity.toFixed(
                        2
                      )}mg</span></p>
                      <p class="facts-category__percent black">${Math.round(
                        oneRecipe.recipe.totalDaily.K.quantity
                      )}%</p>
                    </div>
                    <div class="facts__category facts-category">
                      <p class="facts-category__text">Vitamin A<span class="size-facts__number">${oneRecipe.recipe.totalNutrients.VITA_RAE.quantity.toFixed(
                        2
                      )}µg</span></p>
                      <p class="facts-category__percent black"></p>
                    </div>
                    <div class="facts__category facts-category">
                      <p class="facts-category__text">Vitamin C<span class="size-facts__number">${oneRecipe.recipe.totalNutrients.VITC.quantity.toFixed(
                        2
                      )}mg</span></p>
                      <p class="facts-category__percent black">${Math.round(
                        oneRecipe.recipe.totalDaily.VITC.quantity
                      )}%</p>
                    </div>
                    <div class="facts__divider-medium"></div>
                    <div class="facts__description">* The % Daily Value (DV) tells you how much a nutrient in a serving of
                      food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</div>
                  </div>
                  <div class="rdi__container rdi">
                    <div class="rdi__number black">${Math.round(
                      (Math.round(oneRecipe.recipe.calories) / 2000) * 100
                    )}%</div>
                    <div class="rdi__text">
                      <p class="rdi__text-title">of RDI*</p>
                      <p class="rdi__text-undertitle">(${Math.round(oneRecipe.recipe.calories)} calories)</p>
                    </div>
                  </div>
                  <div class="breakdown__container rdi">
                    <div class="breakdown__number black">Calorie Breakdown:</div>
                    <div class="breakdown__detail">
                      <p class="breakdown__item carbohydrate">Carbohydrate (${Math.round(
                        oneRecipe.recipe.totalDaily.CHOCDF.quantity
                      )}%)</p>
                      <p class="breakdown__item fat">Fat (${Math.round(oneRecipe.recipe.totalDaily.FAT.quantity)}%)</p>
                      <p class="breakdown__item protein">Protein (${Math.round(
                        oneRecipe.recipe.totalDaily.PROCNT.quantity
                      )}%)</p>
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
    this.eventLintener(idRecipe);
  }

  eventLintener(idRecipe: string) {
    const btnCookbook = <HTMLElement>$('.cookbook');
    const imgAddCookbook = <HTMLImageElement>$('.action__img-cook');
    let arrayIdRecipes: string[];
    const strLocalStr = localStorage.getItem('arrRecipes');
    if (strLocalStr) {
      arrayIdRecipes = JSON.parse(strLocalStr);
      for (let i = 0; i < arrayIdRecipes.length; i++) {
        if (arrayIdRecipes[i] === idRecipe) {
          imgAddCookbook.src = 'https://i.ibb.co/8jxSGCT/icons8-16.png';
        }
      }
    } else {
      arrayIdRecipes = [];
    }
    btnCookbook.addEventListener('click', () => {
      if (imgAddCookbook.src !== 'https://i.ibb.co/8jxSGCT/icons8-16.png') {
        imgAddCookbook.src = 'https://i.ibb.co/8jxSGCT/icons8-16.png';
        arrayIdRecipes.push(idRecipe);
        localStorage.setItem('arrRecipes', JSON.stringify(arrayIdRecipes));
      } else {
        imgAddCookbook.src = './img/singleRecipe/icons/plus.svg';
        for (let i = 0; i < arrayIdRecipes.length; i++) {
          if (arrayIdRecipes[i] === idRecipe) {
            arrayIdRecipes.splice(i, 1);
          }
        }
        localStorage.setItem('arrRecipes', JSON.stringify(arrayIdRecipes));
      }
    });
  }
}

export { SingleRecipe };
