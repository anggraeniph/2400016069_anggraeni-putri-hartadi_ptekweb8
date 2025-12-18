import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">Contact</h1>
        <p className="contact-subtitle">
          Silakan hubungi saya melalui form atau sosial media berikut.
        </p>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>

          <div className="form-row">
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Phone No." />
          </div>

          <textarea placeholder="Message"></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

