Feature: Login

  Scenario: Successful login with valid credentials
    Given I open the app
    When I login with valid credentials
    Then I should see the success message

  Scenario: Unsuccessful login with invalid credentials
    Given I open the app
    When I login with invalid credentials
    Then I should see the error message