'use strict';

export class Input {
  constructor(inputNode) {
    this.inputNode = inputNode;
    this.fieldNode = inputNode.querySelector('.input__field');
    this.placeholderNode = inputNode.querySelector('.input__placeholder');
  }

  init() {
    this.placeholderNode.addEventListener('click', () => {
      this.inputNode.classList.add('input--focused');
      this.fieldNode.focus();
    });

    this.fieldNode.addEventListener('blur', () => {
      this.inputNode.classList.remove('input--focused');
    });

    this.fieldNode.value.length > 0
      ? this.inputNode.classList.add('input--filled')
      : this.inputNode.classList.remove('input--filled');

    this.fieldNode.addEventListener('change', event => {
      event.target.value.length > 0
        ? event.target.parentNode.classList.add('input--filled')
        : event.target.parentNode.classList.remove('input--filled');
    });
  }
}
