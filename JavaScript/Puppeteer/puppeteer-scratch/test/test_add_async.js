const expect = require('chai').expect;


async function add(a, b) {
    return Promise.resolve(a + b);
}


describe('Test async add function', () => {
    it('2 + 2 is 4', async () => {
        const p = await add(2, 2);
        expect(p).to.equal(5);  // WRONG
    });

    it('3 + 3 is 6', async () => {
        const p = await add(3, 3);
        expect(p).to.equal(6);
    });
});
