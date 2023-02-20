import { IUser, IResponseLogin } from '../utils/types';

class ApiServer {
  async sendUserServer(user: IUser, path: string) {
    try {
      const response = await fetch(`https://fatsecret.up.railway.app/${path}`, {
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
      const response = await fetch(`https://fatsecret.up.railway.app/user`, {
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
}

const apiServer = new ApiServer();
export default apiServer;
