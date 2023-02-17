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

type AuthApiMessage = { message: string };

// interface IUser {
//   username: string;
//   password: string;
//   weight: string;
//   height: string;
//   age: string;
//   gender: string;
// }
interface IUser {
  [key: string]: string;
}

interface IResponseLogin {
  message: string;
  token?: string;
  user?: IUser;
}

interface IResponseUser {
  response: IResponseLogin;
  status: number;
}

interface IRecipe {
  recipe: {
    uri: string;
    label: string;
    image: string;
    images: {
      THUMBNAIL: {
        url: string;
        width: number;
        height: number;
      };
      SMALL: {
        url: string;
        width: number;
        height: number;
      };
      REGULAR: {
        url: string;
        width: number;
        height: number;
      };
      LARGE: {
        url: string;
        width: number;
        height: number;
      };
    };
    source: string;
    url: string;
    shareAs: string;
    yield: 0;
    dietLabels: [string];
    healthLabels: [string];
    cautions: [string];
    ingredientLines: [string];
    ingredients: [
      {
        text: string;
        quantity: number;
        measure: string;
        food: string;
        weight: number;
        foodId: string;
      }
    ];
    calories: number;
    glycemicIndex: number;
    totalCO2Emissions: number;
    co2EmissionsClass: string;
    totalWeight: number;
    cuisineType: [string];
    mealType: [string];
    dishType: [string];
    instructions: [string];
    tags: [string];
    externalId: string;
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
    digest: [
      {
        label: string;
        tag: string;
        schemaOrgTag: string;
        total: number;
        hasRDI: boolean;
        daily: number;
        unit: string;
        sub: {};
      }
    ];
  };
  _links: {
    self: {
      href: string;
      title: string;
    };
    next: {
      href: string;
      title: string;
    };
  };
}

export {
  IGroups,
  CategoryArr,
  INutritionAnalysisResponse,
  IFooddataBaseResponse,
  IRecipeData,
  IInputCheckbox,
  IRecipe,
  IUser,
  AuthApiMessage,
  IResponseLogin,
  IResponseUser,
};
