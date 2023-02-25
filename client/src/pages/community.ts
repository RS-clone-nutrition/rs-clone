import { $ } from '../utils/helpers';
import postCreate from '../components/postCreate';
class Community {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    this.main.innerHTML = `
    <div class="community">
    <div class="community__container">
      <div class="crumbs">
        <a href="/" class="crumbs__link">
          <img class="crumbs__home-img" src="./img/home-icon.svg" alt="home icon">
        </a>
        <span class="crumbs__sep">></span>
        <a href="/recipes" class="crumbs__link">Community</a>
      </div>
      <div class="community__wrapper">
        <div class="community__posts posts-community">
          <div class="posts-community__field field-posts">
            ${postCreate.render()}
          </div>
          <h1 class="posts-community__title">Recent Activity</h1>
          <div class="posts-community__content">
            <div class="posts-community__list list-posts">
              <div class="list-posts__item item-posts">
                <div class="item-posts__author">
                  <div class="item-posts__icon">
                    <img src="./img/foods/camer.gif" alt="user photo" class="item-posts__img">
                  </div>
                  <div class="item-posts__info info-posts">
                    <h2 class="info-posts__name blue">Evgen</h2>
                    <p class="info-posts__description">Oven roasted Hardwood Smoked Turkey Sausage, baby carrots,
                      Brussels sprouts, onion, mini sweet peppers • EVOO, Everything Bagel seasoning, Spicy brown
                      mustard</p>
                    <div class="info-posts__icon">
                      <img src="./img/foods/avocado.png" alt="icon for post" class="info-posts__img">
                    </div>
                    <span class="info-posts__icon-time">5 hours ago</span>
                  </div>
                </div>
                <div class="item-posts__comments comments-posts">
                  <div class="comments-posts__header">
                    <p class="comments-posts__amount blue">5 comments</p>
                    <p class="comments-posts__likes">44 Likes</p>
                    <img class="comments-posts__button-like" src="./img/heart-like.png" alt="">
                  </div>
                  <ul class="comments-posts__list list-comments">
                    <li class="list-comments__item item-comments">
                      <div class="item-comments__icon">
                        <img src="./img/sleeping.png" alt="commetn user photo" class="item-comments__img">
                      </div>
                      <div class="item-comments__info">
                        <div class="item-comments__info-main">
                          <h3 class="item-comments__name blue">Petya</h3>
                          <p class="item-comments__text">I like this picture</p>
                        </div>
                        <p class="item-comments__text-time">3 hours ago</p>
                      </div>
                    </li>
                    <li class="list-comments__item item-comments">
                      <div class="item-comments__icon">
                        <img src="./img/sleeping.png" alt="commetn user photo" class="item-comments__img">
                      </div>
                      <div class="item-comments__info">
                        <div class="item-comments__info-main">
                          <h3 class="item-comments__name blue">Petya</h3>
                          <p class="item-comments__text">I like this picture</p>
                        </div>
                        <p class="item-comments__text-time">3 hours ago</p>
                      </div>
                    </li>
                  </ul>
                  <div class="comments-posts__field field-comments">
                    <div class="field-comments__icon">
                      <img src="./img/sleeping.png" alt="commetn user photo" class="field-comments__img">
                    </div>
                    <textarea class="field-comments__input" type="text" placeholder="Write comment"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="community__members members-community">
          <h2 class="members-community__title">Feautered Members</h2>
          <ul class="members-community__list">
            <li class="members-community__item item-members">
              <p class="item-members__name blue">Ivan123</p>
              <div class="item-members__icon">
                <img src="./img/random-person.jpg" alt="" class="item-members__img">
              </div>
            </li>
            <li class="members-community__item item-members">
              <p class="item-members__name blue">Ivan123</p>
              <div class="item-members__icon">
                <img src="./img/random-person.jpg" alt="" class="item-members__img">
              </div>
            </li>
            <li class="members-community__item item-members">
              <p class="item-members__name blue">Ivan123</p>
              <div class="item-members__icon">
                <img src="./img/random-person.jpg" alt="" class="item-members__img">
              </div>
            </li>
            <li class="members-community__item item-members">
              <p class="item-members__name blue">Ivan123</p>
              <div class="item-members__icon">
                <img src="./img/random-person.jpg" alt="" class="item-members__img">
              </div>
            </li>
            <li class="members-community__item item-members">
              <p class="item-members__name blue">Ivan123</p>
              <div class="item-members__icon">
                <img src="./img/random-person.jpg" alt="" class="item-members__img">
              </div>
            </li>
            <li class="members-community__item item-members">
              <p class="item-members__name blue">Ivan123</p>
              <div class="item-members__icon">
                <img src="./img/random-person.jpg" alt="" class="item-members__img">
              </div>
            </li>
          </ul>
          <p class="members-community__more blue">view more members</p>
        </div>
      </div>
    </div>
  </div>
    `;
  }

  eventListeners() {
    const createPostBtn = <HTMLElement>$('.header-posts__button');

    createPostBtn.addEventListener('click', () => {});
  }
}

export { Community };
