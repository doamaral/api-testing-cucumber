const request = require("supertest");
const BasePage = require("./baseComponent");

class BoardComponent extends BasePage {
  constructor() {
    super();
    this._resource = "/boards";
  }

  async getBoardById(idBoard) {
    let response = await request(this._baseUrl)
      .get(`${this._resource}/${idBoard}`)
      .query(this._auth)
      .use(this._debug);
    return response;
  }

  async createBoard(name) {
    let body = { name: name};
    let response = await request(this._baseUrl)
      .post(`${this._resource}`)
      .query(this._auth)
      .send(body)
      .use(this._debug);

    return response;
  }
}

module.exports = BoardComponent;