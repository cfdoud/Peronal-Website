import React, { useEffect, useState } from 'react';
import './projects.css';

function Project() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch data from Django backend
        fetch('https://backend-personal-k0ux.onrender.com')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching data:', error));
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
