def solution(clothes):
    answer = 1
    all_clothes = {}
    for cloth in clothes: 
        all_clothes[cloth[1]] = all_clothes[cloth[1]] + 1 if all_clothes.get(cloth[1]) else 1
        
    for i in all_clothes.values(): answer *= (i+1)
    return answer-1