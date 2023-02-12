interface IGroups {
  'Beans-Legumes': string[];
  Beverages: string[];
  'Breads-Cereals': string[];
  'Cheese-Milk-Dairy': string[];
  Eggs: string[];
  'Fast-Food': string[];
  'Fish-Seafood': string[];
  Fruit: string[];
  Meat: string[];
  'Nuts-Seeds': string[];
  'Pasta-Rice-Noodles': string[];
  Salads: string[];
  'Sauces-Spices-Spreads': string[];
  Snacks: string[];
  Soups: string[];
  'Sweets-Candy-Desserts': string[];
  Vegetables: string[];
}

type CategoryArr = [string, string[]];

interface INutritionAnalysisResponse {
  calories: number;
  totalWeight: number;
  healthLabels: string[];
  dietLabels: string[];
  cautions: string[];
  totalNutrients: {
    FAT: { quantity: number };
    FASAT: { quantity: number };
    FATRN: { quantity: number };
    FAPU: { quantity: number };
    FAMS: { quantity: number };
    CHOLE: { quantity: number };
    NA: { quantity: number };
    CHOCDF: { quantity: number };
    FIBTG: { quantity: number };
    SUGAR: { quantity: number };
    PROCNT: { quantity: number };
    VITD: { quantity: number };
    CA: { quantity: number };
    FE: { quantity: number };
    K: { quantity: number };
    VITA_RAE: { quantity: number };
    VITC: { quantity: number };
  };
  totalDaily: {
    FAT: { quantity: number };
    FASAT: { quantity: number };
    FATRN: { quantity: number };
    FAPU: { quantity: number };
    FAMS: { quantity: number };
    CHOLE: { quantity: number };
    NA: { quantity: number };
    CHOCDF: { quantity: number };
    FIBTG: { quantity: number };
    SUGAR: { quantity: number };
    PROCNT: { quantity: number };
    VITD: { quantity: number };
    CA: { quantity: number };
    FE: { quantity: number };
    K: { quantity: number };
    VITA_RAE: { quantity: number };
    VITC: { quantity: number };
  };
}

interface IFooddataBaseResponse {
  hints: { map: (arg0: (i: { food: { label: string[]; image: string[] } }) => string[]) => string[] };
  text: string;
}
interface IRecipeData {
  forEach(
    arg0: (el: {
      recipe: {
        calories: number;
        label: string;
      };
    }) => any
  ): unknown;
}
interface IInputCheckbox {
  forEach(arg0: (el: HTMLInputElement) => any): unknown;
}

export { IGroups, CategoryArr, INutritionAnalysisResponse, IFooddataBaseResponse, IRecipeData, IInputCheckbox };
