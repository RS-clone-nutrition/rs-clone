import { $, $All, createPath, deleteRepeatingItems } from '../utils/helpers';
import groups from '../consts/dataGroups';
import { getURL } from '../utils/helpers';
import { IGroups } from '../utils/types';
import api from './api';
import router from '../router';

class CategoryExamplesList {
  async render() {
    const category = this.getCategoriesArr();
    const container = <HTMLElement>$('.category-search__list');
    container.innerHTML = '';
    console.log(category);
    const productsArr = groups[category] || deleteRepeatingItems(await this.requestsApi(category));
    console.log(productsArr);

    productsArr.forEach(async (item) => {
      const dataName = item.replaceAll(' ', '-').replaceAll(',', '-');
      console.log(item);
      console.log(dataName);
      const examplesArr = deleteRepeatingItems(await this.requestsApi(item));
      container.insertAdjacentHTML(
        'beforeend',
        `
  <li data-name = "${dataName}" class="category-search__item">
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
  `
      );

      this.eventListeners(dataName);
    });
  }

  eventListeners(dataName: string) {
    const parent = <HTMLElement>$(`[data-name = ${dataName}]`);
    const categoriesSimilarsLinks = $All('.search-similars__link', parent);
    const mainCategory = <HTMLElement>$('.category-search__link', parent);

    if (!mainCategory) {
      return;
    }

    mainCategory.addEventListener('click', (e) => {
      const elem = <HTMLLinkElement>e.target;

      const name = `/foods/product/${createPath(<string>elem.textContent)}`;
      router.route(e, name);
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
    const category = <keyof IGroups>getURL().split('/').slice(-1).toString().replaceAll('_', ' ');
    return category;
  }
}

export default CategoryExamplesList;
