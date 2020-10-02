const CardComponent = require("./components/cardComponent");
const ListComponent = require("./components/listComponent");

class DashboardPage{

    constructor(){
        this._cardComponent = new CardComponent();
        this._listComponent = new ListComponent();
    }

    get cardComponent(){
        return this._cardComponent;
    }

    get listComponent(){
        return this._listComponent;
    }
}

module.exports = DashboardPage;