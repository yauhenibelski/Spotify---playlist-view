import songBlock from './song-block.html';
import { songs } from '../../playlist/playlist';
import { getZeroBeforeDigit } from '../../global-scripts/scripts/helpers';
import { likeButton } from '../buttons/like_button/like_button';
import { menuButton } from '../buttons/menu_button/menu_button';

export function addSongBlock() {
  const songList = document.querySelector('.song-list') as HTMLElement;

  for (let i = 0; i < songs.length; i++) {
    songList.insertAdjacentHTML('beforeend', songBlock);
  }

  const songBlocks = songList.querySelectorAll('.song-container');
  const songsNumber = songList.querySelectorAll('.song-number') as NodeListOf<HTMLElement>;
  const coverBlock = songList.querySelectorAll('.cover__name-of-the-song__block') as NodeListOf<HTMLElement>;
  const artistsName = songList.querySelectorAll('.artists-name') as NodeListOf<HTMLElement>;
  const time = songList.querySelectorAll('.time') as NodeListOf<HTMLElement>;
  const songsMenu = songList.querySelectorAll('.song-menu') as NodeListOf<HTMLElement>;

  songs.forEach((element, i) => {
    const [coverImg, nameBlock] = coverBlock[i].children;
    const [coverName, songName] = nameBlock.children;
    const [elemInput, elemLabel] = songBlocks[i].children;

    songsMenu[i].append(likeButton());
    songsMenu[i].append(menuButton());
    elemInput.setAttribute('id', `${element.id}`);
    elemLabel.setAttribute('for', `${element.id}`);
    coverImg.setAttribute('src', `/cover/${element.coverImg}.png`);
    time[i].innerHTML = element.time;
    artistsName[i].innerHTML = element.artist;
    songsNumber[i].innerHTML = getZeroBeforeDigit(i + 1);
    songName.innerHTML = element.songName;
    coverName.innerHTML = element.cover;
  });
}
