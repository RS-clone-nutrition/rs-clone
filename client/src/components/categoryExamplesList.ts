import { $, $All, createPath, deleteRepeatingItems } from '../utils/helpers';
import groups from '../consts/dataGroups';
import { getLastURLPart } from '../utils/helpers';
import { IGroups } from '../utils/types';
import api from './api';
import router from '../router';

class CategoryExamplesList {
  async render() {
    const category = this.getCategoriesArr();
    const container = <HTMLElement>$('.category-search__list');
    const productsArr = groups[category] || deleteRepeatingItems(await this.requestsApi(category));

    container.innerHTML = '';

    for (const item of productsArr) {
      const examplesArr = deleteRepeatingItems(await this.requestsApi(item));
      container.innerHTML += `
  <li class="category-search__item">
  <h2 class="category-search__name">
    <a href="#" class="category-search__link">${item}</a>
  </h2>
  <div class="category-search__similars search-similars">
    <a href="#" class="search-similars__link">${examplesArr[0]}</a>
    <a href="#" class="search-similars__link">${examplesArr[1]}</a>
    <a href="#" class="search-similars__link">${examplesArr[2]}</a>
    <a href="#" class="search-similars__link">${examplesArr[3]}</a>
    <a href="#" class="search-similars__link">${examplesArr[4]}</a>
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
}

export default CategoryExamplesList;
