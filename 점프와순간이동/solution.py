def solution(n):
    return bin(n)[2:].count("1")

if __name__ == '__main__':
  print(solution(5000))  # 5