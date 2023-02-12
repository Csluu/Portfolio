import React from "react";

function About() {
  return (
    <main className="flex items-center z-40 p-12 max-w-[75%] min-h-[66%] m-auto drop-shadow-xl rounded-xl bg-side-bar-bg rounded-container">
      <div className="m-auto max-w-[50%] max-h-[50%]">
        <section className="h-56 text-2xl">
          <h4>Studybud</h4>
          <br />
          <p>
            I am a motivated and skilled Full Stack Developer with a passion for
            developing intuitive and innovative solutions.
          </p>
        </section>
        <section className="h-56 text-2xl">
          <h4>Skills</h4>
          <br />
          <ul className="flex items-center gap-4">
            <li>Django</li>
            <li>Python</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>TailWind</li>
          </ul>
        </section>
      </div>
      <div className="max-w-[50%] m-auto">
        <img src="../assets/contact-image.jpeg" alt="text" />
      </div>
    </main>
  );
}

export default About;
