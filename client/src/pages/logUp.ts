class LogUp {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    this.main.innerHTML = `
    <div class="form">
      <div class="form__block">
        <h1>Create Account</h1>
        <h2>Create account using email</h2>
          <div class="form__inputs">
            <input type="email" placeholder="Email Address">
            <input type="password" placeholder="Password">
            <button>Register</button>
          </div>
        <span>Got an account?<a href="/signup"> Sign In</a></span>
      </div>
    </div>
    `;
  }
}

export { LogUp };
