import { $, getTokenStorage } from '../../utils/helpers';
import userPopup from './userPopupAvatar';
import apiServer from '../../api/apiServer';

class UserAvatar {
  render(link?: string) {
    const iconContainer = <HTMLElement>$('.left-user__icon');
    const iconSrc = link || localStorage.getItem('avatar') || './img/user/avatar-default.png';

    iconContainer.innerHTML = `
    <div class="left-user__icon-container">
    <img src="${iconSrc}" alt="user icon" class="left-user__img">
    </div>`;

    this.eventListeners();
  }

  eventListeners() {
    const avatarImg = <HTMLElement>$('.left-user__icon-container');

    avatarImg.addEventListener('click', () => {
      userPopup.render();
    });
  }

  updateUserAvatar(avatarLink: string) {
    const token = getTokenStorage();

    apiServer.updateUserAvatar(avatarLink, token);
  }
}

const userAvatar = new UserAvatar();

export default userAvatar;
