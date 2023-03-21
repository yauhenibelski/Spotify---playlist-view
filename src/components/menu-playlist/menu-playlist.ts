import menuPlaylist from './menu-playlist.html';

export function addMenuPlaylist(elem: HTMLElement) {
  elem.insertAdjacentHTML('beforeend', menuPlaylist);
}
