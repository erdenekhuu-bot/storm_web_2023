import { useState, useEffect } from "react";
import axios from 'axios';

const Ex04 = function(){

    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)

    useEffect(()=>{
        const fetchPosts = async function(){
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
                const jsonData = await response.data
                console.log(jsonData);
                setPosts(jsonData)
            } catch (error) {
                console.error(error)
            }
        }
        fetchPosts()
    })
    return (
        <div>
            <h1>Paginated Posts</h1>
            <div>
                {posts.map(post => <p key={post.id}>{post.email}</p>)}
            </div>
            <button className="m-2" onClick={()=> setPage(page => page - 1)} disabled={page === 1}>Previous</button>
            <button className="m-2" onClick={()=>setPage(page => page + 1)}>Next</button>
        </div>
    )
}
export default Ex04