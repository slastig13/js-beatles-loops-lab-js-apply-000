// add solution here
function theBeatlesPlay(musicians, instruments){
  let array = [];

  for (let i = 0; i < musicians.length; i++) {
    let person = musicians[i];

    for (let j = 0; j < instruments.length; j++) {
      let instrument = instruments[j];

      let element = `${person} plays ${instrument}`;
      array.push(element);
    }
  }
  return array;
}
