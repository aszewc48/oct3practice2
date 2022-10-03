import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav style={{display: 'flex', justifyContent: 'space-around'}}>
            <Link to='/'>Home</Link>
            <Link to='/project-list'>Project List</Link>
            <Link to='/project/create'>Add Project</Link>
        </nav>
    )
}

export default NavBar