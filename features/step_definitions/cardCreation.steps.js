const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const faker = require('faker');
const CardComponent = require("../../page-objects/components/CardComponent");

const card = new CardComponent();

Given('existe um board {string}', function (boardId) {
    this.boardId = boardId;
});

Given('uma lista {string}', function (listId) {
    this.listId = listId;
});

When('cria o card', function () {

});

When('requisita o card de id {string}', function (cardId) {
    this.cardId = cardId;
});

Then('o card é retornado com sucesso', async function () {
    let response = await card.getCardById(this.cardId);
    
    expect(response.status).to.eql(200)
    expect(response.body.id).to.eql(this.cardId);
});

When("realiza a criação de um card", async function () {
    let response = await card.createCard(
      "EITA " + faker.name.findName(),
      this.listId
    );
    this.newCardId = response.body.id;
    expect(response.status).to.eql(200);
});

Then('o card é listado com sucesso', async function () {
    let response = await card.getCardById(this.newCardId);
    expect(response.status).to.eql(200);
    expect(response.body.id).to.eql(this.newCardId);
});