function solution(id_list, report, k) {
    // {신고당한사람: [신고한사람]}
    var answer = new Array(id_list.length).fill(0)
    let newReport = {}
    id_list.map((user)=>{
        newReport[user] = []
    })
    // console.log('newReport',newReport)
    report.map((user)=>{
        let [userId, reportId] = user.split(' ')
        if(!newReport[reportId].includes(userId)){
            newReport[reportId].push(userId)
        }
    })

    for(let id in newReport){
        if(newReport[id].length >= k){
            newReport[id].map((user)=>{
                answer[id_list.indexOf(user)] += 1
            })
        }
    }    
    return answer;
}