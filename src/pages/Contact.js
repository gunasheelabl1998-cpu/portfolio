import './Contact.css';

function Contact() {
    return (
        <div className="contact-section">
            <h2 className='header-contact'>Let's Connect</h2>
            <form>
                <label>Name</label>
                <input type="text" placeholder="Your name" required />

                <label>Email</label>
                <input type="email" placeholder="Your email" required />

                <label>Message</label>
                <textarea placeholder="Your message" rows="5" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;