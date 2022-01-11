function solution(people, limit) {
  people.sort((a, b) => a-b);
  let answer = 0;
  while(people.length){
      const person = people.pop();
      if(people[0] + person <= limit) people.splice(0, 1);
      answer++;
  } 
  return answer;
}

console.log(solution([70, 50, 80, 50], 100)); // 3