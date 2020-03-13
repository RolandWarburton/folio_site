const fs = require('fs')
const path = require('path')
const ListFilesInDir = require('../build/listFilesInDir')
const generateRouteMap = require('../build/generateRouteMap')
// const routeMap = require('../temp/routeMap.json')

const notesSlashTools = [
    {
        "filepath": "notes/tools/toolsIntro",
        "template":  "templates/template.ejs",
        "title": "toolsIntro"
    },
]

const notes = [
    { "filepath": "notes/ComputerScience", "template": "templates/template.ejs", "title": "ComputerScience" },
    { "filepath": "notes/bookmarks", "template": "templates/template.ejs", "title": "bookmarks" },
    { "filepath": "notes/bucketlist", "template": "templates/template.ejs", "title": "bucketlist" },
    { "filepath": "notes/tools", "template": "templates/template.ejs", "title": "tools" }
]

describe("Test ListAllFilesInDir", () => {
    test("return an object of routes in a given directory", () => {
        // let tpmap = generateTemplateMap()
        // console.log(tpmap)

        const routeMap = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'temp/routeMap.json')))
        expect(ListFilesInDir(routeMap, 'notes/tools/')).toEqual(notesSlashTools);
        expect(ListFilesInDir(routeMap, 'notes/')).toEqual(notes);
        expect(ListFilesInDir(routeMap, 'notes')).toEqual(notes);
    });
});
