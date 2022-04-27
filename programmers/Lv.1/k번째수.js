function solution(array, commands) {
  var answer = [];
  for(let i = 0; i < commands.length; i++){
      let newSlice = array.slice(commands[i][0] -1, commands[i][1]).sort()
      let newSort = newSlice.sort((a, b) => a - b)
      answer.push(newSort[commands[i][2]-1])
  }
  return answer;
}

// commands의 0부터 1까지 자른 후 정렬 -> 2번째 숫자 출력
// sort 정렬 시 90과 100을 비교한다면 앞자리 9 와 1 비교
// 90이 더 크게 됨 까먹지 말기