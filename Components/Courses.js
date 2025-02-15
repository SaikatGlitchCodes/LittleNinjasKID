"use client"
import CourseTab from "./couseTab";
import { useState,useEffect} from 'react';
import { courseCategories, courseLevels } from "@/data/mockData";

export default function Courses() {
        const res = courseCategories; // Replace context with direct import
        const [level_data,setLevel_Data] = useState([]);
        const [level,setLevel]= useState(1);
        
        useEffect(() => {
          // Replace API call with mock data
          setLevel_Data(courseLevels[level]);
        },[level]) 
        console.log('HERE:',level, level_data)  
  return (
    <div className="h-auto mt-10 md:px-16">
        <h1 className="mb-10 text-4xl text-center"> Courses 🔥</h1>
        <div className="flex flex-col md:flex-row">
                <div className="flex flex-wrap items-center justify-center w-screen h-auto md:w-1/4 md:flex-nowrap md:flex-col md:mr-5 sm:mb-4 sm:mr-0">
                        {
                                res?.map((v,i)=>{
                                        return (
                                                <div key={v.title}  onClick={()=>{setLevel(v.course_id)}} className={`md:w-[95%] course_tab  sm:w-auto  md:h-14 md:border-l-8 m-2 md:mb-3 md:border-[#FF847E] overflow-hidden rounded-lg  flex items-center justify-between md:text-2xl hover:bg-[#ffeec2] hover:scale-110 cursor-pointer px-2 transition-all duration-150
                                                 ${ i+1==level && "scale-110 bg-[#ffeec2]"  }`  }> <span className="text-lg">{v.title}</span> <h1 className="hidden text-gray-600 md:block">{">"}</h1> </div>
                                        )
                                })
                                
                        }    
                </div>
                <div className="md:w-3/4 w-screen h-[600px] gap-x-0 md:space-x-5 flex items-center overflow-x-auto ">
                     {
                        level_data.map(v=>{
                                return < CourseTab key={v?.id} data={v} />
                        })
                     } 
                
                </div>
               
               
        </div>
        
    </div>
  )
}
