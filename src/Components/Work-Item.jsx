import './Work-Item.css';
import flutter from '../assets/flutter_icon.svg';

export function WorkItem() {
    return (
        <div className="item-work">
            <img src={flutter} alt="" />
            <div className='info-work'>
                <strong className='work-name'>Senior Flutter Developer</strong>
                <p className='entity-work'>SoyYo - Identidad digital</p>
                <p className='description-work'>Desarrollo de aplicaciones en Flutter - Dart, uso de Patron BLoC, creación e integración de SDK en WebPack.</p>
            </div>
        </div>
    );
}