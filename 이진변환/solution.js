function solution(s) {
  let zeroCount = 0;
  let transCount = 0;

  while(s !== '1'){
      const sLength = s.length;
      s = s.replace(/0/g, '')
      zeroCount += (sLength - s.length);
      s = s.length.toString(2);
      transCount++;
  }
  
  return [transCount, zeroCount];
}


console.log(solution('110010101001')); // [3, 8]