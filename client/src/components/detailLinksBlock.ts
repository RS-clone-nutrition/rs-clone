import { $, $All } from '../utils/helpers';
import { INutritionAnalysisResponse, IFooddataBaseResponse } from '../utils/types';
import { createPath } from '../utils/helpers';
import router from '../router';

class DetailLinksBlock {
  render(productdata: INutritionAnalysisResponse, productTypes: IFooddataBaseResponse) {
    const detailProduct = <HTMLElement>$('.detail-product');
    const relatedTypesArrInitial: string[] = productTypes.hints.map((i: { food: { label: string[] } }) => i.food.label);
    const relatedTypes = Array.from(new Set(relatedTypesArrInitial));

    detailProduct.insertAdjacentHTML(
      'beforeend',
      `
    <div class="detail-product__links">
          ${this.addLinks(relatedTypes, 'nutrition-analysis', `Related Types of ${productTypes.text}:`)}
          ${this.addLinks(productdata.healthLabels, 'foods-data-base', `Health Labels:`)}
        ${this.addLinks(productdata.dietLabels, 'foods-data-base', 'Diet Labels:')}
        ${this.addLinks(productdata.cautions, 'no-link', 'Cautions Labels:')}
  </div>
    `
    );

    this.eventListeners();
  }

  addLinks(arr: string[], serviceType: string, title: string) {
    if (arr.length === 0) {
      return '';
    }
    console.log(arr.length);

    const result = [];
    for (let i = 0; i < arr.length && i < 10; i++) {
      result.push(
        `<li class="category-detail-links__item"><a href="#" class="category-detail-links__link ${serviceType}">${arr[i]}</a></li>`
      );
    }
    return `
    <div class="detail-links__category">
    <h4 class="category-detail-links__name">${title}</h4>
    <ul class="category-detail-links__list foods-data-base">
    ${result.join('')}
    </ul>
    </div>
    `;
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
