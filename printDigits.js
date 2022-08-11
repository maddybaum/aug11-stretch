/*
Write a function called printDigits that takes in one argument, num. When given an integer, the function should print (console.log) each digit in reverse order, starting with the ones place. Do not do this by just turning the number into a string and reversing it. Solve the problem using math. (Hint: look up while loops, and don’t forget about the % operator.)

For example, if you were given 1 you should simply print 1, if given 314 you should print 4, 1, 3, and if given 12 you should print 2, 1:

printDigits(1)
// 1

printDigits(314)
// 4
// 1
// 3

printDigits(12)
// 2
// 1
*/
const printDigits = (num) => {
    // While a number still exists (aka NOT zero)...

    /*
      Truthy values are...
        - Any number that's not zero.
        - Any string that contains any character (whitespace).
        - True.
        - Empty objects.
    */
    while (num) {
      // Let's take the value off of the first column (ones place).
      let digitToPrint = num % 10 // 2
      console.log(digitToPrint)

      // Using math, subtract the ones place, and divide by 10 to remove it from our number.
      // console.log(num - digitToPrint);
      num = (num - digitToPrint) / 10 // 162 - 2 = 160 / 10 = 16
      // console.log(num);
    }
  }