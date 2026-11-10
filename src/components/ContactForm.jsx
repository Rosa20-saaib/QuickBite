
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';

function ContactForm({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>

      <FormInput
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />

      <FormInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />

      <FormInput
        label="Subject"
        name="subject"
        type="text"
        value={formData.subject}
        onChange={handleChange}
      />

      <FormTextarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit" className="btn btn-success w-100">
        Send Message
      </button>

    </form>
  );
}

export default ContactForm;
