import { createElement } from '../../../global-scripts/scripts/helpers';

export function playButton(): HTMLElement {
  const playWrapper = createElement({
    elem: 'label',
    class: 'play-button',
  }) as HTMLElement;

  createElement({
    elem: 'input',
    class: 'play-input',
    attribute: {
      attributeName: 'type',
      attributeValue: 'checkbox',
    },
    putIn: {
      elem: playWrapper,
      position: 'afterbegin',
    },
  });

  createElement({
    elem: 'div',
    class: 'play',
    putIn: {
      elem: playWrapper,
      position: 'beforeend',
    },
  });

  return playWrapper;
}
