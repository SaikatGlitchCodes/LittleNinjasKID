"use client"


import { useState } from 'react';
import { Button } from './ui/button';

import OffcanvasDrawer from './OffcanvasDrawer';
interface btninterface {
        title?: string;
        variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
        size?: "lg" | "default" | "sm" | "icon" | null | undefined;
        className?: any | "";
}
const FreeDemoBtn = (props: btninterface) => {
        const [show, setShow] = useState(false);
       
        return (
                <>
                        <Button
                                onClick={() => { setShow(true) }}

                                variant={props.variant}
                                className={`${!props.className.includes("relative", "absolute", "sticky", "fixed", "static") ? "relative" : ""}   ${props.className}  bg-[rgb(255,132,126)] rounded-md py-4  z-10  hover:bg-[rgb(255,132,126)] motion-safe:animate-[bounce_1s_infinite]`}
                                size={props.size}

                        >
                                <span className='text-2xl font-bold text-white '>
                                        {props.title}
                                </span>
                                <img src='/btndesign.png' className='w-[68px] h-[58px] absolute top-[-40px] right-[-35px]' />

                        </Button>
                        <OffcanvasDrawer show={show} setShow={setShow} /> 
                </>
        )
}

export default FreeDemoBtn