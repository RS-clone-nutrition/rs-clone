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
              <h3 class="info-user__title aim__title">Gender:</h3>
              <input class="radio__choice" type="radio" id="genderChoice1" name="gender" checked value="male">
              <label for="genderChoice1">Male</label>
              <input class="radio__choice" type="radio" id="genderChoice2" name="gender" value="female">
              <label for="genderChoice2">Female</label>
            </div>
            <div class="form__radio">
              <h3 class="info-user__title aim__title">Weight aim:</h3>
              <input class="radio__choice" type="radio" id="aimChoice1" name="aim" checked value="lose">
              <label for="aimChoice1">Lose Weight</label>
              <input class="radio__choice" type="radio" id="aimChoice2" name="aim" value="gain">
              <label for="aimChoice2">Gain Weight</label>
            </div>
            <div class="info-user__block activity">
            <h3 class="info-user__title activity__title">Choose your activity level:</h3>
            <input class="radio__choice" type="radio" id="activityChoice1" name="activity" checked value="low">
            <label for="activityChoice1">Low</label>
            <input class="radio__choice" type="radio" id="activityChoice2" name="activity" value="average ">
            <label for="activityChoice2">Average </label>
            <input class="radio__choice" type="radio" id="activityChoice3" name="activity" value="high">
            <label for="activityChoice3">High</label>
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
