const { Given, When, Then, AfterAll } = require("@cucumber/cucumber");
const expect = require('chai').expect;
const faker = require('faker');
const CardComponent = require("../../page-objects/components/cardComponent");

const card = new CardComponent();

var newCardId = null;

Given("there is a board {string}", function (boardId) {
  this.boardId = boardId;
});

Given("there is a list {string}", function (listId) {
  this.listId = listId;
});

When("a card is created", async function () {
  let response = await card.createCard(faker.name.findName(), this.listId);
  this.newCardId = response.body.id;
  newCardId = this.newCardId;
  expect(response.status).to.eql(200);
});

Then("this card is listed on that list", async function () {
  let response = await card.getCardById(newCardId);
  expect(response.status).to.eql(200);
  expect(newCardId).to.eql(response.body.id);
  expect(this.listId).to.eql(response.body.idList);
});

AfterAll(async function(){
    let responseNewCard = await card.deleteCard(newCardId);
    expect(responseNewCard.status).to.eql(200);
})