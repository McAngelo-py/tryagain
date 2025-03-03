import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Import icons
import "./Contacts.css";

const Contacts = () => {
  return (
    <section id="contacts" className="contacts-section">
      <div className="contact-info">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <div>
            <h3>Email</h3>
            <p>support@soloparentwelfare.com</p>
          </div>
        </div>

        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <div>
            <h3>Phone</h3>
            <p>+63 912 345 6789</p>
          </div>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <div>
            <h3>Address</h3>
            <p>Santa Maria, Laguna</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
