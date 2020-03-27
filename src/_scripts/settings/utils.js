import {
  PRELOADER_ACTIVE_CLASS,
  PRELOADER_HIDDEN_CLASS,
  NO_SCROLL_CLASS
} from '../settings/constants';

export const hidePreloader = preloader => {
  if (preloader) {
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.classList.remove(NO_SCROLL_CLASS);
      preloader.classList.add(PRELOADER_HIDDEN_CLASS);
    }, 500);
    setTimeout(() => preloader.classList.remove(PRELOADER_ACTIVE_CLASS), 1000);
  }
};
