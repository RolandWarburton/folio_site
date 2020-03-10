const fs = require('fs')
const ListFilesInDir = require('../build/listFilesInDir')
const generateTemplateMap = require('../build/generateTemplateMap')
const listFilesInDir = require('../build/listFilesInDir')

// listFilesInDir() will return a list of all the files in a directory
// then we test to see if a particular filepath is contained in that array, and return its index

describe("Test ListAllFilesInDir", () => {
    test("return an object of routes in a given directory", () => {
        let templateMap = generateTemplateMap()

        // return the position of notes/tools/toolsIntro in the notes/tools directory
        const testFirstPos = listFilesInDir(templateMap, 'notes/tools').findIndex(function (route, i) {
            return route.filepath === 'notes/tools/toolsIntro'
        });

        // return the position of notes/bookmarks in the notes/ directory
        const testSecondPos = listFilesInDir(templateMap, 'notes/').findIndex(function (route, i) {
            return route.filepath === 'notes/bookmarks'
        });

        expect(testFirstPos).toEqual(0);
        expect(testSecondPos).toEqual(1);
    });
});
