function solution(grid) {
  const answer = [];
  // 칸마다 4방향 방문기록
  const [xLength, yLength] = [grid.length, grid[0].length];
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const visited = Array(xLength).fill().map(_ => Array(yLength).fill()
                                            .map(_ => Array(4).fill().map(_ => false)));
  
  for(let i=0; i<grid.length; i++)
      for(let j=0; j<grid[i].length; j++)
          // 4방향으로 빛을 쏜다..!, 방문한 적 없으면
          for(let d=0; d<4; d++)
              if(!visited[i][j][d]) answer.push(light(i, j, d));
  return answer.sort((a, b) => a-b );
  
  // 빛을 쏘는 함수
  function light(x, y, d) {
      let distance = 0;
      const [startX, startY, startD] = [x, y, d];
      
      while(true) {
          // 이동
          visited[x][y][d] = true;
          x = (x + dx[d] + xLength) % xLength;
          y = (y + dy[d] + yLength) % yLength;
          distance++;
          // 방향전환
          if(grid[x][y] === 'L') d = d === 0 ? 3 : d - 1; 
          else if(grid[x][y] === 'R') d = d === 3 ? 0 : d + 1;
          // 출발점으로 돌아왔나?
          if(startX===x && startY===y && startD===d) return distance;
      }
  };
}

a = solution(["SL", "LR"])
console.log(a)