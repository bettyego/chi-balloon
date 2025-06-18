import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { sanitizeFormData, formSubmissionLimiter } from '../../utils/sanitize';
import { optimizeFormForMobile } from '../../utils/touchUtils';
import { trackFormSubmission, trackContactAttempt } from '../../utils/analytics';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // Optimize form for mobile on mount
  useEffect(() => {
    const form = document.querySelector('#contact-form');
    if (form) {
      optimizeFormForMobile(form);
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Rate limiting check
    const userIdentifier = formData.email || 'anonymous';
    if (!formSubmissionLimiter.isAllowed(userIdentifier)) {
      const remainingTime = Math.ceil(formSubmissionLimiter.getRemainingTime(userIdentifier) / 60000);
      alert(`Too many submission attempts. Please wait ${remainingTime} minutes before trying again.`);
      return;
    }

    setIsSubmitting(true);

    try {
      // Sanitize form data before sending
      const sanitizedData = sanitizeFormData(formData);

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id',
        process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID || 'your_template_id',
        {
          from_name: sanitizedData.name,
          from_email: sanitizedData.email,
          phone: sanitizedData.phone,
          message: sanitizedData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key'
      );

      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Track successful form submission
      trackFormSubmission('contact_form', true);
      trackContactAttempt('contact_form');

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your message. Please try again.');

      // Track failed form submission
      trackFormSubmission('contact_form', false);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8 mt-12">Get In Touch</h2>

      {showSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      <form id="contact-form" onSubmit={handleSubmit} className="bg-green-50 shadow-lg rounded-lg p-4 sm:p-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            inputMode="email"
            autoComplete="email"
            className={`mt-1 w-full border rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-green-400 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            inputMode="tel"
            autoComplete="tel"
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="+123 456 7890"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className={`mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Tell us about your event..."
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#d4af37] text-white py-2 rounded-md hover:bg-green-800 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
