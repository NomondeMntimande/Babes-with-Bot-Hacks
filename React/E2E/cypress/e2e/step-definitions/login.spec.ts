import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { Login } from "../page-objects/Login";
import { Dashboard } from "../page-objects/Dashboard";
import { Input } from "../page-objects/Input";
import { Popup } from "../page-objects/Popup";

Given(/^the user on the react-app landing page$/, () => {
	cy.visit("http://localhost:3000/");
});

Given(/^the user is on the login screen$/, () => {
	cy.xpath(Login.loginBtn())
	  .should('be.visible')
});

When(/^the user executes a login$/, () => {
	Login.ClickLoginButton();
});

Then(/^the user shall see the employee dashboard$/, () => {
	cy.get(Dashboard.table())
	  .should('be.visible')
});


Given(/^the user is on the login screen$/, () => {
	cy.visit("http://localhost:3000/");
});

When(/^the user executes a login with invalid credentials$/, () => {
	cy.xpath(Input.input('email'))
	  .clear()
	  .type('example@example.co.za')

	Login.ClickLoginButton()
});

Then(/^the user shall see an error modal$/, () => {
	cy.xpath(Popup.popUpScreen())
      .should('contain','Incorrect email or password.')
});

