import '../styles/recipes.scss';

class Recipes {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    this.main.innerHTML = `
    <div class="recipes">
        <div class="container">
          <div class="crumbs">
            <img class="crumbs__home-img" src="../src/img/home-icon.svg" alt="home icon">
            <span class="crumbs__sep">></span>
            <a href="#" class="crumbs__link">Recipes</a>
          </div>
          <div class="recipes__main main-recipes">
            <h1 class="main-recipes__title">Recipes</h1>
            <div class="main-recipes__undertitle">Find great recipes for any meal, food or diet, rated and reviewed for
              you.</div>
            <div class="main-recipes__examples examples-recipes">
              <div class="examples-recipes__wrapper">
                <div class="examples-recipes__feautered feautered-example">
                  <h2 class="feautered-example__title">Featured Today</h2>
                  <h3 class="feautered-example__undertitle">Dairy Free Recipes</h3>
                  <div class="feautered-example__icon">
                    <img src="../src/img/recipes/dish.png" alt="" class="feautered-example__img">
                  </div>
                  <h2 class="feautered-example__name blue"><a class="feautered-example__name-link" href="#">Asian-style
                      Chicken
                      Salad</a></h2>
                  <div class="feautered-example__description">Simple chicken salad with an Asian twist.</div>
                  <a href="#" class="feautered-example__more">view more dairy free recipes</a>
                </div>
              </div>
              <div class="main-recipes__variants variants-recipes">
                <ul class="variants-recipes__list">
                  <li class="variants-recipes__item">
                    <div class="variants-recipes__icon">
                      <img src="../src/img/recipes/dish.png" alt="recipe variant" class="variants-recipes__img">
                    </div>
                    <div class="variants-recipes__text">
                      <h2 class="variants-recipes__name">
                        <a class="variants-recipes__link blue" href="#">Stew in a Pumpkin</a>
                      </h2>
                      <div class="variants-recipes__name">Hearty Fall dish.</div>
                    </div>
                  </li>
                  <li class="variants-recipes__item">
                    <div class="variants-recipes__icon">
                      <img src="../src/img/recipes/dish.png" alt="recipe variant" class="variants-recipes__img">
                    </div>
                    <div class="variants-recipes__text">
                      <h2 class="variants-recipes__name">
                        <a class="variants-recipes__link blue" href="#">Stew in a Pumpkin</a>
                      </h2>
                      <div class="variants-recipes__name">Hearty Fall dish.</div>
                    </div>
                  </li>
                  <li class="variants-recipes__item">
                    <div class="variants-recipes__icon">
                      <img src="../src/img/recipes/dish.png" alt="recipe variant" class="variants-recipes__img">
                    </div>
                    <div class="variants-recipes__text">
                      <h2 class="variants-recipes__name">
                        <a class="variants-recipes__link blue" href="#">Stew in a Pumpkin</a>
                      </h2>
                      <div class="variants-recipes__name">Hearty Fall dish.</div>
                    </div>
                  </li>
                  <li class="variants-recipes__item">
                    <div class="variants-recipes__icon">
                      <img src="../src/img/recipes/dish.png" alt="recipe variant" class="variants-recipes__img">
                    </div>
                    <div class="variants-recipes__text">
                      <h2 class="variants-recipes__name">
                        <a class="variants-recipes__link blue" href="#">Stew in a Pumpkin</a>
                      </h2>
                      <div class="variants-recipes__name">Hearty Fall dish.</div>
                    </div>
                  </li>
                  <li class="variants-recipes__item">
                    <div class="variants-recipes__icon">
                      <img src="../src/img/recipes/dish.png" alt="recipe variant" class="variants-recipes__img">
                    </div>
                    <div class="variants-recipes__text">
                      <h2 class="variants-recipes__name">
                        <a class="variants-recipes__link blue" href="#">Stew in a Pumpkin</a>
                      </h2>
                      <div class="variants-recipes__name">Hearty Fall dish.</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="recipes__popular popular-recipes">
            <h2 class="popular-recipes__title">Recently Popular Recipes</h2>
            <ul class="popular-recipes__list">
              <li class="popular-recipes__item">
                <div class="popular-recipes__icon">
                  <img src="../src/img/recipes/dish.png" alt="popular dish" class="popular-recipes__img">
                </div>
                <div class="popular-recipes__info info-popular">
                  <h2 class="info-popular__name">
                    <a class="info-popular__link blue" href="#">Cinnamon Breakfast Muffin</a>
                  </h2>
                  <div class="info-popular__description description-popular">
                    <p class="description-popular__text">A quick breakfast muffin that's good for Phase 1 of South Beach
                      diet.</p>
                    <p class="description-popular__member">
                      by member:
                      <span class="description-popular__nick blue">LadiRosselott</span>
                    </p>
                  </div>
                  <div class="info-popular__details">
                    <span>Per serve - Energy: 201kcal | Carb: 10.26g | Prot: 10.71g | Fat: 14.04g</span>
                  </div>
                </div>
              </li>
              <li class="popular-recipes__item">
                <div class="popular-recipes__icon">
                  <img src="../src/img/recipes/dish.png" alt="popular dish" class="popular-recipes__img">
                </div>
                <div class="popular-recipes__info info-popular">
                  <h2 class="info-popular__name">
                    <a class="info-popular__link blue" href="#">Cinnamon Breakfast Muffin</a>
                  </h2>
                  <div class="info-popular__description description-popular">
                    <p class="description-popular__text">A quick breakfast muffin that's good for Phase 1 of South Beach
                      diet.</p>
                    <p class="description-popular__member">
                      by member:
                      <span class="description-popular__nick blue">LadiRosselott</span>
                    </p>
                  </div>
                  <div class="info-popular__details">
                    <span>Per serve - Energy: 201kcal | Carb: 10.26g | Prot: 10.71g | Fat: 14.04g</span>
                  </div>
                </div>
              </li>
              <li class="popular-recipes__item">
                <div class="popular-recipes__icon">
                  <img src="../src/img/recipes/dish.png" alt="popular dish" class="popular-recipes__img">
                </div>
                <div class="popular-recipes__info info-popular">
                  <h2 class="info-popular__name">
                    <a class="info-popular__link blue" href="#">Cinnamon Breakfast Muffin</a>
                  </h2>
                  <div class="info-popular__description description-popular">
                    <p class="description-popular__text">A quick breakfast muffin that's good for Phase 1 of South Beach
                      diet.</p>
                    <p class="description-popular__member">
                      by member:
                      <span class="description-popular__nick blue">LadiRosselott</span>
                    </p>
                  </div>
                  <div class="info-popular__details">
                    <span>Per serve - Energy: 201kcal | Carb: 10.26g | Prot: 10.71g | Fat: 14.04g</span>
                  </div>
                </div>
              </li>
            </ul>
            <a href="#" class="popular-recipes__more">view more recipes</a>
          </div>
        </div>
      </div>
    `;
  }
}

export { Recipes };
