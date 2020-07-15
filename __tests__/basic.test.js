const pptrHtml = require('../dist').default;

jest.setTimeout(50 * 1000);

describe('Basic test', () => {
  test('test development', (done) => {
    pptrHtml('https://www.baidu.com/').then(res => {
      expect(typeof res).toBe("string");
      expect(res.includes('百度')).toBe(true);
      done();
    });
  });
});
