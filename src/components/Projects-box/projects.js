import React, { useEffect, useState } from 'react';
import './projects.css';

function Project() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Try to fetch from the local server
                const response = await fetch('http://3.139.79.246:8000/projects/');
                if (!response.ok) {
                    throw new Error('Failed to fetch from local server');
                }
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching from local server:', error);
                // Fallback to the online server
                try {
                    const response = await fetch('3.139.79.246/projects/');
                    if (!response.ok) {
                        throw new Error('Failed to fetch from online server');
                    }
                    const data = await response.json();
                    setProjects(data);
                } catch (error) {
                    console.error('Error fetching from online server:', error);
                }
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <div className='p-5 parent-container'>
                <div className='title-container'>
                    <h3 className='tool-text'>Recent Projects</h3>
                </div>      
            </div>

            <div className='project-container'>
                {projects.map(project => (
                    <div className='project-card' key={project.id}>
                        <div className='project-image'>
                            <div className='project-text'>
                                <a href={project.url} style={{ textDecoration: 'none', color: 'green' }}>
                                    {project.name}
                                </a>
                                <p>{project.description}</p>
                            </div>
                            <a href={project.url}>
                                <img src={project.image} className='project-image' alt={project.name} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
