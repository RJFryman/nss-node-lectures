$(document).ready(initialize);
//creates function that I can call later to wait until the page loads for the function to run

function initialize(){  //this is the function from line 1
  $('.inputs').click(displayNumber);  //this function refers to line 11
  $('#toggle').click(changeSign);  //this function refers to line 38
  $('#queueClear').click(clearQueue);  //function refers to line 43
  $('#push').click(pushQueue);  //refers to line 53
  $('.ops').click(compute);  //refers to line 62
}
function displayNumber(){  //I want it so when I push a number it shows up in display
  var display = $('#display').text();  //creates a variable called display and refers to the display element from htmlLine 14
  var current = this.textContent;  //creates a variable that is called current that checks the current button you push 
  var output;  //creates variable output

  if(current === '.' && display.indexOf('.') !==-1)return;  
  //checks the current button push, if it is '.' then do this if statment if not skip 
  //if '.' was pushed check if there is a '.' already in the display  /display from line 12 / .indexOf is natural from js
  //!== is does not equal  /-1 in this case means that there is no cases of indexOf in the display
  //if it passes true it allows '.' to be placed in the display
  //if it fails it will not allow '.' to be placed

  if (display === '0' && current !=='.')  //if display from variable check line 12 is 0 and you push the '.' do the next line
    output = current;  // '0.  /this is so you can do decimals only 
  else
    output = display + current; 
  //output is variable from line 14 that / display gets the current display  / current registers the button that is pressed
  //this is a string so it adds current to the end of display 
  //so output then get push to line 34

  $('#queueClear').text('Clear Display')
    //this is a function that takes the text from my personal clear button and changes it to 'Clear Display' 
    //not in anyone else code
  $('#display').text(output);
    //changes the display from your web page from what it currently is to in this function
}

function changeSign(){  //i want to change the sign of the current display number   refer to line 6
  var display = $('#display').text();  // this referes to the current display on your page
  $('#display').text(display * -1);  //this multiples the current display by -1 so that it auto matically switchs signs
}

function clearQueue(){  //i want my clear button to clear the display and queue but not at the same time  refer to line 7
  var display = $('#display').text();  //checks the current display on my web page
  if (display !== 0)  //if ==! (which is does not equal) if display is not 0 then do the following code in lines 46-47
    $('#display').text(0);  //make the text in display '0' which clears the display
    $('#queueClear').text('Clear Queue');  //change the text for the clear button to 'Clear Queue'
 
  if (display ==0)  // if the display is 0 which means nothing has been inputed into display then do the following code
    $('#queue').text('');  //get all the information in the queue and make it '' nothing
}

function pushQueue(){  //i want it so when i press the Push button from line 8 to put the number in my display into my queue
  var display = $('#display').text();  // checks the current display and puts it into the variable display
  var $li = $('<li>');  // creates a jquery list called $li
  $li.text(display);  //makes the display in the form of text an object in the list
  $('#queue').prepend($li);  //puts the object created in the previous line at the top (prepend) of the queue in text and in the list
  $('#display').text(0);  //sets the display to 0 so more numbers may be inputed
  $('#queueClear').text('Clear Queue');  //custom command that changes words of clear button to 'Clear Queue'
}

function compute(){  //refers to line 9  /i want it so when i push any operations it will do things
  var operator = this.id;  //creates variable operator that when pushed it refers to the id of the button pushed
  var $lis= $('#queue li');  //makes a variable $lis that looks at all the information in the queue
  var numbers = parseTags($lis);  //refer to your logic page in mine its line 1
  var result;  //creates variable result

  switch(operator){  //switch is a giant and easier if else if statement where (operator) refering the variable in line 63
    case 'add':  //when + button is pushed 
      result = numbers[1] + numbers[0];  //add the numbers
      break;  //break stops this function if any previous case is completed so if add was pressed it does not move with the rest of the switch
    case 'sub': // '-' button was pushed
      result = numbers[1] - numbers[0]; // minus the second number from the first
      break;  //stops the switch goes to line 101
    case 'mul':  //'*' was pushed
      result = numbers[1] * numbers[0]; //multiplies the numbers
      break;  //stops the switch goes to line 101
    case 'div':  // '/' was pushed
      result = numbers[1] / numbers[0];  /*divides second number in queue with first */
      break; //stops switch goes to line 101
    case 'sum':  //sum button was pushed
      result = 0;  //starts the result as 0 so even slate to be used
      $(numbers).each(function(){  //looks at all numbers in the queue and each one with .each goes through the function in the next line
        result += this;  //all numbers are added to the result one by one
      });
      break; //stops switch goes to line 101
    case 'prod': //i want all numbers in queue to be multiplied together
      result = 1;  //starts the multiplaction as 1 because '0' would not work like in line 82.  //because math: 1*number is that number 0*number is 0
      $(numbers).each(function(){  //takes all numbers in the queue and puts them through the function in line 90
        result *= this;  // all numbers are multiplied first by 1 (line 88) then itself then the next number then the next
      });
     break;//stops switch go to line 101
    case 'pow':  //i want the the second number to the (number 1) power
      result =Math.pow(numbers[1],numbers[0]);  //js Math.pow is universal just the second number is raised to the first
      break;//stop switch and go to line 101
    case 'sqr':  //i want the square root of the first number
      result =Math.sqrt(numbers[0]);  //js Math.sqrt is universal and just takes the first number and finds the square root
      break;  //techincally not doing anything because the switch is over
  }

  $('#queueClear').text('Clear Display')  //custom function that makes clear button say 'clear display'
  $('#display').text(result);  //takes the result from any of the switch cases and puts it in the display
  $('#queue').empty();  //empties the queue .empty is universal js
}

