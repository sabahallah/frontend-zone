* When JavaScript variables are declared, they have an initial value of `undefined`. If you do a mathematical operation on an `undefined` variable your result will be `NaN` which means "Not a Number". If you concatenate a string with an `undefined` variable, you will get a literal string of "undefined".
* In JavaScript all variables and function names are case sensitive. This means that capitalization matters. MYVAR is not the same as MyVar nor myvar
* In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.
    ```
    17 % 2 = 1 (17 is Odd)
    48 % 2 = 0 (48 is Even)
    ```
    The remainder operator is sometimes incorrectly referred to as the "modulus" operator. It is very similar to modulus, but does not work properly with negative numbers.
* Escaping Literal Quotes in Strings
    ```js
    var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
    ```
* Escape Sequences in Strings
Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	backspace
\f	form feed

    ```js
    var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 
    ```
* In JavaScript, String values are immutable, which means that they cannot be altered once created.
* An easy way to append data to the end of an array is via the `push()` function. `.push()` takes one or more parameters and "pushes" them onto the end of the array.
    ```js
    var arr = [1,2,3];
    arr.push(4);
    arr.push(["dog", 3]);
    ```
*  `.pop()` removes the last element from an array and returns that element.
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