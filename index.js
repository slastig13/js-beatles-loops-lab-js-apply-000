// add solution here
function theBeatlesPlay(musicians, instruments){
  let array = [];

  for (let i = 0; i < musicians.length; i++) {
    let person = musicians[i];
    let instrument = instruments[i];
    let element = `${person} plays ${instrument}`;
    array.push(element);
    }
  return array;
}

function johnLennonFacts(facts) {
  let index = 0
  while (index < facts.length) {
    let element = facts[index];
    element = `${element}!!!`;
    index++;
  }
  return facts;
}
