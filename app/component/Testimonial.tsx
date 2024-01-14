import React from "react";

function Testimonial() {
  return (
    <div className="content-grid testimonial-content-grid">
      <h3>Testimonial</h3>
      <div className="testimonial">
        <div className="testimonial-card">
          <h3>Exceptional Service and Results</h3>
          <p>
            Smail consistently delivers results on time, while maintaining the
            highest standards of quality. He is a highly motivated team player,
            always willing to go above and beyond to ensure the success of our
            projects. He has an excellent ability to communicate with
            stakeholders, both technical and non-technical, and can explain
            complex concepts in a clear and concise manner.
          </p>
          <span>Reza Assadi / Director of Software Development</span>
          <span>
            <a
              href="https://drive.google.com/file/d/1anfbc5fuSeMJEYW_0d6oulO3gLeM4QXM/view?usp=sharing"
              target="_blank"
            >
              Read the full recommendation letter
            </a>
          </span>
        </div>
        <div className="testimonial-card">
          <h3>Calm and Disciplined</h3>
          <p>
            Abd El Madjid Smail radiates the room with his calm and discipline.
            At CAMIO, he looks after building and maintaining a best in class
            dashboard to run the business. [...]
          </p>

          <span>CAMIO</span>
          <span>
            <a
              href="https://www.linkedin.com/posts/camio_teamcamio-logistics-transport-activity-7085324893273116672-eKtZ?utm_source=share&utm_medium=member_desktop"
              target="_blank"
            >
              Check the post
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
