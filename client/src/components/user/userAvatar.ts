import { $ } from '../../utils/helpers';
import userPopup from './userPopupAvatar';
import apiServer from '../../api/apiServer';

class UserAvatar {
  render(link?: string) {
    const iconContainer = <HTMLElement>$('.left-user__icon');
    const iconSrc = link || localStorage.getItem('avatar') || './img/user/avatar-default.png';

    iconContainer.innerHTML = `
    <img src="${iconSrc}" alt="user icon" class="left-user__img">`;

    this.eventListeners(iconContainer);
  }

  eventListeners(iconContainer: HTMLElement) {
    iconContainer.addEventListener('click', () => {
      userPopup.render();
    });
  }

  updateUserAvatar(avatarLink: string) {
    const token = <string>JSON.parse(<string>localStorage.getItem('token'));

    if (!token) {
      alert('Error: please re-login. Sorry for the inconvenience');
    }

    apiServer.updateUserAvatar(avatarLink, token);
  }
}

const userAvatar = new UserAvatar();

export default userAvatar;
