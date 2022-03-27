const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


/**const titleCased = () => {
  let newtutorials= [...tutorials];
  let count = 0;
  newtutorials.forEach(sentence => {
    let space = [];
      for(let letters in sentence){
        
        if(sentence[letters]===" "){
          const position = parseInt(letters) + 1;
          //const stringposition = String(position);
          space.push(position)

      };
 
  }
 console.log(space);

  let copy = [...space]
  copy: {
    writable: true
  }
  //consolesentence[space[0]]
  
  for(let counter in copy){
    console.log(newtutorials[count],copy[counter],sentence[copy[counter]])
  
    setElementDestructively(newtutorials[count],copy[counter],sentence[copy[counter]])
    console.log(newtutorials[count])
  }
  count++;
  
  //for (let count in space){
    //sentence[count] = sentence[count].toUpperCase();
  //}




});
  return newtutorials
}
 
function setElementDestructively(arr, index, value) {
  let replacement = value.toUpperCase();
  arr[index] = replacement;
  console.log(replacement)
  return arr
}
**/

const titleCased = (input) => {
  return tutorials.map( line => {
    const tokens = line.split(' ');
    console.log(tokens);
    const capitalizedTokens =
      tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) );
      console.log(capitalizedTokens);
    const response = capitalizedTokens.join(' ');
    return response;
  });
}