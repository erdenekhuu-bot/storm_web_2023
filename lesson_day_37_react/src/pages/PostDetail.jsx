import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'

function PostDetail(){
    const { postId } = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
           .then(response=>response.json())
           .then(data=>setPost(data))
           .then(error=>console.log('Error fetching post: ',error))
    },[postId])
    if(!post) return <div>Loading...</div>
return (
    <div>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p>{post.body}</p>
    </div>
)
}
export default PostDetail;