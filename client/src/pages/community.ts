import postCreate from '../components/postCreateBlock';
import postItemBlock from '../components/postItemBlock';
import apiServer from '../api/apiServer';
import router from '../router';
class Community {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  async render() {
    const user = await this.getUser();

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
      
    </div>
  </div>
</div>
    `;

    postCreate.render(user);
    postItemBlock.render(user);
  }

  async getUser() {
    let user = <string>localStorage.getItem('user');

    if (!user || user === 'undefined') {
      const token = JSON.parse(<string>localStorage.getItem('token'));
      const response = await apiServer.getCurrentUser(token);

      user = response[0];

      if (!user) {
        setTimeout(() => {
          alert('Please login to your account. Sorry for the inconvenience');
          router.route(new Event('click'), 'signup');
        }, 500);
      }

      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }

    return JSON.parse(user);
  }
}

export { Community };
