// https://programmers.co.kr/learn/courses/30/lessons/12980?language=javascript

function solution(n) {
  return n.toString(2).match(/1/g).length;
}

console.log(solution(5000)); // 5