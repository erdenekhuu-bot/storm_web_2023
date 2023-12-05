import { useState, useEffect } from "react"
import axios from "axios"

const Comments = function(props){
    const [comments, setComments] = useState([])
    useEffect(()=>{
        const fetchComments = async  function(){
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${props.postId}`)
                const jsonData = await response.data
                console.log(jsonData);
                setComments(jsonData)
            } catch (error) {
                console.log(error)
            }
        }
        fetchComments()
    })
    return (
  
    )
}