import { ProjectsH2 } from '../Projects/ProjectsElements'

//Setting up data as a reusable component
export const homeObjOne = {
    id: 'about', 
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions',
    description: 'This is describing the app', 
    buttonLabel: 'Get Started',
    imgStart: true, 
    img: require('../../Images/background.jpg').default ,
    alt: 'Description',
    dark: true, 
    primary: true,
    darkText: false,
}

export const homeObjTwo = {
    id: 'projects', 
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Take A Look At Some Of My Recent Projects',
    headline: 'More to Come Soon!',
    description: 'This is describing the app', 
    buttonLabel: 'Get Started',
    imgStart: true, 
    img: require('../../Images/me.jpg').default ,
    alt: 'Description',
    dark: true, 
    primary: true,
    darkText: false,
     
}

export const homeObjThree = {
    id: 'contact', 
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: '',
    headline: 'Get In Touch!',
    description: 'Email me: mjonesp@gmail.com',
    phoneNumber: 'Give me a call:  (267)-819-2612 ' ,
    buttonLabel: 'Get Started',
    imgStart: true, 
    img: require ('../../Images/contact.svg').default ,
    alt: 'Contact Information for Meredith Jones',
    dark: true, 
    primary: true,
    darkText: false,
}