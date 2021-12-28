function mostFrequentCharacter(str) {
    // 위의 문제는 객체를 리턴 {문자 : 나온 횟수}
    // 이 문제는 가장 많이 반복 된 문자 리턴
  
    let frequent = '';
    let frequentCount = 0;
  
    let obj = {}
    for (let i = 0; i < str.length; i++){
      if(str[i] === ' '){
        continue;
        // continue 반복문이 돌아가는 상황에서 공백일땐 무시
      }
      if (obj[str[i]] === undefined){
        obj[str[i]] = 0;
      }
      obj[str[i]]++
  
      if(obj[str[i]] > frequentCount){
        frequentCount = obj[str[i]] // 가장 많이 나온 문자의 횟수
        frequent = str[i] // 가장 많이 나온 문자
      }
    }
    return frequent
  }
  