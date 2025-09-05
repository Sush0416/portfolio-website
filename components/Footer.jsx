import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sushmita Katariya
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions
              with modern technologies and AI/ML.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                About
              </a>
              <a href="#skills" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Skills
              </a>
              <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Sush0416"
                className="bg-gray-800 p-3 rounded-lg hover:bg-purple-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a
                href="https://linkedin.com/in/sushmita-katariya"
                className="bg-gray-800 p-3 rounded-lg hover:bg-purple-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a
                href="mailto:sushmitakatariya18@gmail.com"
                className="bg-gray-800 p-3 rounded-lg hover:bg-purple-600 transition-colors"
              >
                <Mail size={20} className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by Sushmita Katariya © {currentYear}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
