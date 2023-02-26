import apiServer from '../api/apiServer';
import { getTokenStorage, $ } from '../utils/helpers';
import userPopupAvatar from './user/userPopupAvatar';

class PostCreate {
  icon: string;

  render() {
    const createPostContainer = <HTMLElement>$('.field-posts');

    createPostContainer.innerHTML = ` 
    <div class="field-posts__icon">
    <img src="./img/sleeping.png" alt="user photo" class="field-posts__img">
  </div>
  <textarea class="field-posts__input" type="text" placeholder="Anything new?"></textarea>
  <img src="./img/user/camera.svg" alt="user photo" class="field-posts__icon-button">
  <button class="field-posts__button">Create Post</button>
`;

    this.eventListeners();
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
      console.log(response);
    } else {
      alert('Please fill post field');
    }
  }

  addIconLink(iconLink: string) {
    const addIconBtn = <HTMLImageElement>$('.field-posts__icon-button');
    addIconBtn.src = './img/community/check.svg';
    this.icon = iconLink;
  }
}

export default new PostCreate();
