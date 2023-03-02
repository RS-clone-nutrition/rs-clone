import { IUser, IResponseLogin } from '../utils/types';
import { IBodyRequestPost } from '../utils/types';

class ApiServer {
  URL = 'http://localhost:5000/';

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

  async getCurrentUser(token: string) {
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

  async getUser(id: string, token: string) {
    try {
      const response = await fetch(`${this.URL}user:${id}`, {
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

  async getUsers(token: string) {
    try {
      const response = await fetch(`${this.URL}members`, {
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

  async sendPostServer(post: IBodyRequestPost, token: string) {
    try {
      const response = await fetch(`${this.URL}post`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(post),
      });
      const result = await response.json();
      return { result: result.post, status: response.status };
    } catch (e) {
      console.log(e);
    }
  }

  async getPosts() {
    try {
      const response = await fetch(`${this.URL}posts`, {
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      });
      const result = await response.json();
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  async deletePost(id: string, token: string) {
    try {
      const response = await fetch(`${this.URL}post`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      });
      const result = await response.json();
      return { result, status: response.status };
    } catch (e) {
      console.log(e);
    }
  }

  async sendComment(text: string, postId: string, token: string) {
    try {
      const response = await fetch(`${this.URL}comment`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text, postId }),
      });
      const result = await response.json();
      return { result, status: response.status };
    } catch (e) {
      console.log(e);
    }
  }

  async deleteComment(commentId: string, postId: string, token: string) {
    try {
      const response = await fetch(`${this.URL}comment`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ commentId, postId }),
      });
      const result = await response.json();
      return { result, status: response.status };
    } catch (e) {
      console.log(e);
    }
  }
}

const apiServer = new ApiServer();
export default apiServer;
