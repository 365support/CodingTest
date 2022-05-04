function solution(s)
{
    const arr = [];

      for(let i = 0 ; i < s.length ; i++ ){
        if( !arr.length || arr[arr.length-1] !== s[i] ){
            arr.push(s[i]);
        } else {
            arr.pop();
        }
    }

  return arr.length ? 0 : 1;
}

// 빈 배열에 하나씩 집어넣은 다음
// 마지막으로 들어간 두개의 문자가 같을 경우 pop