import React, { useState, useEffect } from 'react';

const DataComponent = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/projects/')
            .then(response => response.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.github_id}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link}>View Project</a>
                        <img src={project.image_url} alt={project.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataComponent;
