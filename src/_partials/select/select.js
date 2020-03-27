'use strict';

export const Select = selectNode => {
  let uuid = 'vs-xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0,
          v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });

  selectNode.setAttribute('data-vs-uuid', uuid);

  let selectedIndex = selectNode.selectedIndex;

  const createSelectBox = () => {
    let vsSelectHtml = `<div class='visual-select' data-vs-uuid='${uuid}'>`,
        vsSelectedOptionHtml = '',
        vsSelectOptionsHtml = '';
    [...selectNode.querySelectorAll('option')].map((option, index) => {
      let optionHTML = option.innerHTML,
          optionValue = option.getAttribute('value'),
          optionClass = 'visual-select__option';

      if (option.disabled) {
        optionClass += ' visual-select__option--disabled';
      }

      if (index === selectedIndex) {
        vsSelectedOptionHtml = `
          <div class='visual-select__current' data-value='${optionValue}'>${optionHTML}</div>
        `;
      }
      vsSelectOptionsHtml += `<li class='${optionClass}' data-value='${optionValue}'>${optionHTML}</li>`;
    });

    vsSelectHtml += `${vsSelectedOptionHtml} <ul class='visual-select__dropdown'>${vsSelectOptionsHtml}</ul>`;
    vsSelectHtml += `</div>`;
    selectNode.insertAdjacentHTML('afterend', vsSelectHtml);
  };

  const init = () => {
    createSelectBox();

    // Event listeners
    document.querySelector(
      '.visual-select[data-vs-uuid="' + uuid +'"]'
    ).addEventListener('click', event => {
      let dataValue = event.target.getAttribute('data-value');
      selectNode.value = dataValue;

      document.querySelector(
        '.visual-select[data-vs-uuid="' + uuid +'"] .visual-select__current'
      ).dataset.value = dataValue;

      document.querySelector(
        '.visual-select[data-vs-uuid="' + uuid +'"] .visual-select__current'
      ).innerHTML = event.target.innerText;

      event.target.parentNode.parentNode.classList.remove('visual-select--open');
    });

    document.querySelector(
      '.visual-select[data-vs-uuid="' + uuid + '"] .visual-select__current'
    ).addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();

      if (event.target.parentNode.classList.contains('visual-select--open')) {
        event.target.parentNode.classList.remove('visual-select--open');
      }
      else {
        [...document.querySelectorAll('.visual-select')].map(vs => {
          vs.classList.remove('visual-select--open');
        });
        event.target.parentNode.classList.add('visual-select--open');
      }
    });

    document.addEventListener('click', event => {
      if (! event.target.classList.contains(
        'visual-select__option', 'visual-select__current'
      )) {
        [...document.querySelectorAll('.visual-select')].map(vs => {
          vs.classList.remove('visual-select--open');
        });
      }
    });
  }

  init();
};
