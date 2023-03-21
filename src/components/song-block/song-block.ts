import songBlock from './song-block.html';
import { songs } from '../../playlist/playlist';
import { getZeroBeforeDigit } from '../../global-scripts/scripts/helpers';
import { likeButton } from '../buttons/like_button/like_button';
import { menuButton } from '../buttons/menu_button/menu_button';
import { addMenuPlaylist } from '../../components/menu-playlist/menu-playlist';

export function addSongBlock() {
  const songList = document.querySelector('.song-list') as HTMLElement;

  for (let i = 0; i < songs.length; i++) {
    songList.insertAdjacentHTML('beforeend', songBlock);
  }

  const body = document.body as HTMLElement;
  const play = document.querySelector('.play-input') as HTMLInputElement;
  const songBlocks = songList.querySelectorAll('.song-container');
  const songsNumber = songList.querySelectorAll('.song-number');
  const coverBlock = songList.querySelectorAll('.cover__name-of-the-song__block');
  const artistsName = songList.querySelectorAll('.artists-name');
  const time = songList.querySelectorAll('.time');
  const songsMenu = songList.querySelectorAll('.song-menu');
  const songInputs = songList.querySelectorAll('.song-input');

  songs.forEach((element, i) => {
    const [coverImg, nameBlock] = coverBlock[i].children;
    const [coverName, songName] = nameBlock.children;
    const [elemInput, elemLabel] = songBlocks[i].children;

    songsMenu[i].append(likeButton());
    songsMenu[i].append(menuButton());
    elemInput.setAttribute('id', `${element.id}`);
    elemLabel.setAttribute('for', `${element.id}`);
    coverImg.setAttribute('src', `cover/${element.coverImg}.png`);
    time[i].innerHTML = element.time;
    artistsName[i].innerHTML = element.artist;
    songsNumber[i].innerHTML = getZeroBeforeDigit(i + 1);
    songName.innerHTML = element.songName;
    coverName.innerHTML = element.cover;

    elemInput.addEventListener('click', () => {
      play.checked = true;
    });
  });

  const songsMenuButtons = songList.querySelectorAll('.menu-button');
  let menuOpen = false;

  songsMenuButtons.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      const currentElem = e.currentTarget as HTMLElement;
      const elemBlock = currentElem.parentNode as HTMLElement;

      if (!menuOpen) {
        addMenuPlaylist(elemBlock);
        menuOpen = true;

        const menuPlaylist = document.querySelector('.menu-playlist') as HTMLElement;

        menuPlaylist.onmouseleave = () => {
          menuPlaylist.remove();
          menuOpen = false;
        };
        menuPlaylist.onclick = () => {
          menuPlaylist.remove();
          menuPlaylist.onclick = null;
          menuOpen = false;
        };
      } else {
        const menuPlaylist = document.querySelector('.menu-playlist') as HTMLElement;
        menuPlaylist.remove();

        addMenuPlaylist(elemBlock);
        menuOpen = true;
      }
    });
  });

  body.onclick = (e) => {
    const elem = e.target as HTMLElement;
    const elemPlaylist = elem.classList.contains('menu-playlist');
    const elemMenuButton = elem.classList.contains('menu-button');

    if (menuOpen && (!elemPlaylist && !elemMenuButton)) {
      const menuPlaylist = document.querySelector('.menu-playlist') as HTMLElement;
      menuPlaylist.remove();
      menuOpen = false;
    }
  };

  play.addEventListener('click', () => {
    const firstSong = songInputs[0] as HTMLInputElement;

    if (play.checked === true) {
      firstSong.checked = true;
    } else {
      songInputs.forEach((e) => {
        const elem = e as HTMLInputElement;
        if (elem.checked === true) {
          elem.checked = false;
        }
      });
    }
  });
}
