const puppeteer = require('puppeteer');
const fs = require('fs'),
      PNG = require('pngjs').PNG,
      pixelmatch = require('pixelmatch');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setViewport({
        'width': 1350,
        'height': 690
    });
    await page.goto('https://example.com');
    await page.screenshot({path: 'observed.png'});
    await browser.close();

    let img1 = fs.createReadStream('observed.png').pipe(new PNG()).on('parsed', doneReading),
        img2 = fs.createReadStream('expected.png').pipe(new PNG()).on('parsed', doneReading),
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
        console.log(`Number of mismatched pixels: ${pixel_count}`)

        // Save the image diff for reference
        diff.pack().pipe(fs.createWriteStream('diff.png'));
    }
})();
