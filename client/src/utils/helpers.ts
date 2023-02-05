import { DataExercise } from '../components/dataFitExercise';

const $ = (selector: string, parent?: Element) => {
  return parent ? parent.querySelector(selector) : document.querySelector(selector);
};

const $All = (selector: string, parent?: Element) =>
  parent ? parent.querySelectorAll(selector) : document.querySelectorAll(selector);

function randomExercise(arr: DataExercise[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function burnedCalories(calsHour: number, minutes: number): number {
  const minHour = 60;
  const calsMin = calsHour / minHour;
  const burnedCals = Math.round(calsMin * minutes);
  return burnedCals;
}

export { $, $All, randomExercise, burnedCalories };
