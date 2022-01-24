function solution(arr) {
  const mid = arr.length >> 1;
  
  // if(arr.flat().every(el => el === arr[0][0])) return arr[0][0] ? [0, 1] : [1, 0];
  if(arr.every(el => el.every(n => n === arr[0][0])) || !mid) return arr[0][0] ? [0, 1] : [1, 0];
  
  // 4등분하자
  const answer = [0, 0];
  const subArr = [];
  subArr.push(arr.slice(0, mid).map(el => el.slice(0, mid)));
  subArr.push(arr.slice(0, mid).map(el => el.slice(mid)));
  subArr.push(arr.slice(mid).map(el => el.slice(0, mid)));
  subArr.push(arr.slice(mid).map(el => el.slice(mid)));
  
  subArr.forEach(arr => {
      const result = solution(arr);
      answer[0] += result[0];
      answer[1] += result[1];
  });
  return answer;
}

const arr = [[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]];
console.log(solution(arr)); // [4, 9]