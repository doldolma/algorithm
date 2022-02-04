// https://programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  const result = [];
  const memo = {};
  
  record.forEach(r => {
      const [action, uid, nickname] = r.split(' ');
      if(action !== "Leave")
          memo[uid] = nickname;
  });
  
  record.forEach(r => {
      const [action, uid] = r.split(' ');
      if(action === 'Enter')
          result.push(`${memo[uid]}님이 들어왔습니다.`);
      else if(action === 'Leave')
          result.push(`${memo[uid]}님이 나갔습니다.`);
  });
  return result;
}

const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];
console.log(solution(record)); 
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]