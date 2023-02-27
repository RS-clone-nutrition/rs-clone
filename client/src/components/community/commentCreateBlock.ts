import apiServer from '../../api/apiServer';
import { getTokenStorage, $ } from '../../utils/helpers';
import { IUser, IPost } from '../../utils/types';
import postComment from './postComment';

class CommentCreate {
  currentUser: IUser;

  currentPost: IPost;

  postContainerBlock: HTMLElement;

  icon: string;

  render(user: IUser, post: IPost) {
    this.currentUser = user;
    this.currentPost = post;
    this.postContainerBlock = <HTMLElement>$(`[id="${this.currentPost._id}"]`);

    const createCommentContainer = <HTMLElement>$('.field-comments');
    const iconUser = user.avatar || './img/user/avatar-default.png';

    createCommentContainer.innerHTML = ` 
    <div class="field-comments__icon">
      <img src="${iconUser}" alt="commetn user photo" class="field-comments__img">
    </div>
    <form name="comment" class="field-comments__form"><textarea name="comment" class="field-comments__input" type="text" placeholder="Write comment"></textarea></form>
`;

    this.eventListeners();
  }

  eventListeners() {
    const textareaCommentBlock = <HTMLTextAreaElement>$('.field-comments__input', this.postContainerBlock);

    textareaCommentBlock.addEventListener('keydown', (e: KeyboardEvent) => this.submitOnEnter(e));
    textareaCommentBlock.addEventListener('submit', (e) => this.sendCommentServer(e));
  }

  async sendCommentServer(e: Event) {
    const textareaBlock = <HTMLTextAreaElement>e.target;
    const postContainerBlock = <HTMLTextAreaElement>textareaBlock.closest('.item-posts');
    const text = <string>textareaBlock.value;
    const postId = <string>postContainerBlock.getAttribute('id');
    const token = getTokenStorage();

    if (text) {
      const response = await apiServer.sendComment(text, postId, token);

      if (response) {
        const lastComment = response.result.post.comments[response.result.post.comments.length - 1];
        await postComment.render([lastComment], this.currentUser, postContainerBlock);
        postComment.changeAmountComments(response.result.post.comments, postContainerBlock);

        textareaBlock.value = '';
      }
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
        eventTarget.dispatchEvent(newEvent);
      }

      event.preventDefault();
    }
  }
}

export default new CommentCreate();
