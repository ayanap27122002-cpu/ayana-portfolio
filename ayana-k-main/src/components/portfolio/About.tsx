import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download } from 'lucide-react';
import myPhoto from '@/assets/projects/myphoto.png';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative" ref={ref}>
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-end">
          {/* Left Column - Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-[3/4] max-w-lg mx-auto">
              <img 
                src={myPhoto} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-lg grayscale contrast-125 brightness-90"
              />
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="mb-1">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-primary text-sm font-medium uppercase tracking-wide"
                >
                  Who Am I
                </motion.span>
            </div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight"
              >
                About Me
              </motion.h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-3 text-muted-foreground leading-relaxed text-justify"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                I'm a dedicated and adaptable web developer with experience across{' '}
                <span className="text-foreground font-medium">WordPress, Shopify, WooCommerce, and Magento</span>, 
                focused on building reliable and scalable digital solutions. I have strong skills in frontend 
                development and PHP-based customization, along with growing expertise in{' '}
                <span className="text-foreground font-medium">React.js and modern web application architecture</span>.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                I work on custom Shopify apps using React and Laravel, developing efficient backend logic, 
                seamless integrations, and performance-optimized workflows. On the frontend, I enjoy crafting 
                clean, responsive, and user-centric interfaces using{' '}
                <span className="text-foreground font-medium">React, JavaScript, HTML, CSS, and Shopify Liquid</span>.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                A quick learner and problem solver, I'm passionate about{' '}
                <span className="text-foreground font-medium">clean code, performance optimization, SEO best 
                practices, and security</span>, always aiming to deliver high-quality products with great user experiences.
              </motion.p>
            </motion.div>

            {/* Action Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
