import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { Login } from "../page-objects/Login";
import { Input } from "../page-objects/Input";
import { Button } from "../page-objects/Button";

Given(/^the user has logged in and is on the dashboard page$/, () => {
	cy.visit("http://localhost:3000/");
    Login.ClickLoginButton();
});

When(/^the clicks the Add Employee Button$/, () => {
	Button.ClickButton("Add Employee");
});

When(/^the user fills in the fields on the form$/, () => {
	cy.xpath(Input.input('firstName'))
      .click()
      .type('Bob')
    
    cy.xpath(Input.input('lastName'))
      .click()
      .type('Jones')

    cy.xpath(Input.input('email'))
      .click()
      .type('bob.jones@example.com')
    
    cy.xpath(Input.input('salary'))
      .click()
      .type('200')
    
    cy.xpath(Input.input('date'))
      .click()
      .type('2023-06-15')
});

When(/^the user clicks the Add Button$/, () => {
	cy.xpath(Input.submitInput())
      .click()
});

Then(/^the user shall see the employee added to the dashboard$/, () => {
	return true;
});
