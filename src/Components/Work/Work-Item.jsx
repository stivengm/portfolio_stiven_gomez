import './Work-Item.css';
import flutter from '../../assets/flutter_icon.svg';

export function WorkItem({ workName, entityWork, timeWork, descriptionWork, img }) {
    return (
        <div className="item-work">
            <img className='img-work' src={img} alt="flutter_logo" />
            <div className='info-work'>
                <strong className='work-name'>{ workName }</strong>
                <p className='entity-work'>{ entityWork }</p>
                <p className='time-work'>{ timeWork }</p>
                <p className='description-work'>{ descriptionWork }</p>
            </div>
        </div>
    );
}