import apiServer from '../api/apiServer';
import { $, $All, getPercentFromNum } from '../utils/helpers';
import { IResponseUser, IActivity, IUser } from '../utils/types';
import weightGraph from './weightGraph';
import bioTextArea from './bioTextarea';

class WeightHistory {
  main: HTMLElement;

  activity: IActivity = {
    low: 1.375,
    average: 1.55,
    high: 1.7,
  };

  render(userObj: IUser) {
    console.log(userObj.weight.length);
    const userCurrentWeight = userObj.weight[userObj.weight.length - 1];
    const toGoWeight = userObj.aim === 'lose' ? +userCurrentWeight - +userObj.goal : +userObj.goal - +userCurrentWeight;
    this.main = <HTMLElement>$('.right-user');

    this.main.innerHTML = `
    <div class="right-user__calories calories-user">
    <h2 class="calories-user__title">Daily calorie intake</h2>
    <div class="calories-user__block maintaining">
      <h3 class="calories-user__title title-maintaining">Maintaining your current weight:</h3>
      <p class="calories-user__number number-maintaining"></p>
    </div>
    <div class="calories-user__block smoothly">
      <h3 class="calories-user__title title-smoothly">
        Achieve your aim smoothly:</h3>
      <p class="calories-user__number number-smoothly"></p>
    </div>
    <div class="calories-user__block quickly">
      <h3 class="calories-user__title title-quickly">
        Achieve your aim quickly:
      </h3>
      <p class="calories-user__number number-quickly"></p>
    </div>
    <div class="calories-user__block extremely">
      <h3 class="calories-user__title title-extremely">Achieve your aim extremely fast:</h3>
      <p class="calories-user__number number-extremely"></p>
    </div>
  </div>

      <div class="right-user__info info-user">
        <h2 class="info-user__title-main">Weight history:</h2>
        <div class="info-user__block aim">
        <h3 class="info-user__title aim__title">Choose your aim weight:</h3>
        <input class="radio__choice" type="radio" id="aimChoice1" name="aim" checked value="lose">
        <label for="aimChoice1">Lose</label>
        <input class="radio__choice" type="radio" id="aimChoice2" name="aim" value="gain">
        <label for="aimChoice2">Gain</label>
        </div>
        <div class="info-user__block activity">
        <h3 class="info-user__title activity__title">Choose your activity level:</h3>
        <input class="radio__choice" type="radio" id="activityChoice1" name="activity" checked value="low">
        <label for="activityChoice1">Low</label>
        <input class="radio__choice" type="radio" id="activityChoice2" name="activity" value="average ">
        <label for="activityChoice2">Average </label>
        <input class="radio__choice" type="radio" id="activityChoice3" name="activity" value="high">
        <label for="activityChoice3">High</label>
        </div>
        <div class="info-user__block current">
          <h3 class="info-user__title current__title">Current Weight:</h3>
          <input class="info-user__input input-current" type="text" 
          value="${userCurrentWeight}" name="weight"><span> kg</span>
        </div>
        <div class="info-user__block  goal">
          <h3 class="info-user__title goal__title">Goal Weight:</h3>
          <input class="info-user__input input-goal" type="text" value="${userObj.goal}" name="goal"><span> kg</span>
        </div>
        <div class="info-user__block  still">
          <h3 class="info-user__title still__title">Still To Go:</h3>
          <div class="info-user__number  still__number"> ${toGoWeight} kg</div>
        </div>
      <button class="button button-save">Save</button>
      </div>
      `;

    this.eventListeners();
    this.changeCalories(userObj);
    this.addAtributes(userObj);
    weightGraph.render(userObj);
    bioTextArea.render(userObj);
  }

  eventListeners() {
    const saveBtn = <HTMLButtonElement>$('.button-save');

    saveBtn.addEventListener('click', () => {
      console.log('br');
      this.sendToServer();
    });
  }

  async sendToServer() {
    const user = this.getAllfields();

    const serverRsponse = <IResponseUser>await apiServer.updateUserServer(user);
    const userObj = <IUser>serverRsponse.response.user;

    localStorage.setItem('user', JSON.stringify(userObj));

    this.render(userObj);
    this.changeCalories(userObj);
    weightGraph.render(userObj);
  }

  getAllfields() {
    const inputs = <NodeListOf<HTMLInputElement>>$All('input', this.main);
    const user: IUser = {};

    const inputAim = <HTMLInputElement>$('input[name="aim"]:checked');
    user[inputAim.name] = inputAim.value;
    const inputActivity = <HTMLInputElement>$('input[name="activity"]:checked');
    user[inputActivity.name] = inputActivity.value;
    const name = <HTMLElement>$('.left-user__name');
    user.username = <string>name.textContent;

    inputs.forEach((item) => {
      const key = <string>item.getAttribute('name');

      if (key === 'gender' || key === 'aim' || key === 'activity') {
        return;
      }

      const value = <string>item.value;
      user[key] = value;
    });

    return user;
  }

  changeCalories(userObj: IUser) {
    const maintainingBlock = <HTMLElement>$('.number-maintaining');
    const smoothlyBlock = <HTMLElement>$('.number-smoothly');
    const quicklyBlock = <HTMLElement>$('.number-quickly');
    const extremelyBlock = <HTMLElement>$('.number-extremely');

    const activityLevel = <keyof IActivity>(<HTMLInputElement>$('input[name="activity"]:checked')).value;
    const activityNumb = <number>this.activity[activityLevel];
    const userWeight = userObj.weight[userObj.date.length - 1];

    const maintainingNumber =
      userObj.gender === 'male'
        ? Math.floor((66.5 + 13.75 * +userWeight + 5.003 * +userObj.height - 6.775 * +userObj.age) * activityNumb)
        : Math.floor((655.1 + 9.563 * +userWeight + 1.85 * +userObj.height - 4.676 * +userObj.age) * activityNumb);

    maintainingBlock.textContent = String(maintainingNumber);
    smoothlyBlock.textContent = String(getPercentFromNum(maintainingNumber, 15, userObj.aim));
    quicklyBlock.textContent = String(getPercentFromNum(maintainingNumber, 25, userObj.aim));
    extremelyBlock.textContent = String(getPercentFromNum(maintainingNumber, 35, userObj.aim));
  }

  addAtributes(userObj: IUser) {
    const inputAim = <HTMLInputElement>$(`input[value="${userObj.aim}"]`);
    const inputActivity = <HTMLInputElement>$(`input[value="${userObj.activity}"]`);

    inputAim.setAttribute('checked', 'checked');
    inputActivity.setAttribute('checked', 'checked');
  }
}

export default WeightHistory;
