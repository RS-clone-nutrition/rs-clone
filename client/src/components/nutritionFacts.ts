import { $ } from '../utils/helpers';
import { INutritionAnalysisResponse, IFooddataBaseResponse } from '../utils/types';

class NutritionFacts {
  async render(productDate: INutritionAnalysisResponse, productTypes: IFooddataBaseResponse) {
    const productContent = <HTMLElement>$('.product__content');
    const productImages: string[] = productTypes.hints.map((i) => i.food.image);
    console.log(productImages);

    productContent.insertAdjacentHTML(
      'afterbegin',
      `
    <div class="nutrition__facts facts">
          <div class="facts__container">
            <div class="facts__title black">Nutrition Facts</div>
            <div class="facts__size">
              <span class="size-facts__text black">Total Weight</span>
              <span class="size-facts__serving black">${productDate.totalWeight.toFixed(0)}g</span>
            </div>
            <div class="facts__divider-thick"></div>
            <div class="facts__amount-left black">Amount Per Serving</div>
            <div class="facts__calorie facts-calorie">
              <span class="facts-calorie__text black">Calories</span>
              <span class="facts-calorie__number black">${productDate.calories}</span>
            </div>
            <div class="facts__divider-medium"></div>
            <div class="facts__percent black">% Daily Values*</div>
            <div class="facts__category facts-category">
              <p class="facts-category__text black">Total Fat <span class="size-facts__number">
              ${productDate.totalNutrients.FAT.quantity.toFixed(2)}g</span></p>
              <p class="facts-category__percent black">${productDate.totalDaily.FAT.quantity.toFixed(0)}%</p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Saturated Fat <span class="size-facts__number">
              ${productDate.totalNutrients.FASAT.quantity.toFixed(2)}g</span></p>
              <p class="facts-category__percent black">${productDate.totalDaily.FASAT.quantity.toFixed(0)}%</p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Trans Fat <span class="size-facts__number">
              ${productDate.totalNutrients.FATRN.quantity.toFixed(2)}g</span></p>
              <p class="facts-category__percent black"></p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Polyunsaturated Fat<span class="size-facts__number">
              ${productDate.totalNutrients.FAPU.quantity.toFixed(2)}g</span></p>
              <p class="facts-category__percent black"></p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Monounsaturated Fat <span class="size-facts__number">
              ${productDate.totalNutrients.FAMS.quantity.toFixed(2)}g</span>
              </p>
              <p class="facts-category__percent black"></p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text black">Cholesterol<span class="size-facts__number">
              ${productDate.totalNutrients.CHOLE.quantity.toFixed(2)}mg</span></p>
              <p class="facts-category__percent black">${productDate.totalDaily.CHOLE.quantity.toFixed(0)}%</p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text black">Sodium<span class="size-facts__number">
              ${productDate.totalNutrients.NA.quantity.toFixed(2)}mg</span></p>
              <p class="facts-category__percent black">${productDate.totalDaily.NA.quantity.toFixed(0)}%</p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text black">Total Carbohydrate<span class="size-facts__number">
              ${productDate.totalNutrients.CHOCDF.quantity.toFixed(2)}g</span>
              </p>
              <p class="facts-category__percent black">${productDate.totalDaily.CHOCDF.quantity.toFixed(0)}%</p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Dietary Fiber<span class="size-facts__number">
              ${productDate.totalNutrients.FIBTG.quantity.toFixed(2)}g</span></p>
              <p class="facts-category__percent black">${productDate.totalDaily.FIBTG.quantity.toFixed(0)}%</p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Sugars<span class="size-facts__number">
              ${productDate.totalNutrients.SUGAR.quantity.toFixed(2)}g</span></p>
              <p class="facts-category__percent black"></p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text black">Protein<span class="size-facts__number">
              ${productDate.totalNutrients.PROCNT.quantity.toFixed(2)}g</span>
              </p>
              <p class="facts-category__percent black">${productDate.totalDaily.PROCNT.quantity.toFixed(0)}%</p>
            </div>
            <div class="facts__divider-thick"></div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Vitamin D<span class="size-facts__number">
              ${productDate.totalNutrients.VITD.quantity.toFixed(2)}µg</span></p>
              <p class="facts-category__percent black">${productDate.totalDaily.VITD.quantity.toFixed(2)}</p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Calcium<span class="size-facts__number">
              ${productDate.totalNutrients.CA.quantity.toFixed(2)}mg</span></p>
              <p class="facts-category__percent black">${productDate.totalDaily.CA.quantity.toFixed(0)}%</p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Iron<span class="size-facts__number">
              ${productDate.totalNutrients.FE.quantity.toFixed(2)}mg</span></p>
              <p class="facts-category__percent black">${productDate.totalDaily.FE.quantity.toFixed(0)}%</p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Potassium<span class="size-facts__number">
              ${productDate.totalNutrients.K.quantity.toFixed(2)}mg</span></p>
              <p class="facts-category__percent black">${productDate.totalDaily.K.quantity.toFixed(0)}%</p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Vitamin A<span class="size-facts__number">
              ${productDate.totalNutrients.VITA_RAE.quantity.toFixed(2)}µg</span></p>
              <p class="facts-category__percent black">${productDate.totalDaily.VITA_RAE.quantity.toFixed(0)}%</p>
            </div>
            <div class="facts__category facts-category">
              <p class="facts-category__text">Vitamin C<span class="size-facts__number">
              ${productDate.totalNutrients.VITC.quantity.toFixed(2)}mg</span></p>
              <p class="facts-category__percent black">${productDate.totalDaily.VITC.quantity.toFixed(0)}%</p>
            </div>
            <div class="facts__divider-medium"></div>
            <div class="facts__description">* The % Daily Value (DV) tells you how much a nutrient in a serving of
              food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</div>
          </div>
          <div class="rdi__container rdi">
            <div class="rdi__number black">${Math.round((productDate.calories / 2000) * 100)}%</div>
            <div class="rdi__text">
              <p class="rdi__text-title">of RDI*</p>
              <p class="rdi__text-undertitle">(${productDate.calories} calories)</p>
            </div>
          </div>
          <div class="breakdown__container rdi">
            <div class="breakdown__number black">Calorie Breakdown:</div>
            <div class="breakdown__detail">
              <p class="breakdown__item carbohydrate">Carbohydrate(
              ${productDate.totalDaily.CHOCDF.quantity.toFixed(0)}%)</p>
              <p class="breakdown__item fat">Fat (${productDate.totalDaily.FAT.quantity.toFixed(0)}%)</p>
              <p class="breakdown__item protein">Protein (${productDate.totalDaily.PROCNT.quantity.toFixed(0)}%)</p>
            </div>
          </div>
          <div class="rdi__info black">Based on a RDI of 2000 calories</div>
          <h4 class="facts-photos__title">
            <img src="../src/img/foods/camer.gif" alt="camer icon" class="facts-icon__img">
            Photos
          </h4>
          <div class="facts-photos__items">
            <img src="${productImages[0]}" alt="product photo" class="facts-photos__img">
            <img src="${productImages[productImages.length - 2]}" alt="product photo" class="facts-photos__img">
          </div>
        </div>
    `
    );
  }
}

export default NutritionFacts;
