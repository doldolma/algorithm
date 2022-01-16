// https://programmers.co.kr/learn/courses/30/lessons/92335
function solution(n, k) {
  const isPrime = (n) => {
      for(let i=2; i*i<=n; i++)
          if(!(n % i)) return false;
      return true;
  };
  return n.toString(k).split('0').filter(n => {
      if(n === '1' || !isPrime(+n)) return false;
      return n;
  }).length;
}

console.log(solution(437674, 3)); // 3