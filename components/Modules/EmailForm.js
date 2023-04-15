import { useState } from 'react';
import axios from 'axios';

const emailOptions = [
  { label: 'Orivesi All Stars (hallitus)', value: 'usera@example.com' },
  { label: 'Antti Jävelä', value: 'usera@example.com' },
  { label: 'Veera Kuisma', value: 'usera@example.com' },
  { label: 'Laura Kuisma', value: 'userb@example.com' },
  { label: 'Reetta Kuisma', value: 'userc@example.com' },
  { label: 'Elias Frigård', value: 'userc@example.com' },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    recipient: emailOptions[0].value,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post('/api/send-email', formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        recipient: emailOptions[0].value,
      });
      alert('Email sent successfully!');
    } catch (error) {
      alert('An error occurred while sending the email.');
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto font-work">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-medium font-work text-gray-700">
          Nimi
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-secondary-500"
        />
      </div>

      <div className='w-full mb-4'>
        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
          Sähköposti
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-secondary-500"
        />
      </div>
      <div className="w-full mb-4">
        <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
          Puhelin
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-secondary-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="recipient" className="block mb-2 font-medium text-gray-700">
          Vastaanottaja
        </label>
        <select
          id="recipient"
          name="recipient"
          value={formData.recipient}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-secondary-500"
        >
          {emailOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
          Viesti
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-secondary-500 resize-none"
          rows={4}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 text-white bg-secondary-500 rounded-lg hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-secondary-600 focus:ring-opacity-50"
      >
        {isSubmitting ? 'Lähettää...' : 'Lähetä'}
      </button>
      <div className='w-full flex justify-center items-center text-center mt-4 text-sm'>
        <p>Tai lähetä sähköposti osoitteeseen <a className='text-accent-500 underline' href="mailto:orivesiallstars@gmail.com">orivesiallstars@gmail.com</a></p>
      </div>
    </form>
  );
};

export default ContactForm;
