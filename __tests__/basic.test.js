const pptrHtml = require('../dist').default;

jest.setTimeout(50 * 1000);

describe('Basic test', () => {
  test('test development', (done) => {
    pptrHtml('https://www.mipengine.org/').then(res => {
      console.log(res);
      done();
    });
  });
});
