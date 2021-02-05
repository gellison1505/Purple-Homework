# Restaurant 2

**15 points**

For easiest viewing of these instructions, view online or use a Markdown previewer.

### Instructions

This assignment will help you gain experience using Javascript and creating forms using HTML and CSS.

Take a look at the example page [restaurant-2.png](restaurant-2.png).

Challenge: Build a mobile-only page similar to the example. The page should meet the requirements listed below. Your page doesn't need to look exactly like the example but should contain the same content. Text for the page is provided in [restaurant-2.txt](restaurant-2-2.txt). Also provided is the PNG image named  [taco.png](taco.png).   

Page
* Maximum of 600px wide
* Displays six sections: 
  * page header
  * name and address
  * a menu to select food 
  * a shopping cart (titled "Your Shopping Cart") to select order quantities
  * buttons to purchase the items in the cart and clear them
  * footer

Page Header
* Show the web page title and quote
* Include one or more [taco.png](taco.png) images

Name and Address
* Display on page (doesn't necessarily have to be at the top)

Menu ("Our Menu")

(Note: you can use your own pricing for the menu items)
* Display the menu item, description, and price
* Place an "Add to Cart!" button next to each menu item
* When the "Add to Cart!" button is clicked:
  * change the button text to "Added To Cart!"
  * add the item to the `Shopping Cart`

Shopping Cart ("Your Shopping Cart")
* Prior to the selection of a menu item, display the section title "Your Shopping Cart" and the text, "Cart is Empty"
* Each time an item is selected in the menu, add it to the cart as follows:
  * Display the name of the menu item
  * For each item, use a number input control to capture the order quantity (the default is 1, but the lowest number that can be selected is 0)
  * Multiply the item quantity and cost and display the total
  * Add the costs of all the orders and display the total
  
Buttons
* When the `Check Out` button is clicked, display an `Alert` box containing:
  * Combined price of order
  * Name and quantities of items ordered
* When the `Cancel` button is clicked:
  * Delete all items in the cart
  * Activate all `Add to Cart` buttons in the gallery
  * Return to top of page

Footer
* Should be a minor feature on the page


**Grading Rubric**

* 5 points: Page functions as described
* 5 points: Programming produces complete and accurate results 
* 3 points: Fine details: all required content is present and correctly aligned
* 2 points: Reasonable choice of typography 
 
