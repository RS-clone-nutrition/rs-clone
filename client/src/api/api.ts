class Api {
  nutrition = {
    id: 'fe1356d4',
    key: 'de65a7c20df722c53cdbccdd8f25f021',
  };

  recipe = {
    id: '4fcfc438',
    key: '28966d2be84cfb19774545f5a0afb3f5',
  };

  food = {
    url: 'https://api.edamam.com/api/food-database/v2/parser',
    id: 'c885c4cd',
    key: '0d731e2a8f9f149112f74f1a2056f39b',
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

  async getRecipeFood(product: string) {
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${product}&app_id=${this.recipe.id}&app_key=${this.recipe.key}`
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
