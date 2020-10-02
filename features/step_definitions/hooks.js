const { AfterAll, BeforeAll } = require("@cucumber/cucumber");
 
const DashboardPage = require("../../page-objects/dashboardPage");

const dashboardPage = new DashboardPage();
const card = dashboardPage.cardComponent;
const list = dashboardPage.listComponent;

BeforeAll(function(){
    //TODO
})

AfterAll(async function(){
    let response = await list.getCardsOnTheList('5f6d31a273b62b43fcebf053');
    
    response.body.forEach(async (element) => {
        await card.deleteCard(element.id);
    });
})
