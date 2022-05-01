function solution(d, budget) {
  var answer = 0;
  let budgetSort = d.sort((a,b)=> a-b)
  for(let i = 0; i < d.length; i++){
      if(budget - budgetSort[i] >= 0){
          budget -= budgetSort[i];
          answer++
      }
  }
  return answer;
}