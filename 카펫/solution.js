function solution(brown, yellow) {
  let area = brown + yellow;
  for(let i=3; i*i <= area; i++){
      if(area % i) continue;
      let [w, h] = [area/i, i];
      if((w - 2) * (h - 2) === yellow) return [w, h];
  }
}