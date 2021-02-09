# Restaurant 3

**15 points**

For easiest viewing of these instructions, view online or use a Markdown previewer.

### Instructions

This assignment will give you experience using an Application Programming Interface (API) to access data from a web site and integrate it into your own page.

The API you will use is hosted by [Unsplash.com](https://unsplash.com/). Sign up for a free demo account at [https://unsplash.com/developers](https://unsplash.com/developers). Select `New Application` and agree to the `API Use Guidelines`.  Use the `Get a Random Photo` option for this assignment. Read the [https://unsplash.com/documentation#get-a-random-photo](https://unsplash.com/documentation#get-a-random-photo) to learn the parameters required to query the image database. Keep in mind that Unsplash limits demo accounts to 50 images each hour.

Challenge: create an image gallery that meets the following requirements:
* Includes a title
* Includes instructions on how to use the gallery
* No pictures should be shown when the page loads initially
* Includes a `Next` button that 
  * Displays from 1 to 4 images at a time, either vertically or horizontally
  * Replaces previous set of pictures each time it is clicked
* Includes a numeric input control titled `Number of Images to Display`. The control lists numbers 1 through 4 and determines how many pictures are displayed each time `Next` is clicked.
* In the JSON file returned by Unsplash, use the `regular` property to point to the image source (Note: usage guidelines state that images can be linked to from a web page, but they must not be embedded in the page) 

 
