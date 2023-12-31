Feature: Login Functionality

    This Feature tests login scenarios

    Background: 
        Given the user on the react-app landing page

    Scenario: As a react-app user, I want to login with valid creds in order to see the dashboard
        Given the user is on the login screen
        When the user executes a login
        Then the user shall see the employee dashboard

    Scenario: As a react-app user, I want to to see an error when I login with invalid credentials
        Given the user is on the login screen
        When the user executes a login with invalid credentials
        Then the user shall see an error modal