import '../styles/singleRecipe.scss';

class SingleRecipe {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    this.main.innerHTML = '<h1>Foods content</h1>';
  }
}

export { SingleRecipe };
