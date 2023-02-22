import { $ } from '../utils/helpers';
import userPopup from './userPopup';
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
}

const userAvatar = new UserAvatar();

export default userAvatar;
