function solution(name) {
  const alphabet = Array(26).fill().map((_, idx) => String.fromCharCode(65+idx));
  const visited = Array(name.length).fill().map((_, idx) => name[idx] === 'A');
  const nameLength = name.length;
  
  // x1 -> x2 가려면 몇번 움직여야 하는지
  const distance = (x1, x2, length=26) => Math.min((x1 - x2 + length) % length, (x2 - x1 + length) % length);
  
  let cursor = 0;
  let count = 0;
  for(let i=0; i<nameLength; i++){
      if(name[i] === 'A') continue;
      const cursorMove = distance(cursor, i, nameLength);
      const moveCount = cursorMove + distance(0, alphabet.indexOf(name[i]));
      count += moveCount;
      cursor = i;
  }
  
  // while(!visited.every(x => x)) {
  //     const candidate = [];
  //     for(let i = 0; i < name.length; i++){
  //         // Greedy는 지금 당장 제일 빠른 길로 감.. 지금 당장 가장 적게 움직여서 쓸 수 있는 문자찾기..!
  //         if(visited[i]) continue;
  //         const moveCount = distance(cursor, i, nameLength) + distance(0, alphabet.indexOf(name[i]));
  //         candidate.push([i, moveCount]);
  //     }
  //     // candidate 중에서 가장 거리가 짧은거 작성..
  //     const min = candidate.reduce((prev, cur) => prev[1] < cur[1] ? prev : cur);
  //     cursor = min[0];
  //     count += min[1];
  //     visited[min[0]] = true;
  // }
  return count;
}

console.log(solution('ABABAAAAAAABA'));