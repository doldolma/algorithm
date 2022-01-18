// https://programmers.co.kr/learn/courses/30/lessons/84512?language=javascript
function solution(word) {
  const order = [781, 156, 31, 6, 1];
  return word.split('').reduce((acc, cur, idx) =>
      // acc + 1 + [...Array(5-idx).keys()].reduce((acc, cur) => acc + 5**cur, 0) * 'AEIOU'.indexOf(cur), 0);
      acc + 1 + order[idx] * 'AEIOU'.indexOf(cur), 0);   
}

console.log(solution('AAAAE')); //6