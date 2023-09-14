import { WorkItem } from './Work-Item';
import './Works.css';

export function Works() {
    return(
        <div className="works">
            <h1>Trabajos</h1>
            <div className='works-section'>
                <WorkItem />
                <WorkItem />
                <WorkItem />
            </div>
        </div>
    );
}