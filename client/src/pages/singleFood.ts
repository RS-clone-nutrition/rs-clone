import contentHeaderTable from '../components/contentHeaderTable';
import { getLastURLPart, getPercent } from '../utils/helpers';
import NutritionFacts from '../components/nutritionFacts';
import DetailLinksBlock from '../components/detailLinksBlock';
import api from '../api/api';

class SingleFood {
  main;

  nutritionFacts;

  detailLinksBlock;

  constructor(main: Element) {
    this.main = main;
    this.nutritionFacts = new NutritionFacts();
    this.detailLinksBlock = new DetailLinksBlock();
  }

  async render() {
    const product = getLastURLPart().replaceAll('%20', ' ');
    const productDate = await this.requestsApi('nutritionAnalysis');
    const productTypes = await this.requestsApi('foods');

    this.main.innerHTML = `
    <div class="product">
    <div class="container">
      <div class="crumbs">
        <img class="crumbs__home-img" src="./img/home-icon.svg" alt="home icon">
        <span class="crumbs__sep">></span>
        <a href="#" class="crumbs__link">Foods</a>
        <span class="crumbs__sep">></span>
        <a href="#" class="crumbs__link">Avocado</a>
      </div>
      ${contentHeaderTable.render(``, product, 'Food database and calorie counter')}
      <div class="product__content">
        <div class="product__detail detail-product">
          <div class="detail-product__summary summary-product">
            <div class="summary-product__content">
              <h4 class="summary-product__title">Nutrition summary:</h4>
              <div class="summary-product__pcf pcf-summary">
                <div class="pcf-summary__item pcf-item calories">
                  <p class="pcf-item__title">Calories</p>
                  <p class="pcf-item__number">${productDate.calories}</p>
                </div>
                <div class="pcf-summary__item pcf-item fat">
                  <p class="pcf-item__title">Fat</p>
                  <p class="pcf-item__number">${productDate.totalNutrients.FAT?.quantity.toFixed(0) || 0}g</p>
                </div>
                <div class="pcf-summary__item pcf-item carbs">
                  <p class="pcf-item__title">Carbs</p>
                  <p class="pcf-item__number">${productDate.totalNutrients.CHOCDF?.quantity.toFixed(0) || 0}g</p>
                </div>
                <div class="pcf-summary__item pcf-item protein">
                  <p class="pcf-item__title">Protein</p>
                  <p class="pcf-item__number">${productDate.totalNutrients.PROCNT?.quantity.toFixed(0) || 0}g</p>
                </div>
              </div>
              <p class="summary-product__calories">There are <b>${productDate.calories} calories</b> 
              in ${productDate.totalWeight.toFixed(0) || 0}g of ${productTypes.text}</p>
              <p class="summary-product__fat">Calorie breakdown: <b>
              ${getPercent(productDate.totalNutrientsKCal.FAT_KCAL?.quantity, productDate.calories)}% 
              fat</b>, 
              ${getPercent(productDate.totalNutrientsKCal.CHOCDF_KCAL?.quantity, productDate.calories)}% 
              carbs, 
              ${getPercent(productDate.totalNutrientsKCal.PROCNT_KCAL?.quantity, productDate.calories)}% 
              protein.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;

    this.nutritionFacts.render(productDate, productTypes);
    this.detailLinksBlock.render(productDate, productTypes);
  }

  async requestsApi(servise: string) {
    const product = <string>getLastURLPart();

    const result =
      servise === 'nutritionAnalysis' ? await api.getNutritionAnalysis(product) : await api.getFoods(product);

    return result;
  }
}

export { SingleFood };
