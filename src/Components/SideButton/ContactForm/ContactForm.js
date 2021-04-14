import React from 'react';
import { ToastContainer, toast , Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Pages/ContactPage.css';
import { emailjs, init } from 'emailjs-com';
import { MdRotateLeft, MdRssFeed } from 'react-icons/md';
init("user_rMuPcHScdQ7joaXqMmqZr");

function ContactMe() {

    const toastifySuccess = () => {
        toast('Thanks for your email! I will get right back to you', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
      };

      const toastifyError = () => {
        toast('Oh no! Something went wrong. Please reach out directly at meredithjonesp@gmail.com', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });

        function sendEmail(e) {
            e.preventDefault();
    
        emailjs.sendForm('service_zimcbdw', 'template_e90bbd3', e.target, 'user_rMuPcHScdQ7joaXqMmqZr')
        .then((result) => {
            console.log(result.text);
            toastifySuccess();
            
              
        },  (error) => {
            console.log(error.text);
            toastifyError();
        });
        e.target.reset()
    };

      };
    }

      export default ContactMe;