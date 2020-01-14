describe("App State and Actions", () => {
  before(() => {
    cy.visit("/");
  });
  describe("Sidebar Actions", () => {
    describe("Min Word Count", () => {
      it("minWords should have default value of 20", () => {
        cy.overmind()
          .its("state.minWords")
          .should("equal", 20);
      });
      it("minWords should change state when cleared", () => {
        cy.get("#minWords").clear();
        cy.overmind()
          .its("state.minWords")
          .should("equal", "");
      });
      it("minWords should change state on input", () => {
        cy.get("#minWords").clear();
        cy.get("#minWords").type("10");
        cy.overmind()
          .its("state.minWords")
          .should("equal", "10");
      });
    });
    describe("Number of Paragraphs", () => {
      it("numberParagraphs should have default value of 1", () => {
        cy.overmind()
          .its("state.numberParagraphs")
          .should("equal", 1);
      });
      it("numberParagraphs should change state when cleared", () => {
        cy.get("#numberParagraphs").clear();
        cy.overmind()
          .its("state.numberParagraphs")
          .should("equal", "");
      });
      it("numberParagraphs should change state on input", () => {
        cy.get("#numberParagraphs").clear();
        cy.get("#numberParagraphs").type("2");
        cy.overmind()
          .its("state.numberParagraphs")
          .should("equal", "2");
      });
    });
    describe("Wrap With", () => {
      describe("Initial", () => {
        it("state.wrap should have default value of false", () => {
          cy.overmind()
            .its("state.wrap")
            .should("equal", false);
        });
        it("state.tag should have value of null", () => {
          cy.overmind()
            .its("state.tag")
            .should("equal", null);
        });
        it("nothing checkbox should be checked", () => {
          cy.get("#noWrap").should("have.prop", "checked", true);
        });
        it("paragraph and div checkboxes should be unchecked", () => {
          cy.get("#wrapInPTag").should("have.prop", "checked", false);
          cy.get("#wrapInDivTag").should("have.prop", "checked", false);
        });
      });
      describe("Select Paragrapn", () => {
        it("state.wrap should be true", () => {
          cy.get("#wrapInPTag").check();
          cy.overmind()
            .its("state.wrap")
            .should("equal", true);
        });
        it("state.tag should have value of p", () => {
          cy.overmind()
            .its("state.tag")
            .should("equal", "p");
        });
        it("nothing checkbox should be unchecked", () => {
          cy.get("#noWrap").should("have.prop", "checked", false);
        });
        it("div checkbox should be unchecked", () => {
          cy.get("#wrapInDivTag").should("have.prop", "checked", false);
        });
      });
      describe("Select Div", () => {
        it("state.wrap should be true", () => {
          cy.get("#wrapInDivTag").check();
          cy.overmind()
            .its("state.wrap")
            .should("equal", true);
        });
        it("state.tag should have value of div", () => {
          cy.overmind()
            .its("state.tag")
            .should("equal", "div");
        });
        it("nothing checkbox should be unchecked", () => {
          cy.get("#noWrap").should("have.prop", "checked", false);
        });
        it("paragraph checkbox should be unchecked", () => {
          cy.get("#wrapInPTag").should("have.prop", "checked", false);
        });
      });
    });
    describe("Get Me Some Wisdom", () => {
      describe("No Wrap [Min words = 10 | Paragraphs = 2 ]", () => {
        before(() => {
          cy.get("#noWrap").check();
          cy.get("#minWords").clear();
          cy.get("#minWords").type("10");
          cy.get("#numberParagraphs").clear();
          cy.get("#numberParagraphs").type("2");
        });
        it("shows fetching gif on click", () => {
          cy.get("#GetTextButton").click();
        });
        it("changes button text", () => {
          cy.get("#GetTextButton").contains("Thinking");
        });
        it("shows loading Gif", () => {
          cy.get("#fetchingGif").should("be.visible");
        });
        it("returns appropriate text", () => {
          cy.get("#noWrapText")
            .invoke("val")
            .then($text => {
              const paragraphs = $text.split("\n\n");
              expect(paragraphs.length).to.equal(2);
              expect(paragraphs[0].split(" ").length).to.be.greaterThan(10);
              expect(paragraphs[1].split(" ").length).to.be.greaterThan(10);
            });
        });
        it("shows copy to clipboard button", () => {
          cy.get("#CopyTextButton").should("be.visible");
        });
        it("should change Copy to Clipboard text on click", () => {
          cy.get("#CopyTextButton").click();
          cy.get("#CopyTextButton").contains("Copied to Clipboard!");
        });
        it("should change Copy to Clipboard colour on click", () => {
          cy.get("#CopyTextButton").click();
          cy.get("#CopyTextButton").should(
            "have.attr",
            "class",
            "btn focus:outline-none bg-orange-600"
          );
        });
        it("Copy to Clipboard should return to default text", () => {
          cy.get("#CopyTextButton").contains("Copy to Clipboard");
        });
        it("Copy to Clipboard should return to default colour", () => {
          cy.get("#CopyTextButton").click("");
          cy.get("#CopyTextButton").should(
            "have.attr",
            "class",
            "btn focus:outline-none bg-blue-600"
          );
        });
      });
      describe("Wrap with <p> tag [Min words = 10 | Paragraphs = 2 ]", () => {
        before(() => {
          cy.get("#wrapInPTag").check();
          cy.get("#minWords").clear();
          cy.get("#minWords").type("10");
          cy.get("#numberParagraphs").clear();
          cy.get("#numberParagraphs").type("2");
        });
        it("shows fetching gif on click", () => {
          cy.get("#GetTextButton").click();
        });
        it("changes button text", () => {
          cy.get("#GetTextButton").contains("Thinking");
        });
        it("shows loading Gif", () => {
          cy.get("#fetchingGif").should("be.visible");
        });
        it("returns text wrapped in <p></p>", () => {
          cy.get("#wrappedText > p").then(array => {
            expect(array.length).to.greaterThan(0);
          });
        });
        it("returns appropriate text", () => {
          cy.get("#wrappedText > p").then(array => {
            expect(array.length).to.equal(2);
          });

          cy.get("#wrappedText > p")
            .eq(0)
            .then($elem => {
              const text = $elem.text();
              cy.log(text);
              const paragraph = text
                .replace("<p>", "")
                .replace("</p>", "")
                .split(" ");
              expect(paragraph.length).to.be.greaterThan(10);
            });
          cy.get("#wrappedText > p")
            .eq(1)
            .then($elem => {
              const text = $elem.text();
              cy.log(text);
              const paragraph = text
                .replace("<p>", "")
                .replace("</p>", "")
                .split(" ");
              expect(paragraph.length).to.be.greaterThan(10);
            });
        });
        it("shows copy to clipboard button", () => {
          cy.get("#CopyTextButton").should("be.visible");
        });
        it("should change Copy to Clipboard text on click", () => {
          cy.get("#CopyTextButton").click();
          cy.get("#CopyTextButton").contains("Copied to Clipboard!");
        });
        it("should change Copy to Clipboard colour on click", () => {
          cy.get("#CopyTextButton").click();
          cy.get("#CopyTextButton").should(
            "have.attr",
            "class",
            "btn focus:outline-none bg-orange-600"
          );
        });
        it("Copy to Clipboard should return to default text", () => {
          cy.get("#CopyTextButton").contains("Copy to Clipboard");
        });
        it("Copy to Clipboard should return to default colour", () => {
          cy.get("#CopyTextButton").click("");
          cy.get("#CopyTextButton").should(
            "have.attr",
            "class",
            "btn focus:outline-none bg-blue-600"
          );
        });
      });
      describe("Wrap with <div> tag [Min words = 10 | Paragraphs = 2 ]", () => {
        before(() => {
          cy.get("#wrapInDivTag").check();
          cy.get("#minWords").clear();
          cy.get("#minWords").type("10");
          cy.get("#numberParagraphs").clear();
          cy.get("#numberParagraphs").type("2");
        });
        it("shows fetching gif on click", () => {
          cy.get("#GetTextButton").click();
        });
        it("changes button text", () => {
          cy.get("#GetTextButton").contains("Thinking");
        });
        it("shows loading Gif", () => {
          cy.get("#fetchingGif").should("be.visible");
        });
        it("returns text wrapped in <div></div>", () => {
          cy.get("#wrappedText > div").then(array => {
            expect(array.length).to.greaterThan(0);
          });
        });
        it("returns appropriate text", () => {
          cy.get("#wrappedText > div").then(array => {
            expect(array.length).to.equal(2);
          });

          cy.get("#wrappedText > div")
            .eq(0)
            .then($elem => {
              const text = $elem.text();
              cy.log(text);
              const paragraph = text
                .replace("<div>", "")
                .replace("</div>", "")
                .split(" ");
              expect(paragraph.length).to.be.greaterThan(10);
            });
          cy.get("#wrappedText > div")
            .eq(1)
            .then($elem => {
              const text = $elem.text();
              cy.log(text);
              const paragraph = text
                .replace("<div>", "")
                .replace("</div>", "")
                .split(" ");
              expect(paragraph.length).to.be.greaterThan(10);
            });
        });
        it("shows copy to clipboard button", () => {
          cy.get("#CopyTextButton").should("be.visible");
        });
        it("should change Copy to Clipboard text on click", () => {
          cy.get("#CopyTextButton").click();
          cy.get("#CopyTextButton").contains("Copied to Clipboard!");
        });
        it("should change Copy to Clipboard colour on click", () => {
          cy.get("#CopyTextButton").click();
          cy.get("#CopyTextButton").should(
            "have.attr",
            "class",
            "btn focus:outline-none bg-orange-600"
          );
        });
        it("Copy to Clipboard should return to default text", () => {
          cy.get("#CopyTextButton").contains("Copy to Clipboard");
        });
        it("Copy to Clipboard should return to default colour", () => {
          cy.get("#CopyTextButton").click("");
          cy.get("#CopyTextButton").should(
            "have.attr",
            "class",
            "btn focus:outline-none bg-blue-600"
          );
        });
      });
    });
  });
});
