export const updateLocalStorage = (type: string, id: string, input: HTMLInputElement) => {
  const storage = JSON.parse(`${localStorage.getItem('storage')}`);
  const value = Number.isNaN(parseInt(input.value)) ? 1 : parseInt(input.value) == 0 ? 1 : parseInt(input.value);
  if (type == 'activity' || type == 'sleep') {
    const { cal, time } = storage.fitness[`${type}`][`${id}`];
    storage.fitness[`${type}`][`${id}`].time = value;
    storage.fitness[`${type}`][`${id}`].cal = +((cal * value) / time).toFixed(2);
  } else {
    const { cal, carb, prot, gramm, fat } = storage.food[`${type}`][`${id}`];
    storage.food[`${type}`][`${id}`].gramm = value;
    storage.food[`${type}`][`${id}`].cal = +((cal * value) / gramm).toFixed(2);
    storage.food[`${type}`][`${id}`].carb = +((carb * value) / gramm).toFixed(2);
    storage.food[`${type}`][`${id}`].prot = +((prot * value) / gramm).toFixed(2);
    storage.food[`${type}`][`${id}`].fat = +((fat * value) / gramm).toFixed(2);
  }
  localStorage.setItem('storage', JSON.stringify(storage));
};
