/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here

var solution = 1;
for(var x=12; x>=1; x-- ){
    solution *= x;
}
console.log(solution)/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */


for(var row=0;row<26;row++){
    for(var col=0;col<100;col++)
        console.log(row+ "-" +col);
}