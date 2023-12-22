import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Contact=()=>{
    const navigate=useNavigate()
    const [authenticated, setauthenticated]=useState(null)
    useEffect(()=>{
        const loggedInUser=localStorage.getItem('authenticated')
        console.log(authenticated)
        if(loggedInUser){
            setauthenticated(JSON.parse(loggedInUser))
            navigate('/contact')
        }
        if(!authenticated){
            navigate('/login')
        } else {
            return (
                <div>
                    <p>Welcome to your Contact</p>
                    <p>{authenticated.email}</p>
                </div>
            )
        }
    },[])
}
export default Contact