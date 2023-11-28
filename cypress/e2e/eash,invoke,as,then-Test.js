///<reference types="Cypress"/>

describe("Automation_Test_Store", () => {
  it("each,invoke,as", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('[href*="product/category&path"]').contains("Hair Care").click();

    // cy.get(".fixed_wrapper .prdocutname").each((element,index,list)=>{
    //   if(element.text().includes("Seaweed ")){
    //    cy.wrap(element).click()
    //   }
    // })

    //cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('firstitemtext')
    // cy.get("@firstitemtext").its('length').should("be.gte",10)
    //cy.get("@firstitemtext").should("include","Seaweed")
  });

  it.skip("then", () => {
    cy.visit("https://automationteststore.com/");

    // cy.get(".prdocutname").contains("BeneFit Girl Meets Pearl").click().then((element) => {
    //     console.log(element.text() +" "+ "is clicked");
    //   });

    cy.get("a[href*='content/content&content_id=4']")
      .click()
      .then((element) => {
        console.log(element.text() + " " + "is clicked");
      });
    cy.get(":nth-child(1) > .active").click();

    cy.get("a[href*='content/contact']")
      .click()
      .then((element) => {
        console.log(element.text() + " " + "is clicked");
      });
    cy.get(":nth-child(1) > .active").click();

    cy.get("a[href*='content/sitemap']")
      .click()
      .then((element) => {
        console.log(element.text() + " " + "is clicked");
      });
    cy.get(":nth-child(1) > .active").click();
  });
});
