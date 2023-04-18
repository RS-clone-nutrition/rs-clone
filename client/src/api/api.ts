class Api {
  nutrition = {
    id: 'e6313f32',
    key: '36b1859d36f1c71900c84c8816b580ff',
  };

  recipe = {
    url: 'https://api.edamam.com/api/recipes/v2',
    id: 'd8cb11ec',
    key: '63f53cd47a582c732ffa8d204f45aba7',
  };

  food = {
    url: 'https://api.edamam.com/api/food-database/v2/parser',
    id: '771ca52b',
    key: '4c24c4b471828ae9be9967ef609d77e9',
  };

  async getFoods(product: string, health?: string) {
    try {
      const response = await fetch(
        !health
          ? `https://api.edamam.com/api/food-database/v2/parser?app_id=${this.food.id}&app_key=${this.food.key}&ingr=${product}&nutrition-type=cooking`
          : `https://api.edamam.com/api/food-database/v2/parser?app_id=${this.food.id}&app_key=${this.food.key}&nutrition-type=cooking&health=${health}`
      );
      const result = await response.json();
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  async getNutritionAnalysis(product: string) {
    try {
      const response = await fetch(
        `https://api.edamam.com/api/nutrition-data?app_id=${this.nutrition.id}&app_key=${this.nutrition.key}&nutrition-type=logging&ingr=${product}`
      );
      const result = await response.json();
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  async getRecipesType(category: string, type: string) {
    try {
      const response = await fetch(
        `${this.recipe.url}?type=public&app_id=${this.recipe.id}&app_key=${this.recipe.key}&${category}=${type}`
      );
      const result = await response.json();
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  async getRandomRecipes() {
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=f3e1d102&app_key=f0579006ea485c2daed2ae4396032b36&diet=balanced&health=sugar-conscious&random=true`
      );
      const result = await response.json();
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  async getRecipeFoodSearch(product: string, type?: string) {
    try {
      const response = await fetch(
        type
          ? `${this.recipe.url}?type=public&q=${product}&app_id=${this.recipe.id}&app_key=${this.recipe.key}&mealType=${type}`
          : `${this.recipe.url}?type=public&q=${product}&app_id=${this.recipe.id}&app_key=${this.recipe.key}`
      );
      const result = await response.json();
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  async getNextPageRecipes(path: string) {
    try {
      const response = await fetch(path);
      const result = await response.json();
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  async getSingleRecipe(idRecipe: string) {
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2/${idRecipe}?type=public&app_id=f3e1d102&app_key=f0579006ea485c2daed2ae4396032b36`
      );
      const result = await response.json();
      return result;
    } catch (e) {
      console.log(e);
    }
  }
}

const api = new Api();
export default api;
