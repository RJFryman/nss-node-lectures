(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#getquote').click(getQuote);
  }

  function getQuote(){
    var stock = $('#symbol').val();
    var url = window.location.origin.replace(/\d{4}/g,'4000');
    url += '/quote?symbol='+stock+'&callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      $('#response').text(data.symbol+' '+data.quote);
    });
  }
})();

