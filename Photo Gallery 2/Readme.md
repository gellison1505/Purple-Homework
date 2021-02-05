# Photo Gallery 2

**15 points**

For easiest viewing of these instructions, view online or use a Markdown previewer.

### Instructions

This assignment will help you gain experience using Javascript and creating forms using HTML and CSS.

Take a look at [photo-gallery-2-top.png](photo-gallery-2-top.png) and [photo-gallery-2-bottom.png](photo-gallery-2-bottom.png). Together these screenshots show an example of a web page.

Challenge: Build a mobile-only page similar to the example. The page should meet the requirements listed below. Your page doesn't need to look exactly like the example but should contain the same content. Introduction text is provided in [photo-gallery-2.txt](photo-gallery-2.txt). Also provided are PNG images starting with `Noble`.   

Page
* Maximum of 600px wide
* Displays five sections: 
  * page header
  * a gallery to view and select pictures 
  * a shopping cart (titled "You Picked") to select picture quantities
  * Buttons to purchase the items or clear them
  * footer

Page Header
* Show the web page title and introductory text (feel free to change either) 

Gallery
* Show relatively large versions of the `Noble` pictures
* Display each picture's name near the image
* Place a button near the picture that adds the image to the shopping cart 
  * Deactivate the button when it is clicked
  * Reactivate buttons when `Check Out` button is clicked

Shopping Cart ("You Picked")
* Prior to picture selection, display the section title and the message, "Cart is Empty"
* Each time a picture is selected in the gallery, add the item to the cart as follows:
  * Display a small, recognizable version of the original, and include the image name
  * Use a number input control to capture how many copies are requested (the default is 1, but the lowest number that can be selected is 0)
  * When the number of copies has been selected, show the total cost (all pictures cost the same, and you are free to choose the price)
  

Buttons
* When the `Check Out` button is clicked, display an `Alert` box containing:
  * Combined price of order
  * Name and number of pictures ordered
* When the `Cancel` button is clicked:
  * Delete all items in the cart (the cart's default state)
  * Activate all `Add to Cart` buttons in the gallery
  * Return to top of page

Footer
* Should be a minor feature on the page

**Grading Rubric**

* 5 points: Page functions as described
* 5 points: Programming produces complete and accurate results 
* 3 points: Fine details: text is aligned in rows and columns
* 2 points: Reasonable choice of typography 
 
