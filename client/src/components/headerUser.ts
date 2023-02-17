import { $ } from '../utils/helpers';

class HeaderUser {
  loginLink;

  signLink;

  constructor() {
    this.loginLink = <HTMLLinkElement>$('.login');
    this.signLink = <HTMLLinkElement>$('.sign');
  }

  render() {
    const user = <string>localStorage.getItem('user');
    const userObj = JSON.parse(user);

    if (!user) {
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
}

const headerUser = new HeaderUser();

export default headerUser;
