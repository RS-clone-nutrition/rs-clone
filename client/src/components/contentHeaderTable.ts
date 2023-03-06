const contentHeaderTable = {
  render(icon: string, title: string, description: string) {
    const img = icon
      ? `<div class="top-foods__icon"><img src="${icon}" alt="dishes icon" class="top-foods__img"></div>`
      : '';

    return `
    <div class="foods__top top-foods">
    <div class="top-foods__content">
      ${img}
      <div class="top-foods__text">
        <h1 class="top-foods__title">${title}</h1>
        <div class="top-foods__text">${description}
        </div>
      </div>
    </div>
  </div>
    `;
  },
};

export default contentHeaderTable;
