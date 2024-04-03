import { WorkItem } from './Work-Item';
import './Works.css';

export function Works({ works = [] }) {
    var newWorks = works;
    var newWorksReverse = newWorks.sort((a, b) => b.id - a.id);

    return(
        <div className="works">
            <h1>Trabajos</h1>
            <div className='works-section'>
                {
                    newWorksReverse.map((work) => <WorkItem key={work.id} workName={work.position} entityWork={work.name} img={work.img} timeWork={work.time} descriptionWork={work.description} />)
                }
            </div>
        </div>
    );
}