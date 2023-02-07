import { $, $All } from '../utils/helpers';
import { INutritionAnalysisResponse, IFooddataBaseResponse } from '../utils/types';
import { createPath } from '../utils/helpers';
import router from '../router';

class DetailLinksBlock {
  render(productdata: INutritionAnalysisResponse, productTypes: IFooddataBaseResponse) {
    const detailProduct = <HTMLElement>$('.detail-product');
    const relatedTypes: string[] = productTypes.hints.map((i: { food: { label: string[] } }) => i.food.label);

    detailProduct.insertAdjacentHTML(
      'beforeend',
      `
    <div class="detail-product__links detail-links">
    <div class="detail-links__category category-detail-links">
      <h4 class="category-detail-links__name">Related Types of ${productTypes.text}:</h4>
      <ul class="category-detail-links__list nutrition-analysis">
          ${this.addLinks(relatedTypes, 'nutrition-analysis')}
      </ul>
    </div>
    <div class="detail-links__category category-detail-links">
      <h4 class="category-detail-links__name">Health Labels:</h4>
      <ul class="category-detail-links__list foods-data-base">
          ${this.addLinks(productdata.healthLabels, 'foods-data-base')}
      </ul>
    </div>
    <div class="detail-links__category category-detail-links">
      <h4 class="category-detail-links__name">Diet Labels:</h4>
      <ul class="category-detail-links__list foods-data-base">
        ${this.addLinks(productdata.dietLabels, 'foods-data-base')}
      </ul>
    </div>
    <div class="detail-links__category category-detail-links">
      <h4 class="category-detail-links__name">Cautions Labels:</h4>
      <ul class="category-detail-links__list">
        ${this.addLinks(productdata.cautions, 'no-link')}
      </ul>
    </div>
  </div>
    `
    );

    this.eventListeners();
  }

  addLinks(arr: string[], serviceType: string) {
    const result = [];
    for (let i = 0; i < arr.length && i < 10; i++) {
      result.push(
        `<li class="category-detail-links__item"><a href="#" class="category-detail-links__link ${serviceType}">${arr[i]}</a></li>`
      );
    }
    return result.join('');
  }

  eventListeners() {
    const analysisLinks = $All('.nutrition-analysis');
    const foodsDataBaseLinks = $All('.foods-data-base');

    analysisLinks.forEach((item) => {
      item.addEventListener('click', (e) => {
        const elem = <HTMLLinkElement>e.target;

        const name = `/foods/product/${createPath(<string>elem.textContent)}`;
        router.route(e, name);
      });
    });

    foodsDataBaseLinks.forEach((item) => {
      item.addEventListener('click', (e) => {
        const elem = <HTMLLinkElement>e.target;

        const name = `/foods/group/${createPath(<string>elem.textContent)}`;
        router.route(e, name);
      });
    });
  }
}

export default DetailLinksBlock;
