class User {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    const user = <string>localStorage.getItem('user');
    const userObj = JSON.parse(user);
    const toGoWeight = userObj.weight > userObj.goal ? userObj.weight - userObj.goal : userObj.goal - userObj.weight;
    console.log(userObj);

    this.main.innerHTML = `
    <div class="user__main main-user">
    <div class="main-user__content">
      <div class="main-user__left left-user">
        <div class="left-user__icon">
          <img src="./img/user/user-default.jpg" alt="user icon" class="left-user__img">
        </div>
        <h1 class="left-user__name">${userObj.username}</h1>
        <p class="left-user__date">${userObj.age} years old</p>
      </div>
      <div class="main-user__right right-user">
        <div class="right-user__info info-user">
          <h2 class="info-user__title-main">Weight history:</h2>
          <div class="info-user__block current">
            <h3 class="info-user__title current__title">Current Weight:</h3>
            <div class="info-user__number  current__number">${userObj.weight} kg</div>
          </div>
          <div class="info-user__block  goal">
            <h3 class="info-user__title goal__title">Goal Weight:</h3>
            <div class="info-user__number goal__number">${userObj.goal} kg</div>
          </div>
          <div class="info-user__block  still">
            <h3 class="info-user__title still__title">Still To Go:</h3>
            <div class="info-user__number  still__number"> ${toGoWeight} kg</div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
  }
}

export default User;
