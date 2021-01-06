# Week 2

* CSS
  * Rules vs Selectors vs Properties vs Sheets
  * Visibility and layout using `display: none | inline | block`
  * Defining classifications using "dot" notation
    * CSS definition: `.important { font-weight: bold; color: red; }`
    * HTML integration: `<p class="important">Winter storm on its way!`
  * The "Cascade": rules applied based on various "specificity" calculations
  * "Reset" stylesheets
  * Complex Selectors

* More HTML
  * Grouping: `div` and `span`
  * Special attribute: `id`
  * Meaningful ("semantic") alternatives to `div`:
    * `header`
    * `nav`
    * `footer`
    * `section`
    * `article`
    * `aside`

> In-Class Lab: CSS Diner, Exercises 1-7

* Web fonts: Google Fonts, FontAwesome

* Pseudo-selectors
  * `:hover`
  * `:nth-child(n)`
  * `:nth-of-type(even|odd)`

* Layout with Flexbox
  * Demo: 3-column newspaper
  * "Flexbox" mode controls the layout of _child elements
    * On parent element:
      * 'display: flex' (this is the only requirement)
      * `justify-content: flex-start (default) | flex-end | center | space-between | space-around`
      * `align-items:  stretch (default) | flex-start | flex-end | center | baseline`
      * `flex-direction:  row (default) | column`
    * On child elements:
      * `flex: [number]` to control fractional part of the page
      * Or use `flex-basis: [width]` instead of `width` for fixed amount

* Media queries
  * Mobile "responsive" rules using `min-width`, `max-width`, etc.
  * Screen vs Print

* Intro to ES6 (JavaScript)
  * Variables
  * Objects
  * Functions
  * Built-in DOM API
    * Predefined DOM Object: `document`
    * DOM events
    * Event handlers


* (if time) The Bootstrap framework
  * Typography
  * Understanding the documentation
  * Using predefined classes
  * Grid system
  * Example: Built-in utilities
  * Example: Built-in components




* References:
  * [CSS Diner](https://flukeout.github.io/)
  * [Media Query Expressions](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
  * [Eric Meyer's CSS Reset](https://meyerweb.com/eric/tools/css/reset/)
  * [Normalize](https://github.com/necolas/normalize.css/)
  * [Bootstrap](https://getbootstrap.com/)
  * [Article: 5 Projects](https://medium.com/@GarrettLevine/5-projects-to-complete-when-starting-to-learn-front-end-web-development-48e8a1ce3178)
  * [CSS Units](https://www.w3.org/Style/Examples/007/units.en.html)
  * [Web Design Trends in 2020](https://webflow.com/blog/web-design-trends-for-2020)