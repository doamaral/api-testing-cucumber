const request = require("supertest");
const BaseComponent = require("./baseComponent");

class MemberComponent extends BaseComponent{
    constructor(){
        super();
        this._resource = "/members/me";
    }

    async getMemberBoards(){
        let response = await request(this._baseUrl)
            .get(`${this._resource}/boards`)
            .query(this._auth)
            .use(this._debug);
        return response;
    }
}

module.exports = MemberComponent;