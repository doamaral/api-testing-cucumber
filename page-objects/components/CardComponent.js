const request = require("supertest");
const BaseComponent = require("./baseComponent");

class CardComponent extends BaseComponent {
  constructor() {
    super();
    this._resource = "/cards";
  }

  async getCardById(cardId) {
    let response = await request(this._baseUrl)
      .get(`${this._resource}/${cardId}`)
      .query(this._auth)
      .use(this._debug);
    return response;
  }

  async createCard(name, listId) {
    let body = { name: name, idList: listId };
    let response = await request(this._baseUrl)
      .post(`${this._resource}`)
      .query(this._auth)
      .send(body)
      .use(this._debug);

    return response;
  }

  async deleteCard(cardId) {
    let response = await request(this._baseUrl)
      .delete(`${this._resource}/${cardId}`)
      .query(this._auth)
      .use(this._debug);
    return response;
  }
}

module.exports = CardComponent;