import { motion } from 'framer-motion';
import { Briefcase, Code, Cpu } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience & Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Experience */}
          <motion.div 
            className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-600 p-3 rounded-full">
                <Code size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Project Experience</h3>
            </div>
            <ul className="text-gray-300 list-disc list-inside space-y-2">
              <li>AI Career Coach - Full-stack application with AI integration</li>
              <li>DELISH - MERN-based food delivery platform</li>
              <li>Multiple certifications in cybersecurity and programming</li>
              <li>Open-source contributions</li>
            </ul>
          </motion.div>

          {/* Technical Skills */}
          <motion.div 
            className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-pink-600 p-3 rounded-full">
                <Cpu size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Technical Expertise</h3>
            </div>
            <ul className="text-gray-300 list-disc list-inside space-y-2">
              <li>AI/ML & Computer Vision applications</li>
              <li>Full-stack web development (MERN stack)</li>
              <li>API development & integration</li>
              <li>Database management & optimization</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}