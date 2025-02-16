"use client"
import { useState } from "react"
import Image from 'next/image'
import { Button } from "./ui/button"
import OffcanvasDrawer from "./OffcanvasDrawer"
import level1 from '@/public/courseimage/level1.png'
import level2 from '@/public/courseimage/level2.png'
import level3 from '@/public/courseimage/level3.png'
import level4 from '@/public/courseimage/level4.webp';
import level1weapon from '@/public/courseimage/level1weapon.png';
import level2weapon from '@/public/courseimage/level2weapon.png';
import level3weapon from '@/public/courseimage/level3weapon.webp';
import level4weapon from '@/public/courseimage/level4weapon.png';

const levelImages = {
    1: level1,
    2: level2,
    3: level3,
    4: level4,
};

const weaponImages = {
        1: level1weapon,
        2: level2weapon,
        3: level3weapon,
        4: level4weapon,
};

export default function CourseTab({ data = {} }) {
        console.log('Course', data);
        const color = data.color.toString();
        const [show, setShow] = useState(false);
        const characterImage = levelImages[data.level_id] || level1;
        const weaponImage = weaponImages[data.level_id] || level1weapon;
        const colorText = data.level_id > 2 ? 'black': 'white';
        
        return (

                <div className="h-[450px] w-80 hover:scale-105 transition-all duration-200  p-2 bg-[#FFF6DE] rounded-lg relative md:scale-95 scale-90 flex-shrink-0 flex flex-col justify-between ">
                        <div className="w-32 h-9 center_absolute md:flex hidden bg-[#FF847E] rounded-xl absolute -top-6 center_all text-white font-bold text-xl"> Level {data.steps} </div>

                        <div style={{
                                backgroundColor: color,
                        }} className={`flex justify-evenly items-center w-full h-28 md:mt-4 mt-2 rounded-lg `}>
                                <Image src={characterImage} alt="" width={100} height={100} className="w-[30%] scale-[1.6]" />

                                <div className="flex flex-col justify-center w-auto h-full text-center ">
                                        <h1 className={`text-base text-black/75 text-[${colorText}]`}>Become <br /> {data.title} </h1>
                                        <p>{data.ages}</p>
                                </div>
                        </div>
                        
                        <div className="p-1 rounded-lg bg-[#FFE7A9] flex justify-evenly items-center text-xl mx-2">
                        <h1 className="text-xl font-normal text-center">{data.subtitle}</h1>   
                        </div>
                       
                        <h3 className="text-lg text-center text-gray-600">Course overview | <span className="text-center">{data.sessions_end - data.sessions_start} classes</span></h3>
                        <ul className="py-2 overflow-y-scroll list-disc bg-white rounded-md h-28">
                               {
                                data.sessionData?.map(v=>{
                                        return <li key={v.title}>{v.title}</li>
                                })
                               }
                        </ul>
                        <div className="flex justify-evenly">

                                <a target="_blank" href={data.pdf_link}> <Button size="sm" variant="outline" className='text-sm font-normal hover:bg-[#FFDF8C] '  >  View curriculum</Button></a>

                                <Button size="sm" onClick={() => setShow(!show)} className='bg-[#FFDF8C] text-sm font-normal border-2  text-[#545454] hover:text-white hover:bg-[#FF847E]'>  Get Demo!</Button>

                        </div>
                        <img src={weaponImage.src} alt="" className="absolute right-0 h-20 -top-6" />
                        <OffcanvasDrawer show={show} setShow={setShow} />
                </div>
        )
}
