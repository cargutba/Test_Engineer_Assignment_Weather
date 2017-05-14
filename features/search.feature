Feature: Global Search By City
    As a website user
    I should be able to search by city
    In order to find specified city

    Scenario: Perform search by city
        Given I go to the homepage
        When I insert "Amsterdam" in the global search field
        And I select "Amsterdam, Noord-Holland, Netherlands" from the list
        Then I should see the weather page