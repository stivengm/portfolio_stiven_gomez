import './Projects.css';
import { ProjectItem } from './Project_item';

export function Projects({ projects = [] }) {

    var newProjects = projects;
    var mobile = [], web = [];

    mobile = newProjects[0].projects;
    web = newProjects[1].projects;

    return(
        <div className="projects">
            {
                mobile != undefined ?
                <div>
                    <h1>Proyectos móviles</h1>
                    {
                        mobile.map((project) => <ProjectItem key={project.id} name={project.name} img={project.img} description={project.description} personalProject={project.personalProject} stors={project.stors} entities={project.entities} closeStore={project.closeStore} />)
                    }
                
                </div> : <section></section>
            }
            {
                web != undefined ? 
                <div>
                    <h1>Proyectos web</h1>
                    {
                        web.map((project) => <ProjectItem key={project.id} name={project.name} img={project.img} description={project.description} personalProject={project.personalProject} isWeb={true} />)
                    }

                
                </div> : <section></section>
            }
        </div>
    );
}