import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/auth.contexts'

const NavBar = () => {
    const {isLoggedIn,user} = useContext(AuthContext)
    return (
        <nav style={{display: 'flex', justifyContent: 'space-around'}}>
            <Link to='/'>Home</Link>
            {isLoggedIn && (
            <>
            <Link to='/project-list'>Project List</Link>
            <Link to='/project/create'>Add Project</Link>
            <Link to='/logout'>Log Out</Link>
            </>
            )}
            {!isLoggedIn && (
                <>
                <Link to='/signup'>Signup</Link>
                <Link to='/login'>Login</Link>
                </>
            )}
        </nav>
    )
}

export default NavBar