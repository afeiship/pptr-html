const pptrHtml = require('../dist').default;

jest.setTimeout(50 * 1000);

// PUPPETEER_EXEC_PATH=${HOME}/github/chrome-mac/Chromium.app/Contents/MacOS/Chromium yt

describe('Basic test', () => {
  test('test development', (done) => {
    pptrHtml('https://www.baidu.com/').then(res => {
      expect(typeof res).toBe("string");
      expect(res.includes('百度')).toBe(true);
      done();
    });
  });
});
