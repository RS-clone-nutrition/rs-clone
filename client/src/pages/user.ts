import WeightHistory from '../components/weightHistory';
import { IUser } from '../utils/types';
import format from 'date-fns/format';
import weightGraph from '../components/weightGraph';

class User {
  main;

  weightHistory;

  constructor(main: Element) {
    this.main = main;
    this.weightHistory = new WeightHistory();
  }

  render() {
    const user = <string>localStorage.getItem('user');
    const userObj = <IUser>JSON.parse(user);

    this.main.innerHTML = `
    <div class="user__main main-user">
    <div class="main-user__content">
      <div class="main-user__left left-user">
        <div class="left-user__icon">
          <img src="./img/user/user-default.jpg" alt="user icon" class="left-user__img">
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

    weightGraph.render(userObj);
    this.weightHistory.render(userObj);
  }
}

export default User;
