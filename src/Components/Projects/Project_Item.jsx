import './Projects.css';

export function ProjectItem({ name, img, description, personalProject, stors = [] }) {
    return(
        <div className='project-item'>
            <div className='img-project'>
                <img className='project-img' src={img} alt={name} />
            </div>
            <div className='information-project'>
                <div className='info-project'>
                    <strong className='name-project'>{name}</strong>
                    <div>
                        <span className='personal-project'>{ personalProject ? 'Proyecto personal' : '' }</span>
                    </div>
                    <p>{description}</p>
                </div>
                {
                    stors ? 
                    <div className='stores-projects'>
                        {
                            stors[0].publish ? <img className='img-store' src={stors[0].img_store} alt={name} /> : <secion></secion>
                        }
                        {
                            stors[1].publish ? <img className='img-store' src={stors[1].img_store} alt={name} /> : <secion></secion>
                        }
                    </div> :
                    <section></section>
                }
            </div>
        </div>
    );


}