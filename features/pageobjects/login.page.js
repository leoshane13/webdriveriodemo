
const expectChai = require('chai').expect;
const Page = require('./page');
const testdata = require('../../../scripts/testdata');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get signInBtn() {
        return '#submitButton';
    }

    get emailTextbox() {
        return '#userNameInput';
    }

    get pwdTextBox() {
        return '#passwordInput';
    }

    async fillSignInForm (email, pwd) {
        await $(this.emailTextbox).waitForDisplayed();
        await $(this.emailTextbox).setValue(email);
        await $(this.pwdTextBox).setValue(pwd);
    }

    async clickSignInBtn () {
        await $(this.signInBtn).click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open(super.getPCUrl());
    }

    mOpen() {
        return super.open(super.getMOUrl());
    }

    maxWindow() {
        return super.maxWindow();
    }
}

module.exports = new LoginPage();
