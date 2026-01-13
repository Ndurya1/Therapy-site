import React from 'react';

export default function ContactPage() {
  const whatsappNumber = '0714531306'; 

  return (
    <section id="contact" className="p-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Get a Custom Quote</h2>
      <p className="text-center mt-2">Have specific cleaning needs? Reach out to us on WhatsApp!</p>
      <div className="flex justify-center mt-4">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Contact Us on WhatsApp
        </a>
      </div>
    </section>
  );
};

