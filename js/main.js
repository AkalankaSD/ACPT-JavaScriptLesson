


function add(){

    var first = 10;
    var second = 20;

    console.log("Answer is "+ (first + second));
}

add();

function loginUser(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    console.log(email + " " + password)
}

// flow Controlers ----> if, else, else if


var number = 16;

if(num > 16){
    console.log("Condition True...!");
}


function GetCalculate(){
// getting string value
    //var Num1 = document.getElementById("email").value;
    //var Num2 = document.getElementById("password").value;


    var Num1 = parseInt(document.getElementById("num1").value);
    var Num2 = parseInt(document.getElementById("num2").value);

    alert(Num1+Num2);

}



function GetAverage(){
    var C1 = parseInt(document.getElementById("FCW").value);
    var C2 = parseInt(document.getElementById("SCW").value);
    var C3 = parseInt(document.getElementById("TCW").value);

    

    var getSum = C1+C2+C3;

    var GetAvg = getSum/3;

    if(GetAvg>55)
    {
        var FixedDecimal = parseFloat(GetAvg).toFixed(2);
        alert("Average is Greter than 55: Here is the Result - "+GetAvg);
    }

    alert(GetAvg);

}


function GetTotal(){

    var myNum = 5;

    if(myNum){

        var result = myNum % 2;

        if(result==0){
            alert("This will be Even Number");
        }
        else{
            alert("This will be Odd Number");
        }

    }
    else{
        alert("Please Insert a Value...!");
    }
    
}

var number1 = 20
console.log(number1 > 12 ? "Hii" : "Hello"); // ------>  Ternary Operator   replace wenne If and Else only.



function Login(){


    var dbUserName = "admin@gmail.com";
    var password = "admin@123";

   
    var email = document.getElementById("email").value;
    var upassword = document.getElementById("password").value;


    if(email==dbUserName && upassword==password){

        alert("Login Success");

    }
else{
    alert("Login Faild");
}

}



//-----------------------SWITCH CASE------------------------//

// seen = control variable

var seen = 5;

switch(seen){
    case 5:
        console.log("5 selected");
        break;

    case 6:
        console.log("6 selected");
        break;

    case 7:
        console.log("7 selected");
        break;

    default:
        console.log("Not Matched");
}
