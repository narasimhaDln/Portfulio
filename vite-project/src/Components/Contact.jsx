import "../Styles/Contact.css"
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="section-content">
        <h2 className="section-title">Get In Touch</h2>
        <p>
          Looking for freelance or full-time opportunities. Reach out, and let's work on something great!
        </p>
        <form
          className="contact-form"
          action="https://formsubmit.co/narasimha34327@gmail.com"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
