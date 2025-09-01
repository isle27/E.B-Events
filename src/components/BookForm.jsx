import React, { useState } from "react";
import styles from "./BookForm.module.css"; 

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guests: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Book Your Event</h2>

      {submitted ? (
        <p className={styles.success}>
          Thank you! We’ll contact you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Name */}
          <div className={styles.group}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className={styles.group}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
            />
          </div>

          {/* Phone */}
          <div className={styles.group}>
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+123 456 789"
            />
          </div>

          {/* Event Type */}
          <div className={styles.group}>
            <label>Event Type</label>
            <select
              name="eventType"
              required
              value={formData.eventType}
              onChange={handleChange}
            >
              <option value="">Select an event</option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Corporate">Corporate</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Date */}
          <div className={styles.group}>
            <label>Event Date</label>
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          {/* Guests */}
          <div className={styles.group}>
            <label>Number of Guests</label>
            <input
              type="number"
              name="guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              placeholder="e.g. 100"
            />
          </div>

          {/* Message */}
          <div className={styles.group}>
            <label>Additional Details</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              placeholder="Tell us more about your event..."
            />
          </div>

          {/* Submit */}
          <button type="submit" className={styles.submitBtn}>
            Submit Booking
          </button>
        </form>
      )}
    </div>
  );
}
