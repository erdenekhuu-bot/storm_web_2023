import { useState, useEffect } from "react";

const Ex03 = function(){

    const [posts, setPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(()=>{
        const fetchUsers = async function(){
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
                const jsonData = await response.json()
                setPosts(jsonData)
            } catch (error) {
                console.error(error)
            }
        }
        fetchUsers()
    })
    const filteredPosts = posts.filter(post => post.name.includes(searchTerm) || post.email.includes(searchTerm))
    return (
        <div>
            <input type="text" onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search posts..."/>
            <div>
                {filteredPosts.map(post => <p key={post.id}>{post.email}</p>)}
            </div>
        </div>
    )
}
export default Ex03;