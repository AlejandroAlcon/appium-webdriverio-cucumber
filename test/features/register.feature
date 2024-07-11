Feature: Register

  Scenario: Successful registration with valid data
    Given I open the app
    When I register with valid data
    Then I should see the registration success message

  Scenario: Unsuccessful registration with invalid data
    Given I open the app
    When I register with invalid data
    Then I should see the registration error message