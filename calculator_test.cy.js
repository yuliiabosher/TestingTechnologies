describe("template spec", () => {
  it("passes", () => {
    // Visit the page
    cy.visit("https://yuliiabosher.github.io/");
    // Check if all buttons are clickable
    cy.get("#b7").should("contain", "7").click();
    cy.get("#b8").should("contain", "8").click();
    cy.get("#b9").should("contain", "9").click();
    cy.get("#b6").should("contain", "6").click();
    cy.get("#b5").should("contain", "5").click();
    cy.get("#b4").should("contain", "4").click();
    cy.get("#b3").should("contain", "3").click();
    cy.get("#b2").should("contain", "2").click();
    cy.get("#b1").should("contain", "1").click();
    cy.get("#b0").should("contain", "0").click();
    cy.get("#bdot").should("contain", ".").click();
    cy.get("#bc").should("contain", "C").click();
    cy.get("#bdivide").should("contain", "/").click();
    cy.get("#bplus").should("contain", "+").click();
    cy.get("#bminus").should("contain", "-").click();
    cy.get("#bmult").should("contain", "*").click();
    cy.get("#bequals").should("contain", "=").click();
    // Check if the clear button clears the display

    // First press C to clear the display
    cy.get("#bc").should("contain", "C").click();
    // Press 2
    cy.get("#b2").should("contain", "2").click();
    // Press +
    cy.get("#bplus").should("contain", "+").click();
    // Press 3
    cy.get("#b3").should("contain", "3").click();
    // Press =
    cy.get("#bequals").should("contain", "=").click();
    // Press C
    cy.get("#bc").should("contain", "C").click();
    // Assert the display gets cleared
    cy.get("h2").eq(0).should("contain", "0");
    cy.get("h2").eq(1).should("contain", "");

    /*  Assert that if the dot is pressed and the last element on the screen 
    is a numeric value that already contains a dot, the display gets cleared */

    // Press 8
    cy.get("#b8").should("contain", "8").click();
    // Press dot
    cy.get("#bdot").should("contain", ".").click();
    // Press 5
    cy.get("#b5").should("contain", "5").click();
    // Press dot again
    cy.get("#bdot").should("contain", ".").click();
    // Assert that the display is cleared
    cy.get("h2").eq(0).should("contain", "0");
    cy.get("h2").eq(1).should("contain", "");

    /* Check that if the dot is pressed and the last element 
    on the screen is one of the operator signs, the display gets cleared */

    // Press 7
    cy.get("#b7").should("contain", "7").click();
    // Press +
    cy.get("#bplus").should("contain", "+").click();
    // Press dot
    cy.get("#bdot").should("contain", ".").click();
    // Assert that the display is cleared
    cy.get("h2").eq(0).should("contain", "0");
    cy.get("h2").eq(1).should("contain", "");

    /* Check that if the screen already displays an equals sign 
    and the equals sign is clicked, the display gets cleared */

    // Press 9
    cy.get("#b9").should("contain", "9").click();
    // Press /
    cy.get("#bdivide").should("contain", "/").click();
    // Press 4
    cy.get("#b4").should("contain", "4").click();
    // Press =
    cy.get("#bequals").should("contain", "=").click();
    // Press = again
    cy.get("#bequals").should("contain", "=").click();
    // Assert that the display is cleared
    cy.get("h2").eq(0).should("contain", "0");
    cy.get("h2").eq(1).should("contain", "");

    /* Check that if the screen displays 0 and the button pressed is 
    the minus sign, the minus sign is displayed */

    // Press clear
    cy.get("#bc").should("contain", "C").click();
    // Press minus
    cy.get("#bminus").should("contain", "-").click();
    // Assert that the screen displays a minus sign only
    cy.get("h2").eq(0).should("contain", "-");
    cy.get("h2").eq(1).should("contain", "");

    /* If the screen displays 0 and the operator button pressed is the plus,
    multiply or divide sign, the display gets cleared */

    // Press clear
    cy.get("#bc").should("contain", "C").click();
    // Press +
    cy.get("#bplus").should("contain", "+").click();
    // Assert that the display is cleared
    cy.get("h2").eq(0).should("contain", "0");
    cy.get("h2").eq(1).should("contain", "");

    // Press clear
    cy.get("#bc").should("contain", "C").click();
    // Press *
    cy.get("#bmult").should("contain", "*").click();
    // Assert that the display is cleared
    cy.get("h2").eq(0).should("contain", "0");
    cy.get("h2").eq(1).should("contain", "");

    // Press clear
    cy.get("#bc").should("contain", "C").click();
    // Press /
    cy.get("#bdivide").should("contain", "/").click();
    // Assert that the display is cleared
    cy.get("h2").eq(0).should("contain", "0");
    cy.get("h2").eq(1).should("contain", "");

    /* Check if there is already an operator sign on the screen and  
    another operator sign is clicked, the operator sign is changed to the one pressed latest*/

    // Press clear
    cy.get("#bc").should("contain", "C").click();
    // Press 6
    cy.get("#b6").should("contain", "6").click();
    // Press /
    cy.get("#bdivide").should("contain", "/").click();
    // Press *
    cy.get("#bmult").should("contain", "*").click();
    // Assert that 6 and * only are on the screen
    cy.get("h2").eq(0).should("contain", "6 *");
    cy.get("h2").eq(1).should("contain", "");

    /* Check if the equals sign is pressed and the last element on the screen
    is the dot, add a zero, then add an equals sign */

    // Press clear
    cy.get("#bc").should("contain", "C").click();
    // Press 2
    cy.get("#b2").should("contain", "2").click();
    // Press minus
    cy.get("#bminus").should("contain", "-").click();
    // Press 1
    cy.get("#b1").should("contain", "1").click();
    // Press dot
    cy.get("#bdot").should("contain", ".").click();
    // Press =
    cy.get("#bequals").should("contain", "=").click();
    // Assert that the top line on the screen displays "2 - 1.0 =" only
    cy.get("h2").eq(0).should("contain", "2 - 1.0 =");

    // Check if the screen displays 0 and the dot button is pressed, display 0 followed by a dot

    // Press clear
    cy.get("#bc").should("contain", "C").click();
    // Press dot
    cy.get("#bdot").should("contain", ".").click();
    // Assert that the screen displays 0. only
    cy.get("h2").eq(0).should("contain", "0.");
    cy.get("h2").eq(1).should("contain", "");

    // Check if the screen displays 0 and the equals sign is clicked, the display gets cleared

    // Press clear
    cy.get("#bc").should("contain", "C").click();
    // Press =
    cy.get("#bequals").should("contain", "=").click();
    // Assert that the display is cleared
    cy.get("h2").eq(0).should("contain", "0");
    cy.get("h2").eq(1).should("contain", "");

    /* Check if the division operation was performed or a dot is present in the sequence and 
    the rounded to integer result is different from not rounded number, round it to 5 decimals */

    // Press clear
    cy.get("#bc").should("contain", "C").click();
    // Press 4
    cy.get("#b4").should("contain", "4").click();
    // Press divide
    cy.get("#bdivide").should("contain", "/").click();
    // Press 3
    cy.get("#b3").should("contain", "3").click();
    // Press =
    cy.get("#bequals").should("contain", "=").click();
    // Check that the bottom line on the display contains "1.33333" only
    cy.get("h2").eq(1).should("contain", "1.33333");

    // Press clear
    cy.get("#bc").should("contain", "C").click();
    // Press 6
    cy.get("#b6").should("contain", "6").click();
    // Press dot
    cy.get("#bdot").should("contain", ".").click();
    // Press 1
    cy.get("#b1").should("contain", "1").click();
    // Press +
    cy.get("#bplus").should("contain", "+").click();
    // Press 7
    cy.get("#b7").should("contain", "7").click();
    // Press =
    cy.get("#bequals").should("contain", "=").click();
    // Assert that the bottom line on the screen contains "13.10000" only
    cy.get("h2").eq(1).should("contain", "13.10000");

    // Check if -2+3*1+2.2=3.2000

    // Press clear
    cy.get("#bc").should("contain", "C").click();
    // Press minus
    cy.get("#bminus").should("contain", "-").click();
    // Press 2
    cy.get("#b2").should("contain", "2").click();
    // Press +
    cy.get("#bplus").should("contain", "+").click();
    // Press 3
    cy.get("#b3").should("contain", "3").click();
    // Press *
    cy.get("#bmult").should("contain", "*").click();
    // Press 1
    cy.get("#b1").should("contain", "1").click();
    // Press +
    cy.get("#bplus").should("contain", "+").click();
    // Press 2
    cy.get("#b2").should("contain", "2").click();
    // Press dot
    cy.get("#bdot").should("contain", ".").click();
    // Press 2
    cy.get("#b2").should("contain", "2").click();
    // Press =
    cy.get("#bequals").should("contain", "=").click();
    // Assert that the bottom line on the screen is "3.2000" only
    cy.get("h2").eq(1).should("contain", "3.2000");

    // Check if 2*2*2=8

    // Press clear
    cy.get("#bc").should("contain", "C").click();
    // Press 2
    cy.get("#b2").should("contain", "2").click();
    // Press *
    cy.get("#bmult").should("contain", "*").click();
    // Press 2
    cy.get("#b2").should("contain", "2").click();
    // Press *
    cy.get("#bmult").should("contain", "*").click();
    // Press 2
    cy.get("#b2").should("contain", "2").click();
    // Press =
    cy.get("#bequals").should("contain", "=").click();
    // Assert that the bottom line on the screen is "8" only
    cy.get("h2").eq(1).should("contain", "8");

    // Check if 2/0=Infinity

    // Press clear
    cy.get("#bc").should("contain", "C").click();
    // Press 2
    cy.get("#b2").should("contain", "2").click();
    // Press /
    cy.get("#bdivide").should("contain", "/").click();
    // Press 0
    cy.get("#b0").should("contain", "0").click();
    // Press =
    cy.get("#bequals").should("contain", "=").click();
    // Assert that the bottom line on the screen is "Infinity" only
    cy.get("h2").eq(1).should("contain", "Infinity");
  });
});
