class Fitnes {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    this.main.innerHTML = '<h1>Fitnes content</h1>';
  }
}

export { Fitnes };
