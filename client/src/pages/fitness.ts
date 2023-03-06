import {
  dataExerciseLight,
  dataExerciseModerate,
  dataExerciseStrenuous,
  DataExercise,
  allExerciseArray,
} from '../components/dataFitExercise';
import { $, randomExercise, burnedCalories } from '../utils/helpers';

class Fitness {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    this.main.innerHTML = `<div class='wrapper'>
    <div class="bread-crumbs-fit">
      <ul class="bread-crumbs-list wrap">
        <li class="list-item">
          <a href="/" class="item-link">
            <img src="./img/nav_breadcrumb_home.png" alt="home" class="bread-crumbs-home">
          </a>
        </li>
        <li class="list-item item-arrow">></li>
        <li class="list-item">
          <a href="/fitness" class="item-link">
            Fitness
          </a>
        </li>
      </ul>
    </div>
    <div class="fit-title-wrapper">
      <div class="fit-wrap wrap">
        <img src="./img/icons8-fitness-60.png" alt="icon fitness" class="fit-icon">
        <div class="fit-title-wrap">
          <h2 class="fit-title title">
            Fitness
          </h2>
          <p class="fit-description text">
            Find exercises that are right for you and start burning calories today!
          </p>
        </div>
      </div>
    </div>
    <div class="fit-search-wrapper">
      <div class="fit-wrap">
        <h3 class="search-title title">
          Activity and Exercise Finder
        </h3>
        <input list="search-fitness" type="text" class="input-fit-search">
        <datalist id="search-fitness">
          ${allExerciseArray.map((e) => `<option value="${e.name}">`).join('')}
        </datalist>
        <p class="not-found text">Not Found Exercise</p>
        <div>
          <input type="radio" id="searchLight" name="fitness" value="light" class="input-radio">
          <label for="searchLight">Light</label>
      
          <input type="radio" id="searchModerate" name="fitness" value="moderate" class="input-radio">
          <label for="searchModerate">Moderate</label>
      
          <input type="radio" id="searchStrenuous" name="fitness" value="strenuous" class="input-radio">
          <label for="searchStrenuous">Strenuous</label>

          <input type="radio" id="searchAll" name="fitness" value="all" class="input-radio" checked>
          <label for="searchAll">All</label>
        </div>
      </div>
    </div>
    <div class="fit-slider-wrapper">
      <div class="slider-title-wrap wrap">
        <div class="title-wrap">
          <p class="slider-subtitle title">
            Light Activity
          </p>
          <h3 class="slider-title title">
            Sleeping
          </h3>
        </div>
        <img src="./img/sleeping.png" alt="" class="slider-img">
      </div>
      <div class="slider-description-wrap">
        <h3 class="slider-descr-title title">
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
        <div class="elipse active" id="0"></div>
        <div class="elipse" id="1"></div>
        <div class="elipse" id="2"></div>
      </div>
    </div>
    <div class="exercise-type">
      <h3 class="exercise-type-title title">
        Energy Burned By Exercise Type 
      </h3>
      <div class="type-wrapper wrap">
        <div class="type">
          <p class="type-title title">Light Intensity</p>
          <p class="type-text title">calories/hr</p>
          <div class="type-table wrap">
            <ul class="type-list-names light">
              ${dataExerciseLight.map((e) => `<li class="item-btn text" id="${e.id}">${e.name}</li>`).join('')}
            </ul>
            <ul class="type-list-cals">
              ${dataExerciseLight.map((e) => `<li class="item-cals text">${e.calsInHr}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="type">
          <p class="type-title title">Moderate Intensity</p>
          <p class="type-text title">calories/hr</p>
          <div class="type-table wrap">
            <ul class="type-list-names moderate">
              ${dataExerciseModerate.map((e) => `<li class="item-btn text" id="${e.id}">${e.name}</li>`).join('')}
            </ul>
            <ul class="type-list-cals">
              ${dataExerciseModerate.map((e) => `<li class="item-cals text">${e.calsInHr}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="type">
          <p class="type-title title">Strenuous Intensity</p>
          <p class="type-text title">calories/hr</p>
          <div class="type-table wrap">
            <ul class="type-list-names strenuous">
              ${dataExerciseStrenuous.map((e) => `<li class="item-btn text" id="${e.id}">${e.name}</li>`).join('')}
            </ul>
            <ul class="type-list-cals">
              ${dataExerciseStrenuous.map((e) => `<li class="item-cals text">${e.calsInHr}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>`;
    this.sliderWhitShowCard();
    this.changeColor();
  }

  changeColor() {
    const changeColorInput = <HTMLInputElement>document.querySelector('.change_color_input');
    const colorLocalStr = localStorage.getItem('color');
    if (colorLocalStr) {
      changeColorInput.value = colorLocalStr;
    }
    const iconSearch = <HTMLElement>document.querySelector('.fa-solid');
    const fitTitleWrapperBorder = <HTMLElement>$('.fit-title-wrapper');
    const fitSearchWrapperBorder = <HTMLElement>$('.fit-slider-wrapper');
    const arrayTypeTitle: HTMLElement[] = Array.from(document.querySelectorAll('.type-title'));
    const arrayItemBtn: HTMLElement[] = Array.from(document.querySelectorAll('.item-btn'));

    fitTitleWrapperBorder.style.borderColor = changeColorInput.value;
    fitSearchWrapperBorder.style.borderColor = changeColorInput.value;
    for (let i = 0; i < arrayTypeTitle.length; i++) {
      arrayTypeTitle[i].style.background = changeColorInput.value;
    }
    for (let j = 0; j < arrayItemBtn.length; j++) {
      if (arrayItemBtn[j].classList.contains('active-item')) {
        arrayItemBtn[j].style.background = changeColorInput.value;
      }
    }

    changeColorInput.addEventListener('change', () => {
      iconSearch.style.color = changeColorInput.value;
      fitTitleWrapperBorder.style.borderColor = changeColorInput.value;
      fitSearchWrapperBorder.style.borderColor = changeColorInput.value;
      for (let i = 0; i < arrayTypeTitle.length; i++) {
        arrayTypeTitle[i].style.background = changeColorInput.value;
      }
      for (let j = 0; j < arrayItemBtn.length; j++) {
        if (arrayItemBtn[j].classList.contains('active-item')) {
          arrayItemBtn[j].style.background = changeColorInput.value;
        }
      }
    });
  }

  sliderWhitShowCard() {
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
    const listBreadCrumbs = <HTMLElement>$('.bread-crumbs-list');
    const sliderElipses = <HTMLElement>$('.slider-elipse');
    const elipseArray: HTMLElement[] = Array.from(document.querySelectorAll('.elipse'));
    const changeColorInput = <HTMLInputElement>document.querySelector('.change_color_input');
    elipseArray[0].style.background = changeColorInput.value;
    let i = 1;
    function activeElipse() {
      if (i > 2) {
        i = 0;
      }
      for (let j = 0; j < elipseArray.length; j++) {
        elipseArray[j].style.background = '#767676';
      }
      elipseArray[i].style.background = changeColorInput.value;
      i++;
    }
    function writeCard(obj: DataExercise) {
      sliderTitle.innerHTML = obj.name;
      sliderSubtitle.innerHTML = obj.type;
      sliderImg.src = obj.image;
      min5Cals.innerHTML = `${burnedCalories(obj.calsInHr, 5)} calories`;
      min10Cals.innerHTML = `${burnedCalories(obj.calsInHr, 10)} calories`;
      min15Cals.innerHTML = `${burnedCalories(obj.calsInHr, 15)} calories`;
      min30Cals.innerHTML = `${burnedCalories(obj.calsInHr, 30)} calories`;
      hour1Cals.innerHTML = `${obj.calsInHr} calories`;
      hour2Cals.innerHTML = `${burnedCalories(obj.calsInHr, 120)} calories`;
      hour3Cals.innerHTML = `${burnedCalories(obj.calsInHr, 180)} calories`;
      hour4Cals.innerHTML = `${burnedCalories(obj.calsInHr, 240)} calories`;
      const addBreadCrumbs = `<li class="list-item">
          <a href="/" class="item-link">
            <img src="./img/nav_breadcrumb_home.png" alt="home" class="bread-crumbs-home">
          </a>
        </li>
        <li class="list-item item-arrow">></li>
        <li class="list-item">
          <a href="/fitness" class="item-link">
            Fitness
          </a>
        </li>
        <li class="list-item item-arrow">></li>
        <li class="list-item">
          ${obj.name}
        </li>`;
      listBreadCrumbs.innerHTML = addBreadCrumbs;
    }
    function randomShowCard() {
      const randomExc = randomExercise(allExerciseArray);
      writeCard(randomExc);
      activeElipse();
    }
    let switchSlider = setInterval(randomShowCard, 5000);
    sliderElipses.addEventListener('click', (e) => {
      const elem = <HTMLElement>e.target;
      if (elem.classList.contains('elipse')) {
        clearInterval(switchSlider);
        const randomExc = randomExercise(allExerciseArray);
        writeCard(randomExc);
        for (let j = 0; j < elipseArray.length; j++) {
          elipseArray[j].style.background = '#767676';
        }
        elem.style.background = changeColorInput.value;
        i = Number(elem.id) + 1;
        switchSlider = setInterval(randomShowCard, 5000);
      }
    });
    function updateUrl(query: string, params: string) {
      const url = new URL(location.href);
      url.searchParams.set(query, params);
      if (!params) url.searchParams.delete(query);
      history.replaceState({}, '', url);
    }
    function showCardExercise(array: DataExercise[], id: number) {
      for (let j = 0; j < array.length; j++) {
        if (array[j].id === id) {
          writeCard(array[j]);
          updateUrl('exercise', array[j].name);
        }
      }
    }
    const arrayItemBtn: HTMLElement[] = Array.from(document.querySelectorAll('.item-btn'));
    function itemActive(elem: HTMLElement, color: string) {
      for (let j = 0; j < arrayItemBtn.length; j++) {
        arrayItemBtn[j].style.background = '';
        arrayItemBtn[j].style.color = '#000000';
        arrayItemBtn[j].classList.remove('active-item');
      }
      elem.classList.add('active-item');
      elem.style.background = color;
      elem.style.color = '#FFFFFF';
    }
    const fitSliderWrap = <HTMLElement>$('.fit-slider-wrapper');
    const blockLight = <HTMLElement>$('.light');
    blockLight.addEventListener('click', (e) => {
      const elem = <HTMLElement>e.target;
      sliderElipses.style.display = 'none';
      clearInterval(switchSlider);
      showCardExercise(dataExerciseLight, Number(elem.id));
      itemActive(elem, changeColorInput.value);
      fitSliderWrap.scrollIntoView({ behavior: 'smooth' });
    });
    blockLight.onmouseover = function (e) {
      const elem = <HTMLElement>e.target;
      elem.style.background = changeColorInput.value;
      elem.style.color = '#FFFFFF';
    };
    blockLight.onmouseout = function (e) {
      const elem = <HTMLElement>e.target;
      if (elem.classList.contains('active-item')) {
        elem.style.background = changeColorInput.value;
        elem.style.color = '#FFFFFF';
      } else {
        elem.style.background = '';
        elem.style.color = '#000000';
      }
    };
    const blockModerate = <HTMLElement>$('.moderate');
    blockModerate.addEventListener('click', (e) => {
      const elem = <HTMLElement>e.target;
      sliderElipses.style.display = 'none';
      clearInterval(switchSlider);
      showCardExercise(dataExerciseModerate, Number(elem.id));
      itemActive(elem, changeColorInput.value);
      fitSliderWrap.scrollIntoView({ behavior: 'smooth' });
    });
    blockModerate.onmouseover = function (e) {
      const elem = <HTMLElement>e.target;
      elem.style.background = changeColorInput.value;
      elem.style.color = '#FFFFFF';
    };
    blockModerate.onmouseout = function (e) {
      const elem = <HTMLElement>e.target;
      if (elem.classList.contains('active-item')) {
        elem.style.background = changeColorInput.value;
        elem.style.color = '#FFFFFF';
      } else {
        elem.style.background = '';
        elem.style.color = '#000000';
      }
    };
    const blockStrenuous = <HTMLElement>$('.strenuous');
    blockStrenuous.addEventListener('click', (e) => {
      const elem = <HTMLElement>e.target;
      sliderElipses.style.display = 'none';
      clearInterval(switchSlider);
      showCardExercise(dataExerciseStrenuous, Number(elem.id));
      itemActive(elem, changeColorInput.value);
      fitSliderWrap.scrollIntoView({ behavior: 'smooth' });
    });
    blockStrenuous.onmouseover = function (e) {
      const elem = <HTMLElement>e.target;
      elem.style.background = changeColorInput.value;
      elem.style.color = '#FFFFFF';
    };
    blockStrenuous.onmouseout = function (e) {
      const elem = <HTMLElement>e.target;
      if (elem.classList.contains('active-item')) {
        elem.style.background = changeColorInput.value;
        elem.style.color = '#FFFFFF';
      } else {
        elem.style.background = '';
        elem.style.color = '#000000';
      }
    };
    const inputSearch = <HTMLInputElement>$('.input-fit-search');
    const notFound = <HTMLElement>$('.not-found');
    function searchExercise(data: DataExercise[]) {
      inputSearch.addEventListener('change', () => {
        notFound.style.display = 'block';
        for (let j = 0; j < data.length; j++) {
          if (inputSearch.value.toLocaleLowerCase() === data[j].name.toLowerCase()) {
            sliderElipses.style.display = 'none';
            clearInterval(switchSlider);
            writeCard(data[j]);
            notFound.style.display = 'none';
            for (let o = 0; o < arrayItemBtn.length; o++) {
              arrayItemBtn[o].classList.remove('active-item');
              arrayItemBtn[o].style.background = '';
              arrayItemBtn[o].style.color = '#000000';
              if (arrayItemBtn[o].innerHTML === data[j].name) {
                arrayItemBtn[o].classList.add('active-item');
                arrayItemBtn[o].style.background = changeColorInput.value;
                arrayItemBtn[o].style.color = '#FFFFFF';
              }
            }
            updateUrl('exercise', data[j].name);
          }
        }
      });
    }
    const arrInputRadio: HTMLInputElement[] = Array.from(document.querySelectorAll('.input-radio'));
    const dataListInputSearch = <HTMLElement>document.getElementById('search-fitness');
    for (let j = 0; j < arrInputRadio.length; j++) {
      arrInputRadio[j].addEventListener('change', () => {
        if (arrInputRadio[j].id === 'searchLight') {
          dataListInputSearch.innerHTML = `${dataExerciseLight.map((e) => `<option value="${e.name}">`).join('')}`;
        } else if (arrInputRadio[j].id === 'searchModerate') {
          dataListInputSearch.innerHTML = `${dataExerciseModerate.map((e) => `<option value="${e.name}">`).join('')}`;
        } else if (arrInputRadio[j].id === 'searchStrenuous') {
          dataListInputSearch.innerHTML = `${dataExerciseStrenuous.map((e) => `<option value="${e.name}">`).join('')}`;
        } else {
          dataListInputSearch.innerHTML = `${allExerciseArray.map((e) => `<option value="${e.name}">`).join('')}`;
        }
      });
    }
    searchExercise(allExerciseArray);
    const sortByQueryParams = () => {
      const getAllQueryParams = (url: string) => {
        const paramArr = url.slice(url.indexOf('?') + 1).split('&');
        const params: { [index: string]: string } = {};
        paramArr.map((param) => {
          const [key, val] = param.split('=');
          params[key] = decodeURIComponent(val);
        });
        return params;
      };
      const params = getAllQueryParams(location.search);
      for (const key in params) {
        if (key === 'exercise') {
          for (let j = 0; j < allExerciseArray.length; j++) {
            if (params[key].split('+').join(' ') === allExerciseArray[j].name) {
              sliderElipses.style.display = 'none';
              clearInterval(switchSlider);
              writeCard(allExerciseArray[j]);
              notFound.style.display = 'none';
              fitSliderWrap.scrollIntoView({ behavior: 'smooth' });
              for (let o = 0; o < arrayItemBtn.length; o++) {
                if (arrayItemBtn[o].innerHTML === params[key].split('+').join(' ')) {
                  arrayItemBtn[o].style.background = changeColorInput.value;
                  arrayItemBtn[o].style.color = '#FFFFFF';
                  arrayItemBtn[o].classList.add('active-item');
                }
              }
              break;
            } else {
              notFound.style.display = 'block';
            }
          }
        }
      }
      const handleLocation = () => {
        window.addEventListener('popstate', handleLocation);
        window.addEventListener('DOMContentLoaded', handleLocation);
      };
      handleLocation();
    };
    sortByQueryParams();
  }
}

export { Fitness };
