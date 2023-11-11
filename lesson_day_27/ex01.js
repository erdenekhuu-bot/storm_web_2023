const taskInput=document.getElementById('taskInput')
const addTaskButton=document.getElementById('addTask')
const taskList=document.getElementById('taskList')



// addTaskButton.addEventListener('click',function(){
//     if(taskInput.value!=''){
//         var listItem=document.createElement('li')
//         listItem.textContent = taskInput.value
//         var removeButton=document.createElement('button')
//           removeButton.textContent = 'Remove'

         
//           listItem.appendChild(removeButton)
//           taskList.appendChild(listItem)
//               removeButton.addEventListener('click',function(){
//               taskList.removeChild(listItem)
//           })
//     }  else {
//         console.log('none')
//     }    
// })


taskInput.addEventListener('keydown', function(e){
        if(e.key == 'Enter'){
            console.log('enter');
        var listItem=document.createElement('li')
        listItem.textContent = taskInput.value
        var removeButton=document.createElement('button')
          removeButton.textContent = 'Remove'

         
          listItem.appendChild(removeButton)
          taskList.appendChild(listItem)
              removeButton.addEventListener('click',function(){
              taskList.removeChild(listItem)
          })
    }    
})
