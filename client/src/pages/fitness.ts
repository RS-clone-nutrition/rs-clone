import {
  dataExerciseLight,
  dataExerciseModerate,
  dataExerciseStrenuous,
  DataExercise,
} from '../components/dataFitExercise';
import { $, $All, randomExercise, burnedCalories } from '../utils/helpers';

class Fitness {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    this.main.innerHTML = `<div class='wrapper'>
    <div class="bread-crumbs">
      <ul class="bread-crumbs-list wrap">
        <li class="list-item">
          <a href="/" class="item-link">
            <img src="../src/img/nav_breadcrumb_home.png" alt="home" class="bread-crumbs-home">
          </a>
        </li>
        <li class="list-item item-arrow">></li>
        <li class="list-item">
          Fitness
        </li>
      </ul>
    </div>
    <div class="fit-title-wrapper">
      <div class="fit-wrap wrap">
        <img src="../src/img/icons8-fitness-60.png" alt="icon fitness" class="fit-icon">
        <div class="fit-title-wrap">
          <h2 class="fit-title">
            Fitness
          </h2>
          <p class="fit-description">
            Find exercises that are right for you and start burning calories today!
          </p>
        </div>
      </div>
    </div>
    <div class="fit-search-wrapper">
      <div class="fit-wrap">
        <h3 class="search-title">
          Activity and Exercise Finder
        </h3>
        <input type="text" class="input-fit-search">
        <div>
          <input type="radio" id="whereSearch1" name="fitness" value="light">
          <label for="whereSearch1">Light</label>
      
          <input type="radio" id="whereSearch2" name="fitness" value="moderate">
          <label for="whereSearch2">Moderate</label>
      
          <input type="radio" id="whereSearch3" name="fitness" value="strenuous">
          <label for="whereSearch3">Strenuous</label>

          <input type="radio" id="whereSearch4" name="fitness" value="all" checked>
          <label for="whereSearch4">All</label>
        </div>
      </div>
    </div>
    <div class="fit-slider-wrapper">
      <div class="slider-title-wrap wrap">
        <div class="title-wrap">
          <p class="slider-subtitle">
            Light Activity
          </p>
          <h3 class="slider-title">
            Sleeping
          </h3>
        </div>
        <img src="../src/img/sleeping.png" alt="" class="slider-img">
      </div>
      <div class="slider-description-wrap">
        <h3 class="slider-descr-title">
          Estimated Energy Burned
        </h3>
        <div class="slider-table wrap">
          <div class="slider-time-wrap wrap">
            <ul class="slider-list">
              <li class="lider-list-item">5 Minutes</li>
              <li class="lider-list-item">10 Minutes</li>
              <li class="lider-list-item">15 Minutes</li>
              <li class="lider-list-item">30 Minutes</li>
            </ul>
            <ul class="slider-list">
              <li class="lider-list-item five-min">6 calories</li>
              <li class="lider-list-item ten-min">11 calories</li>
              <li class="lider-list-item fifteen-min">17 calories</li>
              <li class="lider-list-item therty-min">34 calories</li>
            </ul>
          </div>
          <div class="slider-time-wrap wrap">
            <ul class="slider-list">
              <li class="lider-list-item">1 Hour</li>
              <li class="lider-list-item">2 Hour</li>
              <li class="lider-list-item">3 Hour</li>
              <li class="lider-list-item">4 Hour</li>
            </ul>
            <ul class="slider-list">
              <li class="lider-list-item one-hour">69 calories</li>
              <li class="lider-list-item two-hour">137 calories</li>
              <li class="lider-list-item tree-hour">206 calories</li>
              <li class="lider-list-item four-hour">274 calories</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="slider-elipse wrap">
        <div class="elipse active"></div>
        <div class="elipse"></div>
        <div class="elipse"></div>
      </div>
    </div>
    <div class="exercise-type">
      <h3 class="exercise-type-title">
        Energy Burned By Exercise Type 
      </h3>
      <div class="type-wrapper wrap">
        <div class="type">
          <p class="type-title">Light Intensity</p>
          <p class="type-text">calories/hr</p>
          <div class="type-table wrap">
            <ul class="type-list">
              ${dataExerciseLight.map((e) => `<li>${e.name}</li>`).join('')}
            </ul>
            <ul class="type-list">
              ${dataExerciseLight.map((e) => `<li>${e.calsInHr}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="type">
          <p class="type-title">Moderate Intensity</p>
          <p class="type-text">calories/hr</p>
          <div class="type-table wrap">
            <ul class="type-list">
              ${dataExerciseModerate.map((e) => `<li>${e.name}</li>`).join('')}
            </ul>
            <ul class="type-list">
              ${dataExerciseModerate.map((e) => `<li>${e.calsInHr}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="type">
          <p class="type-title">Strenuous Intensity</p>
          <p class="type-text">calories/hr</p>
          <div class="type-table wrap">
            <ul class="type-list">
              ${dataExerciseStrenuous.map((e) => `<li>${e.name}</li>`).join('')}
            </ul>
            <ul class="type-list">
              ${dataExerciseStrenuous.map((e) => `<li>${e.calsInHr}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>`;
    this.slider();
    this.eventLisreners();
  }

  eventLisreners() {}

  slider() {
    const allExerciseArray: DataExercise[] = dataExerciseLight
      .concat(dataExerciseModerate)
      .concat(dataExerciseStrenuous);
    const sliderTitle = <HTMLElement>$('.slider-title');
    const sliderSubtitle = <HTMLElement>$('.slider-subtitle');
    const sliderImg = <HTMLImageElement>$('.slider-img');
    const min5Cals = <HTMLElement>$('.five-min');
    const min10Cals = <HTMLElement>$('.ten-min');
    const min15Cals = <HTMLElement>$('.fifteen-min');
    const min30Cals = <HTMLElement>$('.therty-min');
    const hour1Cals = <HTMLElement>$('.one-hour');
    const hour2Cals = <HTMLElement>$('.two-hour');
    const hour3Cals = <HTMLElement>$('.tree-hour');
    const hour4Cals = <HTMLElement>$('.four-hour');
    const slider = <HTMLElement>$('.fit-slider-wrapper');
    const elipseArray = $All('.elipse');
    let i = 1;
    function activeElipse() {
      if (i > 2) {
        i = 0;
        elipseArray[i].classList.add('active');
        elipseArray[elipseArray.length - 1].classList.remove('active');
      } else {
        elipseArray[i].classList.add('active');
        elipseArray[i - 1].classList.remove('active');
      }
      i++;
    }
    setInterval(() => {
      const randomExc = randomExercise(allExerciseArray);
      sliderTitle.innerHTML = randomExc.name;
      sliderSubtitle.innerHTML = randomExc.type;
      sliderImg.src = randomExc.image;
      min5Cals.innerHTML = `${burnedCalories(randomExc.calsInHr, 5)} calories`;
      min10Cals.innerHTML = `${burnedCalories(randomExc.calsInHr, 10)} calories`;
      min15Cals.innerHTML = `${burnedCalories(randomExc.calsInHr, 15)} calories`;
      min30Cals.innerHTML = `${burnedCalories(randomExc.calsInHr, 30)} calories`;
      hour1Cals.innerHTML = `${randomExc.calsInHr} calories`;
      hour2Cals.innerHTML = `${burnedCalories(randomExc.calsInHr, 120)} calories`;
      hour3Cals.innerHTML = `${burnedCalories(randomExc.calsInHr, 180)} calories`;
      hour4Cals.innerHTML = `${burnedCalories(randomExc.calsInHr, 240)} calories`;
      activeElipse();
    }, 10000);
    slider.addEventListener('click', () => {
      console.log(randomExercise(dataExerciseLight).name);
    });
  }
}

export { Fitness };
