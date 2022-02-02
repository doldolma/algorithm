def solution(lottos, win_nums):
    rank = [6, 6, 5, 4, 3, 2, 1]
    zero_count = lottos.count(0)
    match_count = 0;
    
    for num in lottos:
        if num in win_nums:
            match_count += 1
    return [rank[match_count + zero_count], rank[match_count]]

if __name__ == '__main__':
  print(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))  # [3, 5]