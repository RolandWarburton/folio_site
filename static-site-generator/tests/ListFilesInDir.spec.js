const fs = require('fs')
const ListFilesInDir = require('../build/listFilesInDir')
const generateTemplateMap = require('../build/generateTemplateMap')

const notesSlashTools = [
    {
        "filepath": "notes/tools/toolsIntro",
        "templatePath": "./templates/template-list-item.ejs",
        "title": "toolsIntro"
    },
]

// const notes = ['bookmarks', 'bucketlist', 'ComputerScience', 'tools']
const notes = [
    {
        "filepath": "notes/ComputerScience",
        "templatePath": "./templates/template-list-item.ejs",
        "title": "ComputerScience",
    },
    {
        "filepath": "notes/bookmarks",
        "templatePath": "./templates/template-list-item.ejs",
        "title": "bookmarks",
    },
    {
        "filepath": "notes/bucketlist",
        "templatePath": "./templates/template-list-item.ejs",
        "title": "bucketlist",
    },
    {
        "filepath": "notes/computerScience/CSintro",
        "templatePath": "./templates/template-list-item.ejs",
        "title": "CSintro",
    },
    {
        "filepath": "notes/linux/linuxIntro",
        "templatePath": "./templates/template-list-item.ejs",
        "title": "linuxIntro",
    },
    {
        "filepath": "notes/tools",
        "templatePath": "./templates/template-list-item.ejs",
        "title": "tools",
    },
]


describe("Test ListAllFilesInDir", () => {
    test("return an object of routes in a given directory", () => {
        let tpmap = generateTemplateMap()
        // console.log(tpmap)

        const targetMap = JSON.parse(fs.readFileSync('./temp/templateMap.json'))
        expect(ListFilesInDir(tpmap, 'notes/tools/')).toEqual(notesSlashTools);
        expect(ListFilesInDir(tpmap, 'notes/')).toEqual(notes);
    });
});
