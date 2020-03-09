const path = require('path')
const fs = require('fs')
const getPrevRoute = require('../build/getPrevRoute')
const filepathHelper = require('../build/filepathHelper')


// takes a filepath relative to src/views/... and will return all pages in that directory
const ListAllFilesInDir = function (templateMap, filepath) {
    const targetMap = './temp/templateMap.json'
    const routes = JSON.parse(fs.readFileSync(targetMap))
    const result = []

    routes.forEach((route) => {
        route.filepath = filepathHelper.sanitizeHTMLfilepath(route.filepath)

        if (filepathHelper.lengthOfRoute(route.filepath) === filepathHelper.lengthOfRoute(filepath)) {
            RouteA = route.filepath
            RouteB = filepath
            if (RouteA === RouteB) {
                result.push(route)
            }
        }
    })
    return result
}

describe("Test ListAllFilesInDir", () => {
    test("return an object of routes in a given directory", () => {
        const expected = [
            {
                "filepath": "about",
                "title": "about",
                "filepath": "notes/tools",
                "templatePath": "./templates/template-list-item.ejs",
                "title": "tools",
            },
        ]
        const data = ListAllFilesInDir('../temp/templateMap.json', 'notes/tools')
        expect(data).toEqual(expected);
    });
});
