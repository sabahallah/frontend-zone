<p align="center">
  <a href="https://github.com/sabahallah/frontend-zone/blob/master/css-and-design/css-outline.md">
    <img src="https://img.icons8.com/color/150/000000/css3.png" alt="Useful CSS Outline" width="150" >
  </a>
  <h2 align="center">CSS Outline</h2>
  <p align="center">This intended to be a wiki for css quick review. It covers a lot of defintions, explainations and examples. Some of the defintions and explainations taken from different <a href="#resources">resources</a> and most of the credits go to them. This is just a brief. I kept it simple and structured so it could be easy to refresh and useful for others. I will try to keep it updated as much as i can.</p>
  <p align="center">
    <a href="https://twitter.com/home?status=CSS+Outline+by+%40msabahallah      +https%3A%2F%2Fgithub.com%2Fsabahallah%2Ffrontend-zone%2Fblob%2Fmaster%2Fcss-and-design%2Fcss-outline.md" target="_blank">    
        <img src="https://img.shields.io/badge/twitter-tweet-blue.svg"/>
    </a>
    <a href="https://twitter.com/msabahallah" target="_blank">
        <img src="https://img.shields.io/badge/feedback-%40msabahallah-blue.svg"/>
    </a>
  </p>
  <br>
</p>

# Index
* [Resources](#resources)
* [Development Resources](#development-resources)
* [Outline](#outline)
    * [Miscellaneous](#Miscellaneous)
    * [Text Styling and Formatting](#text-styling-and-formatting)
    * [Images](#images)
    * [Icons](#icons)
    * [Grid System](#grid-system)
    * [Centre an Element](#center-element)
    * [Transform](#transform)
* [Box Model](#box-model)
* [Targeting Elements (selectors)](#targeting-elements)
* [Units](#units)
* [Colors](#colors)
    * [Complementary Colors](#complementary-colors)
    * [Tertiary Colors](#tertiary-colors)
    * [Adjust the Hue of a Color](#color-hue)
    * [CSS Gradient](#css-gradient)
* [Create a Custom CSS Variable](#custom-css-variable)
* [Cascading CSS Variables](#cascadaing-css)
* [Visual Design](#visual-design)
* [Element Positioning](#element-positioning)
    * [Relative Positioning](#relative-positioning)
    * [Absolute Positioning](#absolute-positioning)
    * [Fixed Positioing](#fixed-positioing)
    * [Float Property](#float-property)
    * [z-index Property](#z-index-property)
    * [Positioning technique with Margin Property](#position-using-margin-property)
* [Adding content by css](#adding-content-by-css)
* [Buttons or links in CSS](#buttons-links-css)
* [Three Pillars to Write Good html and css](#css-pillars)
* [Responsive web design](#responsive-web-design)
    * [Fluid Grid](#fluid-grid)
    * [Responsive Images](#responsive-images)
    * [Media Queries](#media-queries)
* [Browser Support & Compitability](#browser-support)
* [Animation](#animation)
* [How CSS works behind the scenes?](#how-css-works)
* [CSS Archticture](#css-archticture)
* [SASS](#sass)
* [Accessibility](#accessibility)
* [Tools](#tools)

<h2 id="resources"> Resources </h2>

* [Free Code Camp](https://freecodecamp.com)
* [Udemy: Build Responsive Real World Websites with HTML5 and CSS3](https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3)
* [Udemy: Advanced CSS and Sass: Flexbox, Grid, Animations and More!](https://www.udemy.com/advanced-css-and-sass)
    * [git repo]( https://github.com/jonasschmedtmann/advanced-css-course.git)
* [Udemy: Full Stack Web Development: HTML, CSS, React & Node](https://www.udemy.com/ultimate-web)


<h2 id="development-resources">Useful Development Resources </h2>

* [Jonas' Resources, Very Useful and Handy Resources](http://codingheroes.io/resources/)
* Fonts: [Google Fonts](https://fonts.google.com/)
* Icons: [liea.io](liea.io), [Icons as a unicode char](https://unicode-table.com/en/2934/)
* Colors: [flatuicolors](https://flatuicolors.com/), 
* Images: [imgur.com](https://imgur.com/), [pexel.com](https://www.pexels.com)
* Inspiration: [behance](htts://behance.net), [dribbble](https://dribbble.com) 
* [CSS Shadow Generator](https://www.cssmatic.com/box-shadow)
* [lorem ipsum Generator](https://www.lipsum.com/)
* [Responsive Design Grid](http://www.responsivegridsystem.com/)
* [Normalize CSS in All Browsers](https://necolas.github.io/normalize.css/8.0.1/normalize.css)
* [CSS Validator Service](https://jigsaw.w3.org/css-validator/#validate_by_uri+with_options)
* [Transform Property Explaination](https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/learn/v4/questions/851800)
* [Media Queries for Standard Devices](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
* [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

<h2 id="outline"> Outline </h2>

CSS stands for Cascading Style Sheets. You can link your css file in 3 different ways: 
* Inline style
    ```html
    <p style="color: red; border: 3px dotted blue"> this is inline style </P>
    ```
* Internal Style
    ```css
    <style>
        p {
            color: red; 
            border: 3px dotted blue;
        }
    </style>
    ```
* External Style
    ```css
    <link rel="stylesheet" type="text/css" href="style.css">
    /* Or using @import
    The @import rule allows you to import a style sheet into another style sheet. */ 
    @import url('http://..../google/font');
    ```
<h3 id="miscellaneous">Miscellaneous</h3>

```css
/* Putting this on the parent element will put all the children in horizontal row */
display: flex;
```

```css 
/*If you set an element's margin to a negative value, the element will grow larger.*/
margin: -15px;
```

```css
/* if we have a list of items and need it to scroll if it's more than the max height, set overflow: scroll; */
<ul style="height=300px; overflow: scroll;">
	<li></li>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
</ul>
```
```css
.borderImg {
    /* 2px horizontal, 2px vertical, 5px blur it out; mush softer, color */
    text-shadow: 2px 2px 5px black;    
    border: 5px dotted white; /* width, type and color */
}
```
```css
header {
    background-image: url(img/hero.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh; /* it will take 100% of the view port height */
}
```
```css
.box {
    background-color: lightblue;
    color: white;
    text-align: center;
    font-family: verdana;
    font-size: 20px;
    display: block; /* by default the div element will have this attribute, it will take the full width and force line brake*/
}
```

```html
<!-- <span> element here only inside <p> to style inline content -->
<p class="plan-price">399$ <span>per month</span></p>

<!-- adding white space, like an empty line -->
<p class="plan-price-meal">&nbsp;</p> 
```
```css
/* remove borders added by chrome in input elements */
*:focus {
    outline: none;
}
```
```html
<div class="row">
	<div class="col span-1-of-3">
        <!-- when you click on the label it will highlight the textbox, it didn't work with text area and selection -->
            <label for="find-us">How did you find us?</label>
	</div>
	<div class="col span-2-of-3">
		<select name="find-us" id="find-us">
			<option value="friends">Friends</option>
			<option value="search">Search Engine</option>
			<option value="ad">Advertisement</option>
			<option value="other">Other</option>
		</select>
	</div>
</div>
```
```css
padding: 10px 20px;
/* It works clockwise starting from top */
padding-top: 10px;  
padding-right: 20px;  
padding-bottom: 10px;  
padding-left: 20px;  

padding: 10px 20px 40px;
/* It works clockwise starting from top */
padding-top: 10px;  
padding-right: 20px;  
padding-bottom: 40px;  
padding-left: 20px; /* like padding right */  
```
```css
* {
    /* By default browser put margin and padding on elements, to remove this: */
    margin: 0;
    paading: 0;
    /* Include padding and border in the element's total width and height. */
    box-sizing: border-box;
}
```
```css 
.container {
    width: 1140px;
    /* auto means left and right margin will be adjusted automatically according to the context of the element which is the browser window our case */
    margin-left: auto;  
    margin-right: auto;  
}
```
It is a bad practice to use element id to style the element, use it sparingly.  

javascript:void(0); means stay on the page, the void operator evaluates the given expression and then returns undefined.

<h3 id="text-styling-and-formatting">Text Styling and Formatting</h3>

```css
html {
	font-family: "Times New Roman", serif, sans-serif;
	font-size: 2em; /* 2em = 2*30px get back to it */
	font-style: italic;

	text-align: center; /* any text base element will be centered; 'justify' will try to centre the element */
	line-height: 2em;
}

a {
	text-decoration: none;	/* remove underline */
	letter-spacing: 10px;
	word-spacing: 10px;  /* put 10px space between words */
	text-transform: capitalize; /* lowercase, uppercase & capitalize */
}
```
<h3 id="images">Images</h3>

```css
img {
   /****** applying responsivness to an image ******/
   max-width: 100%;
   height: auto; /* to maintain the aspect ratio of a photo */
   padding: 5px; /* paading 5px around the image */ 
   opacity: 0.70; /* transperancy from 0 to 1; 0 will be hidden, 1 will be completley visible */
   
   /****** centering an image ******/
   display: block; /* it will force line break */
   margin: auto; /* it will centre the image. it will try to split the margin around the image by two. */

   border: 2px solid white;
   border-radius: 10px;
}
```
<h3 id="icons">Icons</h3>

```css
.icon-big { 
    /* if it is font icon */
    font-size: 350%;
    display: block; /* will force line break */
    color: #e67e22;
    margin-bottom: 10px;
}
```

<h3 id="grid-system">Grid System (Rows and Columns)</h3>

We'll create our grid system and placing items inside.  
```css
.row {
    display: flex;
    width: 100%;
}

/*every time row is created we need something to happen after it*/
.row::after {
    display: block; /* stack rows upon each other */
    /* if there're any elements inside this row that have float property like float right or left and has overflow, we're going to clear that */
    clear: both; 
    content: "";
}

.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

* { 
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

/* attribute selector, grab every single class which starts with col- */
[class*="col-"]{ 
    border: 2px solid red;
    padding: 15px;
}
```

<h3 id="center-element">Technique to Centre an Element</h3>

```html
<div class="header__text-box">
</div>

.header__text-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

<h3 id="transform">Transform</h3>

```css
img:hover {
    transform: scale(1.5); /* it will make the image 1.5 times bigger */
    transform: rotate(20deg); /* it will rotate the item 20 degree */
}

p {
  transform: skewX(-32deg);
}
```

<h2 id="box-model"> Box Model </h2>

**content**: Actual content (image, text, etc)  
**padding**: Transparent area around the content inside the box  
**border**: Goes around the padding and the content  
**margin**: Create a space ouside the element and between boxes

`box-sizing: border-box;` Include padding and border in the element's total width and height.

<h2 id="targeting-elements">Targeting Elements (selectors)</h2>

* ### Targeting Direct Element
    ```css
    body {
        background: #145asE545;
    }
    p {
        color: red;
        text-align: justify;
    }
    ```
* ### Targeting Element by #id
    The id selector uses the id attribute of an HTML element to select a specific element.
	The id of an element should be unique within a page, so the id selector is used to select one unique element!
	The id name cannot start with a number!
	```css
	#signup-id {
		border: 1px solid black;
		border-width: 2px;
		border-color: white;
    }
    ```
* ### Targeting Element by Class Name
    class name cannot start with a number!
    ```css
	.square {
		width: 100px;
		height: 100px;
		background-color: blue;
		margin: auto; /* puts equal spacing on each side of my element - centre the element. */
    }

    /* Only <p> elements with class="center" will be center-aligned. */
    p.center {
	    text-align: center;
	    color: red;
	}        
    ```
* ### CSS Combinators
    **Direct Child Only** 
    ```css
    /* any body element which has header which has h3 elements */
    body > header > h3 { 
	    color: #f00;
    }
    ```
	
	Unlike **Descendent Selector** which means every single h3 under the body element (_it doesn't matter how deep is it_)
    ```css
	body h3 {
		color: #020;
    }
    ```	
* ### CSS Grouping Selectors
    If you have elements with the same style declarations, it will be better to group the selectors to minimize the code:
    ```css
	h1, h2, p, .container, #name {
   		text-align: center;
    	color: red;
    }
    ```
* ### CSS Specificity
    Here's the calculation, put 0 or 1 for each of the following elements: 
	- (inline style) style property embeded in html
	- id
	- class, psudeo-class or attribute ex: [id="foo"]
	- html elements

    #### Example #1:
    ```css
    body h1.main #id {
    }
    ```
    0 point for style attribute [no style attribute]  
    1 point for id [#id]  
    1 point for class, psudeo-class, attribute [.main]  
    2 point for html elements [body & h1]  

    This will be evaluated to: 0 1 1 2

    #### Example #2:
    ```css
    #foo {
        color: red;
    }
    ```
    This will be evaluated to: 0 1 0 0
    ```css
    [id="foo"] { /* another way to grap element by id using attribute selector */
        color: red;
    }
    ```
    This will be evaluated to: 0 0 1 0  
    So **first one** will win because 0100 > 0010

    It doesn't matter the hierarchy of HTML page, it is about the order in the CSS itself
    ```css
    body h1 {
        color: green;
    }
    html h1 {
        color: red;
    }
    ```
    So final color will be red.

    `!important` use it scarcely. only use on page specific css that override forign CSS like external liberaries such as bootstrap or normalize.css

<h2 id="units"> Units (px, %, em, rem, vh & wh)</h2>

`width: 10vw` would be 10% of the viewport's width.  
`width: 3vh` would be 3% of the viewport's height.  
`width: 70vmin` would be 70% of the viewport's smaller dimension (height vs. width).  
`width: 100vmax `would be 100% of the viewport's bigger dimension (height vs. width).

<h2 id="colors">Colors</h2>
We usually use decimals, or base 10 numbers, which use the symbols 0 to 9 for each digit. Hexadecimals (or hex) are base 16 numbers. This means it uses sixteen distinct symbols. Like decimals, the symbols 0-9 represent the values zero to nine. Then A,B,C,D,E,F represent the values ten to fifteen. Altogether, 0 to F can represent a digit in hexadecimal, giving us 16 total possible values.
In CSS, we can use 6 hexadecimal digits to represent colors, two each for the red (R), green (G), and blue (B) colors #000000
 
From these three pure colors (red, green, and blue), we can vary the amounts of each to create over 16 million other colors!  
16 * 16 * 16 * 16 * 16 * 16 = 16777216

#FFA500 The digit 0 is the lowest number in hex code, and represents a complete absence of color, The digit F is the highest number in hex code, and represents the maximum possible brightness

Many people feel overwhelmed by the possibilities of more than 16 million colors. And it's difficult to remember hex code. Fortunately, you can shorten it.
For example, red's hex code #FF0000 can be shortened to #F00. This shortened form gives one digit for red, one digit for green, and one digit for blue.

This reduces the total number of possible colors to around 4,000. But browsers will interpret #FF0000 and #F00 as exactly the same color.

rgb(255, 255, 255) = rgb (16\*16, 16\*16, 16\*16) each color represented by two digits

<h3 id="complementary-colors">Complementary Colors</h3>
When two colors are opposite each other on the wheel, they are called complementary colors.
They have the characteristic that if they are combined, they "cancel" each other out and create a gray color. 
However, when placed side-by-side, these colors appear more vibrant and produce a strong visual contrast.  
Some examples of complementary colors with their hex codes are:

* red (#FF0000) and cyan (#00FFFF)
* green (#00FF00) and magenta (#FF00FF)
* blue (#0000FF) and yellow (#FFFF00)

<h3 id="tertiary-colors">Tertiary Colors</h3>

Red (R), green (G), and blue (B) are called primary colors. Mixing two primary colors creates the secondary colors cyan (G + B), magenta (R + B) and yellow (R + G). You saw these colors in the Complementary Colors. These secondary colors happen to be the complement to the primary color, and are opposite to that primary color on the color wheel.
For example, magenta is made with red and blue, and is the complement to green. 

_Tertiary colors_ are the result of combining a primary color with one of its secondary color neighbors.

<h3 id="color-hue">Adjust the Hue of a Color</h3>

Colors have several characteristics including hue, saturation, and lightness. CSS3 introduced the `hsl()` property as an alternative way to pick a color by directly stating these characteristics.

**Hue** is what people generally think of as 'color'. If you picture a spectrum of colors starting with red on the left, moving through green in the middle, and blue on right, the hue is where a color fits along this line. In hsl(), hue uses a color wheel concept instead of the spectrum, where the angle of the color on the circle is given as a value between 0 and 360.

**Saturation** is the amount of gray in a color. A fully saturated color has no gray in it, and a minimally saturated color is almost completely gray. This is given as a percentage with 100% being fully saturated.

**Lightness** is the amount of white or black in a color. A percentage is given ranging from 0% (black) to 100% (white), where 50% is the normal color.

Here are a few examples of using `hsl()` with fully-saturated, normal lightness colors:

| Color	| HSL 
|---|---
|red	|hsl(0, 100%, 50%)
|yellow	|hsl(60, 100%, 50%)
|green	|hsl(120, 100%, 50%)
|cyan	|hsl(180, 100%, 50%)
|blue	|hsl(240, 100%, 50%)
|magenta|	hsl(300, 100%, 50%)

<h3 id="css-gradient">CSS gradient</h3>

Display smooth transitions between two or more specified colors.
* https://www.w3schools.com/css/css3_gradients.asp
* https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient
* https://www.w3schools.com/colors/colors_picker.asp

There is a linear-gradient and radial-gradient;
```css
/* first argument specifies the direction, from which color transition starts - it can be stated as a degree where 90deg makes a vertical gradient */
background-image: linear-gradient(to right, red , yellow);
background-image: radial-gradient(red 5%, yellow 15%, green 60%);
```

Use a CSS Linear Gradient to Create a Striped Element
```html
<style>
  div { 
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );
  }
</style>

<div></div>
```

<h2 id="custom-css-variable">Create a custom CSS Variable</h2>

To create a CSS Variable, you just need to give it a name with two dashes in front of variable name and assign it a value: 

```css 
--penguin-skin: gray;
```
This will create a variable named --penguin-skin and assign it the value of gray.

Usage:
```css
background: var(--penguin-skin);
```
### Attach a Fallback value to a CSS Variable
When using your variable as a CSS property value, you can attach a fallback value that your browser will revert to if the given variable is invalid.
```css
    background: var(--penguin-skin, black);
```

### Improve Compatibility with Browser Fallbacks
When your browser parses the CSS of a webpage, it ignores any properties that it doesn't recognize or support. For example, if you use a CSS variable to assign a background color on a site, Internet Explorer will ignore the background color because it does not support CSS variables. In that case, the browser will use whatever value it has for that property. If it can't find any other value set for that property, it will revert to the default value.

```css
.red-box {
    background: red; /* better to add */
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
```

<h2 id="cascadaing-css">Cascading CSS variables</h2>
When you create a variable, it becomes available for you to use inside the element in which you create it. It also becomes available within any elements nested within it. This effect is known as cascading.
Because of cascading, CSS variables are often defined in the `:root` element.
You can think of the `:root` element as a container for your entire HTML document,

By creating your variables in `:root` selector, they will be available throughout the whole web page.
```css
:root {    
    --penguin-belly: pink;
  }
```

You can then overwrite these variables by setting them again within a specific element.

```css
.penguin {
    --penguin-belly: white;
}
```

<h2 id="visual-design">Visual Design</h2>
Visual Design in web development is a broad topic. It combines typography, color theory, graphics, animation, and page layout to help deliver a site's message. In web development, HTML gives structure and semantics to a page's content, and CSS controls the layout and appearance of it.


* `text-align: justify;` Causes all lines of text except the last line to meet the left and right edges of the line box.
    ```css
    p {
        text-align: justify;
    }
    ```

* With the `<s>` tag (strickthrough), the browser applies the CSS of `text-decoration: line-through;` to the element.

* rgba(255, 255, 255) The RGB values can range from 0 to 255. The alpha value can range from 1, which is fully opaque or a solid color, to 0, which is fully transparent or clear. 
    ```
    rgba stands for:
    r = red
    g = green
    b = blue
    a = alpha (level of opacity)
    ```
* The opacity property in CSS is used to adjust the opacity, or conversely, the transparency for an item
    * A value of 1 is opaque, which isn't transparent at all.
    * A value of 0.5 is half see-through.
    * A value of 0 is completely transparent.
* If you need a color with transperancy use rgb not hexadecimal `rgba(0, 204, 255, 0.75)`;
* The `font-weight` property sets how thick or thin characters are in a text.
* The `line-height` property to change the height of each line in a block of text. It changes the amount of vertical space that each line of text gets.

* A pseudo-class is a keyword that can be added to selectors, in order to select a specific state of the element.

<h2 id="element-positioning">Element Positioing</h2>

`display: block;` use the full avaliable width and force line breaks (ex: h1, h2 ... h6, p)  
`display: inline;` ex: images, links, strong and em elements   
`display: inline-block;` It is just like an inline element, it can have padding and margin and it doesn't force a line break.  
`display: none;` will hide the element

<h3 id="relative-positioning"> Relative Position </h3>

CSS treats each HTML element as its own box, which is usually referred to as the CSS Box Model. Block-level items automatically start on a new line (think headings, paragraphs, and divs) while inline items sit within surrounding content (like images or spans). The default layout of elements in this way is called the normal flow of a document, but CSS offers the position property to override it.

When the `position` of an element is set to `relative`, it allows you to specify how CSS should move it *relative to* its **current position** in the normal flow of the page. It pairs with the CSS offset properties of `left` or `right`, and `top` or `b`ottom`. These say how many pixels, percentages, or ems to move the item away from where it is normally positioned. The following example moves the paragraph 10 pixels away from the bottom:
```csss
p {
  position: relative;
  bottom: 10px;
}
```
Changing an element's position to relative does not remove it from the normal flow - other elements around it still behave as if that item were in its default position.


```html
<style>
  h2 {
    position: relative;
    top: 15px;    
  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

<h3 id="absolute-positioning">Absolute Positioning</h3>

The next option for the CSS `position` property is `absolute`, which locks the element in place *relative to* its **parent container**. Unlike the relative position, *this removes the element from the normal flow of the document*, so surrounding items ignore it. The CSS offset properties (top or bottom and left or right) are used to adjust the position.

One nuance with absolute positioning is that it will be locked relative to its closest positioned ancestor. If you forget to add a `position` rule to the parent item, (this is typically done using `position: relative;`), the browser will keep looking up the chain and ultimately default to the `body` tag.

`absolute`: can be positioned any where we want inside thier parent element but you have to ensure parent element is `relative` and child element is `absolute`.

```html
<style>
  #searchbar {
    position: absolute;
    top: 50px;
    right: 50px    
  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>
```

<h3 id="fixed-positioing">Fixed Positioning</h3>

The next layout scheme that CSS offers is the `fixed` position, which is a type of absolute positioning that locks an element *relative to* the **browser window**. Similar to absolute positioning, it's used with the CSS offset properties and also removes the element from the normal flow of the document. Other items no longer "realize" where it is positioned, which may require some layout adjustments elsewhere.

One key difference between the fixed and absolute positions is that an element with a fixed position won't move when the user scrolls.
```css
  #navbar {
    position: fixed;
    top: 0;
    left: 0;
  }
```
<h3 id="float-property">Float Property</h3>

The next positioning tool does not actually use `position`, but sets the `float` property of an element. Floating elements are removed from the normal flow of a document and pushed to either the left or right of their containing parent element. It's commonly used with the `width` property to specify how much horizontal space the floated element requires

We use the `float` property to put block elements side by side
```html
<head>
  <style>
  #left {
    float: left;
    width: 50%;
  }
  #right {
    float: right;
    width: 40%;
  }
  aside, section {
    padding: 2px;
    background-color: #ccc;
  }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
</body>
```

`clear` property is the counterpart of the `float` property [need to understand]

```css
.clearfix:after {
	content:"";
	display: table;
	clear: both;
}
```
You need to add an empty clear fix div 
```css
<div class="clearfix"> </div>
```

<h3 id="z-index-property">z-index Property</h3>

When elements are positioned to overlap, the element coming later in the HTML markup will, by default, appear on the top of the other elements. However, the `z-index` property can specify the order of how elements are stacked on top of one another. It must be an integer, and higher values for the `z-index` property of an element move it higher in the stack than those with lower values.
```css
  .first {
    background-color: red;
    position: absolute;
    z-index: 2;
  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
```
<h3 id="position-using-margin-property">Positioning technique with Margin Property</h3>

Another positioning technique is to center a block element horizontally. One way to do this is to set its `margin` to a value of `auto`.  
This method works for images, too. Images are inline elements by default, but can be changed to block elements when you set the `display` property to `block`.

```html
<style>
    div {
        background-color: blue;
        height: 100px;
        width: 100px;
        margin: auto;
    }
</style>
<div></div>
```
<h2 id="adding-content-by-css">Adding content by css</h2>

It will add some content after h2 so we can style it as normal element
```css
h2:after {
    display: block;
    height: 2px;
    background-color: #e67e22;
    content: "";
    width: 100px;
    margin: 30px auto 0 auto; /* centering the element */
}
```

<h2 id="buttons-links-css">Buttons or links in CSS</h2>

Buttons can have different states `link`, `visited`, `active` and `hover` and all are pseudo-classes
```css
.btn-full:link, /*  for links that have not been visited yet */
.btn-full:visited { /* when the user visited the link before */
    background-color: #e67e22;
    border: 1px solid #e67e22;
    color: #fff;
    margin-right: 15px;
}

.btn-full:hover, 
.btn-full:active { /* when user click the button, time between the user presses the mouse button and releases it. */
    border: 1px solid #cf6d17;
    color: #fff;
}
``` 

<h2 id="css-pillars">The three pillars to write good html and css</h2>

* ### Responsive Design (Looks beautiful on all screen sizes on all devices)
	* Fluid Grids and Layouts
	* Media Queries
	* Flexible/Responsive Images, optimize image width.
	* Correct Units
	* Desktop First vs Mobile First
* ### Maintainable and Scalable Code
	* Clean
	* Easy to understand
	* Growth
	* Resusable
	* How to organize files 
	* How to name classes 
	* How to structure html
* ### Web Performance
	* Less http requests, which means include little files
	* Less code
	* Compress Code
	* Use CSS Preprocessor
	* Less Images
	* Compress Images

<h2 id="responsive-web-design">Responsive web design</h2>

### Three ingredients to responsive web design
- Fluid grid and layouts: all layout elements are sized in relative unites, such are percentages, instead of absolute units like pixels.
- Flexible and Responsive images: Images are also sized in relative unites. Optimize image width.
- Media Queries: allow us to specify different CSS style rules for different browser widths.

<h3 id="fluid-grid">Fluid Grid</h3>

* Fluid Grid and Layout Types:  
Float Layouts, Flexbox and CSS Grid (best).  
Float Layouts still used nowadays because flexbox and css grid still not supported by all browsers.

* Build a custom grid with floats
    ```css
    .row {
    /* difference between max-width and width is max-width it will take 100% of the view port if the width is less than 1140px, so if the viewport is small it will adopt automatically */
    max-width: $grid-width;
    background-color: #eee;
    margin: 0 auto;

    /* select everything except the last child */
    &:not(:last-child) {
        margin-bottom: $gutter-vertical;
    }

    /* if we didn't use clear fix, the width of the height will be 0px, because the child elements (columns) are floated to left so we need to use clear fix heck */

    @include clearfix;

    /* Using the attribute selector
        ^ select all elements which have a class attribute and strat with col-
        $ select all elements which have a class attribute and end with col-
        * select all elements which have a class attribute and contains col- */
    [class^="col-"] {
        background-color: orange;
        float: left;
        &:not(:last-child) {
        margin-right: $gutter-horizontal;
        }
    }

    /* we make variable $gutter-horizontal so for future projects we can play with the value as we want */
    .col-1-of-2 {
        /*  calc is a css function, it allows calcualtions where you can mix units, in order to use sass variables you need to wrap the variable inside #{ } */
        width: calc((100% - #{$gutter-horizontal}) / 2);
    }

    .col-1-of-3 {
        width: calc((100% - 2 * #{$gutter-horizontal}) / 3);
    }

    .col-2-of-3 {
        width: calc(2 * ((100% - 2 * #{$gutter-horizontal}) / 3) + #{$gutter-horizontal});
    }
    
    .col-1-of-4 {
        width: calc((100% - 3 * #{$gutter-horizontal}) / 4);
    }

    .col-2-of-4 {
        width: calc(2 * ((100% - 3 * #{$gutter-horizontal}) / 4) + #{$gutter-horizontal});
    }

    .col-3-of-4 {
        width: calc(3 * ((100% - 3 * #{$gutter-horizontal}) / 4) + (2 * #{$gutter-horizontal}));
    }

    }
    ```

<h3 id="responsive-images">Responsive Images</h3>

Responsive images are crucial for web performance. The goal of responsive image is to serve the right image to the right screen size and device, in order to avoid downloading unnecessary large images on smaller screens, instead of sending 1 mb image, send 200kb image.

We have responsive images in (html) and (responsive images in css like background)

3 use cases to use responsive images: 
* **Resolution Switching**: Decrease image resolution on smaller screen; same image with smaller resolution.
* **Density Switching**: Special Case of resolution switching, screen size doesn't matter but the screen density does instead.  
Density means amount of pixels found on an inch or centermenter		
    * @2x screen 
        * (high resolution) 
        * (mac with retina display and all modern smart phones)
        * (use two physical pixel to display 1 pixel of our design)
    * @1x screen 
        * (Low resolution) 
        * (our normal computers)  
        
* **Art Direction**	When you want to not serve the same image but whole different image for different screen sizes

Check natours index page to see the different flavours
```css
@media (min-resolution: 192dpi) and (min-width: 600px){
	background-image: linear-gradient(to right bottom, rgba($color-secondary-light, 0.8), rgba($color-secondary-dark, 0.801)), 
	url(../img/hero.jpg);
}

/* Make an Image Responsive */
img {
  /* scales the image to fit the width of its container */
  max-width: 100%;
  display: block;
  /* keeps the original aspect ratio of the image. */
  height: auto;
}
```


<h3 id="media-queries">Media Queries</h3>

```css
@media (max-width: 100px) { /* CSS Rules */ }
@media (min-height: 350px) { /* CSS Rules */ }
```
Media query will trigger at different breakpoints, and breakpoints are screen width at which we want our website to look good at all devices

* 0 - 480px >> mobile
* 480px - 767px >> tablet
* 768px - 1023px >> tablet
* 1024px - 1200px >> PC

when you just starting out the easiest way is to define breakpoints for popular devices width like iPhone or iPad
but when you get more experience you start putting more break points where your websites looks terrible

```html
<!-- required for mobile view; it's telling device not to zoom out and start with scale 1.0 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
For testing media query on different devices, there is a website sizzy.co put your website url and it will show you different sizes

<h2 id="browser-support">Browser Support & Compitability</h2>

If you need to support some of the browsers you can check property browser support at caniuse.com.

Use Graceful Degradation using `@supports`.

Go back to this section again if required, video 'A note about the web browsers'

<h2 id="animation">Animation</h2>

```css
@keyframes animate {
    0% {
        background-color: black;
        margin-left: 0;
    }
    100% {
        background-color: white;
        margin-left: 200px;
    }
}

/* usage */
p {
    animation-name: animate;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    /* the animation-timing-function property controls how quickly an animated element changes over the duration of the animation. 
    The default value is ease, which starts slow, speeds up in the middle, and then slows down again in the end. */
    animation-timing-function: east-out;    
    /* animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75); */
}
```

```css
button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
    /* The animation-fill-mode specifies the style applied to an element when the animation has finished.
    You want the button to stay highlighted when the user hover over it */
    animation-fill-mode: forwards;
}
@keyframes background-color {
    100% {
        background-color: #4791d0;
    }
}
```
<h2 id="how-css-works">How CSS works behind the scenes?</h2>

Read the pdf of advanced css course.

### 1- Cascading process: 
Process of combining different stylesheets and resolving conflicts between different css rules.

* author declerations: what we -developers- write.
* user declerations: when user change the default font size in the browser.
* browser (user agent) declarations: default css set by the browser.
	
How it fix the conflicts? importance (weight) > specificity > source order  
The universal selector has * has no specificity value (0,0,0,0)
```css
#nav div.pull-right a.button {
	background-color: green;
}
/* :hover >> in the same level of class */
#nav a.button:hover {
    background-color: yellow;
}
/* first one will win because it has extra element div */
```

### 2- Process final css value (Value Processing): 
	%, em, rem, vw, hw to pixels
	
### 3- Stacking Context:
```css
z-index: 3;
position: relative;

z-index: 2;
position: absolute;

z-index: 3;
position: relative;
```
Note: Obacity, transform, filter also create a new stacking context, because of that sometimes when putting the element with z-index stacking doesn't work as expected
	
<h2 id="css-archticture">CSS archticture</h2>

### BEM (Block Element Modifier)

```css
/* standalone component meaningful of its own ex: .btn */
.block{}
/* part of a block and has no standalone meaning */
.block__element{}
/* a different version of block or element .btn--round */		
.block--modifier{}
.block__element--modifier{}	
```

### 7-1 pattern (by google)
Create a separate folder for each component.   
7 different folders for partial sass files.  
1 main Sass file to import all the other files into a compiled css sytlesheet  
The 7 folders are:
* base/
* components/ (1 file for each component)
* layout/
* pages/
* themes/
* abstracts/ (variables and mixins)
* vendors/

Use this in larger projects it will be handy, for small projects you can use one scss file.


<h2 id="sass">SASS</h2>

Other css preprocessor LESS and STYLUS

### Advantages:
* **Variables** for resusable values such as colors, font-sizes, spacing, etc. 
    ```css
    $color-primary: #f9ed69; 
            
    nav {
        background-color: $color-primary;
    }
    ```
* **Nesting**: to nest selectors inside of one another which allowing to write less code.
    ```css	
    .navigation {
        list-style: none;
        float: left;
        
        /* no need for & beacuse it is a direct child of .navigation but in case of :first-child is attached to the element so we need to use &: */

        /* & means concatenate */
        li {
            display: inline-block;
            margin-left: 30px;

            /* It will write the path until this point, means .navigation li:first-child {} */
            &:first-child { 
                margin: 0;
            }
            
            a:link {
                @include style-link-text($color-text-dark);
            }
        }
    }
    ```
* **Operatots**: for mathematical operations right inside css.
* **Partials and Imports**: to write css in different files and importing them all into one single file. Partial files always start with _underscore but imported without underscore and extention.
    ```css 
    /* without _ and .scss */
    @import "base/base";
    ```
* **mixins**: to write resusable pieces of css code.
    ```css
    @mixin clearfix {
        &::after {
        content: "";
        clear: both;
        display: table;
        }
    }

    nav {
        margin: divide(60, 2) * 1px; /* 30px */
        background-color: $color-primary;
        
        @include clearfix;
    }
    ```
* **functions**: similar to mixins but produce value
    ```css
    darken($color-secondary, 15%);

    @function divide($a, $b) {
        @return $a / $b;
    }

    nav {
        margin: divide(60, 2) * 1px; /* 30px */
    }
    ```	
* Extends DRY (Don't Repeat Yourself) by applying Inheritance
    ```css		
    %btn-placeholder {
        padding: 10px;
        /* will put the padding around the element.
        without using inline-block it will put padding only on right and left side. */
        display: inline-block; 
        text-align: center;
        border-radius: 100px;
        width: $width-button;
        @include style-link-text($color-text-light);
    }

    .btn-main {
        &:link {
            @extend %btn-placeholder; 
            background-color: $color-secondary;
        }
        
        &:hover {
            background-color: darken($color-secondary, 15%);
        }
    }

    .btn-hot {
        &:link {
            @extend %btn-placeholder;
            background-color: $color-tertiary;
        }
        
        &:hover {
            background-color: lighten($color-tertiary, 10%);
        }
    }
    /* difference between mixins is that code will not be repeated in time of compiling to css, the extend code will be only one.

    code will not be copied to @extend place instead it will be like below(put .btn-main:link, .btn-hot:link before the placeholder) */

    .btn-main:link,
    .btn-hot:link {
        padding: 10px;
        display: inline-block; // will put the padding around the elemnt, without using inline-block it will put padding only on right and left side
        text-align: center;
        border-radius: 100px;
        width: $width-button;
        @include style-link-text($color-text-light);
    } 
    ```
* Controls directive for writing complex code using **conditionals and loops**  
	
**.sass** syntax (without curly braces)  
**.scss** syntax (sassy css) (with curly braces)

Example: https://codepen.io/anon/pen/eGZKyY?editors=1100#0
 
<h2 id="accessibility">Applied Accessibility</h2>

`alt` text describes the content of the image and provides a text-alternative. This helps in case the image fails to load or can't be seen by a user. It's also used by search engines to understand what an image contains to include it in search results. 

Background images usually fall under the 'decorative' label as well. However, they are typically applied with CSS rules, and therefore not part of the markup screen readers process.

### Use Headings to Show Hierarchical Relationships of Content
Screen readers can be set to read only the headings on a page so the user gets a summary. This means it is important for the heading tags in your markup to have semantic meaning and relate to each other, not be picked merely for their size values.

Each page should always have one (and only one) h1 element, which is the main subject of your content. This and the other headings are used in part by search engines to understand the topic of the page.

### Page Structure
HTML5 introduced a number of new elements that give developers more options while also incorporating accessibility features. These tags include `main`, `header`, `footer`, `nav`, `article`, and `section`, among others.
This adds semantic meaning to the page content.

`article` tag works well with blog entries, forum posts, or news articles

Note about `section` and `div`  
The `section` element is also new with HTML5, and has a slightly different semantic meaning than `article`. An `article` is for standalone content, and a `section` is for grouping thematically related content. They can be used within each other, as needed. For example, if a book is the `article`, then each chapter is a `section`. When there's no relationship between groups of content, then use a `div`.
```html
<div> <!--  groups content -->
<section> <!--  groups related content -->
<article> <!--  groups independent, self-contained content -->
```
### HTML `audio` Element
HTML5's `audio` element gives semantic meaning when it wraps sound or audio stream content in your markup. Audio content also needs a text alternative to be accessible to people who are deaf or hard of hearing. This can be done with nearby text on the page or a link to a transcript.

```html
<audio id="meowClip" controls>
  <source src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg" />
  <source src="audio/meow.ogg" type="audio/ogg" />
</audio>
```

### Improve Chart Accessibility with the `figure` Element

HTML5 introduced the figure element, along with the related figcaption. Used together, these items wrap a visual representation (like an image, diagram, or chart) along with its caption.

```html
<figure>
  <img src="roundhouseDestruction.jpeg" alt="Photo of Camper Cat executing a roundhouse kick">
  <br>
  <figcaption>
    Master Camper Cat demonstrates proper form of a roundhouse kick.
  </figcaption>
</figure>
```

### Improve Form Field Accessibility with the label Element
```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
```

### Wrap Radio Buttons in a fieldset Element for Better Accessibility
```html
<form>
  <fieldset>
    <legend>Choose one of these three items:</legend>
    <input id="one" type="radio" name="items" value="one">
    <label for="one">Choice One</label><br>
    <input id="two" type="radio" name="items" value="two">
    <label for="two">Choice Two</label><br>
    <input id="three" type="radio" name="items" value="three">
    <label for="three">Choice Three</label>
  </fieldset>
</form>
```
### Standardize Times with the HTML5 `datetime` Attribute
HTML5 also introduced the `time` element along with a `datetime` attribute to standardize times. This is an inline element that can wrap a date or time on a page. A valid format of that `date` is held by the `datetime` attribute. This is the value accessed by assistive devices.
```html    
<p>Posted by: Sub-Zero on 
    <time datetime="2016-08-13T20:01Z">August 13<sup>th</sup></time>
</p>
```

### Make Elements Only Visible to a Screen Reader by Using Custom CSS

CSS's can also improve accessibility on your page when you want to visually hide content meant only for screen readers. 
This happens when information is in a visual format (like a chart), but screen reader users need an alternative presentation (like a table) to access the data. 
CSS is used to position the screen reader-only elements off the visual area of the browser window
```css
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
```
```html
<table class="sr-only">
      <caption>Hours of Weekly Training in Stealth, Combat, and Weapons</caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Stealth &amp; Agility</th>
          <th scope="col">Combat</th>
          <th scope="col">Weapons</th>
          <th scope="col">Total</th>                                        
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Week One</th>
          <td>3</td>
          <td>5</td>
          <td>2</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">Week Two</th>
          <td>4</td>
          <td>5</td>
          <td>3</td>
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">Week Three</th>
          <td>4</td>
          <td>6</td>
          <td>3</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>
  </section>
```

Note:
The following CSS approaches will NOT do the same thing:

* `display: none;` or `visibility: hidden;` hides content for everyone, including screen reader users
* Zero values for pixel sizes, such as width: 0px; height: 0px; removes that element from the flow of your document, meaning screen readers will ignore it

### Improve Readability with High Contrast Text
* Low contrast between the foreground and background colors can make text difficult to read. 
* Sufficient contrast improves the readability of your content.  
* Avoid Colorblindness Issues by Using Sufficient Contrast
* Avoid Colorblindness Issues by Carefully Choosing Colors that Convey Information

### Others:

* Screen readers can read what's between anchor tags, so choose proper text to put between anchor tags
    ```html 
    Click here for <a href="">information about batteries</a>
    <h2 id="tools">Tools</h2>
    ```
* Make Links Navigatable with HTML Access Keys
    ```html
    <a href="" accesskey="g"> Important Link</a>
    ```
* Use `tabindex` to Add Keyboard Focus to an Element  
    The HTML `tabindex` attribute has three distinct functions relating to an element's keyboard focus. 
    When it's on a tag, it indicates that element can be focused on. The value (an integer that's positive, negative, or zero) determines the behavior

    Certain elements, such as links and form controls, automatically receive keyboard focus when a user tabs through a page. It's in the same order as the elements come in the HTML source markup. This same functionality can be given to other elements, such as `div`, `span`, and `p`, by placing a `tabindex="0"` attribute on them. Here's an example:

    ```html
    <div tabindex="0">I need keyboard focus!</div>
    ```

    A negative `tabindex` value (typically -1) indicates that an element is focusable, but is not reachable by the keyboard. 

    Use tabindex to Specify the Order of Keyboard Focus for Several Elements

    The tabindex attribute also specifies the exact tab order of elements. This is achieved when the value of the attribute is set to a positive number of 1 or higher.

    It's important to note that when the tab order is set this way, it overrides the default order (which uses the HTML source). This may confuse users who are expecting to start navigation from the top of the page. This technique may be necessary in some circumstances, but in terms of accessibility, take care before applying it.

    ```html    
    <div tabindex="1">I get keyboard focus, and I get it first!</div>
    <div tabindex="2">I get keyboard focus, and I get it second!</div>
    ```


<h3 id="Emmet">Emmet</h3>

Writing .row>(.col-1-of-4>.feature-box)*4 will generate: 

```html
<div class="row">
  <div class="col-1-of-4">
	<div class="feature-box"></div>
  </div>
  <div class="col-1-of-4">
	<div class="feature-box"></div>
  </div>
  <div class="col-1-of-4">
	<div class="feature-box"></div>
  </div>
  <div class="col-1-of-4">
	<div class="feature-box"></div>
  </div>
</div>
```
