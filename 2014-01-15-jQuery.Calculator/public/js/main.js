$(document).ready(initialize);

function initialize(){
  $('#calc').click(calculate);
  $('#clear').click(clear);
  $('#sum').click(sum);
  $('#product').click(prod);
}
function clear(){
  $('#num1').val('');
  $('#num1').focus();
  $('#num2').val('');
  $('#op').val('');
  $('#result').text('');
  $('.numbers').val('');
}
function calculate(){
  var num1 = $('#num1').val();
  var num2 = $('#num2').val();
  x= parseFloat(num1);
  y= parseFloat(num2);
  var op = $('#op').val();

  var result= compute(x,y,op);
  $('#result').text(result)

}
function sum(){
  var s = 0;

  $('.numbers').each(function(index, element){
    s += parseFloat(element.value);
  });
  $('#result').text(s)
}

function prod(){
  var p = 0;

  $('.numbers').each(function(index,element){
    p *= parseFloat(element.value)
  });
  $('#result').text(p)
  }
function compute(x, y, op){
  var total;

  switch(op){
    case '+':
      total = x+y;
      break;
    case '-':
      total = x-y;
      break;
    case '*':
      total =x*y;
      break;
    case '/':
      total =x/y;
  }
  return total;
}

