import Auth from '../components/auth';

class SignIn {
  main;

  auth;

  constructor(main: Element) {
    this.main = main;
    this.auth = new Auth('signup');
  }

  render() {
    this.main.innerHTML = `
    <div class="container">
      <div class="form">
        <div class="form__block">
          <h1>Sign In</h1>
          <h2>Sign in with your FatSecret account</h2>
          <div class="form__inputs">
            <form class="form__inputs">
            <input type="text" name="username" placeholder="Name">
            <div class="form__submit">
            <input type="password" name="password" placeholder="Password">
            <button>Sign Up</button>
            <p class="message"></p>
            </div>
          </form>
          </div>
          <span>Become a member! <a href="/login">Create Account</a></span>
        </div>
      </div>
    </div>
    `;

    this.auth.eventListenres();
  }
}

export { SignIn };
