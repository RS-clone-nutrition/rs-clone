import { IUser, IComment } from '../../utils/types';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import apiServer from '../../api/apiServer';
import { getTokenStorage, $, $All } from '../../utils/helpers';

class PostComment {
  async render(commentsArr: [IComment], currentUser: IUser, postContainer: HTMLElement, all?: boolean) {
    if (!commentsArr) {
      return;
    }

    const comments = all ? commentsArr : <[IComment]>commentsArr.slice(-3);
    const commentsContainer = <HTMLElement>$('.list-comments', postContainer);
    const token = getTokenStorage();

    for await (const comment of comments) {
      const commentCreateDate = formatDistanceToNowStrict(new Date(comment.createdDate), { addSuffix: true });
      const user = await apiServer.getUser(comment.user, token);
      const avatar = user.avatar || './img/user/avatar-default.png';
      const deleteBtn = this.addDeleteBtn(user.username, currentUser.username);

      commentsContainer.insertAdjacentHTML(
        'beforeend',
        `
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
          ${deleteBtn}
        </div>
      </li>
      `
      );
    }

    this.changeAmountComments(commentsArr, postContainer);
    this.eventListeners();
  }

  eventListeners() {
    const deleteCommentBtn = $All('.item-comment__deleteBtn');

    deleteCommentBtn.forEach((item) => {
      item.addEventListener('click', (e) => {
        this.deleteComment(e);
      });
    });
  }

  async deleteComment(e: Event) {
    const button = <HTMLElement>e.target;
    const postForDelete = <HTMLElement>button.closest('.item-posts');
    const idPost = <string>postForDelete.getAttribute('id');
    const commentForDelete = <HTMLElement>button.closest('.item-comments');
    const idComment = <string>commentForDelete.getAttribute('id');

    const token = getTokenStorage();
    commentForDelete.remove();

    const response = await apiServer.deleteComment(idComment, idPost, token);

    if (response?.result.post) {
      this.changeAmountComments(response.result.post.comments, postForDelete);
    }
  }

  addDeleteBtn(userComment: string, currentUser: string) {
    const deleteBtn =
      userComment === currentUser ? `<i class="fa-sharp fa-solid fa-circle-xmark item-comment__deleteBtn" ></i>` : '';

    return deleteBtn;
  }

  changeAmountComments(comments: [IComment], postBlock: HTMLElement) {
    const amountBlock = <HTMLElement>$('.comments-posts__amount', postBlock);
    const amount = <number>comments.length;
    amountBlock.innerHTML = amount === 1 ? `${amount} comments` : `${amount} comment`;
  }

  clear(commentsList: HTMLElement) {
    commentsList.innerHTML = '';
  }
}

export default new PostComment();
