import puppeteer from 'puppeteer';
import '@jswork/next';
import '@jswork/next-random-ua';

const defaults = {
  headless: true,
  closeable: true,
  executablePath: process.env.PUPPETEER_EXEC_PATH,
  userAgent: nx.randomUa(),
  selector: null
};

export default async (inUrl, inOptions) => {
  const options = nx.mix(null, defaults, inOptions);
  const { userAgent, selector, closeable } = options;
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  userAgent && (await page.setUserAgent(userAgent));
  await page.goto(inUrl);
  selector && (await page.waitForSelector(selector));
  const html = await page.content();
  closeable && (await browser.close());
  return html;
};
