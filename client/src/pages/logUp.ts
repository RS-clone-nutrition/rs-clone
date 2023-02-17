import Auth from '../components/auth';

class LogUp {
  main;

  auth;

  constructor(main: Element) {
    this.auth = new Auth('login');
    this.main = main;
  }

  render() {
    this.main.innerHTML = `
    <div class="container">
      <div class="form">
        <div class="form__block">
          <h1>Create Account</h1>
          <h2>Create account using email</h2>
            <form class="form__inputs">
            <div class="form__radio">
              <input class="radio__choice" type="radio" id="contactChoice1" name="gender" checked value="male">
              <label for="contactChoice1">Male</label>
              <input class="radio__choice" type="radio" id="contactChoice2" name="gender" value="female">
              <label for="contactChoice2">Female</label>
            </div>
              <input type="text" name="username" placeholder="Name">
              <input type="number" name="weight"  placeholder="Current weight (kg)">
              <input type="number" name="goal"  placeholder="Goal weight (kg)">
              <input type="number" name="height"  placeholder="Height (cm)">
              <input type="number" name="age"  placeholder="Full age">
              <input type="password" name="password" placeholder="Password">
              <button>Register</button>
              <p class="message"></p>
            </form>
          <span>Got an account?<a href="/signup"> Sign In</a></span>
        </div>
      </div>
    </div>

    `;

    this.auth.eventListenres();
  }
}

export { LogUp };
