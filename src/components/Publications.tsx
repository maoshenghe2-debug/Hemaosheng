import { motion } from 'framer-motion';
import { publications } from '../data';
import { FaFileAlt, FaQuoteRight, FaExternalLinkAlt } from 'react-icons/fa';

export const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Publications</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-50 text-secondary rounded-lg">
                  <FaFileAlt className="text-xl" />
                </div>
                <span className="text-sm font-medium px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
                  {pub.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
                {pub.title}
              </h3>

              <div className="text-slate-600 mb-4 text-sm italic">
                {pub.authors.join(', ')}
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                <span className="font-semibold text-slate-700">{pub.journal}</span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <FaQuoteRight />
                  <span>{pub.citationCount} Citations</span>
                </div>
                
                {pub.doi && (
                  <a 
                    href={`https://doi.org/${pub.doi}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-blue-700 transition-colors"
                  >
                    View Paper <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
