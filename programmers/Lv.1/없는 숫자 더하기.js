function solution(numbers) {
  var answer = 0;
  let num = [0,1,2,3,4,5,6,7,8,9];
  let numSort = numbers.sort();
  
  for(let i = 0; i < num.length; i++){
      if(!numSort.includes([i])){
          answer += i
      }
  }
  return answer;
}


// function solution(numbers) {
//     let answer = 0;

//     for(let i = 0; i <= 9; i++) {
//         if(!numbers.includes(i)) answer += i;
//     }

//     return answer;
// }