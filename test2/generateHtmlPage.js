const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const util = require('util');

const render = util.promisify(ejs.render)

const generateHtmlpage = async function (templatePath, templateData, filepath) {
    // get the templateFile for this route
    const templateFile = await fs.readFileSync(path.resolve(process.cwd(), templatePath), 'utf-8')

    // get the page content from the js file by requiring the modules page
    templateData.content = await require(filepath).page
    
    // get the target (if any) from the js file by requiring the modules target
    // .target referrers to the online content that this page wants to pull
    templateData.target = await require(filepath).target
    
    // Fetching content from github can be done like this
    // const response = await fetch('https://github.com/');
    // const data = await response.text();
    // console.log(data); 
    
    if (templateData.target != null) {
        const response = await fetch(templateData.target)
        templateData.target = await response.text();
    } else {
        templateData.target = "no target"
    }

    // render html from the template provided. and bake in the templateData json object
    const html = await ejs.render(templateFile, templateData)
    return (html)

}

module.exports = generateHtmlpage