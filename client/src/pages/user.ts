import WeightHistory from '../components/user/weightHistory';
import format from 'date-fns/format';
import weightGraph from '../components/user/weightGraph';
import userAvatar from '../components/user/userAvatar';
import apiServer from '../api/apiServer';

class User {
  main;

  weightHistory;

  constructor(main: Element) {
    this.main = main;
    this.weightHistory = new WeightHistory();
  }

  async render() {
    const userObj = await this.getUser();

    if (!userObj || userObj === 'undefined') {
      alert('Error: please re-login. Sorry for the inconvenience');
      return;
    }

    this.main.innerHTML = `
    <div class="user__main main-user">
    <div class="main-user__content">
      <div class="main-user__left left-user">
        <div class="left-user__container">
          <div class="left-user__icon">
        
          </div>
        </div>
        <h1 class="left-user__name">${userObj.username}</h1>
        <p class="left-user__date">${userObj.age} years old</p>
        <p class="left-user__date">Joined: ${format(new Date(userObj.date[0]), 'd MMMM y')}</p>
        <div class="left-user__bio user-bio">

        </div>
      </div>
      <div class="main-user__right right-user">
    </div>
    </div>
    <div class="canvas">
    </div>
  </div>
    `;

    userAvatar.render(userObj.avatar);
    weightGraph.render(userObj);
    this.weightHistory.render(userObj);
    this.changeColor();
  }

  async getUser() {
    let user = <string>localStorage.getItem('user');

    if (!user || user === 'undefined') {
      const token = JSON.parse(<string>localStorage.getItem('token'));
      const response = await apiServer.getCurrentUser(token);

      user = response[0];

      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }

    return JSON.parse(user);
  }

  changeColor() {
    const changeColorInput = <HTMLInputElement>document.querySelector('.change_color_input');
    const colorLocalStr = localStorage.getItem('color');
    const borderColor = <HTMLElement>document.querySelector('.main-user__content');
    const btnSave = <HTMLElement>document.querySelector('.button-save');
    const btnUpdate = <HTMLElement>document.querySelector('.update-btn');
    //const btnText = <HTMLElement>document.querySelector('.textarea__btn');
    if (colorLocalStr) {
      changeColorInput.value = colorLocalStr;
    }
    btnSave.style.background = changeColorInput.value;
    borderColor.style.borderColor = changeColorInput.value;
    btnUpdate.style.background = changeColorInput.value;
    //btnText.style.background = changeColorInput.value;
    changeColorInput.addEventListener('change', () => {
      btnSave.style.background = changeColorInput.value;
      borderColor.style.borderColor = changeColorInput.value;
      btnUpdate.style.background = changeColorInput.value;
      //btnText.style.background = changeColorInput.value;
    });
  }
}

export { User };
