import {useState, useEffect} from 'react'

function UseEffectComponentDependency() {
    const [posts, setPosts]=useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage]=useState(10)

    useEffect(()=>{
        const fetchPosts= async()=>{
            setLoading(true)
            const response=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postsPerPage}&_page=${currentPage}`)
            const data=await response.json()
            console.log(data)
            console.log(currentPage)
            setPosts(data)
            setLoading(false)
        }
        fetchPosts()
    }, [currentPage, postsPerPage])

    const paginate=(pageNumber)=>setCurrentPage(pageNumber)
    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-xl font-bold mb-4'>Paginated Posts</h1>
            {loading ? <p>Loading...</p> : (<ul className='list-disc'>
                    {posts.map(post=>(<li key={post.id} className='mb-2'>{post.title}</li>))}
            </ul>
            )}
            <div className='flex justify-center space-x-2 mt-4'>
                {Array.from({length: 10}, (_, i)=>(
                    <button key={i+1} onClick={()=>paginate(i+1)} className={`px-3 py-1 border rounded ${currentPage===i+1 ? 'bg-blue-500 text-white' : 'bg-white'}`}>{i+1}</button>
                ))}
            </div>
        </div>
    )
}
export default UseEffectComponentDependency