import { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resumeLink: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formcarry.com/s/Y_jWTGxxTMf', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          resumeLink: formData.resumeLink,
          message: formData.message
        })
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          resumeLink: '',
          message: ''
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form reveal reveal-right" onSubmit={handleSubmit}>
      <div className="form-group">
        <input 
          type="text" 
          name="name"
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
      </div>
      <div className="form-group">
        <input 
          type="email" 
          name="email"
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
      </div>
      <div className="form-group">
        <input 
          type="url" 
          name="resumeLink"
          placeholder="Resume Link (Optional)" 
          value={formData.resumeLink}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <textarea 
          name="message"
          placeholder="Your Message" 
          rows="4" 
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      {submitStatus === 'success' && (
        <div className="form-message form-success">
          ✓ Message sent successfully! We'll get back to you soon.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="form-message form-error">
          ✗ Something went wrong. Please try again.
        </div>
      )}
      <button 
        type="submit" 
        className="btn btn-primary" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
