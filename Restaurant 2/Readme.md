# Restaurant 2

**15 points**

For easiest viewing of these instructions, view online or use a Markdown previewer.

### Instructions

This assignment will help you gain experience using Javascript and creating forms using HTML and CSS.

Take a look at the example page [photo-gallery-2.pdf](photo-gallery-2.pdf).

Challenge: Build a mobile-only page similar to the example. The page should meet the requirements listed below. Your page doesn't need to look exactly like the example but should contain the same content. Introduction text is provided in [photo-gallery-2.txt](photo-gallery-2.txt). Also provided are PNG images starting with `Noble`.   

Page
* Maximum of 600px wide
* Displays two sections: 
  * a gallery to view and select pictures 
  * a shopping cart (titled "You Picked") to select picture quantities and frames

Gallery
* Show relatively large picture
* Display the picture's name near the image
* Place a button near the picture that adds the image to the shopping cart 
  * Deactivate the button when it is clicked
  * Reactivate buttons when `Check Out` button is clicked

Shopping Cart ("You Picked")
* Prior to picture selection, display the section title and the message, "Cart is Empty"
* Each time a picture is selected in the gallery, add the item to the cart as follows:
  * Display a small, recognizable version of the original, and include the image name
  * Use a number input control to capture how many copies are requested (the default is 1, but the lowest number that can be selected is 0)
  * When the number of copies has been selected, show the total cost (all pictures cost the same, and you are free to choose the price)
  * Use a number input control to capture how many of each frame is requested (display 0 as the default and lowest quantity)
  * Note that you can use your own pricing for the frames (you can also change the names of the styles, but you must have at least three differently priced choices)
  * If the number of frames ordered is greater than the number of pictures requested, display a message for the user to correct the error
  * Display the cost of the selected frames
  * Display the combined cost of picture copies and frames

Buttons
* When the `Check Out` button is clicked, display an `Alert` box containing:
  * Combined price of order
  * Name and quantities of items ordered
* When the `Cancel` button is clicked:
  * Delete all items in the cart
  * Activate all `Add to Cart` buttons in the gallery
  * Return to top of page


**Grading Rubric**

* 5 points: Page functions as described
* 5 points: Programming produces complete and accurate results 
* 3 points: Fine details: text is aligned in rows and columns
* 2 points: Reasonable choice of typography 
 
