import { useState, useEffect } from "react";

const Ex01 = function(){

    const [post, setPost] = useState(null)

    useEffect(()=>{
        const fetchPost = async ()=>{
            try {
                    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/2`)
                    const jsonData = await response.json()
                    console.log(jsonData);
                    setPost(jsonData)
            } catch(e){
                console.error(e)
            }
        }
     fetchPost() 
    })

    return (
        <div>
            {post != null ? (<div>
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>
                            </div>) : <div> Loading...</div>}
        </div>
    )
}

export default Ex01