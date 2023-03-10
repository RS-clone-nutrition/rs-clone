import { $, getTokenStorage } from '../../utils/helpers';
import apiServer from '../../api/apiServer';
import { IUser, IResponseUser } from '../../utils/types';

class BioTextArea {
  main: HTMLElement;

  bio: string;

  render(userObj: IUser) {
    this.main = <HTMLElement>$('.user-bio');
    this.bio = userObj.bio === undefined ? 'Tell about yourself' : userObj.bio;
    const button = userObj.owner ? '<button class="update-btn">Update your BIO</button>' : '';

    this.main.innerHTML = `
    <p class="user__bio">Bio: ${this.bio}</p>
    ${button}
    `;

    if (userObj.owner) {
      this.eventListeners();
    }
  }

  eventListeners() {
    const saveBtn = <HTMLElement>$('.update-btn');
    this.changeColor(saveBtn);

    saveBtn.addEventListener('click', () => {
      this.updateBio();
    });
  }

  updateBio() {
    this.main.innerHTML = `
      <div class="textarea__container">
      <label class="user-bio__title" for="story">Update your bio:</label>
      <textarea class="user-bio__field" id="story" name="story" rows="5" cols="33">${this.bio}</textarea>
    </div>
    <button class="textarea__btn">UPDATE</button>
      `;

    const saveBtn = <HTMLElement>$('.textarea__btn');
    this.changeColor(saveBtn);

    saveBtn.addEventListener('click', () => {
      this.sendBioServer();
    });
  }

  async sendBioServer() {
    const textarea = <string>(<HTMLTextAreaElement>$('.user-bio__field')).value;
    const user = <IUser>JSON.parse(<string>localStorage.getItem('user'));
    user.bio = textarea;

    const token = getTokenStorage();

    const serverRsponse = <IResponseUser>await apiServer.updateUserServer(user, token);
    const userObj = <IUser>serverRsponse.response.user;

    localStorage.setItem('user', JSON.stringify(userObj));
    this.render(userObj);
  }

  changeColor(btn: HTMLElement) {
    const changeColorInput = <HTMLInputElement>document.querySelector('.change_color_input');
    const colorLocalStr = localStorage.getItem('color');
    if (colorLocalStr) {
      changeColorInput.value = colorLocalStr;
    }
    btn.style.background = changeColorInput.value;
    changeColorInput.addEventListener('change', () => {
      btn.style.background = changeColorInput.value;
    });
  }
}

const bioTextArea = new BioTextArea();

export default bioTextArea;
