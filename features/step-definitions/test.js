const { Given, When, Then } = require('@wdio/cucumber-framework');

When(/^I click the baidu logo$/, async () => {
    await browser.url("http://www.baidu.com")
});

Then(/^I should navigate to baidu home page$/, async () => {
    
});

Given(/^I open baidu homepage$/, async () => {
    
});

When(/^I input search key word$/, async () => {
    
});

When(/^I click the search button$/, async () => {
    
});

Then(/^I should navigate to search result page$/, async () => {
    
});