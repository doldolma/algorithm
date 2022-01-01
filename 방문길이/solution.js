function solution(dirs) {
  const isValid = (x, y) => -5 <= x && x <= 5 && -5 <= y && y <= 5;
  const visited = {};
  
  let current = [0, 0];
  let answer = 0;
  
  const move = (x,y) => {
      if(isValid(x, y) && !visited[String(current[0])+current[1]+x+y]){
          answer++;
          visited[String(current[0])+current[1]+x+y] = true;
          visited[String(x)+y+current[0]+current[1]] = true;
          current = [x, y];
      }else if(isValid(x, y)) current = [x, y];
  }
  
  for(let dir of dirs){
      if(dir === 'U') move(current[0], current[1] + 1);
      else if(dir === 'D') move(current[0], current[1] - 1);
      else if(dir === 'L') move(current[0] - 1, current[1]);
      else if(dir === 'R') move(current[0] + 1, current[1]);
  }
  return answer;
}

console.log(solution("UDU"));