import { IUser, IResponseLogin } from '../utils/types';

class ApiServer {
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
}

const apiServer = new ApiServer();
export default apiServer;
