'use client';
import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PhoneInput from 'react-phone-input-2'
import {courseCategories} from '@/data/mockData'
import OtpInput from 'react-otp-input';
import auth from "../firebaseconfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const FormData = () => {
        
        let recaptchaVerifier = null
        const handleClose = () => {
                setShowChecker(true)
                setOtp('')
                setphone('')
                setShow(false)
                setregdata({
                        email: '',
                        name: '',
                        course: '',
                        grade: ''
                })
        }
        const [phone, setphone] = useState('')
        const [otp, setOtp] = useState('');
        const [showchecker, setShowChecker] = useState(true);
        const [disable, setDisable] = useState(true);
        const [confirmResult, setconfirm] = useState()
        const [regdata, setregdata] = useState({
                email: '',
                name: '',
                course: '',
                grade: ''

        })

        const { email, name, course, grade } = regdata
        console.log(course)
        const checkBtn = (e) => {
                e.preventDefault();
                console.log(phone);

                recaptchaVerifier = new RecaptchaVerifier(
                        auth,
                        "recaptcha",
                        {
                                size: "normal",
                                callback: (response) => {
                                        console.log(response);
                                        getOtp()
                                        setTimeout(() => {
                                                setShowChecker(false)
                                        }, 500);

                                        // reCAPTCHA solved, allow signInWithPhoneNumber.
                                },
                        },


                );

                recaptchaVerifier.render()

        };
        const getOtp = () => {
                signInWithPhoneNumber(auth, "+" + phone, recaptchaVerifier)
                        .then((confirmationResult) => {
                                console.log(confirmationResult, 'confirm')
                                toast.success('otp sent successfully')
                                setconfirm(confirmationResult)

                        })
                        .catch((err) => {
                                toast.error(err.message)
                        })
        }
        const confirmOtp = (e) => {
                e.preventDefault()
                confirmResult?.confirm(otp).then((result) => {
                        // User signed in successfully.
                        console.log(result)
                        setDisable(false);
                        setShowChecker(true)
                        toast.success('otp verified successfully')
                        // ...
                }).catch((error) => {
                        // User couldn't sign in (bad verification code?)
                        // ...
                        toast.error('oops! Something went wrong')
                });
        }


        async function sendEmail(emailobj) {
                try {
                        const { to_email, message, from_name, user_email } = emailobj
                        for (let i = 0; i < to_email.length; i++) {
                                const templateParams = {
                                        to_email: to_email[i], // Replace with the recipient's email address
                                        message: message[i],
                                        from_name,
                                        user_email
                                };

                                await emailjs.send(
                                        'service_s4m43sa', // Replace with your EmailJS service ID
                                        'template_3mkrz2x', // Replace with your EmailJS template ID
                                        templateParams,
                                        'iKVmSfUHvR95gAowy' // Replace with your EmailJS user ID
                                );
                        }


                        console.log('Email sent successfully');
                } catch (error) {
                        console.error('Error sending email:', error);
                }
        }

        const submitRegistration = async (e) => {
                e.preventDefault();
                if (!course || !grade || !phone) {
                        toast.error('pls fill up all the fields')
                        return
                }
                toast.success(' successfully registered')

                const sendEmailDetails = {
                        to_email: [email, 'littleninjas.contact@gmail.com'],
                        message: ['registration successfull', `user details are
                  name:${name},
                  email:${email},
                  course:${course},
                  grade:${grade},
                  phone:${phone}
                
                `],
                        from_name: 'LittleNinjas',
                        user_email: 'littleninjas.contact@gmail.com',

                }
                await sendEmail(sendEmailDetails)
        }
        const changeRegValue = (e) => {
                setregdata({
                        ...regdata,
                        [e.target.name]: e.target.value
                })
        }

        return (
                <>
                <p>Please Fill all the entries</p>
                <Form onSubmit={submitRegistration}>
                        <div className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required value={email} name='email' 
                                 onChange={(e)=>{
                                    changeRegValue(e)
                                 }}
                                />
                                <Form.Text className="text-muted">
                                        {"We'll never share your email with anyone else."}
                                </Form.Text>
                        </div>

                        <div className="mb-3" >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" required value={name} name='name'
                                onChange={(e)=>{
                                        changeRegValue(e)
                                     }}
                                />
                        </div>
                        <div className="mb-3">
                                <Form.Select aria-label="Default select example" required 
                                value={course}
                                name='course'
                                onChange={(e)=>{
                                        console.log(e)
                                        changeRegValue(e)
                                     }}
                                >
                                        <option
                                         
                                        >Select Course</option>
                                        {
                                                courseCategories.map((obj, i) => {
                                                        return (
                                                                <option key={obj.title} value={obj.title}>{obj.title}</option>
                                                        )
                                                })
                                        }

                                </Form.Select>


                        </div>
                        <div className="flex mb-3">
                                <PhoneInput
                                        country={'us'}
                                        value={phone}
                                        inputStyle={{ height: '100%', width: '100%' }}
                                        containerStyle={{ width: '60%' }}
                                        onChange={phone => setphone(phone)}
                                />
                                <button onClick={checkBtn} id="button-addon2" className='w-20 p-2 ml-4 text-white bg-orange-500 border-none '>
                                        Check
                                </button>

                        </div>
                        {
                         showchecker &&   <div  id="recaptcha"></div>
                        }
                      
                        {
                   !showchecker &&         <div className='flex flex-col w-full mb-3 md:flex-row'> <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderSeparator={<pre>  </pre>}
                                renderInput={(props) => <input {...props} /> }

                                inputStyle={{border:'1px solid rgb(228,228,231)',width:'30px',outline:'none',opacity:1}}
                        />
                                <button onClick={confirmOtp} className=' bg-orange-500 border-none w-[100px] p-1 ml-4 text-white'>verify otp </button> 
                         </div>}
                        <div className="mb-3">
                                <Form.Select aria-label="Default select example" required
                                 value={grade}
                                 name='grade'
                                 onChange={(e)=>{
                                        changeRegValue(e)
                                     }}
                                >
                                        <option>Select Grade</option>
                                        <option>Grade 1-5</option>
                                        <option >Grade 6-10</option>
                                        <option>Grade 10+</option>
                                </Form.Select>

                        </div>


                        <Button disabled={disable} type='submit' variant="primary" style={{ backgroundColor: 'orange', border: 'none' }}>
                                Submit
                        </Button>
                </Form>
                </>
        )
}

const OffcanvasDrawer = ({ show, setShow }) => {
        useEffect(() => {
                // Add the Calendly script tag to the DOM
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://assets.calendly.com/assets/external/widget.js';
                script.async = true;
                document.body.appendChild(script);
            
                return () => {
                  // Clean up the script tag when the component is unmounted
                  document.body.removeChild(script);
                };
              });
        const handleClose =()=>{
                setShow(!show)
        }
        return (
                <Offcanvas show={show} onHide={handleClose} placement='end' style={{ width: '500px' }}>
                        <Offcanvas.Header className="flex justify-between">
                                <Offcanvas.Title>
                                        <img src="/brand.png" alt="" className='h-[60px]' />
                                        Enroll Now🙌
                                </Offcanvas.Title>
                                <button className="btn btn-light" onClick={handleClose}> {"👈 Back"}</button>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        <div className="calendly-inline-widget" data-url="https://calendly.com/littleninjas-contact/demo_session" style={{minWidth:'100%',height:'100%'}}></div>
                        </Offcanvas.Body>
                </Offcanvas>
        )
}

export default OffcanvasDrawer
