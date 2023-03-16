import menu from './menu.html';

export function addMenu() {
  document.body.insertAdjacentHTML('afterbegin', menu);
}
