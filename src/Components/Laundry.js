// src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import before from '../Assets/before.jpeg';
import after from '../Assets/after.jpeg';



{/*const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">Cleaning Service</h1>
        <div>
          <a href="#services" className="text-white mx-2">Services</a>
          <a href="#testimonials" className="text-white mx-2">Testimonials</a>
          <a href="#gallery" className="text-white mx-2">Gallery</a>
          <a href="#contact" className="text-white mx-2">Contact</a>
        </div>
      </div>
    </nav>
  );
};  */}

export default function Laundry() {

      const whatsappNumber = '0714531306'; 

    const services = [
    { name: 'Fumigation', price: ' from Ksh 5,000' },
    { name: 'Car Detailing', price: 'Ksh 10,000' },
    { name: 'Carpet Cleaning', price: 'Ksh 2,500' },
    { name: 'Sofa Cleaning', price: 'Ksh 1,500' },
    { name: '1 bedroom House', price: 'Ksh 8,000' },
    { name: '2 bedroom House', price: 'Ksh 12,000' },
    { name: '3 bedroom House', price: 'Ksh 15,000' },
    { name: 'Custom Quote', price: 'you can request a tailored custom quote based on what you may need' },
  ];

   const testimonials = [
    { name: 'joel katana', feedback: 'Excellent service, highly recommend!' },
    { name: 'orioki steven', feedback: 'My home has never looked better!' },
  ];


  return (
    <>
    <section className="bg-blue-400 h-screen flex items-center justify-center text-white text-center">
      <div>
        <h1 className="text-5xl font-bold">The Ultimate Dry Cleaning Professionals !</h1>
        <p className="mt-4 text-lg">We offer the best cleaning solutions for your home and vehicle. we handle everything professionally so you need not worry</p>
        <a href="#services" className="mt-6 inline-block bg-white rounded-md text-blue-600 px-4 py-2 ">Get Started</a>
      </div>
    </section>
 
    <section id="services" className="p-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Our Services <span><hr className='border-none p-[1px] bg-blue-800 w-[130px] flex justify-center items-center m-auto'/></span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {services.map((service, index) => (
          <div key={index} className="border p-4 text-center rounded-md  bg-white shadow-md shadow-black/50">
            <h3 className="font-semibold text-blue-400">{service.name}</h3>
            <p className="text-[14px]">{service.price}</p>
          </div>
        ))}
      </div>
    </section>

<section id="testimonials" className=" flex flex-col justify-center items-center gap-5 p-4 bg-blue-400">
      <h2 className="text-3xl font-bold text-center">Testimonials <span><hr className='border-none p-[1px] bg-blue-800 w-[130px] flex justify-center items-center m-auto'/></span> </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border p-2 rounded-md w-[330px] gap-10 bg-white text-center">
            <p className="italic">"{testimonial.feedback}"</p>
            <p className="font-bold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>

<section id="gallery" className="p-4 bg-gray-100 gap-4 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-center">Before and After <span><hr className='border-none p-[1px] bg-blue-800 w-[130px] flex justify-center items-center m-auto'/></span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-auto  justify-center items-center">
        <img src={before} alt="Before Cleaning" className="h-40 rounded-md object-cover" />
        <img src={after} alt="After Cleaning" className="h-40 rounded-md object-cover" />
      </div>
    </section>

     <section id="about" className="p-4 bg-blue-400">
      <h2 className="text-3xl font-bold text-center">About Us <span><hr className='border-none p-[1px] bg-blue-800 w-[130px] flex justify-center items-center m-auto'/></span></h2>
      <p className="mt-4 text-left max-w-2xl mx-auto text-[15px] ">
        At Sparkle Dry Cleaners, we are dedicated to providing top-notch cleaning solutions for homes and vehicles.
        Our team of professional cleaners is committed to delivering exceptional service and ensuring your 
        satisfaction. With years of experience in the industry, we understand the unique cleaning needs of our clients 
        and strive to exceed their expectations every time. 
        Whether it's a deep home cleaning, car detailing, or carpet and sofa cleaning, we've got you covered. 
        Your cleanliness is our priority!
      </p>
    </section>
    

     <section id="contact" className="p-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Get a Custom Quote</h2>
      <p className="text-center mt-2">Have specific cleaning needs? Reach out to us on WhatsApp to get a custom quote!</p>
      <div className="flex justify-center mt-4">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Contact Us on WhatsApp
        </a>
      </div>
    </section>

<footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Cleaning Service. All Rights Reserved.</p>
    </footer>
    </>
    );
};


{/*const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root')); */}