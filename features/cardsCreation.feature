Feature: Criação de Card em um Board
    O usuário deve ser capaz de criar um card em um board existente
    
    Background: Usuário logado e board existente
        Given existe um board "5f6d31957980df5232a28312"
        And uma lista "5f6d31a273b62b43fcebf053"

    Scenario: Recuperação de um card pelo ID 
        When requisita o card de id "5f6d33d29ef23a7a21d1dae9"
        Then o card é retornado com sucesso
    
    Scenario: Criação de um card
        When realiza a criação de um card
        Then o card é listado com sucesso
