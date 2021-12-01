function solution(rows, columns, queries) {
  const answer = [];
  const matrix = Array(rows).fill().map((_, i) => 
                  Array(columns).fill().map((_, j) => i * columns + j+1));
  const change = (curX, curY , nextX, nextY, arr) => {
      arr.push(matrix[nextX][nextY]);
      [matrix[curX][curY], matrix[nextX][nextY]] = [matrix[nextX][nextY], matrix[curX][curY]];
  }
  // 회전
  queries.forEach(query => {
      const changeNumbers = [];
      let [sX, sY, eX, eY] = query;
      changeNumbers.push(matrix[sX-1][sY-1]);
      // D
      for(let i=sX-1; i < eX-1; i++)
          change(i, sY-1, i+1, sY-1, changeNumbers);
      // R
      for(let i=sY-1; i < eY-1; i++)
          change(eX-1, i, eX-1, i+1, changeNumbers);
      // U
      for(let i=eX-1; i > sX-1; i--)
          change(i, eY-1, i-1, eY-1, changeNumbers);
      // L
      for(let i=eY-1; i > sY; i--)
          change(sX-1, i, sX-1, i-1, changeNumbers);
      answer.push(Math.min(...changeNumbers))
  });
  return answer;
}