import contentHeaderTable from '../components/contentHeaderTable';
import { getURL } from '../utils/helpers';
import NutritionFacts from '../components/nutritionFacts';
import DetailLinksBlock from '../components/detailLinksBlock';
import api from '../components/api';

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
    const product = <string>getURL().split('/').slice(-1).toString();
    const productDate = await this.requestsApi('nutritionAnalysis');
    const productTypes = await this.requestsApi('foods');

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
      ${contentHeaderTable.render(``, product, 'Food database and calorie counter')}
      <div class="product__content">
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
                  <p class="pcf-item__number">${productDate.totalNutrients.FAT.quantity.toFixed(0)}g</p>
                </div>
                <div class="pcf-summary__item pcf-item carbs">
                  <p class="pcf-item__title">Carbs</p>
                  <p class="pcf-item__number">${productDate.totalNutrients.CHOCDF.quantity.toFixed(0)}g</p>
                </div>
                <div class="pcf-summary__item pcf-item protein">
                  <p class="pcf-item__title">Protein</p>
                  <p class="pcf-item__number">${productDate.totalNutrients.PROCNT.quantity.toFixed(0)}g</p>
                </div>
              </div>
              <p class="summary-product__calories">There are <b>${productDate.calories} calories</b> 
              in 1/2 medium avocado (75 g) of Calavo Avocado</p>
              <p class="summary-product__fat">Calorie breakdown: <b>
              ${((productDate.totalNutrientsKCal.CHOCDF_KCAL.quantity / productDate.calories) * 100).toFixed(0)}% 
              fat</b>, 
              ${((productDate.totalNutrientsKCal.FAT_KCAL.quantity / productDate.calories) * 100).toFixed(0)}% carbs, 
              ${((productDate.totalNutrientsKCal.PROCNT_KCAL.quantity / productDate.calories) * 100).toFixed(0)}% 
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
    const product = <string>getURL().split('/').slice(-1).toString();
    const result =
      servise === 'nutritionAnalysis' ? await api.getNutritionAnalysis(product) : await api.getFoods(product);

    return result;
  }
}

export { SingleFood };
