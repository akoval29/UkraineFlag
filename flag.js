"use strict";

const flag = document.querySelector(".flag");
const slices = 24;
const sliceWidth = 15;
if (flag) {
  for (let index = 0; index < slices + 1; index++) {
    const flagElement = document.querySelector(
      `.flag__element.flag__element--${index - 1}`
    );
    let flagParent = flagElement ? flagElement : flag;
    flagParent.insertAdjacentHTML(
      "beforeend",
      `<span class="flag__element flag__element--${index}"></span>
		`
    );
    const flagCurentElement = document.querySelector(
      `.flag__element.flag__element--${index}`
    );
    flagCurentElement.style.cssText = `
			animation-delay: ${index * 0.08}s;
			width: ${sliceWidth}px;
			left: ${sliceWidth - 1.5}px;
			background-size: ${slices * sliceWidth}px 100%;
			background-position: ${-index * sliceWidth}px 0px; 
		`;
  }
}
