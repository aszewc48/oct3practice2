import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const ProjectListPage = () => {
    const [projectsArray,setProjectsArray] = useState([])
    useEffect(() => {
        const storedToken = localStorage.getItem('authToken')
        axios.get('http://localhost:3001/api/projects',
        {
            headers: {
                authorization: `Bearer ${storedToken}`
            }
        })
            .then(res => setProjectsArray(res.data.projects))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>hey from project list page</h1>
            {projectsArray.map(element => {
                return (
                    <div key={element._id}>
                        <h3>{element.title}</h3>
                        <p>{element.description}</p>
                        <Link to={`/project/${element._id}`}>View Project</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectListPage