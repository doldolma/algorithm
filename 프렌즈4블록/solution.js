function solution(m, n, board) {
  for(let i=0; i<m; i++) board[i] = board[i].split('');
  while(true){
      // 같은 블럭 검사
      let erase = new Set();
      for(let i=0; i<m-1; i++){
          for(let j=0; j<n-1; j++){
              if([board[i][j], board[i+1][j], board[i][j+1], board[i+1][j+1]]
                 .every(el => el === board[i][j] && el !== false)) { 
                  erase.add(`${i}_${j}`);
                  erase.add(`${i+1}_${j}`);
                  erase.add(`${i}_${j+1}`);
                  erase.add(`${i+1}_${j+1}`);
              }
          }
      }
      if(!erase.size) break;
      
      // 같은 블럭 지우기
      erase.forEach(item => {
          const [x, y] = item.split('_');
          board[x][y] = false;
      });
      erase = new Set();
      
      // 빈자리 매꾸기
      while(true){
          let moved = false;
          for(let j=0; j<n; j++){
              for(let i=0; i<m-1; i++){
                  if(board[i][j] && !board[i+1][j]){
                      board[i+1][j] = board[i][j];
                      board[i][j] = false;
                      moved = true;
                  }
              }
          }
          if(!moved) break;
      }
  }
  return board.reduce((acc, cur) => acc + cur.filter(el => !el).length, 0);
}
console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));