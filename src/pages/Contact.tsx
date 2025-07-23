import React from 'react';
import ContactForm from '../components/ContactForm';
import { MailIcon, PhoneIcon } from 'lucide-react';
const Contact = () => {
  return <div className="bg-white w-full pt-16 md:pt-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact</h1>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-6">
              I'm always interested in discussing new projects, creative ideas,
              or opportunities to be part of your vision. Feel free to reach out
              using the contact form or directly via email or phone.
            </p>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <MailIcon size={20} className="text-blue-600 mr-3" />
                <a href="mailto:davidmerritt962@gmail.com" className="text-blue-600 hover:text-blue-800">
                  davidmerritt962@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <PhoneIcon size={20} className="text-blue-600 mr-3" />
                <a href="tel:+16158726142" className="text-blue-600 hover:text-blue-800">
                  (615) 872-6142
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Response Time</h2>
              <p className="text-gray-700">
                I typically respond to all inquiries within 1-2 business days.
                For urgent matters, please indicate so in the subject line of
                your message.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-bold mb-4">Send Me a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;