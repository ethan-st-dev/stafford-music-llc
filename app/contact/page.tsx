'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,212,255,0.1)_0%,_transparent_50%)]" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-6 uppercase tracking-tight">
            Contact Us
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-transparent mb-6" />
          <p className="text-xl text-slate-300 max-w-2xl">
            Ready to collaborate? Have questions? Reach out and let's create something epic together.
          </p>
        </div>

        <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/20 angular-cut card-glow p-8 md:p-10">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
          <form onSubmit={handleSubmit} className="relative space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-cyan-400 mb-2 uppercase tracking-wider"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-cyan-500/30 bg-slate-900/50 text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder-slate-500 angular-cut"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-cyan-400 mb-2 uppercase tracking-wider"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-cyan-500/30 bg-slate-900/50 text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder-slate-500 angular-cut"
                placeholder="your@email.com"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-bold text-cyan-400 mb-2 uppercase tracking-wider"
              >
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-cyan-500/30 bg-slate-900/50 text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all angular-cut"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="booking">Booking Request</option>
                <option value="collaboration">Collaboration</option>
                <option value="licensing">Music Licensing</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-cyan-400 mb-2 uppercase tracking-wider"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-cyan-500/30 bg-slate-900/50 text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder-slate-500 resize-none angular-cut"
                placeholder="Tell us about your project or inquiry..."
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold uppercase text-sm tracking-widest disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden angular-cut"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-cyan-500/30 blur-xl group-hover:bg-cyan-500/50 transition-all" />
                <span className="relative z-10">
                  {status === 'submitting' ? 'Transmitting...' : 'Send Message'}
                </span>
              </button>
            </div>

            {/* Success Message */}
            {status === 'success' && (
              <div className="p-4 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-500/50 text-cyan-300 angular-cut">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold uppercase tracking-wide">Message Transmitted Successfully!</span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="p-4 bg-gradient-to-r from-red-900/50 to-orange-900/50 border border-red-500/50 text-red-300 angular-cut">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold uppercase tracking-wide">Transmission Failed. Please Retry.</span>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 relative bg-gradient-to-b from-slate-900 to-slate-950 p-8 border border-cyan-500/20 angular-cut card-glow">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
          <div className="relative text-center">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 uppercase tracking-wide">
              Direct Contact
            </h2>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-mono">info@staffordmusicllc.com</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-mono">(555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
