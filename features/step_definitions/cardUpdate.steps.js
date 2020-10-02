const { Given, When, Then } = require("@cucumber/cucumber");
const expect = require('chai').expect;

const DashboardPage = require("../../page-objects/dashboardPage");

const dashboardPage = new DashboardPage();
const card = dashboardPage.cardComponent;
let newCardId;

Given('I have a card created with the name {string}', async function (cardName) {
    let response = await card.createCard(cardName, this.listId);
    if (response.status == 200) {
      newCardId = response.body.id;
    }
    this.cardCreationResponse = response.status;
});

When('I update the card name to {string}', async function (newCardName) {
    let obj = {name: newCardName}
    await card.updateCard(newCardId, obj);
});

Then("the cards name get changed to {string}", async function (newCardName) {
    let response = await card.getCardById(newCardId);
    expect(response.body.name).to.eql(newCardName);
});


