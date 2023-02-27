import { $, $All, getFromLocalStorage, getTokenStorage } from '../utils/helpers';
import apiServer from '../api/apiServer';
import { IPost, IResponsePost, IUser } from '../utils/types';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import postComment from './postComment';
import commentCreateBlock from './commentCreateBlock';

class PostItem {
  currentUser: IUser;

  posts: [{ post: IPost; user: IUser }];

  async render(currentUser: IUser) {
    this.currentUser = currentUser;
    const postsContainer = <HTMLElement>$('.list-posts');
    postsContainer.innerHTML = '';
    const cuurentUserName = getFromLocalStorage('user');
    const posts = await apiServer.getPosts();
    this.posts = posts;
    // posts.reverse();

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

      if (post.comments && post.comments.length > 0) {
        const postItem = <HTMLElement>$('.item-posts');
        postComment.render(post.comments, this.currentUser, postItem);
      }
      commentCreateBlock.render(this.currentUser, post);
    });

    this.eventlisteners();
  }

  eventlisteners() {
    const deletesPostsBtns = $All('.item-post__deletebtn');
    const commentsAmout = $All('.comments-posts__header');

    deletesPostsBtns.forEach((item) => {
      item.addEventListener('click', (e) => {
        this.deletePost(<HTMLElement>e.target);
      });
    });

    commentsAmout.forEach((item) => {
      const postContainer = <HTMLElement>item.closest('.item-posts');
      const id = <string>postContainer?.getAttribute('id');
      const obj = this.posts.find((i) => i.post._id === id);

      if (obj) {
        item.addEventListener('click', () => {
          if (obj.post.comments) {
            postComment.render(obj.post.comments, this.currentUser, postContainer, true);
          }
        });
      }
    });
  }

  async deletePost(button: HTMLElement) {
    const postForDelete = <HTMLElement>button.closest('.item-posts');
    const idPost = <string>postForDelete.getAttribute('id');
    const token = getTokenStorage();

    postForDelete.remove();

    const response = await apiServer.deletePost(idPost, token);
    console.log(response);
  }
}

export default new PostItem();

// <div class="item-posts__comments comments-posts">
//   <div class="comments-posts__header">
//     <p class="comments-posts__amount blue">5 comments</p>
//     <p class="comments-posts__likes">44 Likes</p>
//     <img class="comments-posts__button-like" src="./img/heart-like.png" alt="">
//   </div>
//   <ul class="comments-posts__list list-comments">
//     <li class="list-comments__item item-comments">
//       <div class="item-comments__icon">
//         <img src="./img/sleeping.png" alt="commetn user photo" class="item-comments__img">
//       </div>
//       <div class="item-comments__info">
//         <div class="item-comments__info-main">
//           <h3 class="item-comments__name blue">Petya</h3>
//           <p class="item-comments__text">I like this picture</p>
//         </div>
//         <p class="item-comments__text-time">3 hours ago</p>
//       </div>
//     </li>
//     <li class="list-comments__item item-comments">
//       <div class="item-comments__icon">
//         <img src="./img/sleeping.png" alt="commetn user photo" class="item-comments__img">
//       </div>
//       <div class="item-comments__info">
//         <div class="item-comments__info-main">
//           <h3 class="item-comments__name blue">Petya</h3>
//           <p class="item-comments__text">I like this picture</p>
//         </div>
//         <p class="item-comments__text-time">3 hours ago</p>
//       </div>
//     </li>
//   </ul>
//   <div class="comments-posts__field field-comments">
//     <div class="field-comments__icon">
//       <img src="./img/sleeping.png" alt="commetn user photo" class="field-comments__img">
//     </div>
//     <textarea class="field-comments__input" type="text" placeholder="Write comment"></textarea>
//   </div>
// </div>
