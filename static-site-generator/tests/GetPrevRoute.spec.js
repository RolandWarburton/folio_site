const templateMap = require('../temp/templateMap.json')
const getPrevRoute = require('../build/getPrevRoute')
const filepathHelper = require('../build/filepathHelper')

describe("Test readFile", () => {
    test("gets a valid back link", () => {
        expect(getPrevRoute(templateMap, 'notes/linux/linuxIntro')).toEqual('notes');
        expect(getPrevRoute(templateMap, 'notes/linux/linuxIntro/index.html')).toEqual('notes');
        expect(getPrevRoute(templateMap, 'notes/tools/toolsIntro/index.html')).toEqual('notes/tools');
        expect(getPrevRoute(templateMap, 'notes/tools/toolsIntro')).toEqual('notes/tools');
        expect(getPrevRoute(templateMap, 'notes')).toEqual('notes');
    });
});
