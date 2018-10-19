


theBeatlesPlay(musicians, instruments); 

function theBeatlesPlay(musicians, instruments) {
  var newArr = []; 
  for(var i =0; i < musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArr;
}

johnLennonFacts(facts) {
  var i = facts.length;
  while (i>=0) {
    facts[i]+="!!!"
  }
  return facts;
  
}