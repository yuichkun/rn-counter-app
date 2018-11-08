import wd from 'wd';
require('dotenv').config()

jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
const PORT = 4723;

const config = {
  platformName: 'iOS',
  deviceName: 'iPhone 7',
  automationName: 'XCUITest',
  app: process.env.IOS_APP_DIR,
};

console.warn("---IOS APP DIR is here---")
console.warn(process.env.IOS_APP_DIR)

const driver = wd.promiseChainRemote('localhost', PORT);

export { driver, config }