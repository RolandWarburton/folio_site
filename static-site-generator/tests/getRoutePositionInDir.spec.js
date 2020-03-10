const fs = require('fs')
const ListFilesInDir = require('../build/listFilesInDir')
const generateTemplateMap = require('../build/generateTemplateMap')
const listFilesInDir = require('../build/listFilesInDir')
const getRoutePositionInDir = require('../build/getRoutePositionInDir')

// listFilesInDir() will return a list of all the files in a directory
// then we test to see if a particular filepath is contained in that array, and return its index

describe("Test ListAllFilesInDir", () => {
    test("returns the index of an a filepath in its own directory", () => {
        let templateMap = generateTemplateMap()

        expect(getRoutePositionInDir(templateMap, 'notes/tools')).toEqual(3);
        expect(getRoutePositionInDir(templateMap, 'notes/tools/toolsIntro')).toEqual(0);
    });
});
