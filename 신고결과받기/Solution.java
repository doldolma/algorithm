package 신고결과받기;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Solution {
  public int[] solution(String[] id_list, String[] report, int k) {
    List<String> list = Arrays.stream(report).distinct().collect(Collectors.toList());
    HashMap<String, Integer> count = new HashMap<>();
    for (String s : list) {
        String target = s.split(" ")[1];
        count.put(target, count.getOrDefault(target, 0) + 1);
    }

    return Arrays.stream(id_list).map((user) -> {
        List<String> reportList = list.stream().filter(s -> s.startsWith(user + " ")).collect(Collectors.toList());
        return reportList.stream().filter(s -> count.getOrDefault(s.split(" ")[1], 0) >= k).count();
    }).mapToInt(Long::intValue).toArray();
}

  public static void main(String[] args) {
    String[] id_list = {"muzi", "frodo", "apeach", "neo"};
    String[] report = {"muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi", "apeach muzi"};
    int[] result = new Solution().solution(id_list, report, 2); 
    System.out.println(Arrays.toString(result)); // [2,1,1,0]
  }
}
