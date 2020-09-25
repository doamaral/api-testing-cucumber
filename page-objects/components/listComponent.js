const request = require("supertest");
const BasePage = require("./baseComponent");

class ListComponent extends BasePage {
  constructor() {
    super();
    this._resource = "/lists";
  }

  async getListById(listId) {
    let response = await request(this._baseUrl)
      .get(`${this._resource}/${listId}`)
      .query(this._auth)
      .use(this._debug);
    return response;
  }

  async createList(name, idBoard) {
    let body = { name: name, idBoard: idBoard };
    let response = await request(this._baseUrl)
      .post(`${this._resource}`)
      .query(this._auth)
      .send(body)
      .use(this._debug);

    return response;
  }

  async archieveList(listId) {
    let response = await request(this._baseUrl)
      .put(`${this._resource}/${listId}/closed`)
      .query(this._auth)
      .use(this._debug);
    return response;
  }

  async getBoardListIsOn(listId) {
    let response = await request(this._baseUrl)
      .get(`${this._resource}/${listId}/board`)
      .query(this._auth)
      .use(this._debug);
    return response;
  }
}

module.exports = ListComponent;