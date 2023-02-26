import { $, getFromLocalStorage } from '../utils/helpers';
import apiServer from '../api/apiServer';
import { IResponsePost } from '../utils/types';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

class PostItem {
  async render() {
    const postsContainer = <HTMLElement>$('.list-posts');
    const cuurentUserName = getFromLocalStorage('user');
    const posts = await apiServer.getPosts();
    posts.reverse();

    posts.forEach(({ post, user }: IResponsePost) => {
      const postCreateDate = formatDistanceToNowStrict(new Date(post.createdDate), { addSuffix: true });
      const iconPost = post.icon
        ? `<div class="info-posts__icon"><img src="${post.icon}" alt="icon for post" class="info-posts__img"></div>`
        : '';
      const iconUser = user.avatar || './img/user/avatar-default.png';
      const removeBtn =
        cuurentUserName.username === user.username
          ? `<i style='color:#333' class="fa fa-trash" aria-hidden="true"></i>`
          : '';

      postsContainer.innerHTML += `
      <div class="list-posts__item item-posts">
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
      </div>`;
    });
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
