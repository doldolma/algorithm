// https://programmers.co.kr/learn/courses/30/lessons/62048 

function solution(w, h) {
  const gcd = (a, b) => b ? gcd(b, a % b) : a
  // const gcdNum = gcd(w, h);
  // return w*h - ((w/gcdNum + h/gcdNum) - 1) * gcdNum
  return w*h - (w+h-gcd(w, h));
}

console.log(solution(8, 12));  // 80