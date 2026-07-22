import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import SectionHeader from './SectionHeader';

const SERVICE_ID = 'service_4dbje3m';
const TEMPLATE_ID = 'template_gt6a90g';
const PUBLIC_KEY = '0PrEJTu__O4b5ZTkA';

const inputClasses =
  'w-full px-4 py-3 rounded-xl bg-white dark:bg-black/30 border border-ink/15 dark:border-ink/10 text-ink placeholder-ink/40 dark:placeholder-ink/30 text-sm outline-none shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)] dark:shadow-none hover:border-ink/25 dark:hover:border-ink/10 focus:border-accent/60 focus:shadow-[0_0_0_3px_rgba(8,145,178,0.12)] dark:focus:shadow-[0_0_0_3px_rgba(0,229,255,0.1)] transition-all duration-200';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_email: 'alim07922@gmail.com'
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="relative py-16 md:py-20 px-6 bg-shade-b overflow-hidden">
      <div className="glow-blob w-[600px] h-[400px] left-1/2 -translate-x-1/2 bottom-0" />
      <div className="glow-blob glow-blob-violet w-[420px] h-[420px] -right-52 top-0" />
      <div className="relative max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something together"
          subtitle="Tell us about your project and we'll get back to you within one business day."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="card lg:col-span-2 p-8 rounded-2xl flex flex-col">
            <h3 className="text-ink font-semibold text-lg mb-3">Get in touch</h3>
            <p className="text-ink/65 dark:text-ink/50 text-sm leading-relaxed mb-8">
              Prefer a direct conversation? Reach us on WhatsApp or connect with us on LinkedIn.
            </p>

            <div className="flex flex-col gap-3 mt-auto">
              <a
                href="https://wa.me/+923092693382"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-ink/[0.06] text-ink/80 text-sm font-medium hover:bg-ink/[0.1] hover:text-ink transition-colors duration-200 no-underline"
              >
                <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/company/codesymphony-inc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-ink/[0.06] text-ink/80 text-sm font-medium hover:bg-ink/[0.1] hover:text-ink transition-colors duration-200 no-underline"
              >
                <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="card lg:col-span-3 p-8 rounded-2xl">
            {status === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-ink font-semibold text-lg mb-2">Message sent</h3>
                <p className="text-ink/65 dark:text-ink/50 text-sm">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-ink/70 dark:text-ink/60 text-sm font-medium mb-2">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-ink/70 dark:text-ink/60 text-sm font-medium mb-2">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-ink/70 dark:text-ink/60 text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={5}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-600 dark:text-red-400 text-sm">Failed to send message. Please try again later.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="self-start px-8 py-3 bg-ink text-charcoal font-semibold text-sm rounded-xl hover:bg-accent hover:text-white dark:hover:text-black transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
