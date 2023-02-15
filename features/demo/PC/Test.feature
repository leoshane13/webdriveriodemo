@login @pc
Feature: Open baidu

  Scenario Outline: As a user, I can open baidu
    Given I open baidu homepage
    When I input search key word
    And I click the search button
    Then I should navigate to search result page

  Scenario Outline: As a user, I can return to homepage
    When I click the baidu logo
    Then I should navigate to baidu home page