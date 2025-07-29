import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - Make sure these are replaced with your actual values
      const serviceId = 'service_r1ht4zg'; // Your EmailJS service ID
      const templateId = 'template_gt6a90g'; // Your EmailJS template ID  
      const publicKey = '0PrEJTu__O4b5ZTkA'; // Your EmailJS public key

      // Debug: Log the configuration (remove in production)
      console.log('EmailJS Config:', { serviceId, templateId, publicKey });

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not specified',
        message: formData.message,
        to_name: 'CodeSymphony Team',
      };

      // Debug: Log the template params (remove in production)
      console.log('Template Params:', templateParams);

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      
      // More detailed error handling
      let errorMessage = 'Failed to send message.';
      if (error instanceof Error) {
        errorMessage += ` Error: ${error.message}`;
      }
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'admin@codesymphony.tech',
      link: 'mailto:admin@codesymphony.tech'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+92 3092693382',
      link: 'tel:+923092693382'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Lahore, Pakistan',
      link: 'https://maps.google.com/?q=31.584034363174883,74.4613430371282'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Start Something Great
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to compose your digital symphony? Get in touch and let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className={`w-5 h-5 transition-transform ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
              </button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm">We'll get back to you within 24 hours.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  <p className="font-medium">Failed to send message.</p>
                  <p className="text-sm">Please check the browser console for details, or contact us directly at admin@codesymphony.tech</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you have a specific project in mind or just want to explore possibilities, 
                we're here to help. Our team is ready to discuss your needs and provide tailored solutions.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-2">Ready to Get Started?</h4>
              <p className="text-blue-100 mb-4">
                Let's schedule a free consultation to discuss your project and explore how we can help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;