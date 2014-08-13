(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    getMovies();
    $('#movie').submit(submitMovie);
    $('#editmovie').submit(editMoviebutton);
    $('#movies').on('click', '.studio', filterStudio);
    $('#movies').on('click', '.rating', filterRating);
//    $('#movies').on('click', '.releaseYear', filterYear);
//    $('#movies').on('click', '.actors', filterActors);
    $('#movies').on('click', '.director', filterDirector);
    $('#movies').on('click', '.edit', editMovie);
    $('#movies').on('click', '.rm', rmMovie);
    $('#toggleForm').click(toggleForm);
  }

  function toggleForm(){
    $('#movie').toggleClass('hide');
  }
  function toggleEditForm(){
    $('#editmovie').toggleClass('edithide');
  }

  function editMovie(){
    toggleEditForm();
    var id = $(this).attr('data-id');
    var url = window.location.origin.replace(/\d{4}/,'4000') +'/movies/'+id;
    $.getJSON(url, editForm);
  }

  function editForm(data){
    $('input[name="_id"]').val(data.movies[0]._id);
    $('input[type="text"][name="name"]').val(data.movies[0].name);
    $('input[type="text"][name="rating"]').val(data.movies[0].rating);
    $('input[type="text"][name="runtime"]').val(data.movies[0].runtime);
    $('input[type="text"][name="releaseYear"]').val(data.movies[0].releaseYear);
    $('input[type="text"][name="studio"]').val(data.movies[0].studio);
    $('input[type="text"][name="director"]').val(data.movies[0].director);
    $('input[type="text"][name="actors"]').val(data.movies[0].actors.join(', '));
    $('input[type="text"][name="poster"]').val(data.movies[0].poster);
    $('#movie input').val('');
  }
  function editMoviebutton(){
      var data = $(this).serialize();
      var id = $('input[name="_id"]').val();
      var url = window.location.origin.replace(/\d{4}/,'4000') +'/movies/'+id;
      console.log(id);
      console.log(url);
      var type ='PUT';
      var success = editedMovie;

      $.ajax({url:url, type:type, data:data, success:success});
      event.preventDefault();
    }
  function editedMovie(movie){
    $('#editmovie input').val('');
    toggleEditForm();
    console.log(movie);
  }




  function rmMovie(){
    var data = $(this).attr('data-id');
    var url = window.location.origin.replace(/\d{4}/,'4000') +'/movies/'+data;
    var type = 'DELETE';
    var success = reMoveMovie;

    console.log(data);
    $.ajax({url:url, type:type, data:data, success:success});
  }

  function reMoveMovie(data){
    $('[data-id='+data.id+']').parent().remove();
  }

  function filterStudio(){
    var studio = this.textContent;
    var url = window.location.origin.replace(/\d{4}/,'4000') +'/movies/query?studio='+studio;
    $.getJSON(url, displayMovies);
  }
  function filterRating(){
    var rating = this.textContent;
    var url = window.location.origin.replace(/\d{4}/,'4000') +'/movies/query?rating='+rating;
    $.getJSON(url, displayMovies);
  }
  /*
  function filterYear(){
    var year = this.textContent;
    var url = window.location.origin.replace(/\d{4}/,'4000') +'/movies/query?releaseYear='+year;
    $.getJSON(url, displayMovies);
  }
  function filterActors(){
    var actor = this.textContent;
    var url = window.location.origin.replace(/\d{4}/,'4000') +'/movies/query?actors='+actor;
    $.getJSON(url, displayMovies);
  }
  */
  function filterDirector(){
    var director = this.textContent;
    var url = window.location.origin.replace(/\d{4}/,'4000') +'/movies/query?director='+director;
    $.getJSON(url, displayMovies);
  }

  function getMovies(){

    var url = window.location.origin.replace(/\d{4}/,'4000') +'/movies';
    $.getJSON(url, displayMovies);
  }

  function displayMovies(data){

    for(var i = 0; i < data.movies.length; i++){
      displayMovie(data.movies[i]);
    }
  }

  function displayMovie(movie){

    var $name = $('<td>');
    var $rating = $('<td>');
    var $runtime = $('<td>');
    var $releaseYear = $('<td>');
    var $studio = $('<td>');
    var $director = $('<td>');
    var $actors = $('<td>');
    var $poster = $('<td>');
    var $edit = $('<td>');
    var $rm = $('<td>');

    $name.text(movie.name);
    $rating.text(movie.rating);
    $runtime.text(movie.runtime);
    $releaseYear.text(movie.releaseYear);
    $studio.text(movie.studio);
    $director.text(movie.director);
    $actors.text(movie.actors);
    $poster.css('background-image','url('+movie.poster+')');
    $rating.addClass('rating');
    $releaseYear.addClass('releaseYear');
    $director.addClass('director');
    $actors.addClass('actors');
    $studio.addClass('studio');
    $poster.addClass('pic');
    $edit.text('Edit').attr('data-id', movie._id);
    $edit.addClass('edit');
    $rm.text('X').attr('data-id', movie._id);
    $rm.addClass('rm');

    var $tr = $('<tr>');

    $tr.append($poster, $name, $rating, $runtime, $releaseYear, $studio, $director, $actors, $edit, $rm);
    $('tbody').prepend($tr);
  }


  function submitMovie(){
      var data = $(this).serialize();
      var url = window.location.origin.replace(/\d{4}/,'4000') +'/movies';
      console.log(data);
      console.log(url);
      var type ='POST';
      var success = newMovie;

      $.ajax({url:url, type:type, data:data, success:success});
      event.preventDefault();
    }
  function newMovie(movie){
    $('#movie input').val('');
    toggleForm();
    
    console.log(movie);
  }

})();

