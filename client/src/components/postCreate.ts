import { $ } from '../utils/helpers';
class PostCreate {
  render() {
    return ` 
    <div class="field-posts__icon">
    <img src="./img/sleeping.png" alt="commetn user photo" class="field-posts__img">
  </div>
  <textarea class="field-posts__input" type="text" placeholder="Anything new?"></textarea>
  <button class="field-posts__button">Create Post</button>
`;

    this.eventListeners();
  }

  eventListeners() {
    const createPostBtn = <HTMLElement>$('.field-posts__button');

    createPostBtn.addEventListener('click', () => this.sendPost());
  }

  sendPost() {
    const textPost = <string>(<HTMLTextAreaElement>$('.field-posts__input')).value;


  }
}

export default new PostCreate();
