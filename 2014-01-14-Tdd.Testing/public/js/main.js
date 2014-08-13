function add(x,y){ 
  return x+y;
}

function sum(numbers){
  var total =0;
  for(var i=0 ; i < numbers.length; i++){
    total += numbers[i];
  }
  return total;
}

function countEvens(numbers){
 var totalEvens = 0;
 for(var i=0; i <numbers.length; i++){
   if(numbers[i] % 2 ===0)
     totalEvens ++;
 }
 return totalEvens;
}

function makeEvenStringsUppercase(strings){
  var newStrings= [];
for(var i=0; i < strings.length; i++)
  if(strings[i].length %2 === 0)
   newStrings[i] = strings[i].toUpperCase();
  else
      newStrings[i] = strings[i];
return newStrings;
}

function sumLengthOfStrings(string){
  newArray= string.split(' ').join('');
  return newArray.length;
}

function makeCatWithName(string){
  var cat= new Object();
  cat.name = (string);
  return cat;
}
/*
function makeCatWithName(name){
  var cat={name:name}
  return cat;
}
*/
/*
function makeCatWithName(name){
  return {name:name};
}
*/


