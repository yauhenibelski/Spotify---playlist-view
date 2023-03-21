import { createElement } from '../../../global-scripts/scripts/helpers';

export function menuButton(): HTMLElement {
  const menuWrapper = createElement({
    elem: 'div',
    class: 'menu-button',
  }) as HTMLElement;

  return menuWrapper;
}
