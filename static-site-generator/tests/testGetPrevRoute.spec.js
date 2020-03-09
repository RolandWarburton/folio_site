const templateMap = require('../temp/templateMap.json')
const getPrevRoute = require('../build/getPrevRoute')
const filepathHelper = require('../build/filepathHelper')

describe("Test readFile", () => {
    test("gets a valid back link", () => {
        expect(getPrevRoute(templateMap, 'notes/linux/linuxIntro/index.html')).toEqual('notes');
    });
});
