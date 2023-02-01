class MyFatSecret {
  main;

  constructor(main: Element) {
    this.main = main;
  }

  render() {
    this.main.innerHTML = '<h1>My FatSecret content</h1>';
  }
}

export { MyFatSecret };
