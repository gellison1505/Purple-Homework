# Restaurant 3

**15 points**

For easiest viewing of these instructions, view online or use a Markdown previewer.

### Instructions

This assignment will give you experience using an Application Programming Interface (API) to access data from a web site and integrate it into your own page.

The API you will use is hosted by a weather web site called [OpenWeather](https://openweathermap.org/). Sign up for a free account that gives you access to the API.

Challenge: Take a look at [restaurant-3.png](restaurant-3.png). Write code to add functionality to the Rocket Tacos "Hot Offer" promotion. This promotion is a two-for-one taco deal available in cities where the local temperature is higher than Phoenix, AZ, the location of the company's headquarters.

HTML and CSS files have been provided: [restaurant-3.html](restaurant-3.html) and [restaurant-3.css](restaurant-3.css). Also provided is [Worldcities.csv](Worldcities.csv), a list of cities, latitudes, and longitudes. Use this file to obtain the geographic position of the cities where Rocket Tacos stores are located. The position data are used as parameters for OpenWeather's [One Call API](https://openweathermap.org/api/one-call-api). 

The application should meet the following requirements:

* Using [Worldcities.csv](Worldcities.csv), find the latitude and longitude of each city listed in the promotion. Records in the csv file list fields in the following order:
  * city name
  * latitude
  * longitude
  * country 
* Obtain the current temperatures for the promotion  using data from the One Call API. [restaurant-3-spec.png](restaurant-3-spec.png) highlights the temperature fields.
* Update the HTML to display the current temperatures
* Update the 2-for-1 Winner column:
  * If a city's temperature is less than or equal to the temperature in Phoenix, display the message, "No, Just Warm"
  * If a city's temperature is greater than the temperature in Phoenix, display the message, "Yes, That's Hot!", including the `fontawesome` chili pepper icons
* Update temperatures every 5 minutes.

**Grading Rubric**

* 10 points: weather application functions as described 
* 5 points: no impact on page design
 