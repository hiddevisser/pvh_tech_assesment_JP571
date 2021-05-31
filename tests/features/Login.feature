Feature: Testing the login functionality

  Scenario Outline: Login error should appear when using invalid credentials
    Given I open the browser and navigate to the Tommy site
    When I login with <username> and <password>
    Then I see the error message with <error>
    Examples:
      | username              | password | error                                                               |
      | hidde_test@gmail.com  | test123  | Je gebruikersnaam en wachtwoord matchen niet. Probeer het nog eens  |
      |                       | test123  | Vul het veld in                                                     |
      | hidde_test            |          | Sorry, dit is geen geldig e-mailadres                               |

  Scenario Outline: User should be able to login with valid credentials
    Given I open the browser and navigate to the Tommy site
    When I login with <username> and <password>
    Then I see the welcome message <welcome message>
    Examples:
      | username                  | password      | welcome message   |
      | coyinov715@slowimo.com    | pvhTest@123!  | HOI!              |