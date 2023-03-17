import songBlock from './song-block.html';

export function addSongBlock() {
  const songsList = document.querySelector('.song-list') as HTMLElement;

  for (let i = 0; i < 8; i++) {
    songsList.insertAdjacentHTML('beforeend', songBlock);
  }
}
