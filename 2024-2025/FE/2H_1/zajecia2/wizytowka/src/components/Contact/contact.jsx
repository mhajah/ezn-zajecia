import { FaPhone } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import './contact.css';

function Contact({phone, website}) {
    return (
        <div className="contactIcons">
            <p><FaPhone /> Phone: {phone}</p>
            <p><GiWorld /> Website: {website}</p>
        </div>
    );
}

export default Contact;