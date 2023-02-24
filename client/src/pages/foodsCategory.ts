import router from '../router';
import CategoryExamplesList from '../components/categoryExamplesList';
import { $All, createPath } from '../utils/helpers';
import contentHeaderTable from '../components/contentHeaderTable';
import { getLastURLPart } from '../utils/helpers';
import { IGroups } from '../utils/types';
import groups from '../consts/dataGroups';

class FoodsCategory {
  main;

  categoryExamplesList;

  constructor(main: Element) {
    this.categoryExamplesList = new CategoryExamplesList();
    this.main = main;
  }

  render() {
    const category = <keyof IGroups>getLastURLPart();
    const iconFood = groups[category] ? `./img/foods/category/${category.toLowerCase()}.jpg` : '';

    this.main.innerHTML = `
    <div class="foods-category">
    <div class="container">
      <div class="crumbs">
        <a href="/" class="crumbs__link">
          <img class="crumbs__home-img" src="./img/home-icon.svg" alt="home icon">
        </a>
        <span class="crumbs__sep">></span>
        <a href="/foods" class="crumbs__link">Foods</a>
        <span class="crumbs__sep">></span>
        <p class="crumbs__link">${category}</p>
      </div>
      ${contentHeaderTable.render(iconFood, category, '')}
      <div class="foods-category__content category-content">
        <div class="category-content__all category-all">
          <h2 class="category-all__title">
            <img src="./img/foods/bowl.gif" alt="bowl icon" class="category-all__icon">
            Foods
          </h2>
          <ul class="category-all__list list-all">
            <li class="category-all__item">
              <a href="#" class="category-all__link blue">Beans & Legumes</a>
            </li>
            <li class="category-all__item">
              <a href="#" class="category-all__link blue">Beverages</a>
            </li>
            <li class="category-all__item">
              <a href="#" class="category-all__link blue">Breads & Cereals</a>
            </li>
            <li class="category-all__item">
              <a href="#" class="category-all__link blue">Cheese, Milk & Dairy</a>
            </li>
            <li class="category-all__item">
              <a href="#" class="category-all__link blue">Eggs</a>
            </li>
            <li class="category-all__item">
              <a href="#" class="category-all__link blue">Fast-Food</a>
            </li>
            <li class="category-all__item">
              <a href="#" class="category-all__link blue">Fish & Seafood</a>
            </li>
            <li class="category-all__item">
              <a href="#" class="category-all__link blue">Fruit</a>
            </li>
            <li class="category-all__item">
              <a href="#" class="category-all__link blue">Meat</a>
            </li>
            <li class="category-all__item">
              <a href="#" class="category-all__link blue">Nuts & Seeds</a>
            </li>
            <li class="category-all__item">
              <a href="#" class="category-all__link blue">Pasta, Rice & Noodles</a>
            </li>
            <li class="category-all__item">
              <a href="#" class="category-all__link blue">Sauces, Spices & Spreads</a>
            </li>
            <li class="category-all__item">
              <a href="#" class="category-all__link blue">Snacks</a>
            </li>
            <li class="category-all__item">
              <a href="#" class="category-all__link blue">Soups</a>
            </li>
            <li class="category-all__item">
              <a href="#" class="category-all__link blue">Sweets, Candy & Desserts</a>
            </li>
            <li class="category-all__item">
              <a href="#" class="category-all__link blue">Vegetables</a>
            </li>
            <li class="category-all__item">
              <a href="#" class="category-all__link blue">Other</a>
            </li>
          </ul>
        </div>
        <div class="category-content__search category-search">
          <ul class="category-search__list">
          </ul>
        </div>
      </div>
    </div>
  </div>
    `;

    this.categoryExamplesList.render();
    this.eventListeners();
    this.changeColor();
  }

  eventListeners() {
    const categoriesLinks = $All('.category-all__link');

    categoriesLinks.forEach((item) => {
      item.addEventListener('click', (e) => {
        const elem = <HTMLLinkElement>e.target;

        const name = `/foods/group/${createPath(<string>elem.textContent)}`;
        router.route(e, name);
      });
    });
  }

  changeColor() {
    const changeColorInput = <HTMLInputElement>document.querySelector('.change_color_input');
    const colorLocalStr = localStorage.getItem('color');
    const borderTitle = <HTMLElement>document.querySelector('.top-foods');
    const backgrCategoryContent = <HTMLElement>document.querySelector('.category-all');
    if (colorLocalStr) {
      changeColorInput.value = colorLocalStr;
    }
    borderTitle.style.borderColor = changeColorInput.value;
    backgrCategoryContent.style.background = changeColorInput.value;
    changeColorInput.addEventListener('change', () => {
      borderTitle.style.borderColor = changeColorInput.value;
      backgrCategoryContent.style.background = changeColorInput.value;
    });
  }
}

export { FoodsCategory };
