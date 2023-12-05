import { useEffect, useState } from "react";

const Ex05 = function(){

    const [posts, setPosts] = useState([])
    const [selectedPostId, setSelectedPostid] = useState(null)
    useEffect(()=>{
        const fetchPosts = async function(){
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            const jsonData = await response.data
            console.log(jsonData);
            setPosts(jsonData)
        }
    })
    return (
    <div>
        <h1>Posts width Comments</h1>
        {posts.map(post => (
            <p key={post.id} onClick={()=>setSelectedPostid(post.id)}>{post.email}</p>
        ))}
        {selectedPostId && <Comments postId={selectedPostId}/>}
    </div>)
}

export default Ex05