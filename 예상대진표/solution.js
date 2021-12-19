function solution(n,a,b) {
  let round = 0;
  while(a !== b){
      a = (a % 2 ? a + 1 : a) / 2;
      b = (b % 2 ? b + 1 : b) / 2;
      round++;
  }
  return round;
}

