import { IUser, IResponseLogin } from '../utils/types';

class ApiServer {
  async sendUserServer(user: IUser, path: string) {
    try {
      const response = await fetch(`http://localhost:5000/${path}`, {
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

  async updateUserServer(user: IUser) {
    try {
      const response = await fetch(`http://localhost:5000/user`, {
        method: 'PUT',
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

  async sendAvatar(formElem: FormData) {
    try {
      const response = await fetch(`http://localhost:5000/avatar`, {
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
      const response = await fetch(`http://localhost:5000/avatar`, {
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

  // async getUsers() {
  //   try {
  //     const response = await fetch(`http://localhost:5000/users`, {
  //       headers: {
  //         authorization: `Bearer ${JSON.parse(<string>localStorage.getItem('token'))}`,
  //       },
  //       mode: 'cors',
  //     });
  //     const result = await response.json();
  //     return result;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
}

const apiServer = new ApiServer();
export default apiServer;
