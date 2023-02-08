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
const createPath = (partPath: string) => partPath.replace(',', ' &').split(' & ').join('-');

const getMainPath = (path: string) => {
  const pathArr = path.split('/');
  return pathArr.length > 2 ? pathArr.slice(0, -1).join('/') : pathArr.join('/');
};

const getURL = () => window.location.href;

const deleteRepeatingItems = (arr: string[]) => Array.from(new Set(arr));

const getLastURLPart = () => <string>getURL().split('/').slice(-1).toString().replaceAll('_', '-');

export {
  $,
  $All,
  randomExercise,
  burnedCalories,
  createPath,
  getMainPath,
  getURL,
  deleteRepeatingItems,
  getLastURLPart,
};
