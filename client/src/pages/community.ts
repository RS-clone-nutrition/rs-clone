import postCreate from '../components/postCreateBlock';
import postItemBlock from '../components/postItemBlock';
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
          </div>
          <h1 class="posts-community__title">Recent Activity</h1>
          <div class="posts-community__content">
            <div class="posts-community__list list-posts">
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

    postCreate.render();
    postItemBlock.render();
  }
}

export { Community };
