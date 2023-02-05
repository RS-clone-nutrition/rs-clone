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

          <input type="radio" id="whereSearch4" name="fitness" value="all">
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
          <ul class="slider-list">
            <li class="lider-list-item">5 Minutes</li>
            <li class="lider-list-item">10 Minutes</li>
            <li class="lider-list-item">15 Minutes</li>
            <li class="lider-list-item">30 Minutes</li>
          </ul>
          <ul class="slider-list">
            <li class="lider-list-item">6 calories</li>
            <li class="lider-list-item">11 calories</li>
            <li class="lider-list-item">17 calories</li>
            <li class="lider-list-item">34 calories</li>
          </ul>
          <ul class="slider-list">
            <li class="lider-list-item">1 Hour</li>
            <li class="lider-list-item">2 Hour</li>
            <li class="lider-list-item">3 Hour</li>
            <li class="lider-list-item">4 Hour</li>
          </ul>
          <ul class="slider-list">
            <li class="lider-list-item">69 calories</li>
            <li class="lider-list-item">137 calories</li>
            <li class="lider-list-item">206 calories</li>
            <li class="lider-list-item">274 calories</li>
          </ul>
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
    </div>
  </div>`;
  }
}

export { Fitness };
