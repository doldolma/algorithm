// https://programmers.co.kr/learn/courses/30/lessons/60057

function solution(string) {
  let result = [string.length];
  for(let i = 1; i <= string.length/2; i++)
      result.push(encoding(string, i));
  return Math.min(...result);
}

function encoding(string, slice){
  let encoded = '';
  let standard = string.slice(0, slice);
  let cnt = 1;
  for(let i = slice; i <= string.length; i += slice){
      if(standard === string.slice(i, i + slice)){
          cnt += 1;
          continue;
      }
      encoded += `${cnt > 1 ? cnt : ''}${standard}`
      cnt = 1;
      standard = string.slice(i, i + slice);
  }
  // 나머지 
  encoded += `${cnt > 1 ? cnt : ''}${standard}`
  return encoded.length;
}

console.log(solution("aabbaccc")); // 7