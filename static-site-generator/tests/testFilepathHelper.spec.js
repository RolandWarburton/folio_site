// const templateMap = require('../temp/templateMap.json')
// const getPrevRoute = require('../build/getPrevRoute')
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
    test("sanitizes HTML filepaths", () => {
        const expected = 'notes/linux/linuxIntro'

        expect(filepathHelper.sanitizeHTMLfilepath('notes/linux/linuxIntro/index.html')).toEqual(expected);
        expect(filepathHelper.sanitizeHTMLfilepath('notes/linux/linuxIntro')).toEqual(expected);
        expect(filepathHelper.sanitizeHTMLfilepath(["notes", "linux", "linuxIntro", "index.html"])).toEqual(expected);
        expect(filepathHelper.sanitizeHTMLfilepath(["notes", "linux", "linuxIntro"])).toEqual(expected);
    });
});

// describe("Test BackLink", () => {
//     test("converts a filepath To Array", () => {
//         // the expected result
//         const expected = ["notes", "linux", "linuxIntro", "index.html"]

//         // test an already formed filepath string
//         const filepathString = 'notes/linux/linuxIntro/index.html'
//         // test a filepath that is an array
//         const filepathArray = 'notes/linux/linuxIntro/index.html'

//         expect(filepathToArray(filepathString)).toEqual(expected);
//         expect(filepathToArray(filepathArray)).toEqual(expected);
//     });
// });
