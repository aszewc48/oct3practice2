import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const ProjectListPage = () => {
    const [projectsArray,setProjectsArray] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/api/projects')
            .then(res => setProjectsArray(res.data.projects))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>hey from project list page</h1>
            {projectsArray.map(element => {
                return (
                    <div>
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