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
  }
}

export { Error };
