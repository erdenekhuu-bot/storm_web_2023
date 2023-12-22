import { NavLink } from "react-router-dom";

export default function NavBar(){
    return (
        <nav className="bg-gray-300 p-4 text-white">
            <ul className="flex justify-center space-x-6 md:space-x-10"> 
                <li>
                    <NavLink to='/' className={({isActive})=> isActive ? 'text-blue-300' : 'hover:text-blue-400'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({isActive})=> isActive ? 'text-blue-300' : 'hover:text-blue-400'}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/login' className={({isActive})=> isActive ? 'text-blue-300' : 'hover:text-blue-400'}>
                        Login
                    </NavLink>
                </li>
                <li> 
                    <NavLink to='/register' className={({isActive})=> isActive ? 'text-blue-300' : 'hover:text-blue-400'}>
                      Register
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}