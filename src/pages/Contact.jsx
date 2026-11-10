
import { useState } from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setSubmitted(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  }

  return (
    <div className="container my-5">

      <div className="row justify-content-center">
        <div className="col-md-7">

          <h2 className="text-center mb-4">
            Send Us a Message
          </h2>

          {submitted && (
            <div className="alert alert-success">
              Your message has been submitted!
            </div>
          )}

          <ContactForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />

        </div>
      </div>

    </div>
  );
}

export default Contact;
