# Restaurant 3

**15 points**

For easiest viewing of these instructions, view online or use a Markdown previewer.

### Instructions

This assignment will give you experience using an Application Programming Interface (API) to access data from a web site and integrate it into your own page.

The API you will use is hosted by [OpenWeatherMap.org](https://openweathermap.org/). Basic features can be accessed for free at [https://home.openweathermap.org/users/sign_up](https://home.openweathermap.org/users/sign_up).

In this assignment, you will create a special offer for a chain of restaurants called "Rockit Tacos." Rockit Tacos will sell any two tacos for the price of one if the current temperature is above a certain number. Read the [Open Weather documentation](https://openweathermap.org/current) to learn the parameters required to query the weather database.

Challenge: create a special offer page with the following features:
* Includes a title
* Lists the following locations of Rockit Tacos
  * New York City, NY
  * Chicago, IL
  * Los Angeles, CA
  * Honolulu, HI
  * Beijing, China
  * Bangalore, India
* For each city show the maximum temperature for the two-for-one offer to take effect
* For each city show the current temperature
* When a city's temperature is above the offer limit, show the following message: "All Tacos are 2-for-1!"
* Update the current temperatures every 60 seconds
