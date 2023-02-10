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

const preload = (block: Element, time: number) => {
  block.classList.add('loaded_hiding');
  window.setTimeout(function () {
    block.classList.remove('loaded_hiding');
  }, time);
};

const getPercent = (partNum: number, wholeNum: number) => Math.floor((partNum / wholeNum) * 100) || 0;

function activePage(path: string) {
  const arrayHeaderLinks = document.querySelectorAll('.nav__link');
  for (let i = 0; i < arrayHeaderLinks.length; i++) {
    arrayHeaderLinks[i].classList.remove('active-link');
  }
  switch (path) {
    case '/':
      arrayHeaderLinks[0].classList.add('active-link');
      break;
    case '/fitness':
      arrayHeaderLinks[1].classList.add('active-link');
      break;
    case '/foods':
      arrayHeaderLinks[2].classList.add('active-link');
      break;
    case '/foods/product':
      arrayHeaderLinks[2].classList.add('active-link');
      break;
    case '/foods/group':
      arrayHeaderLinks[2].classList.add('active-link');
      break;
    case '/recipes':
      arrayHeaderLinks[3].classList.add('active-link');
      break;
    case '/myfatsecret':
      arrayHeaderLinks[4].classList.add('active-link');
      break;
    case '/signup':
      arrayHeaderLinks[6].classList.add('active-link');
      break;
    case '/login':
      arrayHeaderLinks[5].classList.add('active-link');
      break;
  }
}

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
  preload,
  getPercent,
  activePage,
};
