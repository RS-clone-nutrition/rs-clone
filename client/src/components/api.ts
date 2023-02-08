class Api {
  nutrition = {
    id: '747c153a',
    key: 'd3375ff9619759fb316dd552bdc60565',
  };

  recipe = {
    id: 'f3e1d102',
    key: 'f0579006ea485c2daed2ae4396032b36	',
  };

  food = {
    url: 'https://api.edamam.com/api/food-database/v2/parser',
    id: 'c885c4cd',
    key: '0d731e2a8f9f149112f74f1a2056f39b',
  };

  async getFoods(product: string) {
    try {
      const response = await fetch(
        `https://api.edamam.com/api/food-database/v2/parser?app_id=${this.food.id}&app_key=${this.food.key}&ingr=${product}&nutrition-type=cooking`
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
}

const api = new Api();
export default api;