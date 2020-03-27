'use strict';

import { Input } from '../../_partials/input/input';
import { Select } from '../../_partials/select/select';
import { RangeSlider } from '../../_partials/range-slider/range-slider';
import { Textarea } from '../../_partials/textarea/textarea';

export class Questionnaire {
  constructor() {
    this.inputsCollection = document.querySelectorAll('.input');
    this.selectsCollection = document.querySelectorAll('.select');
    this.rangeSliderInput = document.querySelector('.range-slider input');
    this.textareasCollection = document.querySelectorAll('.textarea');
  }

  init() {
    if (this.inputsCollection.length) {
      [...this.inputsCollection].map(inputNode => {
        const input = new Input(inputNode);
        input.init();
      });
    }

    if (this.selectsCollection.length) {
      [...this.selectsCollection].map(selectNode => new Select(selectNode));
    }

    if (this.rangeSliderInput) {
      const rangeSlider = new RangeSlider(this.rangeSliderInput, {
        steps: [
          'Не владею',
          'Использую готовые решения',
          'Использую готовые решения и умею переделывать',
          'Пишу сложный JS с нуля'
        ]
      });
      rangeSlider.init();
    }


    if (this.textareasCollection.length) {
      [...this.textareasCollection].map(textareaNode => {
        const textarea = new Textarea(textareaNode);
        textarea.init();
      });
    }
  }
}
