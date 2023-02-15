
const expectChai = require('chai').expect;
const Page = require('./page');
const testdata = require('../../scripts/testdata');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get userOptMenu() {
        return '#userOptMenu';
    }

    get locationLink() {
        return '.buttonLink'
    }

    get locationSearchKeyword() {
        return '#txtLocationSearch'
    }

    get locationSearchResultRow() {
        return '.slick-row'
    }

    get locationSearchSelectBtn() {
        return 'button*=Select'
    }

    async waitForUserMenuDispaly () {
        await $(this.userOptMenu).waitForDisplayed();
    }

    async clickLocationLink () {
        await $(this.userOptMenu).waitForEnabled();
        await $(this.locationLink).click();
    }

    async searchForLocation (locationID) {
        await $(this.locationSearchKeyword).waitForDisplayed();
        await $(this.locationSearchKeyword).setValue(locationID);
        await $(this.locationSearchResultRow).click();
    }

    async clickSelectBtn () {
        await $(this.locationSearchSelectBtn).click();
    }

}

module.exports = new HomePage();
