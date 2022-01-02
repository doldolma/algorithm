function solution(skill, skill_trees) {
  let answer = 0;
  skill_trees.forEach(skillTree => {
      const learnSkills = [];
      let isPossible = true;
      for(let userSkill of skillTree) {
          const skillIndex = skill.indexOf(userSkill);
          if(skillIndex === -1) continue;
          if(skillIndex === 0) learnSkills.push(userSkill);
          else if(!learnSkills.includes(skill[skillIndex-1])) {
              isPossible = false;
              break;
          } else learnSkills.push(userSkill);
      }
      if(isPossible) answer++;
  });
  return answer;
}

console.log(solution('CBD', ["BACDE", "CBADF", "AECB", "BDA"]));