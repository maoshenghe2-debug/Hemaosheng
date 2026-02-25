import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { FaEnvelope, FaPaperPlane, FaGithub, FaLinkedin, FaGraduationCap } from 'react-icons/fa';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., mailto or backend service)
    window.location.href = `mailto:${personalInfo.email}?subject=Contact from Portfolio&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Feel free to reach out for collaborations, research opportunities, or just to say hello.
              I'm always open to discussing new ideas and projects.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-secondary rounded-lg">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-slate-700 hover:text-secondary transition-colors font-medium">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <p className="text-sm text-slate-500 font-medium mb-4">Social Profiles</p>
                <div className="flex gap-4">
                  {personalInfo.social.github && (
                    <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 text-slate-600 hover:bg-slate-800 hover:text-white rounded-lg transition-all">
                      <FaGithub className="text-xl" />
                    </a>
                  )}
                  {personalInfo.social.linkedin && (
                    <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 text-slate-600 hover:bg-blue-700 hover:text-white rounded-lg transition-all">
                      <FaLinkedin className="text-xl" />
                    </a>
                  )}
                  {personalInfo.social.googleScholar && (
                    <a href={personalInfo.social.googleScholar} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 text-slate-600 hover:bg-blue-500 hover:text-white rounded-lg transition-all">
                      <FaGraduationCap className="text-xl" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-primary text-white rounded-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-medium"
              >
                Send Message <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
