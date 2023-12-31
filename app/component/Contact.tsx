import React from 'react'

function Contact() {
  return (
    <section className="content-grid contact-content-grid">
      <div className="contact">
        <h1 className="contact__title">Contact</h1>
        <p className="contact__description">
          Feel free to drop me an email if you'd like to get in touch!
          Alternatively, you can connect with me on
          <a className='underline' href="https://www.linkedin.com/in/smailabdelmadjid/"> LinkedIn </a>
          or
          <a className='underline' href="https://twitter.com/MadjSmail"> Twitter </a>
          if that's more convenient for you.
        </p>
        <div className="contact__footer">
            <a href="mailto:madjidsmail1998@gmail.com" className="underline">
          madjidsmail1998@gmail.com
        </a>
            </div>
      </div>

    </section>
  );
}

export default Contact; 