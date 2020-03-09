const fs = require('fs')
const filepathHelper = require('../build/filepathHelper')

describe("Test filepathHelper", () => {
    test("converts any filepath To String", () => {
        const expected = 'notes/linux/linuxIntro/index.html'

        const filepathString = 'notes/linux/linuxIntro/index.html'
        const filepathArray = ["notes", "linux", "linuxIntro", "index.html"]

        expect(filepathHelper.filepathToString(filepathString)).toEqual(expected);
        expect(filepathHelper.filepathToString(filepathArray)).toEqual(expected);
    });
});

describe("Test filepathHelper", () => {
    test("converts any filepath To Array", () => {
        const expected = ["notes", "linux", "linuxIntro"]

        const filepathString = 'notes/linux/linuxIntro/index.html'
        const filepathArray = ["notes", "linux", "linuxIntro", "index.html"]

        expect(filepathHelper.filepathToArray(filepathString)).toEqual(expected);
        expect(filepathHelper.filepathToArray(filepathArray)).toEqual(expected);
        expect(filepathHelper.filepathToArray('notes/')).toEqual(['notes']);
    });
});

describe("Test filepathHelper", () => {
    test("sanitizes HTML filepaths", () => {
        const expected = 'notes/linux/linuxIntro'

        expect(filepathHelper.sanitizeHTMLfilepath('notes/')).toEqual('notes');
        expect(filepathHelper.sanitizeHTMLfilepath('notes/linux/linuxIntro/index.html')).toEqual(expected);
        expect(filepathHelper.sanitizeHTMLfilepath('notes/linux/linuxIntro')).toEqual(expected);
        expect(filepathHelper.sanitizeHTMLfilepath(["notes", "linux", "linuxIntro", "index.html"])).toEqual(expected);
        expect(filepathHelper.sanitizeHTMLfilepath(["notes", "linux", "linuxIntro"])).toEqual(expected);
    });
});

describe("Test filepathHelper", () => {
    test("Gets correct route length", () => {

        expect(filepathHelper.lengthOfRoute('notes/')).toEqual(1);
        expect(filepathHelper.lengthOfRoute('notes/bookmarks')).toEqual(2);
    });
});

describe("Test filepathHelper", () => {
    test("Check if a path exists", () => {
        templateMap = JSON.parse(fs.readFileSync('./temp/templateMap.json'))

        expect(filepathHelper.checkIfPathExists(templateMap, 'notes/')).toEqual(true);
        expect(filepathHelper.checkIfPathExists(templateMap, 'notes/bookmarks')).toEqual(true);
        expect(filepathHelper.checkIfPathExists(templateMap, 'notes/bookmarks/')).toEqual(true);
    });
});
