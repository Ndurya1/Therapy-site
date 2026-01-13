import React from "react";
import therapistImage from '../Assets/therapist.png';
import hero from '../Assets/hero-background.jpg'
import About from '../Assets/therapy-session.jpg'
import individual from '../Assets/individual-session.jpg'
import group from '../Assets/group-session.jpg'
import proffessional from '../Assets/Professional-session.jpg'
import CTA from '../Assets/CTA.jpg'

export default function HomePage() {

    return(
        <>
        <section style={{backgroundImage:` url(${hero})`}} className="  flex flex-col p-2  h-screen gap-3 items-center justify-center bg-no-repeat bg-cover bg-center m-1 rounded-lg bg-gray-900/50  ">

          
                <h1 className="text-2xl font-bold md:text-[35px] leading-[27px] md:leading-[45px] text-">HI, i'm Marta Iglesias <br/>
            An <span className="text-blue-700">MI Counselling and Personal Development Coach </span></h1>

            <p className="font-bold md:text-[20px] text-xl "> Helping You Understand, Manage, and Transform Your Emotions <br/>
              I guide you to connect with your feelings, build self-confidence,<br/>heal past experiences, and step into a stronger,<br/> more empowered version of yourself</p> <br/>

              <button className="bg-blue-700 text-white p-2 rounded-lg px-7 font-bold shadow-lg hover:shadow-pink-700/50 ring hover:scale-105 hover:duration-1000 hover:bg-blue-900">Book a Session</button>
           
        </section>

        <section className="flex flex-col bg-gray-200 justify-center items-center rounded-lg md:flex md:flex-row gap-3 md:justify-around pb-3">

            <div className="flex flex-col bg-gray-200 justify-center items-center rounded-lg md:flex md:flex-row gap-3 md:justify-around flex-col-reverse m-1 p-2">

            <div className="w-[400px] md:w-[700px] flex flex-col justify-center items-center m-1 text-justify flex-col-reverse ">
             <div className="md:w-[650px]">  
            <p>Are you tired of avoiding thoughts and past experiences because they always come back?
            I will help you not to be scared of you, of your emotions, to understand them and to manage them.</p> <br/>
           <p>  You will learn how to make decisions, to stop blaming you or others of situations, you will value yourself. You will prioritize yourself.
            You will admire yourself, you will see the hero that you have inside</p> <br/>

          <p>  “I will help you through a wellness model to connect and understand your emotions,
            by looking into your achievements and strengths that will build your self-confidence, in order to be ready to accept your past experiences, enjoy the present and be ready to focus on your goals to face the future”.</p> <br/>

            <p>First yourself and then yourself, don’t forget about you, don’t allow others decide and control your life. Break those barriers that are not allowing you to be yourself.</p><br/>

               
              <button className="bg-blue-700 text-white p-2 rounded-lg px-7 font-bold shadow-lg hover:shadow-pink-700/50 ring hover:scale-105 hover:duration-1000 hover:bg-blue-900">Learn More</button> </div>
            </div>
            <img src={About} alt="a therapist in session" className="w-[400px] h-[300px] rounded-xl items-center justify-center m-2 w-full flex"/>

            </div>  
        </section>

         <h2 className="flex rounded-r-xl w-fit bg-blue-950 py-2 px-7 text-white">Services</h2>

        <section className="flex flex-col bg-gray-200 justify-center items-center rounded-lg  gap-3 md:justify-around m-1 p-2">

           
          <div className="flex flex-col justify-center items-center gap-5 md:grid md:grid-cols-3 md:justify-between">

            <div className="bg-white w-[410px] p-2 m-1 rounded-lg shadow-lg hover:shadow-gray-600/50 hover:scale-95 hover:duration-1000 flex flex-col justify-center items-center ">

                  <img src={individual} alt="a therapist in session" className="w-[350px] h-[250px] rounded-xl items-center justify-center m-2 w-full flex"/>

                <h2 className="font-bold text-[23px]">Individual</h2>
                <p className="leading-[23px] text-justify"> one-to-one service online or in person. Through a wellness model, creative and personal development tools will be used to develop additional resources to  face challenges, break barriers and connect with yourself.</p> <br/>
                
                <button className="bg-blue-700 text-white p-2 rounded-lg px-7 font-bold shadow-lg hover:shadow-pink-700/50 ring hover:scale-105 hover:duration-1000 hover:bg-blue-900">Schedule</button>

            </div>

            
                 <div className="bg-white w-[410px] p-2 m-1 rounded-lg shadow-lg hover:shadow-gray-600/50 hover:scale-105 hover:duration-1000 flex flex-col justify-center items-center ">

                  <img src={group} alt="a therapist in session" className="w-[350px] h-[250px] rounded-xl items-center justify-center m-2 w-full flex"/>

                <h2 className="font-bold text-[23px]">GROUP WORKSHOPS</h2>
                <p className="leading-[23px] text-justify"> Close groups are designed for 6-8 weeks,  with a specific topic.<br/> The purpose is to grow together in a dynamic and creative space. <br/>
                I offer online tools and workshops as well.</p> <br/>
                
                <button className="bg-blue-700 text-white p-2 rounded-lg px-7 font-bold shadow-lg hover:shadow-pink-700/50 ring hover:scale-105 hover:duration-1000 hover:bg-blue-900">Schedule</button>

            </div>

                <div className="bg-white w-[410px] p-2 m-1 rounded-lg shadow-lg hover:shadow-gray-600/50 hover:scale-95 hover:duration-1000 flex flex-col justify-center items-center ">

                  <img src={proffessional} alt="a therapist in session" className="w-[350px] h-[250px] rounded-xl items-center justify-center m-2 w-full flex"/>

                <h2 className="font-bold text-[23px]">PROFESSIONAL</h2>
                <p className="leading-[23px] text-justify"> Professional in-situ workshops to improve performance, in challenging workplace situations such as burnout, learned helplessness, team building and leadership development. <br/> An assessment will be conducted first, in order to address specific needs</p> <br/>
                
                <button className="bg-blue-700 text-white p-2 rounded-lg px-7 font-bold shadow-lg hover:shadow-pink-700/50 ring hover:scale-105 hover:duration-1000 hover:bg-blue-900">Schedule</button>

            </div>
            


          </div>


        </section >

          <h2 className="flex rounded-r-xl w-fit bg-blue-950 py-2 px-7 text-white shadow-md shadow-pink-500/40">Success stories</h2>

        <section className="flex flex-col bg-gray-200 justify-center items-center rounded-lg  gap-3 md:justify-around m-1 p-2">
            <div className="flex flex-col justify-center items-center gap-3 m-1 bg-white rounded-lg w-[450px] md:w-[800px] shadow-lg ">
                <p className="flex flex-col text-justify p-2  ">1:1 service online or in person. Through a wellness model, creative and personal development tools will be used to develop additional resources to  face challenges, break barriers and connect with yourself.</p>
                <div className="flex flex-row gap-5 justify-around items-center font-bold ">
                    <h3>Karina</h3>
                    <h3>Peru</h3>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 m-1 bg-white rounded-lg w-[450px] md:w-[800px] shadow-lg ">
                <p className="flex flex-col text-justify p-2  ">1:1 service online or in person. Through a wellness model, creative and personal development tools will be used to develop additional resources to  face challenges, break barriers and connect with yourself.</p>
                <div className="flex flex-row gap-5 justify-around items-center font-bold ">
                    <h3>T.Davis</h3>
                    <h3>Miami</h3>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 m-1 bg-white rounded-lg w-[450px] md:w-[800px] shadow-lg ">
                <p className="flex flex-col text-justify p-2  ">1:1 service online or in person. Through a wellness model, creative and personal development tools will be used to develop additional resources to  face challenges, break barriers and connect with yourself.</p>
                <div className="flex flex-row gap-5 justify-around items-center font-bold ">
                    <h3>Karina</h3>
                    <h3>Miami</h3>
                </div>
            </div>

        </section>

        <section style={{backgroundImage:` url(${CTA})`}}  className="flex flex-col bg-gray-200 justify-center items-center rounded-lg bg-no-repeat bg-center bg-cover gap-3 md:justify-around m-1 p-2 ">
          <div className="ring rounded-lg p-2 m-2 w-[400px] bg-blue-950/70 text-white ">
            <h1>I'TS ALWAYS A GOOD TIME TO START</h1>
            <h2>Schedule a 15 minutes free consultation.</h2> <br/>
                
              <button className="bg-blue-700 text-white p-2 rounded-lg px-7 font-bold shadow-lg hover:shadow-pink-700/50 ring hover:scale-105 hover:duration-1000 hover:bg-blue-900">I'm Ready</button>
          </div>

        </section>

        <section className="flex flex-col md:grid md:grid-cols-2 bg-gray-200 justify-center items-center rounded-lg  gap-3  m-1 p-2 ">

         <div className=" flex flex-wrap gap-2 justify-center items-center ">
            <div className=" w-[360px] text-left p-2 m-1  rounded-lg bg-gray-100 shadow-lg border border-gray-600 ">
                <p>I learn from all my clients, different stories and ways of coping</p>
            </div>
            <div className=" w-[360px] text-left p-2 m-1  rounded-lg bg-gray-100 shadow-lg border border-gray-600 ">
                <p>I work with different cultures, showing them hope and the power of their voices</p>
            </div>
            <div className=" w-[360px] text-left p-2 m-1  rounded-lg bg-gray-100 shadow-lg border border-gray-600 ">
                <p>There is always enough energy for what you are passionate about</p>
            </div>
            <div className=" w-[360px] text-left p-2 m-1  rounded-lg bg-gray-100 shadow-lg border border-gray-600 ">
                <p>It is never too late to work on yourself</p>
            </div>

          
            </div>  
            <div className="flex text-justify m-1 p-1  ">
                <p>Born in Spain (where Paella and other food is a treasure), serving to the state of Florida now! Let’s see what the future will bring us!</p>
            </div>


        </section>

        <section className="flex flex-col  bg-gray-800 justify-center items-center  gap-3  m-1 p-2 text-white">
            <p>hello@mi-counselor.com</p>
            <p>&copy; {new Date().getFullYear()}. All rights reserved</p>

        </section>

        </>
    )
}