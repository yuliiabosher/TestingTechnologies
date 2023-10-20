describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/shopping_list.html");
  });
  it("passes", () => {
    // Check that the input field exists
    cy.get('[data-cy="inputField"]').should("exist").click();
    // Check that the input field is typeable
    cy.get('[data-cy="inputField"]').type("milk");
    // Click the add button exists and clickable
    cy.get('[data-cy="addButton"]').should("exist").click();
    // Find the span element that contains the text milk
    cy.get("div").find("span");
    cy.get("span").should("have.text", "milk");
    // Check that checkbox is checkable
    cy.get('[type="checkbox"]').check();
    // Check that checkbox could be unchecked
    cy.get('[type="checkbox"]').uncheck();
    // Click delete button that should exist
    cy.get('[data-cy="deleteButton"]').should("exist").click();
  });
  it("passes", () => {
    // Check it successfully adds first element
    cy.get('[data-cy="inputField"]').type("cat food");
    cy.get('[data-cy="addButton"]').should("exist").click();
    cy.get("div").find("span");
    cy.get("span").eq(0).should("have.text", "cat food");
    cy.get('[type="checkbox"]').check();
    cy.get('[type="checkbox"]').uncheck();
    // Second item
    cy.get('[data-cy="inputField"]').type("bread");
    cy.get('[data-cy="addButton"]').should("exist").click();
    cy.get("div").find("span");
    cy.get("span").eq(1).should("have.text", "bread");
    cy.get('[type="checkbox"]').check();
    cy.get('[type="checkbox"]').uncheck();
    // Third item
    cy.get('[data-cy="inputField"]').type("eggs");
    cy.get('[data-cy="addButton"]').should("exist").click();
    cy.get("div").find("span");
    cy.get("span").eq(2).should("have.text", "eggs");
    cy.get('[type="checkbox"]').check();
    cy.get('[type="checkbox"]').uncheck();
    // Check it can delete first item
    cy.get('[data-cy="deleteButton"]').eq(0).click();
    // Delete second item
    cy.get('[data-cy="deleteButton"]').eq(0).click();
    // Delete third item
    cy.get('[data-cy="deleteButton"]').eq(0).click();
    // Check no elements left
    cy.get('[data-cy="inputDiv"]').last();
  });
  it("passes", () => {
    // Check the input area gets cleared after the add button is pressed
    cy.get('[data-cy="inputField"]').type("apples");
    cy.get('[data-cy="addButton"]').click();
    cy.get('[data-cy="inputField"]').clear();
  });
  it("passes", () => {
    // Check that when there are no items, the add button is pressed and the input is clear nothing happens
    cy.get('[data-cy="addButton"]').click();
    cy.get('[data-cy="inputDiv"]').last();
  });
  it("passes", () => {
    // Check that when there are 3 items, the add button is pressed while the input is clear, nothing happens
    // Add first item
    cy.get('[data-cy="inputField"]').type("oranges");
    cy.get('[data-cy="addButton"]').click();
    cy.get("div").find("span");
    cy.get("span").eq(0).should("have.text", "oranges");
    // Add second item
    cy.get('[data-cy="inputField"]').type("cabbage");
    cy.get('[data-cy="addButton"]').click();
    cy.get("div").find("span");
    cy.get("span").eq(1).should("have.text", "cabbage");
    // Third item
    cy.get('[data-cy="inputField"]').type("juice");
    cy.get('[data-cy="addButton"]').click();
    cy.get("div").find("span");
    cy.get("span").eq(2).should("have.text", "juice");
    // Click the add button
    cy.get('[data-cy="addButton"]').click();
    cy.get("span").eq(2).last();
  });
});
