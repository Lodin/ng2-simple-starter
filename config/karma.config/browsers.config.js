const DEV = process.env['TEST_ENV'] === 'development';

const IEWin = {
  base: 'IE',
  platform: 'windows',
  displayName: 'Internet Explorer'
};

export const browsers = DEV
  ? ['Chrome', 'Firefox', 'IEWin']
  : ['PhantomJS'];

export const customLaunchers = {IEWin};
