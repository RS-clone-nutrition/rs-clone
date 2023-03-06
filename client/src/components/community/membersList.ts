import apiServer from '../../api/apiServer';
import { $ } from '../../utils/helpers';
import { getTokenStorage } from '../../utils/helpers';
import { IUser } from '../../utils/types';
import { createPath } from '../../utils/helpers';
import router from '../../router';
class MembersList {
  currentUser: IUser;

  async render(currentUser: IUser) {
    this.currentUser = currentUser;

    const membersList = <HTMLElement>$('.members-community__list');
    const members = await this.sendRequest();

    members.forEach((user: IUser) => {
      const iconUser = user.avatar || './img/user/avatar-default.png';

      membersList.innerHTML += `
      <li class="members-community__item item-members" id="${user._id}">
      <p class="item-members__name blue"> ${user.username}</p>
      <div class="item-members__icon">
        <img src="${iconUser}" alt="" class="item-members__img">
      </div>
      </li>
  `;
    });

    this.eventListenrs();
  }

  eventListenrs() {
    const membersList = <HTMLElement>$('.members-community__list');

    membersList.addEventListener('click', (e) => {
      const elem = <HTMLLinkElement>e.target;
      const name = <string>elem.closest('.item-members')?.getAttribute('id');

      const link = `/user/${createPath(name)}`;
      router.route(e, link);
    });
  }

  async sendRequest() {
    const token = getTokenStorage();
    const users = await apiServer.getUsers(token);
    return users;
  }
}

export default new MembersList();
