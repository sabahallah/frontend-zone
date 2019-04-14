# Javascript Outlines

* When JavaScript variables are declared, they have an initial value of `undefined`. If you do a mathematical operation on an `undefined` variable your result will be `NaN` which means "Not a Number". If you concatenate a string with an `undefined` variable, you will get a literal string of "undefined".
* In JavaScript all variables and function names are case sensitive. This means that capitalization matters. MYVAR is not the same as MyVar nor myvar
* In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.

    ```js
    17 % 2 = 1 // (17 is Odd)
    48 % 2 = 0 // (48 is Even)
    ```

    The remainder operator is sometimes incorrectly referred to as the "modulus" operator. It is very similar to modulus, but does not work properly with negative numbers.
* Escaping Literal Quotes in Strings

    ```js
    var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
    ```

* Escape Sequences in Strings
  * \' single quote
  * \" double quote
  * \\ backslash
  * \n newline
  * \r carriage return
  * \t tab
  * \b backspace
  * \f form feed

  * ```js
    var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
    ```

* In JavaScript, String values are immutable, which means that they cannot be altered once created.
* An easy way to append data to the end of an array is via the `push()` function. `.push()` takes one or more parameters and "pushes" them onto the end of the array.

    ```js
    var arr = [1,2,3];
    arr.push(4);
    arr.push(["dog", 3]);
    ```

* `.pop()` removes the last element from an array and returns that element.

    ```js
    var arr = [1, 4, 6];
    var lastElement = arr.pop();
    console.log(arr);
    console.log(lastElement);
    ```

* `.shift()` It works just like .pop(), except it removes the first element instead of the last.

    ```js
    var arr = [1, 4, 6];
    var firstElement = arr.shift();
    console.log(arr);
    console.log(firstElement);
    ```

* `.unshift()` works exactly like `.push()`, but instead of adding the element at the end of the array, `unshift()` adds the element at the beginning of the array.

    ```js
    var myArray = [["Mahmoud", 23], ["Ahmed", 16]];
    myArray.unshift(["Wessam", 35]);
    ```

* In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
* Variables which are used without the var keyword are automatically created in the global scope.
* Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.
* A function can include the `return` statement but it does not have to. In the case that the function doesn't have a `return` statement, when you call it, the function processes the inner code but the returned value is `undefined`.
* The `case` in `switch` statement is doing strict equality `===`.
* In javascript objects, you can use numbers as properties. You can even omit the quotes for single-word string properties, as follows:

    ```js
    var anotherObject = {
        make: "Ford",
        5: "five",
        "model": "focus"
    };
    ```

    However, if your object has any non-string properties, JavaScript will automatically *typecast* them as strings.
* We can use the `.hasOwnProperty(propname)` method of objects to determine if that object has the given property name. `.hasOwnProperty()` returns true or false.
* JavaScript has a `Math.random()` function that generates a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive). Thus Math.random() can return a 0 but never quite return a 1
* `Math.floor(Math.random() * 20);` Generate random number between 0 and 19.
* `Math.floor(Math.random() * (max - min + 1)) + min;` Generate random number in any rang
* The `parseInt(string)` function parses a string and returns an integer. `var a = parseInt("007");` It converts the string "007" to an integer 7. If the first character in the string can't be converted into a number, then it returns NaN.
* The `parseInt(string, radix)` function parses a string and returns an integer. It takes a second argument for the `radix`, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

    ```js
    var a = parseInt("11", 2); // The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3.
    var b = parseInt('FXX123', 16); // base 16 hexadecimal
    var c = parseInt('015', 10); // base 10
    var d = parseInt(15.99, 10); // base 10
    ```

* Unlike `var`, when using `let`, a variable with the same name can only be declared once.

    ```js
    let camper = 'James';
    let camper = 'David'; // throws an error
    ```

* `"use strict"` This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance:

    ```js
    "use strict";
    x = 3.14; // throws an error because x is not declared
    ```