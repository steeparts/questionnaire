'use strict';

export class Textarea {
  constructor(textareaNode) {
    this.fieldNode = textareaNode.querySelector('.textarea__field');
    this.placeholderNode = textareaNode.querySelector('.textarea__placeholder');
  }

  init() {
    this.placeholderNode.addEventListener('click', () => this.fieldNode.focus());

    this.fieldNode.value.length > 0
      ? this.fieldNode.classList.add('textarea__field--filled')
      : this.fieldNode.classList.remove('textarea__field--filled');

    this.fieldNode.addEventListener('change', event => {
      event.target.value.length > 0
        ? event.target.classList.add('textarea__field--filled')
        : event.target.classList.remove('textarea__field--filled');
    });
  }
}
