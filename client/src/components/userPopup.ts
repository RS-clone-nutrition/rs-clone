import { $ } from '../utils/helpers';
import apiServer from '../api/apiServer';
import userAvatar from './userAvatar';

class UserPopup {
  popupBlock: HTMLElement;

  render() {
    const popup = document.createElement('div');
    popup.classList.add('popup-avatar');
    this.popupBlock = popup;

    popup.innerHTML = `
    <div class="popup-avatar__body">
      <div class="popup-avatar__content">
        <div class="popup-avatar__header">
          <h3 class="popup-avatar__title">Uploading a new photo</h3>
          <img class="popup-avatr__close" src="./img/myfatsecret/exit-button.svg" alt="close icon">
        </div>
        <div class="popup-avatar__form-container">
          <form class="popup__form-avatar" method="post" enctype="multipart/form-data">
            <div class="avatar-form__input-container">
              <label class="avatar-form__label" for="file">
                It will be easier for people to recognize you if you upload your real photo.
                You can upload an image in JPG, GIF or PNG format.
              </label>
              <input class="avatar-form__input" type="file" id="file" name="avatar" multiple>
            </div>
            <div>
          </form>
          <button class="avatar-form__button avatar-button">Upload</button>
        </div>
      </div>
      <p class="popup-avatar__footer">
        If you're having trouble uploading, try choosing a smaller photo size.
      </p>
    </div>
  </div>
    `;

    document.body.append(popup);

    this.eventListeners();
  }

  eventListeners() {
    document.body.addEventListener('mousedown', (e) => {
      const targetElem = <HTMLElement>e.target;

      if (targetElem.closest('.popup-avatar__content')) {
        return;
      }
      this.popupBlock.remove();
    });

    const formAvatar = <HTMLFormElement>$('.popup__form-avatar');
    const closePopup = <HTMLElement>$('.popup-avatr__close');

    this.addRemoveEvent(closePopup, 'click');

    formAvatar.addEventListener('submit', (e) => {
      e.preventDefault();
      this.sendAvatar(formAvatar);
    });
  }

  addRemoveEvent(block: HTMLElement, event: string) {
    block.addEventListener(event, () => {
      this.popupBlock.remove();
    });
  }

  async sendAvatar(formAvatar: HTMLFormElement) {
    const result = await apiServer.sendAvatar(new FormData(formAvatar));

    userAvatar.updateUserAvatar(result.secure_url);
    localStorage.setItem('avatar', result.secure_url);

    userAvatar.render(result.secure_url);
    this.popupBlock.remove();
  }
}

const userPopup = new UserPopup();

export default userPopup;
