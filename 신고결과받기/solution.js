// https://programmers.co.kr/learn/courses/30/lessons/92334
function solution(id_list, report, k) {
  const reported = {count: {}};
  id_list.forEach(id => {
      reported[id] = [];
      reported.count[id] = 0;
  });
  
  report.forEach(r => {
      const [user1, user2] = r.split(' ');
      if(!reported[user1].includes(user2)){
          reported[user1].push(user2);
          reported.count[user2]++;
      }
  });
  
  const mailList = [];
  Object.keys(reported.count).forEach(key => {
     if(reported.count[key] >= k) mailList.push(key);
  });
  return id_list.map(id => reported[id].filter(user => mailList.includes(user)).length);
}


const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
console.log(solution(id_list, report, 2)); //[2,1,1,0]