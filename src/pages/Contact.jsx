import '../components/Contact/Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => {
  return (
    <div className="page-content">
      <section className="contact reveal reveal-up active" style={{ paddingTop: '120px' }}>
        <div className="contact-container">
          <div className="contact-card">
            <div className="contact-info reveal reveal-left">
              <h2 className="section-title">Let's <span>Connect</span></h2>
              <p className="section-description">
                Ready to connect exceptional talent with your organization or leverage cutting-edge IT solutions? Our team is here to help you build future-ready teams and drive innovation. Let's discuss how we can partner with you.
              </p>
              <div className="contact-details">
                <div className="detail-item">
                  <span className="icon">
                    <FaPhone />
                  </span>
                  <div>
                    <h4>Phone</h4>
                    <p><a href="tel:+919217617060">+91 92176 17060</a></p>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="icon">
                    <FaMapMarkerAlt />
                  </span>
                  <div>
                    <h4>Office</h4>
                    <p>7th Floor Gulmohar Tower/Enclave Nehru Nagar Ghaziabad</p>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="icon">
                    <FaEnvelope />
                  </span>
                  <div>
                    <h4>Email</h4>
                    <p><a href="mailto:careers@ascitservices.com">careers@ascitservices.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
