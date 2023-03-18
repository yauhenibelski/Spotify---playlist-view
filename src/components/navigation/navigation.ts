import nav from './navigation.html';

export function addNav() {
  const playListPage = document.querySelector('.play-list__page') as HTMLElement;
  playListPage.insertAdjacentHTML('beforebegin', nav);
}
