import React from "react";
//import axios from "axios";
import {useEffect, useState} from 'react'
//import { Github, Instagram, Twitter, Mail, Phone,LocateIcon, Send } from "lucide-react";

export default function Contacts(){

    const [message, setMessage] = useState('');
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [messageSent, setMessageSent] =useState('');
    
    const phoneNumber = '254102621153'; 
    const emailAddress = 'hello@mi-counselor.com';

    const handleMessageChange = (event) => {
       
       
        setMessage(event.target.value);
    };

    const handleSubmit = (e) => {
         e.preventDefault();
        if (!message) {
            alert("Please enter a message before sending.");
            return;
        }

        const text=`Hello, my name is ${name}. ${message}`
        const encodedMessage = encodeURIComponent(text);

       
       
        const mailURL =`mailto:${emailAddress}?subject=Contact from ${name}&body=${encodedMessage}`;

        window.location.href= mailURL;
       
       
            setMessageSent('"Your message has been received. i will get back to you soon"');
       
        
        setName('');
        setMessage('');

        setTimeout(() =>setMessageSent (""), 3000);
    }; 

    return(
        <>
      

        <div className=" flex flex-col p-2 m-2 bg-gray-100 border rounded-xl md:grid md:grid-cols-2 ">
           

        <div className="flex flex-col justify-center m-3 gap-1 text-justify">
            <h2>THIS IS FOR YOU</h2>
            <p>
                I will be with you in this journey, we will work together.
            </p><br/>
            <p>Giving youself time to work and grow on yourself is a gift</p><br/>
            <p>You will feel valued and heard, you will feel free to share</p><br/>
            <p> I will help you be ready to talk about those things that are painful for you and to define those barriers that are stopping you from achieving your goals and move forward. i won't push you untill you are ready</p>

           
        </div>

        <div className="flex flex-col ">
            <form onSubmit={handleSubmit} className="flex flex-col border rounded-lg m-2 p-3 shadow-lg">
                {messageSent && (
                    <div className="flex absolute text-md bg-slate-800   text-white animate-fade-in p-2 rounded-lg justify-center items-center mb-2 w-[300px] h-[200px] shadow-lg shadow-black/70  ">
                        {messageSent}
                    </div>
                )}
                <p>Send an email:</p><br/>
                <input type="text"
                value={name}
                onChange={(e) =>setName(e.target.value)}   placeholder="enter your full name" required className="h-10 p-3 rounded-lg border"/><br/>
                <input type="email"
                value={email}
                onChange={(e) =>setEmail(e.target.value)}   placeholder="enter your email address" required className="h-10 p-3 rounded-lg border"/><br/>

                <textarea type="text" id="whatsapp_msg" value={message} rows={6} onChange={(e) =>setMessage(e.target.value)} placeholder="tell me about your project" required className="p-2 rounded-lg border"/>

                <button type="submit" className="bg-blue-900 m-2 text-white p-1 rounded-xl border flex justify-center items-cen
                gap-2">Send Message </button>
            </form>
        </div>
        </div>
        </>
    )
    }