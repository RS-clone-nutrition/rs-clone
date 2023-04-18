import { $, getFromLocalStorage, getTokenStorage } from '../../utils/helpers';
import apiServer from '../../api/apiServer';
import { IPost, IResponsePost, IUser, IComment } from '../../utils/types';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import postComment from './postComment';
import commentCreateBlock from './commentCreateBlock';
import loader from '../loader';

class PostItem {
  currentUser: IUser;

  posts: [{ post: IPost; user: IUser }];

  async render(currentUser: IUser, postForAdd?: IPost) {
    this.currentUser = currentUser;
    const postsContainer = <HTMLElement>$('.list-posts');
    const cuurentUserName = getFromLocalStorage('user');

    loader.show(postsContainer);
    const posts = postForAdd ? [{ post: postForAdd, user: currentUser }] : await apiServer.getPosts();
    this.posts = posts;
    loader.remove(postsContainer);

    posts.forEach(async ({ post, user }: IResponsePost) => {
      const postCreateDate = formatDistanceToNowStrict(new Date(post.createdDate), { addSuffix: true });
      const iconPost = post.icon
        ? `<div class="info-posts__icon"><img src="${post.icon}" alt="icon for post" class="info-posts__img"></div>`
        : '';
      const iconUser = user.avatar || './img/user/avatar-default.png';
      const removeBtn =
        cuurentUserName.username === user.username
          ? `<i style='color:#333' class="fa fa-trash item-post__deletebtn" aria-hidden="true"></i>`
          : '';

      postsContainer.insertAdjacentHTML(
        'afterbegin',
        `
      <div class="list-posts__item item-posts" id="${post._id}">
        <div class="item-posts__header">
          <div class="item-posts__author">
            <div class="item-posts__icon">
              <img src="${iconUser}" alt="user photo" class="item-posts__img">
            </div>
            <h2 class="info-posts__name blue">${user.username}</h2>
      </div>
      ${removeBtn}
      </div>
    <div class="item-posts__info info-posts">
    <p class="info-posts__description">${post.text}</p>
      ${iconPost}
      
    <span class="info-posts__icon-time">${postCreateDate}</span>
    </div>
    <div class="item-posts__comments comments-posts">
  <div class="comments-posts__header">
    <p class="comments-posts__amount blue">0 comments</p>
    <i class="fa-solid fa-angle-down"></i>
  </div>
  <ul class="comments-posts__list list-comments">
  </ul>
  <div class="comments-posts__field field-comments">
    <div class="field-comments__icon">

  </div>
</div>

    </div>`
      );

      if (post.comments) {
        const postItem = <HTMLElement>$('.item-posts');
        if (post.comments && post.comments.length > 0) {
          postComment.render(post.comments, this.currentUser, postItem);
        }
        this.eventlisteners(post.comments, this.currentUser, postItem);
      }
      commentCreateBlock.render(this.currentUser, post);
    });
  }

  eventlisteners(commentsArr: [IComment], currentUser: IUser, postContainer: HTMLElement) {
    const deletesPostsBtn = <HTMLElement>$('.item-post__deletebtn', postContainer);
    const commentsAmout = <HTMLElement>$('.comments-posts__header', postContainer);

    if (deletesPostsBtn) {
      deletesPostsBtn.addEventListener('click', (e) => {
        this.deletePost(<HTMLElement>e.target);
      });
    }

    const commentsList = <HTMLElement>$('.list-comments', postContainer);

    commentsAmout.addEventListener('click', () => {
      postComment.clear(commentsList);
      postComment.render(commentsArr, currentUser, postContainer, true);
    });
  }

  async deletePost(button: HTMLElement) {
    const postForDelete = <HTMLElement>button.closest('.item-posts');
    const idPost = <string>postForDelete.getAttribute('id');
    const token = getTokenStorage();

    postForDelete.remove();

    await apiServer.deletePost(idPost, token);
  }

  clear() {
    const postsContainer = <HTMLElement>$('.list-posts');

    postsContainer.innerHTML = '';
  }
}

export default new PostItem();
