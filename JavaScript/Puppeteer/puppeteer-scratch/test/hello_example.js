const puppeteer = require('puppeteer'),
      expect = require('chai').expect,
      fs = require('fs'),
      PNG = require('pngjs').PNG,
      pixelmatch = require('pixelmatch');


describe('Puppeteer - Example.com', function() {
    it('Go to page, take screenshot, and compare with expected', async function() {
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto('https://example.com');
            await page.screenshot({path: 'observed.png'});
            await browser.close();

            let img1 = fs.createReadStream('observed.png').pipe(new PNG()).on('parsed', doneReading),
                img2 = fs.createReadStream('example.png').pipe(new PNG()).on('parsed', doneReading),
                filesRead = 0;

            function doneReading() {
                if (++filesRead < 2) return;
                let diff = new PNG({width: img1.width, height: img1.height});

                // NOTE: ALL image dimensions must be equal
                let pixel_count = pixelmatch(
                    img1.data, img2.data,
                    diff.data,
                    img1.width, img1.height,
                    { threshold: 0.1 }
                );

                if (pixel_count > 0) {
                    // console.log(`Number of mismatched pixels: ${pixel_count}`);

                    // Save the image diff for reference
                    diff.pack().pipe(fs.createWriteStream('diff.png'));
                }

                expect(pixel_count).to.equal(0);
            }
        })();
    });
});
