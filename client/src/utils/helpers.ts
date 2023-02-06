const $ = (selector: string, parent?: Element) => {
  return parent ? parent.querySelector(selector) : document.querySelector(selector);
};

const $All = (selector: string, parent?: Element) =>
  parent ? parent.querySelectorAll(selector) : document.querySelectorAll(selector);

const createPath = (partPath: string) => partPath.replace(',', ' &').split(' & ').join('-');

const getMainPath = (path: string) => {
  const pathArr = path.split('/');
  return pathArr.length > 2 ? pathArr.slice(0, -1).join('/') : pathArr.join('/');
};

const getURL = () => window.location.href;

export { $, $All, createPath, getMainPath, getURL };
