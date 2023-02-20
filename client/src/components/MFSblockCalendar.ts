import Cal from '../utils/generateCalendar';
const calendar = new Cal('divCal');
const blockCalendar = {
  render() {
    return `
  <h2>My Diet Calendars</h2>
  <h2>Recent Food & Exercise Entries</h2>
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
};
export default blockCalendar;
