'use strict';

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// run loop for first argument till last
process.argv.slice(2, process.argv.length).forEach(function () {
    
    // getting the url as argument
    var pgurl = "" + process.argv[2];
    console.log('For ', pgurl);

    const document = (new JSDOM(``, {
        url: pgurl,
        pretendToBeVisual: true
    })).window.document;

    console.log('Page Size (in bytes): ', (document.getElementsByTagName('HTML')[0].outerHTML.length) / 1024);
    console.log('Count of <a> tags: ', document.getElementsByTagName('a').length);
});