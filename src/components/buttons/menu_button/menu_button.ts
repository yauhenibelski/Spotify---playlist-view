import { createElement } from '../../../global-scripts/scripts/helpers';

export function menuButton(): HTMLElement {
  const menuWrapper = createElement({
    elem: 'button',
    class: 'menu-button',
  }) as HTMLElement;

  return menuWrapper;
}
