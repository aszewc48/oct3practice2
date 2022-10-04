import { useParams } from "react-router-dom"
import {useEffect,useState} from 'react'
import axios from "axios"
import TaskForm from "../components/TaskForm"
import { useNavigate } from "react-router-dom"

const SingleProjectPage = () => {
    const navigate = useNavigate()
    const [singleProject,setSingleProject] = useState(null)
    const {projectId} = useParams()

    const getSingleProject = (projectId) => {
        axios.get(`http://localhost:3001/api/projects/${projectId}`)
        .then(res => setSingleProject(res.data.project))
        .catch(err => console.log('Error getting single page data:', err))
    }

    useEffect(() => {
       getSingleProject(projectId)
    }, [projectId])

    const deleteProject = projectId => {
        axios.delete(`http://localhost:3001/api/projects/${projectId}`)
            .then(res => {
                console.log(res)
                navigate('/project-list')
            })
            .catch(err => console.log('Error deleting data', err))
    }
    return (
        <div>
            {singleProject && (
                <>
                <div>
                    <h2>{singleProject.title}</h2>
                    <p>{singleProject.description}</p>
                    {singleProject.task.map(element => {
                        return (
                            <div>Task: {element.title}</div>
                        )
                    }
                    )}
                </div>
                <div>
                <TaskForm projectId={projectId} getSingleProject={getSingleProject}/>
                </div>
                <h3>WARNING: DANGER BELOW</h3>
                <button onClick={() => deleteProject(projectId)}>Delete Project</button>
                </>
            )}
        </div>
    )
}

export default SingleProjectPage