class Item {
  str: string;

  constructor(str: string) {
    this.str = str;
  }

  async createItem() {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${this.str}&app_id=4fcfc438&app_key=3e34b694ed09823d94936847eb933f21`
    );
    return response.json();
  }
}
export default Item;
