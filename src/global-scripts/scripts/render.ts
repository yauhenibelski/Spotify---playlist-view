import { addMenu } from '../../components/menu/menu';
import { addFooter } from '../../components/footer/footer';
import { addPlayListPage } from '../../pages/play-list/play-list';
import { addNav } from '../../components/navigation/navigation';

export function render() {
  const maxTabletWidth = 834;

  if (window.innerWidth <= maxTabletWidth) {
    addPlayListPage();
    addNav();
    addMenu();
  } else {
    addPlayListPage();
    addNav();
    addFooter();
  }
}
