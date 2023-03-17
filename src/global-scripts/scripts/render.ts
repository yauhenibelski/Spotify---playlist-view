// import { addMenu } from '../../components/menu/menu';
import { addFooter } from '../../components/footer/footer';
import { addPlayListPage } from '../../pages/play-list/play-list';
import { addNav } from '../../components/navigation/navigation';

export function render() {
  // addMenu();
  addPlayListPage();
  addNav();
  addFooter();
}
