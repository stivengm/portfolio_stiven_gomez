import './Skills.css';

export function SkillItem({ img, name }) {

    return(
        <div className='skill-item'>
            <img className='img_logo' src={img} alt={name} />
        </div>
    );

}