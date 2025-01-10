import React from 'react'
import "./Contact.css"
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const Contact = () => {
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "d8f27970-8640-45f8-a4c6-149e8427212f");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success",
                text: "Your Message Sent Successfully!",
                icon: "success"
            }).then(() => {
                navigate('/');
            });
        } else {
            Swal.fire({
                title: "Error",
                text: "There was an error sending your message.",
                icon: "error"
            });
        }
    };

    return (
        <div>
            <NavBar />
            <section className='contact'>
                <form onSubmit={onSubmit}>
                    <h2>Contact Form</h2>
                    <div className='input-box'>
                        <label>Your Name</label>
                        <input type='text' name='Name' className='field' placeholder='Enter Your Name' required />
                    </div>
                    <div className='input-box'>
                        <label>Mobile Number</label>
                        <input type='number' name='Mobile-Number' className='field' placeholder='Enter Your MobileNumber' required />
                    </div>
                    <div className='input-box'>
                        <label>Email Address</label>
                        <input type='email' name='E-Mail' className='field' placeholder='Enter Your E-mail' required />
                    </div>
                    <div className='input-box'>
                        <label>Your Message</label>
                        <textarea name='Message' className='field mess' placeholder='Enter Your Message' required></textarea>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </section>
            <Footer />
        </div>
    )
}

export default Contact