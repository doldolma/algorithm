function solution(maps) {
  const M = maps.length;
  const N = maps[0].length;
  const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]];
  const visited = Array(M).fill().map(_ => Array(N).fill(false));
  visited[0][0] = true;
  
  const isInside = (x, y) => 0 <= x && x < M && 0 <= y && y < N;
  
  const Q = [[0,0,1]];
  while(Q.length > 0){
      const [x, y, time] = Q.shift();
      if(x === M-1 && y === N-1) return time;
      
      directions.forEach(direction => {
          const nextX = x + direction[0];
          const nextY = y + direction[1];
          
          if(isInside(nextX, nextY) && maps[nextX][nextY] && !visited[nextX][nextY]){
              Q.push([nextX, nextY, time+1]);
              visited[nextX][nextY] = true;
          }
      });
  }
  return -1;
}


console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));