import './Projects.css';

export function ProjectItem({ name, img, description, personalProject, stors = [], entities= [] }) {
    return(
        <div className='project-item'>
            <div className='img-project'>
                <img className='project-img' src={img} alt={name} />
            </div>
            <div className='information-project'>
                <div className='info-project'>
                    <strong className='name-project'>{name}</strong>
                    <div>
                        {
                            personalProject ? 
                            <span className='personal-project'>Proyecto personal</span> :
                            <div className='entities-work'>
                                {
                                    entities.map((entity) => <img key={entity.id} className='img-entity-work' src={entity.img} alt="" />)
                                }
                            </div>
                        }
                    </div>
                    <p>{description}</p>
                </div>
                {
                    stors ? 
                    <div className='stores-projects'>
                        {
                            stors[0].publish ? <a href={stors[0].url} target='_blank'><img className='img-store' src={stors[0].img_store} alt={name} /></a> : <section></section>
                        }
                        {
                            stors[1].publish ? <img className='img-store' src={stors[1].img_store} alt={name} /> : <section></section>
                        }
                    </div> :
                    <section></section>
                }
            </div>
        </div>
    );


}