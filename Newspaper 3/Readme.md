# Newspaper 3

**15 points**

For easiest viewing of these instructions, view online or use a Markdown previewer.

### Instructions

This assignment will give you experience using an Application Programming Interface (API) to access data from a web site and integrate it into your own page.

The API you will use is hosted by a weather web site called [OpenWeather](https://openweathermap.org/). Sign up for a free account that gives you access to the API.

Challenge: Complete the code for a Chicago Maroon weather application that retrieves OpenWeather data and displays temperatures for selected cities. The HTML and CSS have been provided: [newspaper-3.html](newspaper-3.html) and [newspaper-3.css](newspaper-3.css). Also provided is [Worldcities.csv](Worldcities.csv), a list of cities, latitudes, and longitudes. This list should be used to locate data using OpenWeather site's [One Call API](https://openweathermap.org/api/one-call-api). The application should meet the following requirements:
* Select 10 cities from [Worldcities.csv](Worldcities.csv) and update the HTML dropdown list of cities. Each record in the csv file lists fields in the following order:
  * city name
  * latitude
  * longitude
  * Country
* Select one of the cities as the default location
* Write a JavaScript program that
  * Queries the One Call API with the latitude and longitude of the city clicked by the user
  * Reports the high and low temperatures returned by the API in Fahrenheit
  * Updates the HTML with the temperature information for the selected city
  * Automatically displays the temperatures for the default location
Some Research Required: You will notice that the weather application does not use a `Submit` to initiate the API call. Instead, the application calls the API when the dropdown selection has changed.

**Grading Rubric**

* 10 points: weather application functions as described 
* 5 points: no impact on page design

 
