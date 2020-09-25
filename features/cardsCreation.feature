Feature: Card Creation
    As a user, I wanto to create cards to list activities and get myself organized
    
    Scenario: Card creation is OK
        Given there is a board "5f6d31957980df5232a28312"
        And there is a list "5f6d31a273b62b43fcebf053"
        When a card is created
        Then this card is listed on that list
    
    Scenario: User should not be able to create a card without picking a List first
        Given there is a board "5f6d31957980df5232a28312"
        And there is a not a list
        When a card is created
        Then we get error
