type AddElem = {
  elem: string;
  class?: string;
  value?: string;
  attribute?: {
    attributeName: string,
    attributeValue: string
  },
  putIn?: {
    elem: HTMLElement;
    position: 'beforeend' | 'afterbegin';
  }
}

// eslint-disable-next-line consistent-return
export function createElement(elem: AddElem): HTMLElement | void {
  const newElem = document.createElement(elem.elem);

  if (elem.class !== undefined) {
    newElem.classList.add(elem.class);
  }
  if (elem.value !== undefined) {
    newElem.innerHTML = elem.value;
  }
  if (elem.attribute !== undefined) {
    newElem.setAttribute(elem.attribute.attributeName, elem.attribute.attributeValue);
  }
  if (elem.putIn === undefined) {
    return newElem;
  }
  elem.putIn.elem.insertAdjacentElement(elem.putIn.position, newElem);
}

export function getZeroBeforeDigit(params:number): string {
  return params < 10 ? `0${params}` : `${params}`;
}
