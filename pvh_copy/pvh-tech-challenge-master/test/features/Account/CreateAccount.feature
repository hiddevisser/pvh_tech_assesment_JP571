@CreateAccount
Feature: Create a new account

  Background:
    Given I delete all cookies
    When I navigate to main landing page
    Then I close cookies banner
    And I navigate to account creation pop-up
    And I laksjdflkajs

  @HappyPath
  Scenario: As a user, I can successfully create a new account
    Then I create a new account using random email and password
    When I close the newsletter popup
    Then I verify I am on my account page

  @Negative
  Scenario: As a user, I am unable to create an account using incorrect information
    When I create an account with "pvhchallenge1@yopmail.com" and "SuperSecretPassword1!"
    Then I verify error message "Oeps, er lijkt al een account met dit e-mailadres te bestaan." is displayed

  @Negative
  Scenario: As a user, I am unable to create an account without providing an e-mail address
    When I create an account with "" and "Password123!"
    Then I verify missing email error message is displayed

  @Negative
  Scenario: As a user, I am unable to create an account without providing a password
    When I create an account with "pvhchallenge2@yopmail.com" and ""
    Then I verify missing password error message is displayed

  @Negative
  Scenario: As a user, I am unable to create an account without accepting terms and conditions
    When I create an account with "pvhchallengeABC@yopmail.com" and "PasswordSecret123!" and do not accept terms
    Then I verify error message "Bevestig dat je akkoord gaat met de algemene voorwaarden" is displayed

