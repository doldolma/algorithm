function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  const bridge = []; // [[7, 1], [4, 3]]
  while(truck_weights.length || bridge.length){
      time++;
      // 다리에서 빠져나갈 트럭이 있나요?
      if(bridge.length > 0 && time - bridge[0][1] >= bridge_length)
          weight += bridge.shift()[0];
          
      // 다리에 진입할 트럭이 있나요?
      if(bridge.length < bridge_length && weight-truck_weights[0] >= 0){
          const truckWeight = truck_weights.shift();
          bridge.push([truckWeight, time]);
          weight -= truckWeight;
      }
  }
  return time;
}
solution(2, 10, [7, 4, 5, 6]);