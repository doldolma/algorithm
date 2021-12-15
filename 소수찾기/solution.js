function permutation(arr, num){
  if(num === 1) return arr;
  const result = [];
  arr.forEach((cur, idx, arr) => {
      result.push(...permutation(arr.filter((x, index) => index !== idx), num-1).map(v => [cur, v].join("")));
  });
  return result;
}

const isPrime = (num) => {
  for(let i=2; i**2 <= num; i++) 
      if(num % i === 0) return false;
  return true;
};

function solution(numbers) {
  let nums = [];
  const numArr = numbers.split('');
  for(let i=1; i <= numbers.length; i++) nums.push(...permutation(numArr, i));

  nums = [...new Set(nums.map(n => Number(n)))];
  // 소수 세기
  let count = 0;
  nums.forEach(num => {
      if(num > 1 && isPrime(num)) count++;
  });
  return count;
}

console.log(solution('011'));