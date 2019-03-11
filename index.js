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


function findTheCheese (Foods) {
  for(var i=0;i<Foods.length;i++){
   if (Foods[i]=="cheddar" ||Foods[i]=="gouda" ||Foods[i]=="camembert"){
     return Foods[i]}
   }
 return "no cheese!"
 }
