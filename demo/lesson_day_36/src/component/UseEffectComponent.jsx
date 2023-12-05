import {useEffect, useState} from "react";

function UseEffectComponent() {
    const [data, setData] = useState([])
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        const fetchData=async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
                const jsonData = await response.json()
                setData(jsonData)
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Posts</h1>
            {loading ? (
                <p className="text-center">Loading...</p>
            ):(
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map(post=>(
                        <div key={post.id} className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white">
                            <h2 className="font-semibold text-lg text-purple-800 mb-2">{post.title}</h2>
                            <p className="text-gray-600 text-sm">{post.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default UseEffectComponent