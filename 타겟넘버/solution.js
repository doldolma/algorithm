// https://programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target, depth=0) {
  let answer = 0;
  if(depth === numbers.length){
      if(numbers.reduce((a, b) => a+b) === target) return 1;
      else return 0;
  }
  answer += solution(numbers, target, depth + 1);
  numbers[depth] *= -1;
  answer += solution(numbers, target, depth + 1); // -1 1 1 1 / -1 -1 1 1 / -1 -1 -1 1 / 
  return answer;
}

console.log(solution([1,1,1,1,1], 3)); // 5