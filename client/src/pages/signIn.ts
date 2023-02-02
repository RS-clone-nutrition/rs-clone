class SignIn {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    this.main.innerHTML = `
    <div class="form">
    <div class="form__block">
      <h1>Sign In</h1>
      <h2>Sign in with your FatSecret account</h2>
      <div class="form__inputs">
        <input type="email" placeholder="Email Address">
        <div class="form__submit">
          <input type="password" placeholder="Password">
          <button>Sign Up</button>
        </div>
      </div>
      <span>Become a member! <a href="/login">Create Account</a></span>
    </div>
  </div>
    `;
  }
}

export { SignIn };
