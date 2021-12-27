function solution(N, road, K) {
  const nodes = {};  // {1: [[2, 1], [4, 2]]}
  road.forEach(r => {
      if(!nodes[r[0]]) nodes[r[0]] = [];
      if(!nodes[r[1]]) nodes[r[1]] = [];
      nodes[r[0]].push([r[1], r[2]]);
      nodes[r[1]].push([r[0], r[2]]);
  });
  
  const answer = {1: 0};
  const Q = [[1, 0]];
  
  while(Q.length){
      const [start, time] = Q.shift();
      nodes[start].forEach(([end, addTime]) => {
          const totalTime = time+addTime;
          if(end in answer && answer[end] <= totalTime) return;
          if(time + addTime <= K){
              answer[end] = totalTime;
              Q.push([end, totalTime]);
          }
      });
  }
  return Object.keys(answer).length;
}
const road = [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]];
console.log(solution(6, road, 4));