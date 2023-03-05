import { Chart, registerables } from 'chart.js';
import { IUser } from '../../utils/types';
import format from 'date-fns/format';
import { $ } from '../../utils/helpers';

Chart.register(...registerables);

class WeightGraph {
  render(userObj: IUser) {
    const container = <HTMLElement>$('.canvas');

    container.innerHTML = '<div class="canvas__container"><canvas id="myChart"></canvas></div>';

    this.createChart(userObj);
  }

  createChart(userObj: IUser) {
    const ctx = <HTMLCanvasElement>document.getElementById('myChart');
    const dateArr = Array.from(userObj.date);
    const dates =
      dateArr.length > 1
        ? dateArr.map((item) => format(new Date(item), 'd MMMM y'))
        : (format(new Date(dateArr[0]), 'd MMMM y') + ';' + format(new Date(dateArr[0]), 'd MMMM y')).split(';');

    const weightsArr = Array.from(userObj.weight);
    const weights = weightsArr.length > 1 ? weightsArr : (weightsArr[0] + ';' + weightsArr[0]).split(';');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            label: 'Weight History',
            data: weights,
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              font: {
                size: 30,
              },
            },
          },
        },
      },
    });
  }
}

const weightGraph = new WeightGraph();

export default weightGraph;
