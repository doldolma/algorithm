// https://programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  const count = {};
  s.match(/\d+/g).forEach(n => {
      count[n] ? count[n]++ : count[n] = 1;
  });
  const sort = [];
  for(let nums in count)
      sort.push([nums, count[nums]]);
  
  sort.sort((a, b) => b[1] - a[1]);
  return sort.map(el => Number(el[0]));
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")); // [2, 1, 3, 4]