const listFilesInDir = require('../build/listFilesInDir')
const getRoutePositionInDir = require('../build/getRoutePositionInDir')
const getLinkToHtmlFilepath = require('../build/getLinkToHtmlFilepath');

describe("Test listFilesInDir", () => {
	test("Check if a path exists", () => {
		expect(listFilesInDir("tests/testViews")).toEqual(["about.js", "index.js"]);
	});
});


describe("Test getRoutePositionInDir", () => {
	test("Check if a path exists", () => {
		expect(getRoutePositionInDir("tests/testViews", "about.js")).toEqual(0);
		expect(getRoutePositionInDir("tests/testViews", "index.js")).toEqual(1);
	});
});


describe("Test getting html filepath", () => {
	test("Check if a path exists", () => {
		// expect(getLinkToHtmlFilepath("about.js", "index.js")).toEqual("/index.html");
		expect(getLinkToHtmlFilepath("index.js", "about.js")).toEqual("/about/index.html");
	});
});
