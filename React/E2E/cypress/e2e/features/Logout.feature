Feature: Logout Functionality

    This Feature tests logout scenarios

    Background: 
        Given the user has logged in and is on the dashboard page

    Scenario: As a react-app user, I want to logout
        When the user executes a logout
        Then the user sees the logout confirmation pop up

    Scenario: As a react-app user, I to be able to cancel logging out of my session
        Given the user is in the logout confirmation screen
        When the user cancels the logout
        Then the user shall see the employee dashboard

    Scenario: As a react-app user, I to be able to confirm logging out of my session
        Given the user is in the logout confirmation screen
        When the user confirms the logout
        Then the user is on the login screen