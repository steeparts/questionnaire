'use strict';

import {
  RANGE_SLIDER_STEPS_CLASS,
  RANGE_SLIDER_STEP_CLASS
} from '../../_scripts/settings/constants';
import rangeSlider from 'rangeslider-pure';

export class RangeSlider {
  constructor(slider, options) {
    this.slider = slider;
    this.options = options;
  }

  createRangeSteps() {
    if (this.options.steps) {
      const rangeSliderStepsNode = document.querySelector(
        `[class='${RANGE_SLIDER_STEPS_CLASS}']`
      );

      rangeSliderStepsNode &&
      [...this.options.steps].map(step => rangeSliderStepsNode.insertAdjacentHTML(
        'beforeend',
        `<div style='width: ${100 / this.options.steps.length}%'
          class='${RANGE_SLIDER_STEP_CLASS}'>${step}</div>`
      ));
    }
  }

  init() {
    rangeSlider.create(this.slider, {
      onInit: (value, percent, position) => this.createRangeSteps()
    });
  }
}
