const fs = require('fs')
const path = require('path')
const ListFilesInDir = require('../build/listFilesInDir')
const generateRouteMap = require('../build/generateRouteMap')
const listFilesInDir = require('../build/listFilesInDir')
const getRoutePositionInDir = require('../build/getRoutePositionInDir')

// listFilesInDir() will return a list of all the files in a directory
// then we test to see if a particular filepath is contained in that array, and return its index

describe("Test ListAllFilesInDir", () => {
    test("returns the index of an a filepath in its own directory", () => {

        const routeMap = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'temp/routeMap.json')))
        expect(getRoutePositionInDir(routeMap, 'notes/tools')).toEqual(3);
        expect(getRoutePositionInDir(routeMap, 'notes/tools/toolsIntro')).toEqual(0);
    });
});
