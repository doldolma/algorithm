function solution(numbers) {
  const answer = [];
  numbers.forEach(num => {
      if(!(num % 2)) {
          answer.push(num+1);
          return;
      }
      const bitNum = num.toString(2).padStart(32, '0');
      const index = bitNum.lastIndexOf('01');
      answer.push(parseInt((bitNum.slice(0, index) + '10' + bitNum.slice(index+2)), 2));
  });
  return answer;
}

console.log(solution([2,7])); // [3, 11]