import { useNavigate} from 'react-router-dom'

function Profile(){
    const navigate=useNavigate()
    return (
        <div className='p-6 max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl font-bold mb-4'>Profile</h1>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={()=>navigate('/')}>Back to Home</button>
        </div>
    )
}
export default Profile