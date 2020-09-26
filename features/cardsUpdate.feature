
Feature: Card Update
    As a User I want to be able to edit a card so I can fix stuff
    @cardCreation
    Scenario: Card successfully updated
        Given there is a board "5f6d31957980df5232a28312"
        And there is a list "5f6d31a273b62b43fcebf053"
        And I have a card created with the name "My first card"
        When I update the card name to "My first card UPDATED"
        Then the cards name get changed to "My first card UPDATED"