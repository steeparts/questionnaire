'use strict';

import {
  ACTIVE_TOP_MENU_CLASS,
  ACTIVE_BURGER_CLASS,
  NO_SCROLL_CLASS
} from '../../_scripts/settings/constants';

export class TopMenu {
  constructor() {
    this.links = document.querySelectorAll('.top-menu__link');
    this.burger = document.querySelector('.top-menu__burger');
  }

  activeMenuItemHandler() {
    [...this.links].map(link => {
      link.parentNode.classList.remove(ACTIVE_TOP_MENU_CLASS);

      let anchor = link.getAttribute('href'),
          ref = document.querySelector(anchor);

      if (ref) {
        let refTopBound = ref.offsetTop,
            refBottomBound = refTopBound + ref.clientHeight;

        if (window.scrollY >= refTopBound - 50 && window.scrollY < refBottomBound) {
          link.parentNode.classList.add(ACTIVE_TOP_MENU_CLASS);
        }
      }
    });
  }

  menuLinkClickHandler() {
    [...this.links].map(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        if (! link.parentNode.classList.contains(ACTIVE_TOP_MENU_CLASS)) {
          let anchor = event.target.getAttribute('href'),
              ref = document.querySelector(anchor);

          if (ref) {
            ref.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }

        this.burgerClickHandler(true);
      });
    });
  }

  burgerClickHandler(force) {
    force = force || false;

    if (force) {
      this.burger.classList.remove(ACTIVE_BURGER_CLASS);
      document.body.classList.remove(NO_SCROLL_CLASS);
    }
    else {
      this.burger.classList.toggle(ACTIVE_BURGER_CLASS);
      document.body.classList.toggle(NO_SCROLL_CLASS);
    }
  }

  init() {
    this.menuLinkClickHandler();

    this.activeMenuItemHandler();
    document.addEventListener('scroll', () => this.activeMenuItemHandler());

    this.burger.addEventListener('click', () => this.burgerClickHandler());
  }
}
