import codeLogo from '../../assets/coding.svg';
import './Header.css';

export function Header({ name }) {
    return(
        <nav className='navbar'>
            <div className='name-and-code'>
                <img src={codeLogo} className='codeLogo' alt="codeLogo" />
                <span className='name'>{ name }</span>
            </div>
            {/* <div className='options'>
                <span className='item'>Inicio</span>
                <span className='item'>Sobre mi</span>
                <span className='item'>Proyectos</span>
                <span className='item'>Contacto</span>
            </div> */}
        </nav>
    );
}