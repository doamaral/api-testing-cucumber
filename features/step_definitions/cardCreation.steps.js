const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const faker = require('faker');
const request = require("supertest");
const superdebug = require("superdebug");
const env = require('../../env/production.ENV');

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
    let response = await request(env.baseUrl)
      .get(`/cards/${this.cardId}`)
      .query(env.authKeys);
    expect(response.status).to.eql(200)
    expect(response.body.id).to.eql(this.cardId);
});

When("realiza a criação de um card", async function () {
    let body = { name: faker.name.findName(), idList: this.listId };
    let responsePost = await request(env.baseUrl)
      .post("/cards")
      .query(env.authKeys)
      .send(body);
      this.newCardId = responsePost.body.id;
    expect(responsePost.status).to.eql(200);
});

Then('o card é listado com sucesso', async function () {
    let response = await request(env.baseUrl)
      .get(`/cards/${this.newCardId}`)
      .query(env.authKeys);
    expect(response.status).to.eql(200);
});