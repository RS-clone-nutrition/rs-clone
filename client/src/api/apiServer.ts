import { IUser, IResponseLogin } from '../utils/types';

class ApiServer {
  URL: 'https://timely-travesseiro-fbc406.netlify.app/';

  async sendUserServer(user: IUser, path: string) {
    try {
      const response = await fetch(`${this.URL}${path}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const result = <IResponseLogin>await response.json();
      return { response: result, status: response.status };
    } catch (e) {
      console.log(e);
    }
  }

  async updateUserServer(user: IUser, token: string) {
    try {
      const response = await fetch(`${this.URL}user`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
      });
      const result = <IResponseLogin>await response.json();
      return { response: result, status: response.status };
    } catch (e) {
      console.log(e);
    }
  }

  async sendAvatar(formElem: FormData) {
    try {
      const response = await fetch(`${this.URL}avatar`, {
        method: 'POST',
        mode: 'cors',
        body: formElem,
      });
      const result = await response.json();
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  async updateUserAvatar(avatarLink: string, token: string) {
    try {
      const response = await fetch(`${this.URL}avatar`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ avatar: avatarLink }),
      });
      const result = await response.json();
      return { response: result, status: response.status };
    } catch (e) {
      console.log(e);
    }
  }

  async getUser(token: string) {
    try {
      const response = await fetch(`${this.URL}user`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
        mode: 'cors',
      });
      const result = await response.json();
      return result;
    } catch (e) {
      console.log(e);
    }
  }
}

const apiServer = new ApiServer();
export default apiServer;
