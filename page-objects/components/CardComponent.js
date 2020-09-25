const request = require("supertest");
const superdebug = require("superdebug");
const env = require("../../env/production.ENV");

class CardComponent{

    constructor(){
        this._baseUrl = env.baseUrl;
        this._auth = env.authKeys;
    }

    async getCardById(cardId){
        let response = await request(this._baseUrl)
            .get(`/cards/${cardId}`)
            .query(this._auth)
            .use(superdebug());
        return response;
    }

    async createCard(name, listId){
        let body = { name: name, idList: listId };
        let response = await request(this._baseUrl)
          .post("/cards")
          .query(this._auth)
          .send(body)
          .use(superdebug());
        
          return response;
    }
}

module.exports = CardComponent;