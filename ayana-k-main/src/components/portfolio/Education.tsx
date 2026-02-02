import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary mono text-sm">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-xl p-8 max-w-2xl"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <GraduationCap size={28} />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-1">
                B.Tech in Computer Science and Engineering
              </h3>
              <p className="text-primary mono text-sm mb-3">
                College of Engineering Thalassery, Kannur
              </p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar size={14} />
                <span>2020 – 2024</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
