import { $, $All, createPath, deleteRepeatingItems, preload } from '../utils/helpers';
import groups from '../consts/dataGroups';
import { getLastURLPart } from '../utils/helpers';
import { IGroups } from '../utils/types';
import api from '../api/api';
import router from '../router';

class CategoryExamplesList {
  async render() {
    const category = this.getCategoriesArr();
    const container = <HTMLElement>$('.category-search__list');
    const productsArr = groups[category] || deleteRepeatingItems(await this.requestsApi(category));

    preload(container, 1700);

    container.innerHTML = '';

    for (const item of productsArr) {
      const examplesArr = deleteRepeatingItems(await this.requestsApi(item));
      container.innerHTML += `
  <li class="category-search__item">
  <h2 class="category-search__name">
    <a href="#" class="category-search__link">${item}</a>
  </h2>
  <div class="category-search__similars search-similars">
  ${this.createLinks(examplesArr)}
  </div>
</li>
  `;
      this.eventListeners();
    }
  }

  eventListeners() {
    const categoriesSimilarsLinks = $All('.search-similars__link');
    const mainCategory = $All('.category-search__link');

    if (!mainCategory) {
      return;
    }

    mainCategory.forEach((item) => {
      item.addEventListener('click', (e) => {
        const elem = <HTMLLinkElement>e.target;

        const name = `/foods/product/${createPath(<string>elem.textContent)}`;
        router.route(e, name);
      });
    });

    categoriesSimilarsLinks.forEach((item) => {
      item.addEventListener('click', (e) => {
        const elem = <HTMLLinkElement>e.target;

        const name = `/foods/product/${createPath(<string>elem.textContent)}`;
        router.route(e, name);
      });
    });
  }

  async requestsApi(category: string) {
    const result = await api.getFoods(category);
    const examplesFood: string[] = result.hints.map((i: { food: { label: string[] } }) => i.food.label);

    return examplesFood;
  }

  getCategoriesArr() {
    const category = <keyof IGroups>getLastURLPart();
    return category;
  }

  createLinks(examplesArr: string[]) {
    const linksArr: string[] = [];
    const shortExamplesArr = examplesArr.slice(0, 5);

    shortExamplesArr.forEach((item) => {
      item = item.replaceAll(',', '');

      linksArr.push(`<a href="#" class="search-similars__link">${item}</a>`);
    });

    return linksArr.join(',');
  }
}

export default CategoryExamplesList;
