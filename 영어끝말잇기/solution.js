function solution(n, words) {
  const usedWords = [];
  
  for(let i=0; i<words.length; i++){
      if(usedWords.includes(words[i]) || (usedWords.length && words[i][0] !== usedWords[usedWords.length-1].slice(-1))) 
          return [(i % n) + 1, parseInt(i / n) + 1];
      usedWords.push(words[i]);
  }
  return [0, 0]
}

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])); // [3, 3]