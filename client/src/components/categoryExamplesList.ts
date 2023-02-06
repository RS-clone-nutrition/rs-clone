import { $ } from '../utils/helpers';
import groups from '../consts/dataGroups';
import { getURL } from '../utils/helpers';
import { IGroups } from '../utils/types';
import api from './api';

class CategoryExamplesList {
  render() {
    const category = this.getCategoriesArr();
    const container = <HTMLElement>$('.category-search__list');
    container.innerHTML = '';

    groups[category].forEach(async (item) => {
      const examplesArr = await this.requestsApi(item);
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
    });
  }

  async requestsApi(category: string) {
    const result = await api.getFoods(category);
    const examplesFood: string[] = result.hints.map((i) => i.food.label);
    return examplesFood;
  }

  getCategoriesArr() {
    const category = <keyof IGroups>getURL().split('/').slice(-1).toString();
    return category;
  }
}

export default CategoryExamplesList;
