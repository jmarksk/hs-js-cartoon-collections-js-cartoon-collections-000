function dwarfRollCall(dwarves) {

  var newStr = "";
  dwarves.forEach(function(name, idx) {
  	newStr += (idx+1 + ". " + name + " ");
  });
  return newStr;
}
function summonCaptainPlanet(planeteerCalls){
  return array.map(function(ele) {
  return ele.toUpperCase() + "!";
});
}

function longPlaneteerCalls(words) {
  for(var i=0; i<words.length; i++){
    if (words[i].length>4){
      return true
    }
  }
  return false
}


function findTheCheese (array) {
  for(var i=0;i<array.length;i++){
   if (array[i]=="cheddar" ||array[i]=="gouda" ||array[i]=="camembert"){
     return array[i]}
   }
 return "no cheese!"
 }
