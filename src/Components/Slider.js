import React, { useState } from "react";
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa6'
export default function Slider(){

    const cards=[
        {id:1, text:"one day..", },
        {id:2, text:"when i got my first phone...", },
        {id:3, text:"i have a friend..", },
    ];
    const [curr, setCurr] = useState(0);

    const prev =()=>
        setCurr((curr) =>(curr === 0? cards.length -1 : curr -1))
    const next =()=>
        setCurr((curr) =>(curr === cards.length -1? 0 : curr + 1))


    return(
        <div className=" overflow-hidden bg-transparent relative flex    justify-center items-center m-auto  w-[380px] h-[450px]  ">
            {cards.map((cards, i)=>(

            <div key={cards.id} className={`absolute inset-0 bg-white m-auto p-2 top-10 h-[350px] w-[300px] text-center justify-center items-center  flex-wrap  rounded-xl shadow-xl shadow-black/50 transition-all  ring-[2px] ring-green-600/50 ring-offset-3 transition-transform ease-out duration-500  ${i===curr? "opacity-100 scale-100 z-20 ": "opacity-0 scale-95 z-0"} `} >

                <h2 className="flex justify-center items-center m-auto w-full my-20 text-[30px] md:text-[35px] p-3 text-center ">{cards.text}</h2>
                

                
             <div className="absolute inset-0 flex items-center justify-between p-6 -bottom-[200px] left-0 right-0">
                <button onClick={prev} className="rounded-full bg-gray-100  p-1 -ml-3 "><FaArrowLeft size={30}/></button>
                <button onClick={next} className="rounded-full bg-gray-100 p-1 -mr-3"><FaArrowRight size={30}/></button>
            </div>

               
            </div>
            ))}


            
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-1">
                    {cards.map((_, i) =>(
                        <div className={`transition-all m-1 w-2 h-2 bg-black rounded-full
                         ${curr === i ? "p-1" : "bg-opacity-50"}
                        `}/> 
                    ))}
               
            </div>

        </div>
        </div>
    )
}