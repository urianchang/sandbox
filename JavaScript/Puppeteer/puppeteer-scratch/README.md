# Puppeteer Scratchpad

* [Mocha](https://mochajs.org/) to set up test suites
* [Puppeteer](https://pptr.dev/) for web browsing
* [Chai](https://www.chaijs.com/) for assertions
* [pixelmatch](https://github.com/mapbox/pixelmatch) for comparing screenshots

**Helpful commands**

To run all tests
```
yarn test
```

Run test(s) based on regex of test name
```
yarn test --grep "Array"
```

Output to xunit and write to xml file
```
yarn test --reporter=xunit --reporter-options output=results.xml
```
