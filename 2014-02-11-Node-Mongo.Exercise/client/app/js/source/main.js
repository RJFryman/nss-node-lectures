(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    getExercises();
    $('#createExercise').click(createExercise);
    getQuery();
    $('#queryExercise').click(queryExercise);
  }

  function getQuery(){

  }

  function queryExercise(){
    $('#exercises > tbody').empty();
    var url = window.location.origin.replace(/\d{4}/,4000);
    url += '/exercises/'+$('#queryName').val();
    console.log(url);
    $.getJSON(url,displayExercises);
  }

  function createExercise(){
    var name = $('#name').val();
    var time = $('#time').val();
    var calories = $('#calories').val();
    var date = $('#date').val();
    var url = window.location.origin.replace(/\d{4}/, 4000);
    url += '/exercises';
    var options= {};
    options.url = url;
    options.type = 'POST';
    options.data = {name:name, time:time, calories:calories, date:date};
    options.success = exerciseCreated;

    $.ajax(options);
  }

  function exerciseCreated(){
    $('#exercises > tbody').empty();
    getExercises();
  }

  function getExercises(){
    var url = window.location.origin.replace(/\d{4}/,4000);
    url += '/exercises';
    console.log(url);
    $.getJSON(url,displayExercises);
  }

  function displayExercises(data){
    for(var i = 0; i < data.exercises.length; i++){
      var $name = $('<td>');
      var $time = $('<td>');
      var $calories = $('<td>');
      var $date = $('<td>');

      $name.text(data.exercises[i].name);
      $time.text(data.exercises[i].time);
      $calories.text(data.exercises[i].calories);
      $date.text(data.exercises[i].date);

      var $tr = $('<tr>');

      $tr.append($name, $time, $calories, $date);
      $('tbody').append($tr);
    }
    populateDropDown();
  }

  function populateDropDown(){
    var $names = $('.name');
    var nameString = _.map($names, function(name){
      return $(name).text();
    });

    var uniqueNames = _.uniq(nameString);
    _.forEach(uniqueNames, function(name){
      var $option = $('<option>');
      $option.text(name);
      $('#dropDown').append($option);
    });
  }
 

})();

