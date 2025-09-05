import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in new opportunities and collaborations.
                Feel free to reach out if you'd like to work together or just have a chat!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-300">sushmitakatariya18@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-300">+91 8085787856</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-300">Jabalpur, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
