function solution(progresses, speeds) {
  var answer = [];
  // 작업이 전부 끝날 때 까지
  while(progresses.length){
      // 작업상황 업로드
      for(let i=0; i<progresses.length; i++)
          progresses[i] += speeds[i];
      
      // 완료된 작업제거
      let done = 0;
      while(progresses[0] >= 100){
          progresses.shift();
          speeds.shift();
          done += 1;
      }
      if(done) answer.push(done)
  }
  return answer;
}