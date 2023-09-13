import codeLogo from '../assets/coding.svg';
import './Header.css';

export function Header() {
    return(
        <nav className='navbar'>
            <img src={codeLogo} className='codeLogo' alt="codeLogo" />
            <span>Stiven Gomez</span>
        </nav>
    );
}