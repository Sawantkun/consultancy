import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact reveal reveal-up">
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-info reveal reveal-left">
            <h2 className="section-title">Let's <span>Connect</span></h2>
            <p className="section-description">
              Ready to elevate your talent strategy? Our experts are here to help you scale your vision with precision and speed.
            </p>
            <div className="contact-details">
              <div className="detail-item">
                <span className="icon">📍</span>
                <div>
                  <h4>Office</h4>
                  <p>Cyber City, Gurgaon, India</p>
                </div>
              </div>
              <div className="detail-item">
                <span className="icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>hello@companyname.com</p>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form reveal reveal-right" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="4" required></textarea>
            </div>
            <button className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
