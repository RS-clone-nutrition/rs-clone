import { IComment } from '../utils/types';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import apiServer from '../api/apiServer';
import { getTokenStorage } from '../utils/helpers';

class PostItem {
  async render(comment: IComment) {
    const commentCreateDate = formatDistanceToNowStrict(new Date(comment.createdDate), { addSuffix: true });
    const token = getTokenStorage();
    const user = await apiServer.getUser(comment.user, token);
    const avatar = user.avatar || './img/user/avatar-default.png';

    return `
    <li class="list-comments__item item-comments">
      <div class="item-comments__icon">
        <img src="${avatar}" alt="commetn user photo" class="item-comments__img">
      </div>
      <div class="item-comments__info">
        <div class="item-comments__info-main">
          <h3 class="item-comments__name blue">${user.username}</h3>
          <p class="item-comments__text">${comment.text}</p>
        </div>
        <p class="item-comments__text-time">${commentCreateDate}</p>
      </div>
    </li>
    `;
  }
}

export default new PostItem();
