import './Skills.css';
import { SkillItem } from './Skill-Item';

import flutter from '../../assets/flutter_icon.svg';

export function Skills() {
    return(
        <div className='skills'>
            <SkillItem img={flutter} name='flutter_logo' />
            <SkillItem img={flutter} name='flutter_logo' />
            <SkillItem img={flutter} name='flutter_logo' />
            <SkillItem img={flutter} name='flutter_logo' />
            {/* <img src={flutter} alt="flutter_logo" /> */}
        </div>
    );
}