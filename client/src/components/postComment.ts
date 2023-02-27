import { IComment, IUser } from '../utils/types';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import apiServer from '../api/apiServer';
import { getTokenStorage } from '../utils/helpers';

class PostComment {
  async render(comment: IComment, currentUser: IUser) {
    const commentCreateDate = formatDistanceToNowStrict(new Date(comment.createdDate), { addSuffix: true });
    const token = getTokenStorage();
    const user = await apiServer.getUser(comment.user, token);
    const avatar = user.avatar || './img/user/avatar-default.png';

    return `
    <li class="list-comments__item item-comments" id="${comment._id}">
      <div class="item-comments__icon">
        <img src="${avatar}" alt="commetn user photo" class="item-comments__img">
      </div>
      <div class="item-comments__info">
        <div class="item-comments__info-main">
          <h3 class="item-comments__name blue">${user.username}</h3>
          <p class="item-comments__text">${comment.text}</p>
        <p class="item-comments__text-time">${commentCreateDate}</p>
        </div>
        ${this.addDeleteBtn(user.username, currentUser.username)}
      </div>
    </li>
    `;
  }

  // eventListeners() {
  //   const deleteCommentBtn = $All('.delete-comment');

  //   deleteCommentBtn.forEach((item) => {
  //     item.addEventListener('click', (e) => {
  //       this.deleteComment(<HTMLElement>e.target);
  //     });
  //   });
  // }

  async deleteComment(e: Event) {
    const button = <HTMLElement>e.target;
    const commentorDelete = <HTMLElement>button.closest('.item-comments');
    const idComment = <string>commentorDelete.getAttribute('id');
    const token = getTokenStorage();
    commentorDelete.remove();
    const response = await apiServer.deleteComment(idComment, token);
    console.log(response);
  }

  addDeleteBtn(userComment: string, currentUser: string) {
    const deleteBtn =
      userComment === currentUser
        ? `<i class="fa-sharp fa-solid fa-circle-xmark item-comment__deleteBtn" onclick="console.log(this).bind(PostComment)"></i>`
        : '';

    return deleteBtn;
  }
}

export default new PostComment();
