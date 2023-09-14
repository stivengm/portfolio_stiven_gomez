import './Projects.css';
import { ProjectItem } from './Project_item';

export function Projects({ projects = [] }) {

    var newProjects = projects;
    var mobile = [], web = [];

    mobile = newProjects[0].projects;
    web = newProjects[1].projects;

    // var mobile = newProjects[0].projects;
    // var web = newProjects[1].projects;

    console.log(mobile);
    console.log(web);

    return(
        <div className="projects">
            {
                mobile != undefined ?
                <>
                    <h1>Proyectos móviles</h1>
                    {
                        mobile.map((project) => <ProjectItem key={project.id} name={project.name} img={project.img} personalProject={project.personalProject} />)
                    }
                
                </> : <section></section>
            }
            {
                web != undefined ? 
                <>
                    <h1>Proyectos web</h1>

                
                </> : <section></section>
            }
        </div>
    );
}