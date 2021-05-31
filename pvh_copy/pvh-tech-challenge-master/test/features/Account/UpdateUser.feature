@AddAddress
Feature: Add address to address book

  @HappyPath
  Scenario Outline: As a user, I can successfully add a new address
    Given I delete all cookies
    When I navigate to main landing page
    Then I close cookies banner
    And I navigate to account login pop-up
    Then I login to account using "pvhchallenge1@yopmail.com" and "Tested123"
    And I verify I am logged in
    Then I navigate to my account
    And I close the newsletter popup
    And I navigate to address book
    Then I click add address
    And I input and verify address was added

