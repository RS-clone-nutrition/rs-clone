class Loader {
  loaderBlock: HTMLElement;

  constructor() {
    this.loaderBlock = document.createElement('div');
    this.loaderBlock.classList.add('loader__container');
    this.loaderBlock.innerHTML = '<div class="loader">loading</div>';
  }

  show(container: Element) {
    container.prepend(this.loaderBlock);
  }

  remove(container: Element) {
    container.removeChild(this.loaderBlock);
  }
}

export default new Loader();
