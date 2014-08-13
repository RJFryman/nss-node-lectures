(function(){

  'use strict';

  var flag;
  var name;

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('.name').click(updateName);
    $('.flag').click(updateFlag);

  }

  // ---------------------Timer------------------------- //
  var count=61;
  var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
  function timer(){
    count=count-1;
    if (count <= 0){
      clearInterval(counter);
       //counter ended, do something here
      $('#timer').text(0);
      alert('you lose');
      return;
    }
  //Do code for showing the number of seconds here
    $('#timer').text(count);
    $('#Matches').text(matchRemaining);
  }
  // --------------------------------------------------- //

  var matchRemaining = 10;

  // --------------------------------------------------- //
  function updateName(){
    
    name = $(this).text();
    checkMatch();
  }

  function updateFlag(){
    flag = $(this).attr('class');
    flag = flag.slice(-2);
    checkMatch();
  }

  function checkMatch(){
    if(flag && name){
      var url = '/flag?country='+name+'&flag='+flag;
      $.getJSON(url, function matchCheck(data){
        if(data.match === true){

          if(total - matches === 0){
            clearInterval(timer);
            alert('You won!');
          }
        }
      });
    }
    flag = undefined;
    name = undefined;
  }

  function matchCheck(data){
    if(data.match === true){
      matchRemaining --;
      console.log('MATCH!!!!');
    }else{
      console.log('no match');
    }
    console.log(data);
  }


})();

