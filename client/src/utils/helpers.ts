const $ = (selector: string, parent?: Element) => {
  return parent ? parent.querySelector(selector) : document.querySelector(selector);
};

const $All = (selector: string, parent?: Element) =>
  parent ? parent.querySelectorAll(selector) : document.querySelectorAll(selector);

export { $, $All };
