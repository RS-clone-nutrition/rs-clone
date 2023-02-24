export const updateLocalStorageFood = (mealFood: string, id: string, input: HTMLInputElement) => {
  const storage = JSON.parse(`${localStorage.getItem('storage')}`);
  const { cal, carb, prot, gramm, fat } = storage.food[`${mealFood}`][`${id}`];
  storage.food[`${mealFood}`][`${id}`].gramm = +input.value;
  storage.food[`${mealFood}`][`${id}`].cal = +((cal * +input.value) / gramm).toFixed(2);
  storage.food[`${mealFood}`][`${id}`].carb = +((carb * +input.value) / gramm).toFixed(2);
  storage.food[`${mealFood}`][`${id}`].prot = +((prot * +input.value) / gramm).toFixed(2);
  storage.food[`${mealFood}`][`${id}`].fat = +((fat * +input.value) / gramm).toFixed(2);
  localStorage.setItem('storage', JSON.stringify(storage));
};
export const updateLocalStorageFitness = (type: string, id: string) => {
  const storage = JSON.parse(`${localStorage.getItem('storage')}`);
  const { cal, time } = storage.fitness[`${type}`][`${id}`];
  storage.fitness[`${type}`][`${id}`].cal = Math.round((cal * time) / 60);
  storage.fitness[`${type}`][`${id}`].time = time;
  localStorage.setItem('storage', JSON.stringify(storage));
};
