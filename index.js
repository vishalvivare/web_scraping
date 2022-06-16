const puppeteer = require("puppeteer");

async function scrapeFunction(url) {
  const browser = await puppeteer.launch();
  // give new page
  const page = await browser.newPage();
  await page.goto(url);

  //   copy xpath of image

  //   page- open page
  // .$x- poppeteer selector

  //   title
  const [el1] = await page.$x(
    '//*[@id="jump-content"]/div[1]/div/div[2]/main/div/div/div[1]/div[1]/h1'
  );
  const txt1 = await el1.getProperty("textContent");
  const title = await txt1.jsonValue();

  // company
  const [el2] = await page.$x(
    '//*[@id="jump-content"]/div[1]/div/div[2]/main/div/div/div[1]/div[1]/ul[2]/li[1]/span'
  );
  const txt2 = await el2.getProperty("textContent");
  const company = await txt2.jsonValue();

  //   description

  const [el3] = await page.$x(
    '//*[@id="jump-content"]/div[1]/div/div[2]/main/div/div/div[1]/div[2]/div[1]/div'
  );
  const txt3 = await el3.getProperty("textContent");
  const desc = await txt3.jsonValue();

  //   location

  const [el4] = await page.$x(
    '//*[@id="jump-content"]/div[1]/div/div[2]/main/div/div/div[1]/div[1]/ul[2]/li[2]/div[1]'
  );
  const txt4 = await el4.getProperty("textContent");
  const location = await txt4.jsonValue();

  console.log({ title, company, desc, location });

  browser.close();
}

scrapeFunction(
  "https://careers.google.com/jobs/results/113684167440376518-silicon-design-cad-software-engineer/?company=Google&company=Google%20Fiber&company=YouTube&employment_type=FULL_TIME&gclsrc=ds&gclsrc=ds&hl=en_US&jlo=en_US&location=Bangalore,%20India&location=Gurgaon,%20India&location=Hyderabad,%20India&location=Mumbai,%20India&q=&sort_by=relevance&src=Online%2FHouse%20Ads%2FBKWS_Cloud_APAC"
);
