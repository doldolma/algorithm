function solution(n) {
  const matrix = Array.from({length: n}).map((_, idx) => Array(idx+1).fill(false));
  const directions = ['D', 'R', 'U'];
  let [index, height, direction, num] = [0, -1, 0, 0];

  while(true){
      num++;
      const d = directions[direction % 3];
      if(d === 'D'){
          height++;
          matrix[height][index] = num;
          if(height === n-1 || matrix[height+1][index]){
              if(matrix[height].length-1 === index) break;
              else if(matrix[height][index+1]) break;
              direction++;
          }
      } else if(d === 'R'){
          index++;
          matrix[height][index] = num;
          if(index === matrix[height].length-1 || matrix[height][index+1]) {
              if(matrix[height-1][index-1]) break;
              direction++;
          }
      } else if(d === 'U'){
          index--; height--;
          matrix[height][index] = num;
          if(matrix[height-1][index-1]) {
              if(matrix[height+1][index]) break;
              direction++;
          }
      }
  }
  return matrix.flat();
}



console.log(solution(4));