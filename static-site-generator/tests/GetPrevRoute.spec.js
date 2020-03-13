const fs = require('fs')
const path = require('path')
const templateMap = require('../temp/routeMap.json')
const getPrevRoute = require('../build/getPrevRoute')
const filepathHelper = require('../build/filepathHelper')

describe("Test readFile", () => {
    test("gets a valid back link", () => {
        const routeMap = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'temp/routeMap.json')))
        expect(getPrevRoute(routeMap, 'notes/linux/linuxIntro')).toEqual('notes');
        expect(getPrevRoute(routeMap, 'notes/linux/linuxIntro/index.html')).toEqual('notes');
        expect(getPrevRoute(routeMap, 'notes/tools/toolsIntro/index.html')).toEqual('notes/tools');
        expect(getPrevRoute(routeMap, 'notes/tools/toolsIntro')).toEqual('notes/tools');
        expect(getPrevRoute(routeMap, 'notes')).toEqual('notes');
    });
});
