// https://programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
  // n.toString(3).replace(/0/g, '4');
  
  let answer = '';
  const T = ['4','1','2'];
  while(n > 0){
      let r = n % 3;
      answer = T[r] + answer;
      if(!r) n = ~~((n-1)/3);
      else n = ~~(n / 3);
  }
  return answer;
}

console.log(solution(4)); // 11