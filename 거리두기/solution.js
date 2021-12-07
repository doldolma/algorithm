function solution(places) {
  const answer = [];
  const R = [0, 1];
  const L = [0, -1];
  const U = [-1, 0];
  const D = [1, 0];
  const directions = [U, D, L, R];
  const getXY = (place, x, y) => {
    try{
      return place[x][y];
    } catch {
      return '';
    }
  }
  places.forEach(place => {
    const isInside = (x, y) => 0 <= x && x < place.length && 0 <= y && y < place[0].length;
    for(let x=0; x<place.length; x++){
      for(let y=0; y<place[x].length; y++){
        if(place[x][y] !== 'P') continue;
        const Q = [[x, y, 0]];
        while(Q.length > 0){
          const [curX, curY, distance] = Q.shift();
          for(let direction of directions){
            const nextX = curX + direction[0];
            const nextY = curY + direction[1];
            const val = getXY(place, nextX, nextY);
            if(val === 'P') {
              answer.push(0);
              return;
            }
            if(val && isInside(x, y) && distance<3 && val !== 'X'){
              Q.push([nextX, nextY, distance+1]);
            }
          }
        }
      }
    }
    answer.push(1);
  });
  return answer;
}

a = solution([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]])
console.log(a);