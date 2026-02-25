import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Radar, Bar } from 'react-chartjs-2';
import { skills } from '../data';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export const Skills = () => {
  const chartOptions = {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
          color: '#475569',
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const barOptions = {
    responsive: true,
    indexAxis: 'y' as const,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Radar Chart for Overview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100"
          >
            <h3 className="text-xl font-bold text-center mb-6 text-slate-700">Core Competencies</h3>
            <div className="h-[300px] md:h-[400px] flex items-center justify-center">
               <Radar
                data={{
                  labels: skills[2].skills.map(s => s.name),
                  datasets: [
                    {
                      label: 'Proficiency',
                      data: skills[2].skills.map(s => s.level),
                      backgroundColor: 'rgba(59, 130, 246, 0.2)',
                      borderColor: 'rgba(59, 130, 246, 1)',
                      borderWidth: 2,
                      pointBackgroundColor: 'rgba(59, 130, 246, 1)',
                    },
                  ],
                }}
                options={chartOptions}
              />
            </div>
          </motion.div>

          {/* Detailed Skill Bars */}
          <div className="space-y-8">
            {skills.slice(0, 2).map((category, idx) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4 text-slate-700 border-l-4 border-secondary pl-3">
                  {category.category}
                </h3>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                   <Bar
                    data={{
                        labels: category.skills.map(s => s.name),
                        datasets: [
                            {
                                label: 'Level',
                                data: category.skills.map(s => s.level),
                                backgroundColor: 'rgba(30, 58, 138, 0.8)',
                                borderRadius: 4,
                            }
                        ]
                    }}
                    options={barOptions}
                   />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
