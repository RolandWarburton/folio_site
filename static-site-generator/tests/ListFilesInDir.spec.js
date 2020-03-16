const fs = require('fs')
const path = require('path')
const ListFilesInDir = require('../build/listFilesInDir')
const generateRouteMap = require('../build/generateRouteMap')
// const routeMap = require('../temp/routeMap.json')

const notesSlashTools = [
    {
        "filepath": "notes/tools/toolsIntro",
        "template": "./templates/template-dynamic-nav.ejs",
        "title": "toolsIntro"
    },
]

const notes = [
    { "filepath": "notes/bookmarks", "template": "./templates/template-list-item.ejs", "title": "bookmarks" },
    { "filepath": "notes/bucketlist", "template": "templates/template.ejs", "title": "bucketlist" },
    { "filepath": "notes/computerScience", "template": "templates/template.ejs", "title": "computerScience" },
    { "filepath": "notes/linux", "template": "templates/template.ejs", "title": "linux" },
    { "filepath": "notes/tools", "template": "templates/template.ejs", "title": "tools" }
]

const root = [
    {
        "filepath": "about",
        "template": "templates/template.ejs",
        "title": "about",
    },
    {
        "filepath": "index",
        "template": "./templates/template-home.ejs",
        "title": "index",
    },
    {
        "filepath": "notes",
        "template": "./templates/template-list-item.ejs",
        "title": "notes",
    },

]

describe("Test ListAllFilesInDir", () => {
    test("return an array of routes in a given directory", () => {
        // let tpmap = generateTemplateMap()
        // console.log(tpmap)

        const routeMap = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'temp/routeMap.json')))
        expect(ListFilesInDir(routeMap, 'notes/tools/')).toEqual(notesSlashTools);
        expect(ListFilesInDir(routeMap, 'notes/')).toEqual(notes);
        expect(ListFilesInDir(routeMap, 'notes')).toEqual(notes);
        expect(ListFilesInDir(routeMap, '/')).toEqual(root);
    });
});
