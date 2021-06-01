@Login
Feature: Testing the login functionality of the Tommy site

  Scenario Outline: As a user, I should see a welcome message when I am logged in
    Given I am starting the browser and navigate to the tommy website
    And I am closing the cookies pop-up by accepting them
    And I navigate to the login screen
    When I login with <username> and <password>
    Then I should see a welcome message saying <message>
    Examples:
      | username                | password      | message   |
      | coyinov715@slowimo.com  | pvhTest@123!  | HOI!      |

  Scenario Outline: As a user, I should see an error message when entering invalid credentials
    Given I am starting the browser and navigate to the tommy website
    And I am closing the cookies pop-up by accepting them
    And I navigate to the login screen
    When I login with <username> and <password>
    Then I should see an error message saying <message>
    Examples:
      | username             | password   | message                                                             |
      | hidde_test@gmail.com | pass1234!  | Je gebruikersnaam en wachtwoord matchen niet. Probeer het nog eens. |
      | hidde_test           | pass1234!  | Sorry, dit is geen geldig e-mailadres                               |