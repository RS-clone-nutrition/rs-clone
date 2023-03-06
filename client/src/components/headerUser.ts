import { $ } from '../utils/helpers';

class HeaderUser {
  loginLink;

  signLink;

  constructor() {
    this.loginLink = <HTMLLinkElement>$('.login');
    this.signLink = <HTMLLinkElement>$('.sign');
  }

  async render() {
    const userObj = await this.getUser();

    if (!userObj) {
      return;
    }

    this.loginLink.textContent = 'Hello ' + userObj.username.toUpperCase();
    this.loginLink.href = '/user';

    this.signLink.textContent = 'Logout';
    this.signLink.href = '/';

    this.eventlisteners();
  }

  eventlisteners() {
    this.signLink.addEventListener('click', () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      this.loginLink.textContent = 'Login Up';
      this.loginLink.href = '/login';

      this.signLink.textContent = 'Sign Up';
      this.signLink.href = '/signup';
    });
  }

  async getUser() {
    const user = <string>localStorage.getItem('user');

    if (!user || user === 'undefined') {
      return;
    }

    return JSON.parse(user);
  }
}

const headerUser = new HeaderUser();

export { headerUser };
