# Homework (Credit Card Validator)

## points

DUE: 

For easiest viewing of these instructions, view online or use a Markdown previewer.

In this assignment you will get practice navigating and updating the DOM using Javascript, jQuery, and HTML.

Instructions

* Using `Credit Card Info.pdf` as an example, create an HTML file that includes the `Owner`, `CVV`, `Card Number`, and `Expiration Date` fields. Don't worry about matching the design of the example, but it should look professional.
* The program should validate each of the fields:
  * `Owner` -- Must include a first and last name (in any order). Middle initial/name is optional. Only letters, a period, a comma, and up to two spaces are allowed.
  * `CVV` -- Visa and MasterCard CVVs consist of 3 numbers. American Express uses 4 numbers. The CVV length should match the type of card indicated by the Card Number.
  * `Card Number` -- Visa begins with 4. MasterCard range from 2221 to 2720 or 51 to 55. American Express begins with either 34 or 37.
  * `Expiration Date` -- Must be no earlier than 7 days from the current date.
* Clicking `Confirm` verifies the fields and highlights invalid entries. The program displays an "Approved!" pop-up if all entries are correct.
