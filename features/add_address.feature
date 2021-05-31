Feature: Add address to address book

  @Address
  Scenario Outline: As a user, I can successfully add a new address
    Given I am starting the browser and navigate to the tommy website
      And I am closing the cookies pop-up by accepting them
      And I navigate to the login screen
      And I login with <username> and and <password>
      And I should see a welcome message saying <message>
      And I navigate to my account
      And I close the newsletter popup
      And I navigate to address book
      And I click add address
    When I enter the prerequisite information "<firstname>", "<lastname>", "<street>", "<house number>", "<place>", "<postal code>"
    Then I verify address was added by "<street>" and delete it
    Examples:
      | username                | password      | message   | firstname | lastname | street     | house number | place     | postal code |
      | coyinov715@slowimo.com  | pvhTest@123!  | HOI!      | hidde     | visser   | Romeinlaan | 146          | Heemstede | 2121 AA     |