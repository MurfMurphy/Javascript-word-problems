// //Problem 1 Reverse String

// function reverseString(str) {
//     var myStrings = "";
// //sets myStrings equal to an undefined string
//     for (var i = str.length - 1; i >= 0; i--){
//         myStrings += str[i];
//         console.log(myStrings);
//     }
// }

// reverseString('hello');


//Problem 2 FizzBuzz

// for (var i=1; i<= 100; i++)(function(i){
//     //this for loop just counts i from 1 to 100

//     var bees = ""
//     //this makes the var bees an undefined string

//     if (i % 3 === 0 && i % 5 === 0)
//         bees == "FizzBuzz"
//     //if the its divisible by both 3 && 5 it outputs fizzbuzz
//     if (i % 3 === 0)
//         bees += "Fizz"
//     //same but just 3
//     if (i % 5 === 0)
//         bees += "Buzz"
//     //same but just 5
    
//     console.log(bees || i)
//     //logging the output of bees with the var i (so the numbers still print)
// })(i)


//Problem 3
//DONT USE
// var igPay = function(str) {

//     var aeiou = ['a', 'e', 'i', 'o', 'u'];
//         atinLay = '';
//     //Creates variables for the vowels and an undefined string
//     for(var i=0; i < aeiou.length-1; i++) {
//     //gets the function to read to a vowel and go one before (the pig latin is kind of fucky with words that start with a vowel, though)
//         for(var g = 0; g < str.length-1; g++) {
//         //similar but with the length of a string
//             if(str[g] === aeiou[i]) {
//             //if both are equal to eachother
//                 for(var x=g; x < str.length; x++){
//                 //new var = to the length of g/str
//                     atinLay = atinLay + str[x];
//                 //sets my undefined string to be equal to that string + str, with the new array from the last for loop
//                 }
//                 for(var n=0; n<g; n++){
//                 //similar to the last for
//                     atinLay = atinLay + str[n];
//                 //ditto
//                 }
//                 console.log(atinLay + "ay")
//             }
//         }
//     }

// }

// igPay("house");


// //Problem 3 (hopefully good this time)

// function translateAtinLay(str) {

//     var vowel = "aeiou";
//         match = -1;
//         index = -1;
//

//     for (var x = 0; x < str.length && match < 0; x++) {
//       match = vowel.indexOf(str.charAt(x));
//     //finding where the first vowel is and assigning the letters before it
//       if (match >= 0) {
//         index = x;
//       }
//     }
//     if (index > 0) {
//       str = str.slice(index) + str.substring(0, index) + "ay";
//       //breaking up the word, adding ay modifier if first letter isnt a vowel
//     } else {
//       str = str.slice(index) + str.substring(0, index) + "way";
//       //if the first letter is a vowel, this adds way to the end
//     }

//     console.log(str)
//   }

// translateAtinLay('toronto')
// //I have 0 idea how to make this work for a phrase