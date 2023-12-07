import { useState, useEffect } from "react";
import axios from 'axios';

const Ex04 = function(){

    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage]=useState(5)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const fetchPosts = async function(){
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${postsPerPage}&_page=${currentPage}`)
                const jsonData = await response.data
                console.log(jsonData);
                setPosts(jsonData)
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }
        fetchPosts()
    },[currentPage, postsPerPage])
    return (
        <div>
            <h1>Paginated Posts</h1>
            <div>
                {posts.map(post => <p key={post.id}>{post.title}</p>)}
            </div>
            <button className="m-2" onClick={()=> setPage(page => page - 1)} disabled={page === 1}>Previous</button>
            <button className="m-2" onClick={()=>setPage(page => page + 1)}>Next</button>
            {<p><b>Button clicked times: </b>{page}</p>}
        </div>
    )
}
export default Ex04