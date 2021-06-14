import cy, { CircleLayoutOptions } from 'cytoscape';

import { containerSelector } from './consts';
import data from './data.json';

export function init(elements = data) {
  const layout: CircleLayoutOptions = {
    fit: false,
    name: 'circle',
    nodeDimensionsIncludeLabels: true,
    startAngle: 0,
    animate: false,
    ready: (event) => {
      setTimeout(() => {
        event.cy.resize().fit().center();
      });
    },
  };

  const container = document.querySelector(containerSelector) as HTMLDivElement;

  const core = cy({
    container,
    elements,
    layout,
  });

  // @ts-ignore
  window.core = core;

  return core;
}
