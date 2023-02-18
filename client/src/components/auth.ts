import { $, $All } from '../utils/helpers';
import api from '../api/api';
import router from '../router';
import { IUser, IResponseUser } from '../utils/types';
import headerUser from './headerUser';

class Auth {
  path: string;

  main: HTMLElement;

  constructor(path: string) {
    this.path = path;
    this.main = <HTMLElement>$('.content');
  }

  eventListenres() {
    const form = <HTMLElement>$('.form__inputs');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.sendToServer();
    });
  }

  async sendToServer() {
    // const inputName = <HTMLInputElement>$('input[name="name"]');
    // const inputWeight = <HTMLInputElement>$('input[name="weight"]');
    // const inputHeight = <HTMLInputElement>$('input[name="height"]');
    // const inputAge = <HTMLInputElement>$('input[name="age"]');
    // const inputPassword = <HTMLInputElement>$('input[name="password"]');
    // const inputGender = <HTMLInputElement>$('input[name="gender"]:checked');
    //const form = <HTMLFormElement>inputName.parentElement;
    // const inputNameValue = inputName.value;
    // const inputPasswordValue = inputPassword.value;
    // const inputWeightValue = inputWeight.value;
    // const inputHeightValue = inputHeight.value;
    // const inputAgeValue = inputAge.value;
    // const inputGenderValue = inputGender.value;

    // if (!this.validation(inputNameValue, inputPasswordValue)) {
    //   console.log('Write correct name or password');
    //   return;
    // }

    const user = this.getAllfields();

    const serverRsponse = <IResponseUser>await api.sendUserServer(user, this.path);

    if (serverRsponse.response.user && serverRsponse.response.token) {
      localStorage.setItem('user', JSON.stringify(serverRsponse.response.user));
      localStorage.setItem('token', JSON.stringify(serverRsponse.response.token));

      headerUser.render();
    }

    this.addResponseHtml(serverRsponse.response.message, serverRsponse.status);
  }

  // validation(inputName: string, inputPassword: string) {
  //   return inputName.length >= 1 && inputPassword.length >= 4 && inputPassword.length <= 10;
  // }

  addResponseHtml(message: string, status: number) {
    const form = <HTMLFormElement>$('.form__inputs');
    const messageBlock = <HTMLElement>$('.message');
    messageBlock.textContent = message;
    form.append(messageBlock);

    if (status === 400) {
      messageBlock.classList.add('errror');
      return;
    }

    this.redirect();
  }

  getAllfields() {
    const inputs = <NodeListOf<HTMLInputElement>>$All('input', this.main);
    const user: IUser = {};

    if (this.path === 'login') {
      const inputGender = <HTMLInputElement>$('input[name="gender"]:checked');
      const inputAim = <HTMLInputElement>$('input[name="aim"]:checked');
      user[inputGender.name] = inputGender.value;
      user[inputAim.name] = inputAim.value;
      const activityLevel = <HTMLInputElement>$('input[name="activity"]:checked');
      user[activityLevel.name] = <string>activityLevel.value;

      user.date = String(new Date());
    }

    inputs.forEach((item) => {
      const key = <string>item.getAttribute('name');

      if (key === 'gender' || key === 'aim' || key === 'activity') {
        return;
      }

      const value = <string>item.value;
      user[key] = value;
    });
    console.log(user);

    return user;
  }

  redirect() {
    const path = this.path === 'login' ? 'signup' : 'user';
    setTimeout(() => {
      router.route(new Event('click'), path);
    }, 1000);
  }
}

export default Auth;
