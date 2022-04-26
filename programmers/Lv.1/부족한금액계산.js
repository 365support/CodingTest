function solution(price, money, count) {
  var answer = money
  for(let i = 1; i <= count; i++){
      answer -= price * i
  }
  if(answer > 0){
      return 0
  }else{
      return Math.abs(answer)
  }
}
console.log(solution(3, 20, 4));


// 카운트의 수만큼 돌면서 price 곱하기 한 값을 머니에서 빼서 리턴
// 만약 이때 결과값이 양수라면 0 리턴
// 결과값이 음수라면 양수로 바꿔서 출력
