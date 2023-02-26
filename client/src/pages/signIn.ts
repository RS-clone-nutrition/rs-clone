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
    this.changeColor();
  }

  changeColor() {
    const changeColorInput = <HTMLInputElement>document.querySelector('.change_color_input');
    const colorLocalStr = localStorage.getItem('color');
    const btnRegister = <HTMLElement>document.querySelector('.form__submit button');
    const linkSingin = <HTMLElement>document.querySelector('.form__block a');
    if (colorLocalStr) {
      changeColorInput.value = colorLocalStr;
    }
    btnRegister.style.background = changeColorInput.value;
    btnRegister.style.borderColor = changeColorInput.value;
    linkSingin.style.color = changeColorInput.value;
    changeColorInput.addEventListener('change', () => {
      btnRegister.style.background = changeColorInput.value;
      btnRegister.style.borderColor = changeColorInput.value;
      linkSingin.style.color = changeColorInput.value;
    });
  }
}

export { SignIn };
