import { RESOURCE_CONTAINER_ELEMENT_ID } from '../constants.js';
import { getDOMElement } from '../utils/DOMUtils.js';
import { GET_A_HINT_BUTTON_ID } from '../constants.js';

// STEP 4: handler function to show and/or hide resources
export const showHint = () => {
  const resourceContainerElement = getDOMElement(RESOURCE_CONTAINER_ELEMENT_ID);
  if (resourceContainerElement.style.display === 'none') {
    resourceContainerElement.style.display = 'block';
    getDOMElement(GET_A_HINT_BUTTON_ID).innerText = 'Hide Hints';
  } else {
    resourceContainerElement.style.display = 'none';
    getDOMElement(GET_A_HINT_BUTTON_ID).innerText = 'Show Hints';
  }
};
