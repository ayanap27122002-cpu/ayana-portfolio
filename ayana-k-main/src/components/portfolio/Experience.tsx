import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const experiences = [
  {
    title: 'Technology Analyst',
    company: 'Emvigo Technologies',
    period: '04/2025 – Present',
    location: 'Kochi',
    description: [
      'Developed and maintained eCommerce websites using Shopify, WooCommerce, and Magento, delivering robust and scalable shopping solutions with a strong focus on PHP-based customization.',
      'Built and customized Shopify apps using Laravel, leveraging strong PHP expertise to implement backend logic, integrations, custom workflows, and performance-optimized solutions using HTML, CSS, JavaScript, and Liquid for reliable user experiences.'
    ]
  },
  {
    title: 'Jr. Web Developer',
    company: 'Cygnotechlabs',
    period: '07/2024',
    location: 'Kochi',
    description: [
      'Designed and developed responsive WordPress websites with custom theme development, plugin development, and third-party plugin integration to enhance user experience.',
      'Optimized website performance, security, and SEO through caching, image optimization, and mobile-first best practices, ensuring fast and reliable sites.'
    ]
  }
];

const education = [
  {
    title: 'B.Tech in Computer Science and Engineering',
    company: 'College of Engineering Thalassery, Kannur',
    period: '2020 – 2024',
    location: 'Kannur',
    description: []
  },
  {
    title: 'Higher Secondary',
    company: "St. Joseph's Higher Secondary School Thalassery",
    period: '2018 – 2020',
    location: 'Thalassery',
    description: []
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary mono text-sm"
          >
            03.
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-2 uppercase tracking-tight"
          >
            Experience & Education
          </motion.h2>
        </motion.div>

        <div className="relative">
          {/* Central Vertical Divider with Titles */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-foreground/30">
            <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2">
              <div className="text-3xl font-bold text-foreground/70 uppercase tracking-wider" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                Experience
              </div>
            </div>
            <div className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2">
              <div className="text-3xl font-bold text-foreground/70 uppercase tracking-wider" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                Education
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Work Experience Column */}
            <div className="relative pr-8 md:pr-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="relative mb-12 last:mb-0 pl-12 md:pl-0"
            >
                  {/* Timeline line */}
                  <div className="absolute left-0 top-2 w-8 h-px bg-primary" />

                  {/* Date Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-medium uppercase">
                      {exp.period}
                    </span>
              </div>

                  {/* Company and Title */}
                  <div className="mb-3">
                    <h3 className="font-bold text-xl mb-1">{exp.company}</h3>
                    <p className="text-primary font-medium text-lg">{exp.title}</p>
                  </div>

                  {/* Description */}
                  {exp.description.length > 0 && (
                    <div className="space-y-2">
                      {exp.description.map((item, i) => (
                        <p key={i} className="text-muted-foreground text-sm text-justify leading-relaxed">
                          {item}
                        </p>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Education Column */}
            <div className="relative pl-8 md:pl-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * (experiences.length + index) }}
                  className="relative mb-12 last:mb-0 pr-12 md:pr-0"
                >
                  {/* Timeline line */}
                  <div className="absolute right-0 top-2 w-8 h-px bg-primary" />

                  {/* Date Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-medium uppercase">
                      {edu.period}
                    </span>
                </div>

                  {/* Institution and Title */}
                  <div className="mb-3">
                    <h3 className="font-bold text-xl mb-1">{edu.company}</h3>
                    <p className="text-primary font-medium text-lg">{edu.title}</p>
                    {edu.location && (
                      <p className="text-muted-foreground text-sm mt-1">{edu.location}</p>
                    )}
                </div>

                  {/* Description */}
                  {edu.description.length > 0 && (
                    <div className="space-y-2">
                      {edu.description.map((item, i) => (
                        <p key={i} className="text-muted-foreground text-sm text-justify leading-relaxed">
                          {item}
                        </p>
                  ))}
              </div>
                  )}
            </motion.div>
          ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
