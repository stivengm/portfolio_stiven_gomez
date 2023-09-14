import './Skills.css';

export function SkillItem({ img, name }) {

    return(
        <div className='skill-item'>
            <img src={img} alt={name} />
        </div>
    );

}