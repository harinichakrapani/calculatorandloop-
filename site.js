//add
function add(num1, num2){

  var addall = parseFloat(num1) + parseFloat(num2),
      addallString = num1 + ' + ' + num2 + ' = ' + addall;

      onclick=function(){
        document.getElementById('result').innerHTML=addallString;
      }

}

// substract

function subtract(num1, num2){

  var suball = parseFloat(num1) - parseFloat(num2),
      suballString = num1 + ' - ' + num2 + ' = ' + suball;

      onclick=function(){
        document.getElementById('result').innerHTML=suballString;
      }
}

// multiply

function multiply(num1, num2){

  var multall = parseFloat(num1) * parseFloat(num2),
    multallString = num1 + ' * ' + num2 + ' = ' + multall;
      document.getElementById('result').innerHTML=multallString;

      onclick=function(){
        document.getElementById('result').innerHTML=multallString;
      }
}


// divide

function divide(num1, num2){

  var divall = parseFloat(num1) / parseFloat(num2),
    divallString = num1 + ' / ' + num2 + ' = ' + divall;

    onclick=function(){
        document.getElementById('result').innerHTML=divallString;
      }
}

// this function will grab the inputs, populate the result div
// and run an operation
function populatehtml(operation){
  var input1 = document.getElementById('first').value;
  var input2 = document.getElementById('second').value;
  var output = operation(input1,input2);
    document.getElementById('result').innerText += output;


// this if else statement will return a statement if no
// value is entered

    if (input1 == "" || input2 == ""){

      document.getElementById('result').innerHTML="You must input numbers to calculate"
    } else {

    }
}

// buttons are assigned a function to do calculation

document.getElementById('add').onclick = function(){
    populatehtml(add) };
document.getElementById('subtract').onclick = function(){
    populatehtml(subtract) };
document.getElementById('multiply').onclick = function(){
    populatehtml(multiply) };
document.getElementById('divide').onclick = function(){
    populatehtml(divide) };
