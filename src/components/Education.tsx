import { motion } from 'framer-motion';
import { education } from '../data';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Education</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 md:translate-x-0 hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 w-full">
                  <div className={`bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}>
                    <div className={`flex items-center gap-2 text-secondary font-medium mb-2 ${
                        index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                    }`}>
                        <FaGraduationCap className="text-xl" />
                        <span>{edu.degree}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{edu.institution}</h3>
                    <div className={`flex items-center gap-2 text-slate-500 text-sm mb-4 ${
                         index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                    }`}>
                      <FaCalendarAlt />
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{edu.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-md z-10 hidden md:block"></div>
                
                {/* Spacer for layout balance */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
