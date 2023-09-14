import './Projects.css';

export function ProjectItem({ name, img, description, personalProject, stors = [] }) {
    console.log(name);
    return(
        <div className='project-item'>
            <div className='img-project'>
                <img className='project-img' src={img} alt={name} />
            </div>
            <div className='information-project'>
                <strong className='name-project'>{name}</strong>
                <p>{description}</p>
                <span className='personal-project'>{ personalProject ? 'Proyecto personal' : '' }</span>
            </div>
        </div>
    );


}