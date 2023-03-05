import Cal from '../utils/generateCalendar';
import { $ } from '../utils/helpers';
import { IUser } from '../utils/types';
const calendar = new Cal('divCal');
const blockCalendar = {
  render() {
    return `
    <h2>My Diet Calendars</h2>
    <div class='block-date'>
      <div class='block-date__cart food-diary'>
        <h2>Сalories for food</h2>
        <span class='food-diary-info'></span>
      </div>
      <div class='block-date__cart fitness-diary'>
        <h2>Сalories for fitness</h2>
        <span class='fitness-diary-info'></span>
      </div>
      <div class='block-date__cart total-diary'>
        <h2>Left to use calories</h2>
        <span class='total-diary-info'></span>
      </div>
    </div>
    <div class="calendar-wrapper">
      <h2 class='calendar-month'>Feb 2023</h2>
      <div class="calendar-btn">
        <button id="btnPrev" type="button"></button>
        <button id="btnNext" type="button"></button>
      </div>
      <div id="divCal">${calendar.createCalendar()}</div>
    </div>
    `;
  },
  getInformation() {
    const storage = JSON.parse(`${localStorage.getItem('storage')}`);
    const foodDiary = <HTMLElement>$('.food-diary-info');
    const fitnessDiary = <HTMLElement>$('.fitness-diary-info');
    const totalDiary = <HTMLElement>$('.total-diary-info');
    const user: IUser = JSON.parse(`${localStorage.getItem('user')}`);
    let RDI = '';
    if (user) {
      RDI = `${
        user.gender === 'male'
          ? Math.floor((66.5 + 13.75 * +user.weight[0] + 5.003 * +user.height - 6.775 * +user.age) * 1.55)
          : Math.floor((655.1 + 9.563 * +user.weight[0] + 1.85 * +user.height - 4.676 * +user.age) * 1.55)
      }`;
    }
    foodDiary.innerHTML = storage.food.calSum ? storage.food.calSum : 0;
    fitnessDiary.innerHTML = storage.fitness.calSum ? storage.fitness.calSum : 0;
    const difference =
      +foodDiary.innerHTML - +fitnessDiary.innerHTML < 0 ? 0 : +foodDiary.innerHTML - +fitnessDiary.innerHTML;
    console.log(difference);

    totalDiary.innerHTML = `${+RDI - difference < 0 ? 0 : +RDI - difference} or ${
      +((+RDI - difference) / +RDI).toFixed(1) * 100 < 0 || Number.isNaN(+((+RDI - difference) / +RDI).toFixed(1) * 100)
        ? 0
        : +((+RDI - difference) / +RDI).toFixed(1) * 100
    }% from the daily norm`;
    console.log(RDI);
  },
};
export default blockCalendar;
