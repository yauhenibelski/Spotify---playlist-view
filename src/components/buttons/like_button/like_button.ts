import { createElement } from '../../../global-scripts/scripts/helpers';

export function likeButton(): HTMLElement {
  const likeWrapper = createElement({
    elem: 'label',
    class: 'like-button',
  }) as HTMLElement;

  createElement({
    elem: 'input',
    class: 'like-input',
    attribute: {
      attributeName: 'type',
      attributeValue: 'checkbox',
    },
    putIn: {
      elem: likeWrapper,
      position: 'afterbegin',
    },
  });

  createElement({
    elem: 'div',
    class: 'like',
    putIn: {
      elem: likeWrapper,
      position: 'beforeend',
    },
  });

  return likeWrapper;
}
