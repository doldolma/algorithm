// https://programmers.co.kr/learn/courses/30/lessons/92341

function solution(fees, records) {
  const cars = {};
  records.forEach(r => {
      const [time, carNum, action] = r.split(' ');
      if(!(carNum in cars)){
          cars[carNum] = {time: 0, in: []}
      }
      if(action === 'IN'){
          const [m, s] = time.split(':');
          cars[carNum].in = [+m * 60 + +s];
      }
      else {
          const [m, s] = time.split(':');
          const spendTime = (+m * 60 + +s) - cars[carNum].in.shift();
          cars[carNum].time += spendTime;
      }
  });
  // 출차안한차량 체크
  Object.entries(cars).forEach(([carNum, record]) => {
      if(!record.in.length) return;
      record.time += 1439 - record.in.shift();
  });
  return Object.keys(cars).sort().map(carNum => {
      //요금계산
      if(cars[carNum].time <= fees[0]) return fees[1];
      const time = cars[carNum].time - fees[0];
      return fees[1] + (Math.ceil(time / fees[2]) * fees[3]);
      
  });
}
const records = ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"];
console.log(solution([180, 5000, 10, 600], records)); // [14600, 34400, 5000]