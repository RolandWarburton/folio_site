const fs = require('fs')
const ListFilesInDir = require('../build/listFilesInDir')

const notesSlashTools = [
    {
        "filepath": "notes/tools/toolsIntro",
        "title": "toolsIntro"
    },
]

// const notes = ['bookmarks', 'bucketlist', 'ComputerScience', 'tools']
const notes = [
    { "filepath": "notes/ComputerScience", "title": "ComputerScience" }, 
    { "filepath": "notes/bookmarks", "title": "bookmarks" }, 
    { "filepath": "notes/bucketlist", "title": "bucketlist" }, 
    { "filepath": "notes/tools", "title": "tools" }
]

describe("Test ListAllFilesInDir", () => {
    test("return an object of routes in a given directory", () => {

        const targetMap = JSON.parse(fs.readFileSync('./temp/templateMap.json'))
        expect(ListFilesInDir('notes/tools/')).toEqual(notesSlashTools);
        expect(ListFilesInDir('notes/')).toEqual(notes);
    });
});
