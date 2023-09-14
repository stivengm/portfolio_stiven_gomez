import './Contact.css';

export function ContactMe({ contact = [] }) {
    var newContact = contact;
    
    return(
        <div className='contact-me'>
            <h1>Contáctame</h1>
            <div className='social'>
                {
                    newContact.map((social) => 
                    <div className='item-contact' key={social.id}>
                        <a href={social.url} target='_blank'>
                            <img src={social.img_icon} alt={social.name} />
                        </a>
                    </div>)
                }
            </div>
        </div>
    );
}