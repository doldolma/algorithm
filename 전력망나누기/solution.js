// https://programmers.co.kr/learn/courses/30/lessons/86971
function solution(n, wires) {
  const bfs = (start) => {
      const visited = Array(n+1).fill(false);
      const Q = [start]; visited[start] = 1;
      let count = 1;
      
      while(Q.length){
          matrix[Q.shift()].forEach((connected, v) => {
              if(!connected || visited[v]) return;
              visited[v] = true;
              count++;
              Q.push(v);
          });
      }
      return count;
  }
  // 모든 연결 부위를 잘라서 나눠진 두 부분을 시작으로 각각 bfs탐색을 통해 총 몇개 있는지 센다.
  // 두개를 뺀 절대값 중 가장 작은 수를 리턴한다.
  
  // 인접행렬생성
  const matrix = Array.from({length: n+1}).map(_ => Array(n+1).fill(0));
  wires.forEach(([v1, v2]) => {
      matrix[v1][v2] = 1;
      matrix[v2][v1] = 1;
  });
  
  return wires.reduce((acc, [v1, v2]) => {
      matrix[v1][v2] = 0; matrix[v2][v1] = 0;
      const sub = Math.abs(bfs(v1) - bfs(v2));
      matrix[v1][v2] = 1; matrix[v2][v1] = 1;
      return sub > acc ? acc : sub;
  }, n);
}

console.log(solution(9, [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]])); //3