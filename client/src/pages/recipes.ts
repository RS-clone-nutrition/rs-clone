class Recipes {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    this.main.innerHTML = '<h1>Recipes content</h1>';
  }
}

export { Recipes };
