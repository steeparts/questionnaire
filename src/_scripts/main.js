'use strict';

import './vendor/modernizr';

import 'core-js';
import 'regenerator-runtime/runtime';
import { hidePreloader } from './settings/utils';
import { Header } from '../_modules/header/header';
import { Questionnaire } from '../_modules/questionnaire/questionnaire';

class Main {
  constructor() {
    this.preloader = document.querySelector('.preloader');
    this.header = document.querySelector('.header');
    this.questionnaire = document.querySelector('.questionnaire');
  }

  init() {
    hidePreloader(this.preloader);

    if (this.header) {
      const header = new Header();
      header.init();
    }

    if (this.questionnaire) {
      const questionnaire = new Questionnaire();
      questionnaire.init();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const main = new Main();
  main.init();
});
