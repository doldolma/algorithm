const permutation = (arr, num) => {
  if(num === 1) return arr.map(v => [v]);
  const result = [];
  arr.forEach((cur, idx) => {
      const restArr = arr.filter((_, n) => idx !== n);
      result.push(...permutation(restArr, num-1).map((el) => [cur, ...el]));
  });
  return result;
};

const goDungeon = (k, dungeons) => {
  let count = 0;
  console.log(dungeons)
  for(let i=0; i<dungeons.length; i++){
      if(dungeons[i][0] > k) return count;
      k -= dungeons[i][1];
      count++;
  }
  return count;
};

function solution(k, dungeons) {
  return Math.max(...permutation(dungeons, dungeons.length).map((d) => goDungeon(k, d)));
}

console.log(solution(80, [[80,20],[50,40],[30,10]]));