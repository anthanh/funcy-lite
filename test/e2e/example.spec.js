'use strict';

describe('angularjs homepage todo list', function() {

    it('should add a todo', function() {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:9000');

        element(by.css('a[href="login.html"]')).click();

        element(by.css('input[type="email"]')).sendKeys('test@example.com');
        element(by.css('input[type="password"]')).sendKeys('test');
        element(by.css('button[type="submit"]')).click();

    });

});
