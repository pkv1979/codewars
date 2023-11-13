// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

//  'abc' =>  ['ab', 'c_']
//  'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    let pair = str[i];
    if (i + 1 < str.length) {
      pair += str[i + 1];
    } else {
      pair += '_';
    }
    result.push(pair);
  }
  return result;
}

console.log(solution('abc'));