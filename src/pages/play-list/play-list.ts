import playListHTML from './play-list.html';

export function addPlayListPage() {
  // const [menu] = document.body.children;
  document.body.insertAdjacentHTML('afterbegin', playListHTML);
  // menu.insertAdjacentHTML('beforeend', playListHTML);
}
