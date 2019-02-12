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