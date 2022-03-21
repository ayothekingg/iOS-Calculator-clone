// Get History Value
function getHistory(){
  return  document.getElementById('history-value').innerText;
}
// Print History Value from Keyboard
function printHistory(num){
    document.getElementById('history-value').innerText=num;
}

// Get Output Value
function getOutput(){
  return document.getElementById('output-value').innerText;
}

// Print Output Value from Keyboard
// Use of commas
 function printOutput(num){
   if(num==""){
    document.getElementById('output-value').innerText=num;
  }
   else{
   document.getElementById('output-value').innerText=getFormattedNumber(num);
 }
}

//Use of comma function
function getFormattedNumber(num){
  var n = Number(num);
  var value = n.toLocaleString('en');
  return value;
}

//reversing to normal stringfunction reverseNumberFormat(num){
function reverseNumberFormat(num){
return Number(num.replace(/,/g, ''));
}

//selecting operator elements
var operator = document.getElementsByClassName('operator');

// Click operator
for(var i=0; i < operator.length; i++){
  operator[i].addEventListener('click', function(){
   //Clear screen when AC is clicked
    if(this.id == "button-ac"){
      printHistory("");
      printOutput("");
    }
// Display output and history values on screen
 
  
else {
      var output=getOutput();
      var history=getHistory();
    if  (output!="" || history!= ""){
        output=reverseNumberFormat(output);
        history=history + output;
       //Evaluate if equal sign is clicked
     if(this.id == "="){
       var result = eval(history);
          printOutput(result);
          printHistory("");
        }
      
        else{
          history=history+this.id;
          printHistory(history);
          printOutput('');
        }
      }
  }})

  
 
};

// Display number on screen
  var number = document.getElementsByClassName('number');
for(var i=0; i < number.length; i++){
  number[i].addEventListener('click', function(){
    var output= reverseNumberFormat(getOutput());
    if(output !=NaN){
      output=output + this.id;
      printOutput(output);
    }
  })}

