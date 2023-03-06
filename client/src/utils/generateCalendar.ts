class Cal {
  divId;

  DaysOfWeek;

  currMonth;

  currYear;

  currDay;

  Months;

  constructor(divId: string) {
    this.divId = divId;
    const d = new Date();
    this.currMonth = d.getMonth();
    this.currYear = d.getFullYear();
    this.currDay = d.getDate();
    this.DaysOfWeek = ['MO', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    this.Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Avg', 'Sep', 'Oct', 'Nov', 'Dec'];
  }
  // Переход к следующему месяцу

  nextMonth() {
    if (this.currMonth == 11) {
      this.currMonth = 0;
      this.currYear = this.currYear + 1;
    } else {
      this.currMonth = this.currMonth + 1;
    }

    this.showcurr();
  }
  // Переход к предыдущему месяцу

  previousMonth() {
    if (this.currMonth == 0) {
      this.currMonth = 11;
      this.currYear = this.currYear - 1;
    } else {
      this.currMonth = this.currMonth - 1;
    }
    this.showcurr();
  }
  // Показать текущий месяц

  showcurr() {
    return this.showMonth(this.currYear, this.currMonth);
  }

  showMonth(y: number, m: number) {
    // Первый день недели в выбранном месяце
    const firstDayOfMonth = new Date(y, m, 7).getDay();
    // Последний день выбранного месяца
    const lastDateOfMonth = new Date(y, m + 1, 0).getDate();
    // Последний день предыдущего месяца
    const lastDayOfLastMonth = m == 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();
    //Получаем блок с отображением месяца
    const nameMonth = document.querySelector('.calendar-month') as HTMLElement;

    let html = '<table>';
    // Запись выбранного месяца и года
    html += '<thead><tr>';
    if (nameMonth) {
      nameMonth.innerHTML = this.Months[m] + ' ' + y;
    }
    html += '</tr></thead>';
    // заголовок дней недели
    html += '<tr class="days">';
    for (let i = 0; i < this.DaysOfWeek.length; i++) {
      html += '<td>' + this.DaysOfWeek[i] + '</td>';
    }
    html += '</tr>';
    // Записываем дни
    let i = 1;
    do {
      let dow = new Date(y, m, i).getDay();
      // Начать новую строку в понедельник
      if (dow == 1) {
        html += '<tr>';
      }
      // Если первый день недели не понедельник показать последние дни предыдущего месяца
      else if (i == 1) {
        html += '<tr>';
        let k = lastDayOfLastMonth - firstDayOfMonth + 1;
        for (let j = 0; j < firstDayOfMonth; j++) {
          html += '<td class="not-current">' + k + '</td>';
          k++;
        }
      }
      const chk = new Date();
      const chkY = chk.getFullYear();
      const chkM = chk.getMonth();
      if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
        html += '<td class="today">' + i + '</td>';
      } else {
        html += '<td class="normal">' + i + '</td>';
      }
      if (dow == 0) {
        html += '</tr>';
      }
      // Если последний день месяца не воскресенье, показать первые дни следующего месяца
      else if (i == lastDateOfMonth) {
        let k = 1;
        for (dow; dow < 7; dow++) {
          html += '<td class="not-current">' + k + '</td>';
          k++;
        }
      }
      i++;
    } while (i <= lastDateOfMonth);
    // Конец таблицы
    html += '</table>';

    // Записываем HTML в div
    setTimeout(() => {
      const block = document.getElementById(this.divId) as HTMLElement;
      if (block) {
        return (block.innerHTML = `${html}`);
      }
    }, 0);
  }

  createCalendar() {
    setTimeout(() => {
      const calendar = new Cal('divCal');
      // Начать календарь
      this.showcurr();

      // Привязываем кнопки «Следующий» и «Предыдущий»
      const btnNext = document.querySelector('#btnNext') as HTMLElement;
      const btnPrev = document.querySelector('#btnPrev') as HTMLElement;
      // btnNext.addEventListener('click', calendar.nextMonth);
      // btnPrev.addEventListener('click', calendar.previousMonth);
      btnNext.onclick = function () {
        calendar.nextMonth();
      };
      btnPrev.onclick = function () {
        calendar.previousMonth();
      };
    }, 0);
  }
}
export default Cal;
