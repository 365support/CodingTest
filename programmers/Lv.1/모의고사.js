function solution(answers) {
  let result = [0, 0, 0];
  let onePer = [1, 2, 3, 4, 5];
  let twoPer = [2, 1, 2, 3, 2, 4, 2, 5];
  let threePer = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  
  for(let i = 0; i < answers.length; i++){
      if(answers[i] === onePer[i % 5]) result[0]++;
      if(answers[i] === twoPer[i % 8]) result[1]++;
      if(answers[i] === threePer[i % 10]) result[2]++;
  }
  
  let maxResult = Math.max(...result)
  let answer = [];

  for(let i = 0; i < result.length; i++){
      if(maxResult === result[i]) answer.push(i + 1);
  }
  return answer;
}