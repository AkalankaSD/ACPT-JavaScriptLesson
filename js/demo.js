
// While Loop //

var myNum = 20;

while(myNum > 15){

   // console.log("Hello While is running");

    myNum --;

    if(true){
        //break
    }
}

//////////////////////////////////////// ARRAY ////////////////////////////////////////////////

var studentMark = 89.6;

var studentMarks = [34.3, 56.5, 78, 67.4, 34, 65];

// console.log(studentMarks[4]);

// 0-----------> 5 (4)
// 0-----------> 10 (9)

for(var i=0; i< 6; i++){
   // console.log("Value is : "+ studentMarks[i]);
}

///////////////////////// check MAX Value ////////////////////////

var studentMarks = [34.3, 56.5, 78, 67.4, 34, 65];

const maxVal = Math.max.apply(null, studentMarks);
const minVal = Math.min.apply(null, studentMarks);

//console.log("Max Value = "+maxVal);
//console.log("Min Value = "+minVal);




///////////////////////// check MAX Value ////////////////////////

var numbers = [34.3, 56.5, 78, 67.4, 34, 65];

var max = numbers[0]; // Assume the first element is the maximum

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

//console.log("Max Value is : "+max);




//////////////////////////// Check MIN VAL ////////////////////////////////////////

var min = numbers[0]; // Assume the first element is the maximum

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  //console.log("Min Value is : "+min);


///////////////////////////// Separate with Characters //////////////////////////////////////////////////////

var nameString = "Hello JavaScript";
var characters = nameString.split('').map(x => x.toUpperCase());

console.log(characters);




/////////////////////////////////// Separate with Characters with loop ///////////////////////////////////////////////////////

var text = "Sandun";
var result = text.toUpperCase();
var length = text.length;
var arrayFinal = [];

for (var i = 0; i < length; i++) {

    arrayFinal.push(result.charAt(i));
}
console.log(arrayFinal);


/////////////////////////////////// Do While loop /////////////////////////////////////////

//do{
   // console.log("Running......!");
//}while(true){

//}