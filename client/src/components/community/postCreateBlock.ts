import apiServer from '../../api/apiServer';
import { getTokenStorage, $ } from '../../utils/helpers';
import userPopupAvatar from '../user/userPopupAvatar';
import { IUser } from '../../utils/types';
import postItemBlock from './postItemBlock';

class PostCreate {
  icon: string;

  currentUser: IUser;

  render(user: IUser) {
    const createPostContainer = <HTMLElement>$('.field-posts');
    this.currentUser = user;
    const iconUser = user.avatar || './img/user/avatar-default.png';

    createPostContainer.innerHTML = ` 
    <div class="field-posts__icon">
    <img src="${iconUser}" alt="user photo" class="field-posts__img">
  </div>
  <textarea class="field-posts__input" type="text" placeholder="Anything new?"></textarea>
  <img src="./img/user/camera.svg" alt="user photo" class="field-posts__icon-button">
  <button class="field-posts__button">Create Post</button>
`;

    this.eventListeners();
    this.changeColor();
  }

  eventListeners() {
    const createPostBtn = <HTMLElement>$('.field-posts__button');
    const addIconBtn = <HTMLElement>$('.field-posts__icon-button');

    createPostBtn.addEventListener('click', () => this.sendPost());
    addIconBtn.addEventListener('click', () => userPopupAvatar.render());
  }

  async sendPost() {
    const text = <string>(<HTMLTextAreaElement>$('.field-posts__input')).value;
    const token = getTokenStorage();

    if (text) {
      const response = this.icon
        ? await apiServer.sendPostServer({ text, icon: this.icon }, token)
        : await apiServer.sendPostServer({ text }, token);
      const post = response?.result;

      postItemBlock.render(this.currentUser, post);
      this.render(this.currentUser);
      return response;
    } else {
      alert('Please fill post field');
    }
  }

  addIconLink(iconLink: string) {
    const addIconBtn = <HTMLImageElement>$('.field-posts__icon-button');
    addIconBtn.src = './img/community/check.svg';
    this.icon = iconLink;
  }

  changeColor() {
    const changeColorInput = <HTMLInputElement>document.querySelector('.change_color_input');
    const colorLocalStr = localStorage.getItem('color');
    const btncColr = <HTMLElement>$('.field-posts__button');
    if (colorLocalStr) {
      changeColorInput.value = colorLocalStr;
    }
    btncColr.style.background = changeColorInput.value;
    changeColorInput.addEventListener('change', () => {
      btncColr.style.background = changeColorInput.value;
    });
  }
}

export default new PostCreate();
