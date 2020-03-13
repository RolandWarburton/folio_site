const fs = require('fs')
const path = require('path')
const fp = require('../build/filepathHelper')

describe("Test filePath", () => {
    test("converts any filepath To String", () => {
        const expected = 'notes/linux/linuxIntro/index.html'

        const filepathString = 'notes/linux/linuxIntro/index.html'
        const filepathArray = ["notes", "linux", "linuxIntro", "index.html"]

        expect(fp.filepathToString('notes/linux/linuxIntro/index.html')).toEqual(expected);
        expect(fp.filepathToString(["notes", "linux", "linuxIntro", "index.html"])).toEqual(expected);
    });
});

describe("Test filePath", () => {
    test("converts any filepath To Array", () => {
        const expected = ["notes", "linux", "linuxIntro"]

        const filepathString = 'notes/linux/linuxIntro/index.html'
        const filepathArray = ["notes", "linux", "linuxIntro", "index.html"]

        expect(fp.filepathToArray(filepathString)).toEqual(expected);
        expect(fp.filepathToArray(filepathArray)).toEqual(expected);
        expect(fp.filepathToArray('notes/')).toEqual(['notes']);
        expect(fp.filepathToArray('')).toEqual([]);
        expect(fp.filepathToArray('/')).toEqual([]);
    });
});

describe("Test filePath", () => {
    test("sanitizes HTML filepaths", () => {
        const expected = 'notes/linux/linuxIntro'

        expect(fp.sanitizeHTMLfilepath('notes/')).toEqual('notes');
        expect(fp.sanitizeHTMLfilepath('notes/linux/linuxIntro/index.html')).toEqual(expected);
        expect(fp.sanitizeHTMLfilepath('notes/linux/linuxIntro')).toEqual(expected);
        expect(fp.sanitizeHTMLfilepath(["notes", "linux", "linuxIntro", "index.html"])).toEqual(expected);
        expect(fp.sanitizeHTMLfilepath(["notes", "linux", "linuxIntro"])).toEqual(expected);
        expect(fp.sanitizeHTMLfilepath('/notes/linux/linuxIntro')).toEqual(expected);
    });
});

describe("Test filePath", () => {
    test("Gets correct route length", () => {

        expect(fp.lengthOfRoute('notes/')).toEqual(1);
        expect(fp.lengthOfRoute('notes/bookmarks')).toEqual(2);
        expect(fp.lengthOfRoute('')).toEqual(0);
        expect(fp.lengthOfRoute('/')).toEqual(0);
        expect(fp.lengthOfRoute('/notes/test')).toEqual(2);
        expect(fp.lengthOfRoute('notes')).toEqual(1);
    });
});

describe("Test filePath", () => {
    test("Check if a path exists", () => {
        const routeMap = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'temp/routeMap.json')))

        expect(fp.checkIfPathExists(routeMap, 'notes/')).toEqual(true);
        expect(fp.checkIfPathExists(routeMap, 'notes/bookmarks')).toEqual(true);
        expect(fp.checkIfPathExists(routeMap, 'notes/bookmarks/')).toEqual(true);
    });
});
