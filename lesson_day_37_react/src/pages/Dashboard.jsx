import { useNavigate} from 'react-router-dom'

function Dashboard(){
    const navigate = useNavigate()

    return (
        <div className='p-6 max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl font-bold mb-4'>Dashboard</h1>
            <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' onClick={()=>navigate('/')}>Back to home</button>
        </div>
    )
}
export default Dashboard