class Error {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    this.main.innerHTML = '<h1>Error content</h1>';
  }
}

export { Error };
