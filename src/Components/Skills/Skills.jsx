import './Skills.css';
import { SkillItem } from './Skill-Item';

export function Skills({ skills = [] }) {
    var newSkills = skills;
    return(
        <div className='skills'>
        {
            newSkills.map((skill) => <SkillItem key={skill.id} img={skill.img_icon} name={skill.name} />)
        }
        </div>
    );
}