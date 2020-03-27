'use strict';

import { FIXED_HEADER_CLASS } from '../../_scripts/settings/constants';
import { TopMenu } from '../../_partials/top-menu/top-menu';

export class Header {
  constructor() {
    this.menu = document.querySelector('.header__menu');
    this.isFixed = false;
  }

  headerFixHandler() {
    const header = document.querySelector('.header');
    if (window.scrollY > header.clientHeight) {
      if (! this.isFixed) {
        this.isFixed = true;
        header.classList.add(FIXED_HEADER_CLASS);
      }
    }
    else if (window.scrollY <= header.clientHeight / 2) {
      if (this.isFixed) {
        header.classList.remove(FIXED_HEADER_CLASS);
        this.isFixed = false;
      }
    }
  }

  init() {
    if (this.menu) {
      const menu = new TopMenu();
      menu.init();
    }

    this.headerFixHandler();
    document.addEventListener('scroll', this.headerFixHandler);
  }
}
