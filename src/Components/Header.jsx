import codeLogo from '../assets/coding.svg';
import './Header.css';

export function Header() {
    return(
        <nav className='navbar'>
            <div className='name-and-code'>
                <img src={codeLogo} className='codeLogo' alt="codeLogo" />
                <span className='name'>Stiven Gomez</span>
            </div>
            <div className='options'>
                <span>Inicio</span>
                <span>Sobre mi</span>
                <span>Proyectos</span>
                <span>Contacto</span>
            </div>
        </nav>
    );
}