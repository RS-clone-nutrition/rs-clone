const blockRecipe = (
  img: string,
  title: string,
  inredients: [
    {
      text: string;
      quantity: number;
      measure: string;
      food: string;
      weight: number;
      foodId: string;
    }
  ],
  kcal: number,
  fat: number,
  carbs: number,
  prot: number,
  id: string
) => {
  console.log([...new Set(inredients)][0]);
  return `<li class="popular-recipes__item">
            <div class="popular-recipes__icon">
              <img src="${img}" alt="popular dish" class="popular-recipes__img">
            </div>
            <div class="popular-recipes__info info-popular">
              <h2 class="info-popular__name">
                  <a class="info-popular__link blue" href="/recipe/${id}">${title}</a>
              </h2>
              <ul class="info-popular__description description-popular">
              ${[...new Set(inredients)]
                .map((e) => `<li><a href="/foods/product/${e.food}">${e.text}</a></li>`)
                .join('')} 
              </ul>
              <div class="info-popular__details">
                  <span>Per serve - Energy: ${Math.round(kcal)}kcal | 
									Carb: ${carbs.toFixed(2)}g | Prot: ${prot.toFixed(2)}g | 
									Fat: ${fat.toFixed(2)}g</span>
              </div>
            </div>
          </li>`;
};

export default blockRecipe;
