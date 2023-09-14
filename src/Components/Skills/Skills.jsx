import './Skills.css';
import { SkillItem } from './Skill-Item';

import flutter from '../../assets/flutter_icon.svg';
import angular from '../../assets/angular_icon.svg';
import nodeJs from '../../assets/nodejs_icon.svg';
import react from '../../assets/react_icon.svg';

export function Skills() {
    return(
        <div className='skills'>
            <SkillItem img={flutter} name='flutter_logo' />
            <SkillItem img={angular} name='flutter_logo' />
            <SkillItem img={nodeJs} name='flutter_logo' />
            <SkillItem img={react} name='flutter_logo' />
            {/* <img src={flutter} alt="flutter_logo" /> */}
        </div>
    );
}