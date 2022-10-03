import { useParams } from "react-router-dom"
import {useEffect,useState} from 'react'
import axios from "axios"

const SingleProjectPage = () => {
    const [singleProject,setSingleProject] = useState(null)
    const {projectId} = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3001/api/projects/${projectId}`)
            .then(res => setSingleProject(res.data.project))
            .catch(err => console.log('Error getting single page data:', err))
    }, [projectId])
    return (
        <div>
            {singleProject && (
                <div>
                    <h2>{singleProject.title}</h2>
                    <p>{singleProject.description}</p>
                </div>
            )}
        </div>
    )
}

export default SingleProjectPage