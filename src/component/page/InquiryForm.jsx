import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Select from 'react-select';
import countryList from 'react-select-country-list';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    eventType: '',
    services: [],
    venue: '',
    eventDate: '',
    guestCount: '',
    vision: '',
    budget: '',
    planner: '',
    consultation: '',
    pricingGuide: false,
    referral: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // To track if form is submitting

  // Country select options (using react-select-country-list)
  const countries = countryList().getData();

  // Event types options
  const eventTypes = [
    'Wedding Reception',
    'Wedding Ceremony',
    'Corporate/Commercial',
    'Engagement/Proposal',
    'Bridal Shower',
    'Baby Shower',
    'Birthday',
    'Other'
  ];

  // Services options
  const serviceOptions = [
    'Floral Design',
    'Event Design',
    'Rentals'
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle multi-select for services
  const handleMultiSelect = (selected) => {
    setFormData({ ...formData, services: selected.map(s => s.value) });
  };

  // Handle country change
  const handleCountryChange = (selected) => {
    setFormData({ ...formData, country: selected ? selected.label : '' });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data via EmailJS
      await emailjs.send('your_service_id', 'your_template_id', formData, 'your_user_id');
      setShowSuccess(true);
      // Clear form data
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        eventType: '',
        services: [],
        venue: '',
        eventDate: '',
        guestCount: '',
        vision: '',
        budget: '',
        planner: '',
        consultation: '',
        pricingGuide: false,
        referral: '',
      });
    } catch (error) {
      alert('There was an issue sending your inquiry. Please try again.');
      console.error(error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-pink-50 shadow-lg rounded-lg mt-14">
      <h2 className="text-3xl font-semibold text-center text-pink-600 mb-8">Event Inquiry Form</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="col-span-1">
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="col-span-1">
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        </div>

        {/* Country Select */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <Select options={countries} onChange={handleCountryChange} value={countries.find(c => c.label === formData.country)} />
        </div>

        {/* Event Type Select */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Event Type</label>
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Select Event Type</option>
            {eventTypes.map((type, idx) => (
              <option key={idx} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Services Multi-Select */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Services Interested In</label>
          <Select
            isMulti
            options={serviceOptions.map(option => ({ value: option, label: option }))}
            onChange={handleMultiSelect}
            value={formData.services.map(service => ({ value: service, label: service }))}
          />
        </div>

        {/* Venue & Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <input
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              placeholder="Venue Name"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="col-span-1">
            <input
              name="eventDate"
              type="date"
              value={formData.eventDate}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        </div>

        {/* Guest Count & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <input
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              placeholder="Guest Count"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="col-span-1">
            <textarea
              name="vision"
              value={formData.vision}
              onChange={handleChange}
              placeholder="Event Vision (Optional)"
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        </div>

        {/* Budget, Planner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <input
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Decor Budget"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="col-span-1">
            <input
              name="planner"
              value={formData.planner}
              onChange={handleChange}
              placeholder="Planner Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        </div>

        {/* Consultation & Pricing Guide */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Interested in a Consultation?</label>
          <select
            name="consultation"
            value={formData.consultation}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">I would like to receive the Pricing Guide</label>
          <input
            name="pricingGuide"
            type="checkbox"
            checked={formData.pricingGuide}
            onChange={handleChange}
            className="w-4 h-4 text-pink-600"
          />
        </div>

        {/* Referral */}
        <div>
          <label className="block text-sm font-medium text-gray-700">How did you hear about us?</label>
          <input
            name="referral"
            value={formData.referral}
            onChange={handleChange}
            placeholder="Referral Source"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 mt-6 rounded-full text-white bg-pink-600 hover:bg-pink-700 transition disabled:opacity-50`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>

      {showSuccess && (
        <div className="mt-8 text-center text-green-600 font-semibold">
          Your inquiry has been sent successfully! We will get back to you shortly.
        </div>
      )}
    </div>
  );
};

export default InquiryForm;
