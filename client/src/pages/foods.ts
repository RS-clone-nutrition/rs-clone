import '../styles/foods.scss';
import { $All, createPath } from '../utils/helpers';
import router from '../router';
import contentHeaderTable from '../components/contentHeaderTable';

class Foods {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    this.main.innerHTML = `
    <div class="foods">
        <div class="container">
          <div class="crumbs">
            <img class="crumbs__home-img" src="../src/img/home-icon.svg" alt="home icon">
            <span class="crumbs__sep">></span>
            <a href="#" class="crumbs__link">Foods</a>
          </div>
          ${contentHeaderTable.render(`../src/img/foods/fork.svg`, 'Foods', 'Browse common foods and products.')}
          <h2 class="foods__title">Browse Common Foods</h2>
          <div class="foods__main main-foods">
            <div class="main-foods__content">
              <ul class="main-foods__list">
                <li class="main-foods__item item-foods">
                  <div class="item-foods__icon">
                    <img src="../src/img/foods/category/beans-legumes.jpg" alt="food icon" class="item-foods__img">
                  </div>
                  <div class="item-foods__info">
                    <div class="item-foods__name">
                      <a href="#" class="item-foods__link blue">Beans & Legumes</a>
                    </div>
                    <div class="item-foods__description">All types of beans and legumes like baked beans, green beans,
                      refried beans and lentils.</div>
                    <div class="item-foods__more blue">more</div>
                  </div>
                </li>
                <li class="main-foods__item item-foods">
                <div class="item-foods__icon">
                  <img src="../src/img/foods/category/beverages.jpg" alt="food icon" class="item-foods__img">
                </div>
                <div class="item-foods__info">
                  <div class="item-foods__name">
                    <a href="#" class="item-foods__link blue">Beverages</a>
                  </div>
                  <div class="item-foods__description">Hot and cold drinks like juices, soda, smoothies, coffee, beer, wine and
                    cocktails.
                  </div>
                  <div class="item-foods__more blue">more</div>
                </div>
              </li>
              <li class="main-foods__item item-foods">
                <div class="item-foods__icon">
                  <img src="../src/img/foods/category/breads-cereals.jpg" alt="food icon" class="item-foods__img">
                </div>
                <div class="item-foods__info">
                  <div class="item-foods__name">
                    <a href="#" class="item-foods__link blue">Breads & Cereals</a>
                  </div>
                  <div class="item-foods__description">Different types of breads and cereals like bagels, tortillas, rye, wheat
                    bread and oatmeal.
                  </div>
                  <div class="item-foods__more blue">more</div>
                </div>
              </li>
              <li class="main-foods__item item-foods">
                <div class="item-foods__icon">
                  <img src="../src/img/foods/category/cheese-milk-dairy.jpg" alt="food icon" class="item-foods__img">
                </div>
                <div class="item-foods__info">
                  <div class="item-foods__name">
                    <a href="#" class="item-foods__link blue">Cheese, Milk & Dairy</a>
                  </div>
                  <div class="item-foods__description">Cheese varieties and dairy products like cheddar, mozzarella, provolone,
                    skim milk and yogurt.
                  </div>
                  <div class="item-foods__more blue">more</div>
                </div>
              </li>
              <li class="main-foods__item item-foods">
                <div class="item-foods__icon">
                  <img src="../src/img/foods/category/eggs.jpg" alt="food icon" class="item-foods__img">
                </div>
                <div class="item-foods__info">
                  <div class="item-foods__name">
                    <a href="#" class="item-foods__link blue">Eggs</a>
                  </div>
                  <div class="item-foods__description">Variety of plain and cooked eggs like, egg whites, hard-boiled,
                    scrambled, fried and poached.
                  </div>
                  <div class="item-foods__more blue">more</div>
                </div>
              </li>
              <li class="main-foods__item item-foods">
                <div class="item-foods__icon">
                  <img src="../src/img/foods/category/fast-food.jpg" alt="food icon" class="item-foods__img">
                </div>
                <div class="item-foods__info">
                  <div class="item-foods__name">
                    <a href="#" class="item-foods__link blue">Fast-Food</a>
                  </div>
                  <div class="item-foods__description">Foods from all your favorite chains like burgers, fries, burritos, tacos,
                    hot dogs and pizza.
                  </div>
                  <div class="item-foods__more blue">more</div>
                </div>
              </li>
              <li class="main-foods__item item-foods">
                <div class="item-foods__icon">
                  <img src="../src/img/foods/category/fish-seafood.jpg" alt="food icon" class="item-foods__img">
                </div>
                <div class="item-foods__info">
                  <div class="item-foods__name">
                    <a href="#" class="item-foods__link blue">Fish & Seafood</a>
                  </div>
                  <div class="item-foods__description">A range of seafood and fish like shrimp, lobster, scallops, tuna, salmon,
                    mahi mahi and tilapia.
                  </div>
                  <div class="item-foods__more blue">more</div>
                </div>
              </li>
              <li class="main-foods__item item-foods">
                <div class="item-foods__icon">
                  <img src="../src/img/foods/category/fruit.jpg" alt="food icon" class="item-foods__img">
                </div>
                <div class="item-foods__info">
                  <div class="item-foods__name">
                    <a href="#" class="item-foods__link blue">Fruit</a>
                  </div>
                  <div class="item-foods__description">Popular fruits like apples, bananas, strawberries, oranges, grapes,
                    peaches, pears and grapefruit.
                  </div>
                  <div class="item-foods__more blue">more</div>
                </div>
              </li>
              <li class="main-foods__item item-foods">
                <div class="item-foods__icon">
                  <img src="../src/img/foods/category/meat.jpg" alt="food icon" class="item-foods__img">
                </div>
                <div class="item-foods__info">
                  <div class="item-foods__name">
                    <a href="#" class="item-foods__link blue">Meat</a>
                  </div>
                  <div class="item-foods__description">Full range of meats and cuts like bacon, ribs, chicken breast, pork
                    chops, corned beef and roast turkey.</div>
                  <div class="item-foods__more blue">more</div>
                </div>
              </li>
              <li class="main-foods__item item-foods">
                <div class="item-foods__icon">
                  <img src="../src/img/foods/category/nuts-seeds.jpg" alt="food icon" class="item-foods__img">
                </div>
                <div class="item-foods__info">
                  <div class="item-foods__name">
                    <a href="#" class="item-foods__link blue">Nuts & Seeds</a>
                  </div>
                  <div class="item-foods__description">Popular nuts and seeds like almonds, peanuts, pecans, pistachios, walnuts
                    and sunflower seeds.
                  </div>
                  <div class="item-foods__more blue">more</div>
                </div>
              </li>
              <li class="main-foods__item item-foods">
                <div class="item-foods__icon">
                  <img src="../src/img/foods/category/pasta-rice-noodles.jpg" alt="food icon" class="item-foods__img">
                </div>
                <div class="item-foods__info">
                  <div class="item-foods__name">
                    <a href="#" class="item-foods__link blue">Pasta, Rice & Noodles</a>
                  </div>
                  <div class="item-foods__description">All types of pasta and rice like spaghetti, macaroni, ravioli, lasagna,
                    white rice and fried rice.</div>
                  <div class="item-foods__more blue">more</div>
                </div>
              </li>
              <li class="main-foods__item item-foods">
                <div class="item-foods__icon">
                  <img src="../src/img/foods/category/salad.jpg" alt="food icon" class="item-foods__img">
                </div>
                <div class="item-foods__info">
                  <div class="item-foods__name">
                    <a href="#" class="item-foods__link blue">Salads</a>
                  </div>
                  <div class="item-foods__description">HAll your favorite salads like coleslaw, potato salad caesar salad, egg
                    salad and chicken salad.
                  </div>
                  <div class="item-foods__more blue">more</div>
                </div>
              </li>
              <li class="main-foods__item item-foods">
                <div class="item-foods__icon">
                  <img src="../src/img/foods/category/sauces-spices-spreads.jpg" alt="food icon" class="item-foods__img">
                </div>
                <div class="item-foods__info">
                  <div class="item-foods__name">
                    <a href="#" class="item-foods__link blue">Sauces, Spices & Spreads</a>
                  </div>
                  <div class="item-foods__description">All types of sauces and spices like ketchup, applesauce, pasta sauce,
                    salsa, olive oil, mayo, salad dressing, hummus and maple syrup.
                  </div>
                  <div class="item-foods__more blue">more</div>
                </div>
              </li>
              <li class="main-foods__item item-foods">
                <div class="item-foods__icon">
                  <img src="../src/img/foods/category/snacks.jpg" alt="food icon" class="item-foods__img">
                </div>
                <div class="item-foods__info">
                  <div class="item-foods__name">
                    <a href="#" class="item-foods__link blue">Snacks</a>
                  </div>
                  <div class="item-foods__description">Sweet and salty snacks like potato chips, tortilla chips, jerky, popcorn,
                    pretzels, crackers, granola bars, trail mix and rice cakes.</div>
                  <div class="item-foods__more blue">more</div>
                </div>
              </li>
              <li class="main-foods__item item-foods">
                <div class="item-foods__icon">
                  <img src="../src/img/foods/category/soups.jpg" alt="food icon" class="item-foods__img">
                </div>
                <div class="item-foods__info">
                  <div class="item-foods__name">
                    <a href="#" class="item-foods__link blue">Soups</a>
                  </div>
                  <div class="item-foods__description">All types of soups like chili, gumbo, bisques, chowders, stews and
                    broths.</div>
                  <div class="item-foods__more blue">more</div>
                </div>
              </li>
              <li class="main-foods__item item-foods">
                <div class="item-foods__icon">
                  <img src="../src/img/foods/category/sweets-candy-desserts.jpg" alt="food icon" class="item-foods__img">
                </div>
                <div class="item-foods__info">
                  <div class="item-foods__name">
                    <a href="#" class="item-foods__link blue">Sweets, Candy & Desserts</a>
                  </div>
                  <div class="item-foods__description">Sweet treats like candy, chocolate, cake, donuts, ice cream, pastries,
                    muffins, pancakes and brownies.</div>
                  <div class="item-foods__more blue">more</div>
                </div>
              </li>
              <li class="main-foods__item item-foods">
                <div class="item-foods__icon">
                  <img src="../src/img/foods/category/vegetables.jpg" alt="food icon" class="item-foods__img">
                </div>
                <div class="item-foods__info">
                  <div class="item-foods__name">
                    <a href="#" class="item-foods__link blue">Vegetables</a>
                  </div>
                  <div class="item-foods__description">All vegetables like mushrooms, carrots, potatoes, tomatoes, broccoli,
                    lettuce, peas and onions.</div>
                  <div class="item-foods__more blue">more</div>
                </div>
              </li>
              <li class="main-foods__item item-foods">
                <div class="item-foods__icon">
                  <img src="../src/img/foods/category/other.jpg" alt="food icon" class="item-foods__img">
                </div>
                <div class="item-foods__info">
                  <div class="item-foods__name">
                    <a href="#" class="item-foods__link blue">Other</a>
                  </div>
                  <div class="item-foods__description">Popular foods like dumplings, croutons, chow mein, french toast, quiche,
                    spring rolls and grits.
                  </div>
                  <div class="item-foods__more blue">more</div>
                </div>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;

    this.eventListeners();
  }

  eventListeners() {
    const categoryLinks = $All('.item-foods__link');

    categoryLinks.forEach((item) => {
      item.addEventListener('click', (e) => {
        const elem = <HTMLLinkElement>e.target;

        const name = `/foods/group/${createPath(<string>elem.textContent)}`;
        router.route(e, name);
      });
    });
  }
}

export { Foods };
