Feature: Criação de Card em um Board
    O usuário deve ser capaz de criar um card em um board existente
    
    Scenario: Criação de um card
        Given there is a board "5f6d31957980df5232a28312"
        And there is a list "5f6d31a273b62b43fcebf053"
        When a card is created
        Then this card is listed on that list
