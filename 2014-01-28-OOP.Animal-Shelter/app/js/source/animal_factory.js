/* global Animal: false */
(function(){

  'use strict';

  window.animalFactory = function(){
    var animals = [];
    var animal;

    var photos = [];
    photos[0] = 'url(http://static1.wikia.nocookie.net/__cb20121103230308/sega/images/thumb/6/67/Sonic_Art_Assets_DVD_-_Sonic_The_Hedgehog_-_18.png/180px-Sonic_Art_Assets_DVD_-_Sonic_The_Hedgehog_-_18.png)';

    animal = new Animal('Sonic', 5, 'Male', photos, 'The Fastest Hedgehog in all the land', 'Tan', 'Hedgehog'); //name, age, gender, photos, description, color, species
    animals.push(animal);

    photos = [];
    photos[0] = 'url(http://31.media.tumblr.com/tumblr_lj0wls8poh1qb9bjho1_400.gif)';

    animal = new Animal('Nyan Cat', 2, 'Male', photos, 'Colorful and unique cat that always has energy', 'Grey', 'Cat'); //name, age, gender, photos, description, color, species
    animals.push(animal);

    photos = [];
    photos[0] = 'url(http://upload.wikimedia.org/wikipedia/en/thumb/1/12/Brian_Griffin.png/220px-Brian_Griffin.png)';

    animal = new Animal('Brian', 4, 'Male', photos, 'A writer and a bit of a Drunk', 'White', 'Dog'); //name, age, gender, photos, description, color, species
    animals.push(animal);
    
    photos = [];
    photos[0] = 'url(http://upload.wikimedia.org/wikipedia/en/thumb/5/53/Scooby-Doo.png/150px-Scooby-Doo.png)';

    animal = new Animal('Scooby-Doo', 3, 'Male', photos, 'He had foiled many a Masked Men', 'Brown', 'Dog'); //name, age, gender, photos, description, color, species
    animals.push(animal);
    
    photos = [];
    photos[0] = 'url(http://upload.wikimedia.org/wikipedia/en/6/6d/Plutodog.gif)';

    animal = new Animal('Pluto', 5, 'Male', photos, 'Mans Best Friend', 'Brown', 'Dog'); //name, age, gender, photos, description, color, species
    animals.push(animal);

    photos = [];
    photos[0] = 'url(http://upload.wikimedia.org/wikipedia/en/thumb/3/34/Garfield_the_Cat.jpg/220px-Garfield_the_Cat.jpg)';

    animal = new Animal('Garfield', 3, 'Male', photos, 'Cat', 'Orange', 'Cat'); //name, age, gender, photos, description, color, species
    animals.push(animal);

    photos = [];
    photos[0] = 'url(http://upload.wikimedia.org/wikipedia/en/thumb/0/05/Hello_kitty_character_portrait.png/200px-Hello_kitty_character_portrait.png)';

    animal = new Animal('Hello Kitty', 6, 'Female', photos, 'Born in Japan', 'White', 'Cat'); //name, age, gender, photos, description, color, species
    animals.push(animal);

    photos = [];
    photos[0] = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Ltv-x-5BmrTyOQ6OpRVzsn2vpaCwOk9cLD_ggTxmMCP-fFYmsw)';

    animal = new Animal('George', 1, 'Male', photos, 'Her is very Curious', 'Brown', 'Monkey'); //name, age, gender, photos, description, color, species
    animals.push(animal);

    photos = [];
    photos[0] = 'url(http://www.andrew.cmu.edu/user/atripp/nemo.jpg)';

    animal = new Animal('Nemo', 1, 'Male', photos, 'Hes a little Lost', 'Orange', 'Fish'); //name, age, gender, photos, description, color, species
    animals.push(animal);

    photos = [];
    photos[0] = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTlIAtYNGCpatiEtSJsxzrrvOceUJN1uCt7hKs6ND93MF9nJmV)';

    animal = new Animal('Blues Brothers', 3, 'Male', photos, 'They rock the world with their blues', 'White', 'Brothers'); //name, age, gender, photos, description, color, species
    animals.push(animal);

    photos = [];
    photos[0] = 'url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7iqD8oD3dEUs6y5EJh1YSinvYYHvezjZQYzd5JxvBrlJCbZBv)';

    animal = new Animal('Kermit', 2, 'Male', photos, 'He brings joy to many people and can sing', 'Green', 'Frog'); //name, age, gender, photos, description, color, species
    animals.push(animal);

    photos = [];
    photos[0] = 'url(http://latimesblogs.latimes.com/.a/6a00d8341c630a53ef014e86d5af3a970d-800wi)';

    animal = new Animal('Eve', 3, 'Female', photos, 'Cute and needs a home', 'White', 'Polar Bear'); //name, age, gender, photos, description, color, species
    animals.push(animal);
    
    return animals;
  };

})();
