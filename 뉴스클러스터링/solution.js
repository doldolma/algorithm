// https://programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
  // 2글자씩 자르기
  const strArray = [[], []];
  [str1, str2].forEach((str, idx) => {
      str = str.toLowerCase();
      for(let i=0; i<str.length-1; i++){
          const s = str.slice(i, i+2);
          if(s.search(/[^a-z]/) !== -1) continue;
          strArray[idx].push(s);
      }
  });
  
  let union = strArray[0].length + strArray[1].length;
  if(!union) return 65536;

  // 다중집합의 교집합을 구해보자..
  let intersection = 0;
  strArray[0].forEach(c => {
      if(strArray[1].includes(c)){
          strArray[1].splice(strArray[1].indexOf(c), 1);
          intersection++;
      }
  });
  union -= intersection;
  return ~~((intersection << 16) / union);
}

console.log(solution('FRANCE', 'french')); // 16384