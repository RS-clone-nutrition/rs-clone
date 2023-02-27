class Error {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    this.main.innerHTML = `<div class="container">
      <div class="not-found-wrap">
        <h2 class="not-found-page title">PAGE NOT FOUND (404)</h2>
      </div>
    </div>`;
    this.changeColor();
  }

  changeColor() {
    const changeColorInput = <HTMLInputElement>document.querySelector('.change_color_input');
    const colorLocalStr = localStorage.getItem('color');
    const borderTitle = <HTMLElement>document.querySelector('.not-found-page');
    if (colorLocalStr) {
      changeColorInput.value = colorLocalStr;
    }
    borderTitle.style.borderColor = changeColorInput.value;
    changeColorInput.addEventListener('change', () => {
      borderTitle.style.borderColor = changeColorInput.value;
    });
  }
}

export { Error };
