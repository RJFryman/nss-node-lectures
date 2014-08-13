(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#add').click(add);
    $('#product').click(product);
  }

  function add(){
    var x = $('#x').val();
    var y = $('#y').val();
    var url = '/calc/add?x=' +x + '&y=' +y;
    $.getJSON(url, function(data){
        $('#x').val('');
        $('#x').focus();
        $('#y').val('');
        $('#sum').text(data.sum);
      });
  }

  function product(){
    var nums = $('#nums').val();
    var url = 'calc/prod?nums='+nums;
    $.getJSON(url, function(data){
      console.log(data);
      $('#results').text(data.prod);
    });
  }

})();

