import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Gyan Ganga Institute of Technology & Science, Jabalpur",
    year: "2022 – 2026",
    score: "CGPA: 7.5",
    description: "Specialized in AI/ML, Computer Vision, and Full-Stack Development",
    coursework: [
      "Data Structures & Algorithms (DSA)",
      "Database Management Systems (DBMS)",
      "Computer Networks", 
      "Operating Systems",
      "Object-Oriented Programming (OOP)"
    ]
  },
  {
    degree: "Higher Secondary Education",
    institution: "Shishu Vidya Peeth Eng. Med. Hr. Sc. School",
    year: "2020 - 2022", 
    score: "Percentage: 67%", // Add your actual percentage if available
    description: "Mathematics and Computer Science stream"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-600 transition-colors"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-purple-600 p-3 rounded-full flex-shrink-0">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                  <p className="text-purple-400 text-lg mb-2">{edu.institution}</p>
                  <p className="text-gray-400 mb-3">{edu.year} | {edu.score}</p>
                  <p className="text-gray-300 mb-4">{edu.description}</p>
                  
                  {edu.coursework && (
                    <>
                      <h4 className="text-lg font-medium text-white mb-2">Relevant Coursework:</h4>
                      <ul className="text-gray-300 list-disc list-inside pl-5">
                        {edu.coursework.map((course, i) => (
                          <li key={i}>{course}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}