const res = require("express/lib/response")

async function processTask(taskId){
    const taskStatus = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(taskId >= 0){
                resolve(`Task ${taskId} completed successfully.`)
            } else {
                reject(`Invalid Task Id: ${taskId}`)
            }
        },1000)
    })
    try {
        let result=await taskStatus
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

processTask(5)
processTask(-5)
processTask(0)
processTask(1)
processTask(-1)
processTask(1-5)