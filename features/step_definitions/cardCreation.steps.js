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
  if (response.status == 200){
    newCardId = response.body.id;
  }
  this.cardCreationResponse = response.status;
});

Then("this card is listed on that list", async function () {
  let response = await card.getCardById(newCardId);
  expect(response.status).to.eql(200);
  expect(newCardId).to.eql(response.body.id);
  expect(this.listId).to.eql(response.body.idList);
});

Given("there is a not a list", function () {
  this.listId = null;
});

Then("we get error", function () {
  expect(this.cardCreationResponse).to.eql(400);
});

AfterAll(async function(){
    let responseNewCard = await card.deleteCard(newCardId);
    expect(responseNewCard.status).to.eql(200);
})