(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#one').click(one);
    $('#two').click(two);
    $('#add').click(add);
    $('#canDrink').click(canDrink);
    $('#product').click(product);
    $('#funword').click(funwords);
  }

  function one(){
    var url = window.location.origin.replace(/[(\d)]{4}/g, '4000');
    url+= '/name?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
    });
  }

  function two(){
    var url = window.location.origin.replace(/[(\d)]{4}/g, '4000');
    url+= '/favcolor?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
    });
  }

  function add(){
    var x= $('#num1').val();
    var y= $('#num2').val();
    var url = window.location.origin.replace(/[(\d)]{4}/g, '4000');
    url+= '/add/'+x+'/'+y+'?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      $('#sum').text(data.add);
    });
  }

  function canDrink(){
    var x = $('#name').val();
    var y = $('#age').val();
    var url = window.location.origin.replace(/[(\d)]{4}/g, '4000');
    url+= '/canDrink/'+x+'/'+y+'?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      $('#resultCanDrink').text(data.canDrink);
    });
  }

  function product(){
    var numbers = $('#numbers').val();
    var url = window.location.origin.replace(/[(\d)]{4}/g, '4000');
    url+= '/product?numbers='+numbers+'&callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      $('#product-response').text(data.prod);
    });
  }
  function funwords(){
    var names = $('#names').val();
    var url = window.location.origin.replace(/[(\d)]{4}/g, '4000');
    url+= '/funword?names='+names+'&callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      $('#word-response').text(data.prod);
    });
  }

})();

