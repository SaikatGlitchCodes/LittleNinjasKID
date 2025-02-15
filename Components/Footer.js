'use client';

import React from 'react'
import { Button } from './ui/button';
import { courseCategories } from '@/data/mockData';

const Footer = () => {

    const FooterArr = [

        {
            title: "Our Courses For Kids",
            content: courseCategories.map((course) => course.title)
        },

        {
            title: "Quick Links",
            content: ["About Us", "Trainers", "View Courses", "Student Projects"],
        }, {
            title: "Get In Touch",
            content: [{
                id: 1,
                support: "support@littleninjas.com",
                icon: '/emailicon.svg'
            }],
        }, {
            title: "Registered Office Address",
            content: ["India", "The Pearl, 1537, 5th Main Rd, Rajiv Gandhi Nagar, Sector 7, HSR Layout, Bengaluru, Karnataka 560102"]
        }

    ]

    return (

        <footer className="text-center bg-white dark:bg-gray-900">
            <h3>LittleNinjas</h3>
            <div className="w-full max-w-screen-xl pb-10 mx-auto">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">

                    {
                        FooterArr.map((obj) => {

                            return (
                                <div className='text-center ' key={obj.title}>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{obj.title}</h2>
                                    <ul className="w-full px-0 font-medium text-gray-500 dark:text-gray-400">
                                        {obj.title != "Get In Touch" ?

                                            obj.content.map((val) => (


                                                <li className="mb-4" key={val}>
                                                    <a href="#" className="no-underline text-[rgb(85,85,85)]">{val}</a>
                                                </li>


                                            ))




                                            : obj.content.map((val) => (


                                                <li className="flex mb-4 space-x-1 md:gap-3" key={val.id}>

                                                    <img src={val.icon} />

                                                    <a href="#" className="no-underline text-[rgb(85,85,85)]">{val.support}</a>
                                                </li>


                                            ))
                                        }

                                    </ul>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="px-4 py-6 dark:bg-gray-700 md:flex md:items-center md:justify-between">
                    <div className='flex flex-col items-center justify-center'>
                        <h4 className="text-[1rem] font-medium sm:text-center"> Interested in coding?</h4>
                        <Button size='lg' className='bg-[#ff712d] px-[10px] py-[14px] md:text-[1.125rem] rounded-lg'>Book a Free Trial Class</Button>


                    </div>
                    <div className='flex flex-col items-center justify-center mt-4 md:mt-0 md:gap-y-5'>
                        <h4 className="text-[1rem] font-medium sm:text-center"> Follow us for more!</h4>
                        <div className="flex justify-center space-x-5 sm:justify-center">
                            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                <img src='/fb-icon.svg' className='w-8 h-8' />

                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                <img src='/insta-icon.svg' className='w-8 h-8' />

                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                <img src='/linked-icon.svg' className='w-8 h-8' />

                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                <img src='/youtube-icon.svg' className='w-8 h-8' />

                            </a>

                        </div>

                    </div>

                </div>
            </div>
        </footer>

    )
}

export default Footer
