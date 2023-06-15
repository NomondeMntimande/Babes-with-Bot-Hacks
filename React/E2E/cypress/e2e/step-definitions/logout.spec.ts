import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import { Login } from "../page-objects/Login";
import { Dashboard } from "../page-objects/Dashboard";
import { Button } from "../page-objects/Button";
import { Popup } from "../page-objects/Popup";


Given(/^the user has logged in and is on the dashboard page$/, () => {
	cy.visit("http://localhost:3000/");
    Login.ClickLoginButton();
});

When(/^the user executes a logout$/, () => {
	Button.ClickButton("Logout");
});

Then(/^the user sees the logout confirmation pop up$/, () => {
	cy.xpath(Popup.popUpScreen())
      .should('contain','Are you sure you want to log out?')
});


Given(/^the user is in the logout confirmation screen$/, () => {
    cy.visit("http://localhost:3000/");
    Login.ClickLoginButton();
    Button.ClickButton("Logout");

});

When(/^the user cancels the logout$/, () => {
	Button.ClickButton("Cancel");
});

Then(/^the user shall see the employee dashboard$/, () => {
	cy.get(Dashboard.table())
	  .should('be.visible')
});


Given(/^the user is in the logout confirmation screen$/, () => {
    cy.visit("http://localhost:3000/");
    Login.ClickLoginButton();
    Button.ClickButton("Logout");

});

When(/^the user confirms the logout$/, () => {
    Button.ClickButton("Yes");
});

Then(/^the user is on the login screen$/, () => {
    cy.xpath(Login.loginBtn())
    .should('be.visible')
});
