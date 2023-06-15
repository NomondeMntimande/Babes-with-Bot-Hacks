Feature: Add User Functionality

    This Feature tests the Add Employee functionality

    Background:
        Given the user has logged in and is on the dashboard page

    Scenario: As a react-app user, I want to add an employee and see it on the dashboard
        When the clicks the Add Employee Button
        And the user fills in the fields on the form
        And the user clicks the Add Button
        Then the user shall see the employee added to the dashboard