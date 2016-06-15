export const type = 'html';

export const dir = 'coverage';

export const subdir = browser => {
  switch (true) {
    case /chrome/i.test(browser):
      return 'chrome';
    case /firefox/i.test(browser):
      return 'firefox';
    case /explorer/i.test(browser):
      return 'ie';
    case /phantomjs/i.test(browser):
      return 'phantomjs';
    default:
      throw Error(`Browser ${browser} is not defined`);
  }
};
