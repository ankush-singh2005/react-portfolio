import "./contact.scss"
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
const variants={
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,

        },
    },
};

const Contact = () => {

    const formRef = useRef();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_qinq06t', 'template_1x3ltqj', formRef.current, {
            publicKey: 'QPOaBSVZ_h0Ahqiiv',
          })
          .then(
            (result) => {
              setSuccess(true);
            },
            (error) => {
              setError(true)
            },
          );
      };

  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Let's work together</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>marcinwaldheim@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                <span>Chiniya Road, Garhwa</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>+91 7282840789</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <motion.div className="phoneSvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay: 3,duration:1}}>

                
                <svg xmlns="http://www.w3.org/2000/svg" width="450px" height="450px" viewBox="0 0 32 32" id="phone">
                    <motion.path strokeWidth={0.2} fill="none" initial={{pathLength: 0}} whileInView={{pathLength: 1}} transition={{duration:5}} d="M23.45 20.93a3 3 0 0 0-4.25 0l-1.45 1.45a26.14 26.14 0 0 1-4.51-3.62 26.62 26.62 0 0 1-3.62-4.51l1.45-1.45a3 3 0 0 0 0-4.25L8.24 5.73a2.93 2.93 0 0 0-2.11-.88h0A3 3 0 0 0 4 5.73L2.64 7.08A6.37 6.37 0 0 0 1 12.33c.32 3.75 2.78 8.26 6.57 12.06S15.92 30.64 19.67 31a7.87 7.87 0 0 0 .84 0 6.07 6.07 0 0 0 4.41-1.64L26.27 28a3 3 0 0 0 .88-2.13 2.93 2.93 0 0 0-.88-2.11zm1.41 5.66L23.5 27.94a4.57 4.57 0 0 1-3.66 1c-3.25-.28-7.39-2.58-10.81-6S3.31 15.41 3 12.16a4.53 4.53 0 0 1 1-3.66L5.41 7.14a1 1 0 0 1 .71-.29h0a1 1 0 0 1 .71.29L9.66 10a1 1 0 0 1 0 1.41l-2 2a1 1 0 0 0-.16 1.21 27.49 27.49 0 0 0 4.33 5.58 27.49 27.49 0 0 0 5.58 4.33 1 1 0 0 0 1.21-.16l2-2a1 1 0 0 1 1.41 0l2.83 2.83h0a1 1 0 0 1 .29.71A1 1 0 0 1 24.86 26.59zM26.6 5.39A14.92 14.92 0 0 0 16 1a1 1 0 1 0 0 2A13 13 0 0 1 29 16.11a1 1 0 0 0 1 1h0a1 1 0 0 0 1-1A14.91 14.91 0 0 0 26.6 5.39z"></motion.path>
                    <motion.path strokeWidth={0.2} fill="none" d="M20.91,11.11a6,6,0,0,1,1.77,4.31,1,1,0,0,0,1,1h0a1,1,0,0,0,1-1,8,8,0,0,0-8-8.1,1,1,0,1,0,0,2A6,6,0,0,1,20.91,11.11Z"></motion.path>
                </svg>
            </motion.div>
            <motion.form ref={formRef} onSubmit={sendEmail} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4,duration:1}} >
                <input type="text" required placeholder="Name" name="name"/>
                <input type="email" required placeholder="Email" name="email"/>
                <textarea rows={8} placeholder="Message" name="message"></textarea>
                <button>Submit</button>
                {error && "Error"}
                {success && "Success"}
            </motion.form>
        </div>
    </motion.div>
  )
}

export default Contact