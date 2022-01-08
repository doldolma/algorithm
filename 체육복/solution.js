function solution(n, lost, reserve) {
  const remove = [];
  reserve = reserve.sort((a, b) => a-b);
  lost = lost.sort((a, b) => a-b);
  reserve.forEach(num => {
      if(lost.includes(num)){
          lost.splice(lost.indexOf(num), 1);
          remove.push(num);
      }
  });
  remove.forEach(n => reserve.splice(reserve.indexOf(n), 1));
  
  let students = n - lost.length;
  
  reserve.forEach(rsv => {
      for(let i=0; i < lost.length; i++){
          let [prev, next] = [rsv - 1, rsv + 1];
          if(lost.includes(prev) || lost.includes(next)){
              students++;
              lost.splice(i, 1);
              break;
          }
      }
  });
  return students;
}


console.log(solution(5, [2,4], [1,3,5]));