function solution(citations) {
  // h개 논문이 h번 이상 인용
  for(let h=citations.length; h>=0; h--)
      if(citations.filter(n => n >= h).length >= h) return h
}

console.log(solution([3, 0, 6, 1, 5]));