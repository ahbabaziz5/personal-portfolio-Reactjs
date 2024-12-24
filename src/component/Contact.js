import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { db,addDoc,collection } from '../firebase/firebase';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duration of the animation in ms
      once: true,      // Animation triggers only once
      offset: 200,     // How early the animation triggers before the element comes into the viewport
    });
    AOS.refresh();
  }, []);

  // State to capture form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // To display the submission status

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!name || !email || !message) {
      setStatus('Please fill in all fields.');
      return;
    }

    try {
      // Add data to Firestore
      await addDoc(collection(db, 'contacts'), {
        name: name,
        email: email,
        message: message,
        timestamp: new Date(),
      });

      // Clear the form fields after submission
      setName('');
      setEmail('');
      setMessage('');
      setStatus('Your message has been sent successfully!');

    } catch (error) {
      setStatus('Error sending message. Please try again.');
      console.error('Error adding document: ', error);
    }
  };

  return (
    <section className="contact-section" data-aos="fade-up">
      <h2 data-aos="fade-up" style={{fontSize:"2.5rem"}}>
        Catch &nbsp;<span className="project">Up</span>
      </h2>
      <p data-aos="fade-up">
        I'm always eager to collaborate on exciting projects. Feel free to reach out!
      </p>

      <div className="contact-section-content">
        <div className="contact-form" data-aos="fade-up">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
          {status && <p>{status}</p>} {/* Display status */}
        </div>

        <div className="contact-info extra" data-aos="fade-up">
          <h3>
            Contact <span className="project">Information</span>
          </h3>
          <ul>
            <li>Email: <a href="mailto:muhammadahbabaziz5@gmail.com">muhammadahbabaziz5@gmail.com</a></li>
            <li>Phone: +923151024878</li>
            <li>LinkedIn:  <a  href="https://www.linkedin.com/in/muhammad-ahbab-khan-669791278/" aria-label="LinkedIn">muhammad Ahbab khan</a></li>
            <li>GitHub: <a href="https://github.com/ahbabaziz5">ahbabaziz5</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
