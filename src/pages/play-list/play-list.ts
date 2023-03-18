import playListHTML from './play-list.html';
import { playButton } from '../../components/buttons/play_button/play_button';
import { likeButton } from '../../components/buttons/like_button/like_button';
import { menuButton } from '../../components/buttons/menu_button/menu_button';
import { addSongBlock } from '../../components/song-block/song-block';

export function addPlayListPage() {
  document.body.insertAdjacentHTML('afterbegin', playListHTML);
  const buttonsBlock = document.querySelector('.buttons-block') as HTMLElement;

  buttonsBlock.append(playButton() as HTMLElement);
  buttonsBlock.append(likeButton() as HTMLElement);
  buttonsBlock.append(menuButton() as HTMLElement);
  addSongBlock();
}
