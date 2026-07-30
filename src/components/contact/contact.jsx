import { useState } from "react";
import "./Contact.css";

function Contact() {

    const [form, setForm] = useState({

        name: "",
        email: "",
        message: ""

    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {

        setForm({

            ...form,
            [e.target.name]: e.target.value

        });

    }

    function handleSubmit(e) {

        e.preventDefault();

        setSubmitted(true);

        setTimeout(() => {

            setSubmitted(false);

        }, 3000);

    }

    return (

        <section id="contact" className="contact">

            <div className="container">

                <h2 className="section-title">

                    Let's Work Together

                </h2>

                <p className="section-subtitle">

                    Whether it's a project, internship or collaboration,
                    I'd love to hear from you.

                </p>

                <div className="contact-wrapper">

                    <div className="contact-info">

                        <div className="info-card card">

                            <h3>Email</h3>

                            <p>youremail@example.com</p>

                        </div>

                        <div className="info-card card">

                            <h3>GitHub</h3>

                            <a href="#">

                                github.com/yourusername

                            </a>

                        </div>

                        <div className="info-card card">

                            <h3>LinkedIn</h3>

                            <a href="#">

                                linkedin.com/in/yourusername

                            </a>

                        </div>

                        <div className="info-card card">

                            <h3>Location</h3>

                            <p>India</p>

                        </div>

                    </div>

                    <form

                        className="contact-form card"

                        onSubmit={handleSubmit}

                    >

                        <input

                            type="text"

                            name="name"

                            placeholder="Your Name"

                            value={form.name}

                            onChange={handleChange}

                            required

                        />

                        <input

                            type="email"

                            name="email"

                            placeholder="Email"

                            value={form.email}

                            onChange={handleChange}

                            required

                        />

                        <textarea

                            rows="6"

                            name="message"

                            placeholder="Your Message"

                            value={form.message}

                            onChange={handleChange}

                            required

                        ></textarea>

                        <button

                            className="btn btn-primary"

                            type="submit"

                        >

                            Send Message

                        </button>

                        {

                            submitted &&

                            <span className="success">

                                Message sent successfully!

                            </span>

                        }

                    </form>

                </div>

            </div>

        </section>

    );

}

export default Contact;