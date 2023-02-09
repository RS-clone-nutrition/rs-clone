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
export { $, $All, randomExercise, burnedCalories, activePage };
