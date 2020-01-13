// https://docs.cypress.io/api/introduction/api.html

describe("App renders", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("div", "Wisdom Ipsum");
    cy.screenshot({ capture: "fullPage" });
  });
});
describe("App Layout", () => {
  it("should have title correct title element", () => {
    cy.contains("div", "Wisdom Ipsum");
  });
  describe("Sidebar Layout", () => {
    it("should have Sidebar component", () => {
      cy.get(".sidebar").should("be.visible");
    });
    describe("Paragraphs Sections", () => {
      it("should have Section Header", () => {
        cy.get("#paragraphsSectionHeader").should("be.visible");
      });
      describe("MinWords Component", () => {
        it("should have MinWords component", () => {
          cy.get("#minWordsWrapper").should("be.visible");
        });
        it("should have MinWords Label with correct text", () => {
          cy.get("label[for='minWords']").should("be.visible");
          cy.get("label[for='minWords']").contains("Min word count");
        });
        it("should have MinWords input", () => {
          cy.get("input[id='minWords']").should("be.visible");
          cy.get("input[id='minWords'").should("have.attr", "type", "number");
        });
      });
      describe("NumberParagraphs Component", () => {
        it("should have numberParagraphs component", () => {
          cy.get("#numberParagraphsWrapper").should("be.visible");
        });
        it("should have numberParagraphs Label with correct text", () => {
          cy.get("label[for='numberParagraphs']").should("be.visible");
          cy.get("label[for='numberParagraphs']").contains(
            "Number of Paragraphs"
          );
        });
        it("should have numberParagraphs input", () => {
          cy.get("input[id='numberParagraphs']").should("be.visible");
        });
      });
      describe("Wrap Component", () => {
        it("should have Wrap component", () => {
          cy.get("#WrapWrapper").should("be.visible");
        });
        describe("No Wrap", () => {
          it("should have noWrap Label with correct text", () => {
            cy.get("label[for='noWrap']").should("be.visible");
            cy.get("label[for='noWrap']").contains("nothing");
          });
          it("should have noWrap input", () => {
            cy.get("input[id='noWrap'").should("be.visible");
            cy.get("input[id='noWrap'").should("have.attr", "type", "checkbox");
          });
        });
        describe("Wrap in Paragraph", () => {
          it("should have wrapInPTag Label with correct text", () => {
            cy.get("label[for='wrapInPTag']").should("be.visible");
            cy.get("label[for='wrapInPTag']").contains("paragraph");
          });
          it("should have wrapInPTag input", () => {
            cy.get("input[id='wrapInPTag'").should("be.visible");
            cy.get("input[id='wrapInPTag'").should(
              "have.attr",
              "type",
              "checkbox"
            );
          });
        });
        describe("Wrap in Div", () => {
          it("should have wrapInDivTag Label with correct text", () => {
            cy.get("label[for='wrapInDivTag']").should("be.visible");
            cy.get("label[for='wrapInDivTag']").contains("div");
          });
          it("should have wrapInDivTag input", () => {
            cy.get("input[id='wrapInDivTag'").should("be.visible");
            cy.get("input[id='wrapInDivTag'").should(
              "have.attr",
              "type",
              "checkbox"
            );
          });
        });
        describe("Get Wisdom", () => {
          it("should have button with correct text", () => {
            cy.get("#GetTextButton").should("be.visible");
            cy.get("#GetTextButton").contains("Get Me Some Wisdom");
          });
          it("should have button with correct classes", () => {
            cy.get("#GetTextButton").should(
              "have.attr",
              "class",
              "btn bg-green-900 focus:outline-none"
            );
          });
        });
        describe("Copy to clipboard button", () => {
          it("should not show copy to clipboard button", () => {
            cy.get("#CopyTextButton").should("not.visible");
          });
        });
      });
    });
    describe("Quotes", () => {
      it("should have Section Header", () => {
        cy.get("#quotesSectionHeader").should("be.visible");
      });
      it("should have Content component", () => {
        cy.get(".content").should("be.visible");
      });
      describe("Number of Quotes", () => {
        it("should have numberOfQuotes label", () => {
          cy.get("label[for='numberOfQuotes'").should("be.visible");
          cy.get("label[for='numberOfQuotes'").should(
            "have.text",
            "Number of quotes"
          );
        });
        it("should have numberOfQuotes input", () => {
          cy.get("input[id='numberOfQuotes'").should("be.visible");
          cy.get("input[id='numberOfQuotes'").should(
            "have.attr",
            "type",
            "number"
          );
        });
      });
      describe("Get Quotes", () => {
        it("should have button with correct text", () => {
          cy.get("#GetQuotesButton").should("be.visible");
          cy.get("#GetQuotesButton").contains("Get Me Some Quotes");
        });
        it("should have button with correct classes", () => {
          cy.get("#GetQuotesButton").should(
            "have.attr",
            "class",
            "btn bg-green-900 focus:outline-none"
          );
        });
      });
      describe("Copy to clipboard button", () => {
        it("should not show copy to clipboard button", () => {
          cy.get("#CopyQuotesButton").should("not.visible");
        });
      });
    });
  });
  describe("Content Layout", () => {});
});
