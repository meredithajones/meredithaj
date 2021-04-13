import React from 'react';
import { ToastContainer, toast , Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Pages/ContactPage.css';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
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

      export default ContactMe;