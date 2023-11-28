///<reference types="Cypress"/>

describe("Automation_Test_Store", () => {
  it("Contact Us", () => {
    cy.visit("https://automationteststore.com/");
    //cy.get("img[src='//automationteststore.com/image/thumbnails/18/6f/demo_product03_jpg-100094-250x250.jpg']").click()

    //cy.get("a[title='Flash Bronzer Body Gel']").click();

    cy.get(
      "a[href='https://automationteststore.com/index.php?rt=content/contact']"
    ).click();
    cy.get("#ContactUsFrm_first_name").type("user");
    cy.get("#ContactUsFrm_email").type("user@automation.com");
    cy.get("#ContactUsFrm_enquiry").type("this is a test");
    cy.get(" button[title='Submit']").click();

    //Assertion Text
    cy.get(
      "body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > section:nth-child(1) > p:nth-child(3)"
    ).should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );

    //Assertion Property
    cy.document("a[title='Continue']").should("have.a.property", "title");

    //Assertion Title
    cy.document().should("have.a.property", "title").and("eq", "Contact Us");
    cy.title().should("eq", "Contact Us");
    cy.title().should("include", "Us");

    //Assertion Url
    cy.url().should(
      "eq",
      "https://automationteststore.com/index.php?rt=content/contact/success"
    );
    cy.url().should("include", "contact");
  });
});
