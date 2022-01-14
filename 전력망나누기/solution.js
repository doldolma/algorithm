function solution(n, wires) {
  /*
  모든 연결된 부분을 잘라본다
  나눠진 두 부분을 시작으로 각각 bfs탐색을 통해 총 몇개 있는지 센다.
  두개를 뺀 절대값 중 가장 작은 수를 리턴한다.
  */
  const bfs = (start) => {
      const visited = Array(n+1).fill(false);
      const Q = [start]; visited[start] = 1;
      let count = 1;
      
      while(Q.length){
          matrix[Q.shift()].forEach((connected, idx) => {
              if(!connected || visited[idx]) return;
              visited[idx] = true;
              count++;
              Q.push(idx);
          });
      }
      return count;
  }
  
  // 인접행렬생성
  const matrix = Array.from({length: n+1}).map(_ => Array(n+1).fill(0));
  wires.forEach(wire => {
      matrix[wire[0]][wire[1]] = 1;
      matrix[wire[1]][wire[0]] = 1;
  });
  
  const sub = [];
  for(let i=1; i<=n; i++){
      for(let j=1; j<=n; j++){
          if(matrix[i][j] === 0) continue;
          // 잘라보자..
          matrix[i][j] = 0; matrix[j][i] = 0;
          sub.push(Math.abs(bfs(i) - bfs(j)));
          matrix[i][j] = 1; matrix[j][i] = 1;
      }
  }
  return Math.min(...sub);
}

console.log(solution(9, [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]])); //3