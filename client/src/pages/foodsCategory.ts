class FoodsCategory {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    this.main.innerHTML = `
    <div class="foods-category">
    <div class="container">
      <div class="crumbs">
        <img class="crumbs__home-img" src="../src/img/home-icon.svg" alt="home icon">
        <span class="crumbs__sep">></span>
        <a href="#" class="crumbs__link">Foods</a>
        <span class="crumbs__sep">></span>
        <a href="#" class="crumbs__link">Beans & Legumes</a>
      </div>
      <div class="foods-category__top top-foods-category">
        <div class="top-foods-category__content">
          <div class="top-foods-category__icon">
            <img src="../src/img/foods/dish.png" alt="dishes icon" class="top-foods__img">
          </div>
          <div class="top-foods-category__text">
            <h1 class="top-foods-category__title">Beans & Legumes</h1>
          </div>
        </div>
      </div>
      <div class="foods-category__content category-content">
        <div class="category-content__all category-all">
          <h2 class="category-all__title">
            <img src="../src/img/foods/bowl.gif" alt="bowl icon" class="category-all__icon">
            Foods
          </h2>
          <ul class="category-all__list list-all">
            <li class="category-all__item">
              <a href="#" class="category-all__link blue">Beans & Legumes</a>
            </li>
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
              <a href="#" class="category-all__link blue">Fast Food</a>
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
            <li class="category-search__item">
              <h2 class="category-search__name">
                <a href="#" class="category-search__link">Baked Beans</a>
              </h2>
              <div class="category-search__similars search-similars">
                <a href="#" class="search-similars__link">Baked Beans</a>
                <a href="#" class="search-similars__link">Vegetarian Baked Beans</a>
                <a href="#" class="search-similars__link">Baked Beans with Pork (Canned)</a>
                <a href="#" class="search-similars__link">Boston Baked Beans</a>
                <a href="#" class="search-similars__link">Low Sodium Baked Beans</a>
              </div>
            </li>
            <li class="category-search__item">
              <h2 class="category-search__name">
                <a href="#" class="category-search__link">Beans</a>
              </h2>
              <div class="category-search__similars search-similars">
                <a href="#" class="search-similars__link">Baked Beans</a>
                <a href="#" class="search-similars__link">Vegetarian Baked Beans</a>
                <a href="#" class="search-similars__link">Baked Beans with Pork (Canned)</a>
                <a href="#" class="search-similars__link">Boston Baked Beans</a>
                <a href="#" class="search-similars__link">Low Sodium Baked Beans</a>
              </div>
            </li>
            <li class="category-search__item">
              <h2 class="category-search__name">
                <a href="#" class="category-search__link">Black Beans</a>
              </h2>
              <div class="category-search__similars search-similars">
                <a href="#" class="search-similars__link">Baked Beans</a>
                <a href="#" class="search-similars__link">Vegetarian Baked Beans</a>
                <a href="#" class="search-similars__link">Baked Beans with Pork (Canned)</a>
                <a href="#" class="search-similars__link">Boston Baked Beans</a>
                <a href="#" class="search-similars__link">Low Sodium Baked Beans</a>
              </div>
            </li>
            <li class="category-search__item">
              <h2 class="category-search__name">
                <a href="#" class="category-search__link">Chickpeas</a>
              </h2>
              <div class="category-search__similars search-similars">
                <a href="#" class="search-similars__link">Baked Beans</a>
                <a href="#" class="search-similars__link">Vegetarian Baked Beans</a>
                <a href="#" class="search-similars__link">Baked Beans with Pork (Canned)</a>
                <a href="#" class="search-similars__link">Boston Baked Beans</a>
                <a href="#" class="search-similars__link">Low Sodium Baked Beans</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    `;
  }
}

export { FoodsCategory };
