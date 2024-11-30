import React from 'react';

function Contact() {
  return (
    <section className="contact-section">
    <h2>Contact &nbsp;<span class="project">Us</span></h2>
    <p>I'm always eager to collaborate on exciting projects. Feel free to reach out!</p>

    <div className="contact-section-content">
    <div className="contact-form">
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea> 

        <button type="submit">Send Message</button>
      </form>
    </div> 


    <div className="contact-info">
      <h3>Contact <span class="project">Information</span></h3>
      <ul>
        <li>Email: <a href="mailto:muhammadahbabaziz5@gmail.com">muhammadahbabaziz5@gmail.com</a></li>
        <li>Phone: +923151024878</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/muhammad-ahbab-khan">muhammad ahbab khan</a></li>
        <li>GitHub: <a href="https://github.com/ahbabaziz5">ahbabaziz5</a></li>
      </ul>
    </div>
    </div>
  </section>
);
}

export default Contact;