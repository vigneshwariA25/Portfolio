import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ show: false, message: '', type: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification.show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formData.from_name.trim();
    const email = formData.from_email.trim();
    const message = formData.message.trim();

    if (!name) {
      setNotification({ show: true, message: "Name is required", type: "error" });
      return;
    }
    if (!email) {
      setNotification({ show: true, message: "Email is required", type: "error" });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setNotification({ show: true, message: "Please enter a valid email address", type: "error" });
      return;
    }
    if (!message) {
      setNotification({ show: true, message: "Message is required", type: "error" });
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_ynuk6qh",
        "template_s3rynfx",
        form.current,
        "N56iJvPGrYg9XKbjC"
      );

      setFormData({
        from_name: '',
        from_email: '',
        message: ''
      });
      setNotification({ show: true, message: "Message Sent Successfully!", type: "success" });
    } catch (err) {
      setNotification({ show: true, message: "Failed to Send Message. Please Try Again.", type: "error" });
      console.error("EmailJS Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <div className="w-24 h-1 bg-neon-green mx-auto rounded-full shadow-[0_0_10px_rgba(0,255,102,0.5)]"></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">Get in touch</h3>
          <p className="text-gray-400 mb-10 leading-relaxed">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-neon-green">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Email</p>
                <a href="mailto:vigneshwariarumugam25@gmail.com" className="text-white hover:text-neon-green transition-colors">vigneshwariarumugam25@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-neon-green">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Location</p>
                <p className="text-white">Coimbatore, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-neon-green">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">WhatsApp</p>
                <a href="https://wa.me/7826973022" target="_blank" rel="noreferrer" className="text-white hover:text-neon-green transition-colors">+91 7826973022</a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 rounded-3xl border-white/5"
        >
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
              <input
                type="text"
                id="name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="John Doe"
                className="bg-dark-900 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
              <input
                type="email"
                id="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="bg-dark-900 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your message here..."
                className="bg-dark-900 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 w-full py-4 mt-2 bg-neon-green text-black font-bold rounded-xl hover:bg-[#00cc52] transition-colors shadow-[0_0_15px_rgba(0,255,102,0.3)] hover:shadow-[0_0_25px_rgba(0,255,102,0.5)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Toast Notification */}
      {notification.show && (
        <div className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-dark-800/90 backdrop-blur-md border px-6 py-4 rounded-2xl shadow-2xl transition-all duration-300 ${
          notification.type === 'success' 
            ? 'border-neon-green/30 text-white' 
            : 'border-red-500/30 text-white'
        }`}>
          <div className={`w-3 h-3 rounded-full ${
            notification.type === 'success' 
              ? 'bg-neon-green shadow-[0_0_10px_rgba(0,255,102,0.8)]' 
              : 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]'
          }`} />
          <span className="text-sm font-medium">{notification.message}</span>
        </div>
      )}
    </section>
  );
}