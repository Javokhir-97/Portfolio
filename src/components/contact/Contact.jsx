import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_e8agase', 'template_ewsyadf', form.current, {
          publicKey: 'qGG6HY9ivLUyp-HYV',
        })
        e.target.reset()
    };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                javokhir.yusufjonov.97@gmail.com
              </span>

              <a href="" className="contact__button">
                Write me{""}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="uil uil-telegram-alt contact__card-icon"></i>

              <h3 className="contact__card-title">Telegram</h3>
              <span className="contact__card-data">01058658088</span>

              <a href="" className="contact__button">
                Write me{""}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="uil uil-linkedin-alt contact__card-icon"></i>

              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">Javokhir Yusufjonov</span>

              <a href="" className="contact__button">
                Write me{""}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail}>
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your project"
              ></textarea>
            </div>

            <button href="#contact" className="button button--flex">
              Send Message
              <i className="bx bxs-send button__icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
