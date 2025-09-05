import { motion } from "framer-motion";

const certifications = [
  { title: "Cybersecurity Essentials", authority: "Cisco Networking Academy" },
  { title: "Partner: Cloud Security", authority: "Cisco Networking Academy" },
  { title: "Introduction to Cybersecurity", authority: "Cisco Networking Academy" },
  { title: "Linux Essentials", authority: "Cisco Networking Academy" },
  { title: "CyberOps Associate", authority: "Cisco Networking Academy" },
  { title: "Introduction to Python and Programming", authority: "Introduction to Cybersecurity" },
  { title: "Python Essentials 1", authority: "Cisco Networking Academy" },
  { title: "Python Essentials 2", authority: "Cisco Networking Academy" },
  { title: "Introduction to Data Science", authority: "Cisco Networking Academy" },
  { title: "Programming Essentials in C++ (CPA)", authority: "Cisco Networking Academy" },
  { title: "CCNA 1", authority: "Cisco Networking Academy" },
  { title: "CCNA 2", authority: "Cisco Networking Academy" },
  { title: "CCNA 3", authority: "Cisco Networking Academy" },
  { title: "Java", authority: "Oracle Academy" },
  { title: "Database Management System (DBMS)", authority: "Oracle Academy" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-purple-600 transition"
            >
              <h3 className="text-purple-400 font-semibold">{cert.title}</h3>
              <p className="text-gray-400 text-sm">{cert.authority}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
