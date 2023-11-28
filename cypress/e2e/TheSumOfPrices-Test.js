///<reference types="Cypress"/>

describe("Automation_Test_Store", () => {
  it("the sum of prices on the home page that have one price", () => {
    cy.visit("https://automationteststore.com/");
    // cy.get(".thumbnail").as("items")
    // cy.get("@items").find(".oneprice").each((element,index,list)=>{
    //   cy.log("The"+ element.text()+" is located at index #"+ index)
    // })

    cy.get(".thumbnail").as("items");
    cy.get("@items").find(".oneprice").invoke("text").as("itemprice");
    cy.get("@itemprice").then((pricetext) => {
      let listprice = pricetext.split("$");
      let total = 0;
      for (let i = 0; i < listprice.length; i++) {
        cy.log(listprice[i]);
        total += Number(listprice[i]);
      }
      cy.log("Total= " + total + "$");
    });
  });
});
