# Credit Card Validator

**10 points**

For easiest viewing of these instructions, view online or use a Markdown previewer.

### Instructions

This assignment will help you gain experience using Javascript and creating forms using HTML and CSS.

Take a look at [validator.png](validator.png).

Challenge: Create a credit card validator 

* Using `Credit Card Info.pdf` as an example, create an HTML form that contains fields for `Owner`, `CVV`, `Card Number`, and `Expiration Date` fields. Do not worry about matching the design of the example, but it should look professional. 

* When `Confirm` is clicked, apply the following rules to determine if the information is valid:
  * Confirm that all fields contain data
  * Determine the type of card based on the starting number or numbers in the `Card Number` field:
    * 4 (Visa)
    * 2221 to 2720 or 51 to 55 (MasterCard)
    * 34 or 37 (American Express)
* Confirm the `Expiration Date` is no earlier than 7 days from the current date.

* If all fields contain correct data, display "Valid!" in an `Alert` box
* If incorrect information is found, display "Not Valid!" in an `Alert` box and show the name of the first invalid field

**Grading Rubric**

* 5 points: Form correctly applies all validation rules
 
