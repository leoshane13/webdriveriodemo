/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
const testdata = require('../../../scripts/testdata');
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    constructor() {}

    open(path) {
        return browser.url(`${path}`)
    }

    maxWindow() {
        return browser.maximizeWindow()
    }

    getPCUrl () {
      if(process.env.NODE_ENV == 1){
        return testdata.CommonData.TRAINING;
      }else if(process.env.NODE_ENV == 2){
        return testdata.CommonData.TRAINING2;
      }else if(process.env.NODE_ENV == 3){
        return testdata.CommonData.NAVIGATORDEV;
      }
  }

    getMOUrl () {
      
    }
}
