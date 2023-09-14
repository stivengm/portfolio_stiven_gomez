import './Footer.css';

export function Footer() {
    var location = window.location.host;
    return(
        <div className="footer">
            <p>© {(new Date().getFullYear())} {location}</p>
        </div>
        
    );
}