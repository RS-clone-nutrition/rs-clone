import apiServer from '../api/apiServer';
import { getTokenStorage, $ } from '../utils/helpers';
import { IUser, IPost } from '../utils/types';
import postComment from './postComment';

class CommentCreate {
  currentUser: IUser;

  currentPost: IPost;

  icon: string;

  render(user: IUser, post: IPost) {
    this.currentUser = user;
    this.currentPost = post;

    const createCommentContainer = <HTMLElement>$('.field-comments');
    const iconUser = user.avatar || './img/user/avatar-default.png';

    createCommentContainer.innerHTML += ` 
    <div class="field-comments__icon">
      <img src="${iconUser}" alt="commetn user photo" class="field-comments__img">
    </div>
    <form name="comment" class="field-comments__form"><textarea name="comment" class="field-comments__input" type="text" placeholder="Write comment"></textarea></form>
`;

    this.eventListeners();
  }

  eventListeners() {
    const textareaComment = <HTMLElement>$('.field-comments__form');
    // const addIconBtn = <HTMLElement>$('.field-posts__icon-button');

    textareaComment.addEventListener('keydown', (e) => this.submitOnEnter(e));
    textareaComment.addEventListener('submit', () => this.sendCommentServer());
    // addIconBtn.addEventListener('click', () => userPopupAvatar.render());
  }

  async sendCommentServer() {
    const textareaBlock = <HTMLTextAreaElement>$('.field-comments__input');
    const postContainerBlock = <HTMLTextAreaElement>$('.item-posts');
    const text = <string>textareaBlock.value;
    const postId = this.currentPost._id;
    const token = getTokenStorage();

    if (text) {
      const response = await apiServer.sendComment(text, postId, token);

      if (response) {
        postComment.render(response.result.post, this.currentUser, postContainerBlock);
      }
      textareaBlock.value = '';
      // this.render(this.currentUser, response?.result.post);
      return response;
    } else {
      alert('Please fill comment field');
    }
  }

  addIconLink(iconLink: string) {
    const addIconBtn = <HTMLImageElement>$('.field-posts__icon-button');
    addIconBtn.src = './img/community/check.svg';
    this.icon = iconLink;
  }

  submitOnEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      if (!event.repeat) {
        const newEvent = new Event('submit', { cancelable: true });
        const eventTarget = <HTMLTextAreaElement>event.target;
        (<HTMLFormElement>eventTarget.form).dispatchEvent(newEvent);
      }

      event.preventDefault(); // Prevents the addition of a new line in the text field
    }
  }
}

export default new CommentCreate();
