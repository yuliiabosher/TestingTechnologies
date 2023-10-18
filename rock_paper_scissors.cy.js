describe("RPS Game", () => {
  // Open the URL before each test
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/JS%20Challenge.html");
  });
  it("play the game with rock option and check the result", () => {
    // Click the 'Rock' button that should exist
    cy.get('[data-cy="rock"]').should("exist").click();

    // Check that the user option is set to 'Rock'
    cy.get('[data-cy="line1"]').should("have.text", "Your choice: rock");

    // Check the computer option
    cy.get('[data-cy="line2"]').then((option) => {
      // If the computer option is set to 'Rock'
      if (option.text().includes("Computer choice: rock")) {
        cy.get('[data-cy="line3"]').contains("It's a draw"); // The result is a tie
      }
      // If the computer option is set to 'Paper'
      else if (option.text().includes("Computer choice: paper")) {
        cy.get('[data-cy="line3"]').contains("Computer won"); // The result is a computer win
      }
      // If the computer option is set to 'Scissors'
      else {
        cy.get('[data-cy="line3"]').contains("You won"); // The result is a user win
      }
    });
  });

  // Play the game with the 'Paper' option and checks the result
  it("play the game with paper option and checks the result", () => {
    // Click the 'Paper' button that should exist
    cy.get('[data-cy="paper"]').should("exist").click();

    // Check that the user option is set to 'Paper'
    cy.get('[data-cy="line1"]').should("have.text", "Your choice: paper");

    // Check the computer option
    cy.get('[data-cy="line2"]').then((option) => {
      // If the computer option is set to 'Rock'
      if (option.text().includes("Computer choice: rock")) {
        cy.get('[data-cy="line3"]').contains("You won"); // The result is a user win
      }
      // If the computer option is set to 'Paper'
      else if (option.text().includes("Computer choice: paper")) {
        cy.get('[data-cy="line3"]').contains("It's a draw"); // The result is a tie
      }
      // If the computer option is set to 'Scissors'
      else {
        cy.get('[data-cy="line3"]').contains("Computer won"); // The result is a computer win
      }
    });
  });
  // Play the game with the 'Scissors' option and checks the result
  it("play the game with scissors option and checks the result", () => {
    // Click the 'Scissors' button that should exist
    cy.get('[data-cy="scissors"]').should("exist").click();

    // Check that the user option is set to 'Scissors'
    cy.get('[data-cy="line1"]').should("have.text", "Your choice: scissors");

    // Check the computer option
    cy.get('[data-cy="line2"]').then((option) => {
      // If the computer option is set to 'Rock'
      if (option.text().includes("Computer choice: rock")) {
        cy.get('[data-cy="line3"]').contains("Computer won"); // The result is a computer win
      }
      // If the computer option is set to 'Paper'
      else if (option.text().includes("Computer choice: paper")) {
        cy.get('[data-cy="line3"]').contains("You won"); // The result is a user win
      }
      // If the computer option is set to 'Scissors'
      else {
        cy.get('[data-cy="line3"]').contains("You won"); // The result is a tie
      }
    });
  });
});
