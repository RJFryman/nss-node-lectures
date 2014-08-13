$(document).ready(initialize);

function initialize(){
  // $ means jQuery
  // $('css or jQuerty selector') 
  $('h1').css('color' ,'#33FF66');
  $('h1').css('font-size', '72px');
  $('h1').text('ALL THE CODE BELONGS TO US');

  $('div').css('color','#DDAA00');
  $('#d2').css('font-size','32px');
  $('#d3').css('background-color', '#0033CC');
  $('.c1').css('font-family','monospace');
  $('.c1').text('Robert');

  var bgcolor= prompt('what color do you want?');
  $('#d3').css('background-color', bgcolor);

  var texts=prompt('give me some text');
  $('#d3').text(texts);

/*
  var ycode= alert('All code is mine')
  $('div').text('01000001 01101100 01101100 00100000 01111001 01101111 01110101 01110010 00100000 01100011 01101111 01100100 01100101 00100000 01100010 01100101 01101100 01101111 01101110 01100111 01110011 00100000 01110100 01101111 00100000 01110101 01110011 00001101 00001010');
*/


}

