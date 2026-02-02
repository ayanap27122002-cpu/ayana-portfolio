import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, Database, Globe, ShoppingCart, FileCode, 
  Package, Zap, Search, Cloud, GitBranch, MessageSquare,
  Users, Clock, Target, Lightbulb
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  years: string;
  iconColor: string;
  iconBg: string;
}

const technicalSkills: Skill[] = [
  { name: 'HTML', icon: Code2, years: '5+ Years', iconColor: 'text-orange-500', iconBg: 'bg-orange-500/10' },
  { name: 'CSS', icon: Code2, years: '5+ Years', iconColor: 'text-blue-500', iconBg: 'bg-blue-500/10' },
  { name: 'JavaScript', icon: Code2, years: '4+ Years', iconColor: 'text-yellow-500', iconBg: 'bg-yellow-500/10' },
  { name: 'PHP', icon: Code2, years: '4+ Years', iconColor: 'text-purple-500', iconBg: 'bg-purple-500/10' },
  { name: 'Laravel', icon: Code2, years: '3+ Years', iconColor: 'text-red-500', iconBg: 'bg-red-500/10' },
  { name: 'WordPress', icon: Globe, years: '4+ Years', iconColor: 'text-blue-400', iconBg: 'bg-blue-400/10' },
  { name: 'WooCommerce', icon: ShoppingCart, years: '3+ Years', iconColor: 'text-orange-400', iconBg: 'bg-orange-400/10' },
  { name: 'Shopify', icon: ShoppingCart, years: '3+ Years', iconColor: 'text-green-500', iconBg: 'bg-green-500/10' },
  { name: 'Shopify Liquid', icon: FileCode, years: '3+ Years', iconColor: 'text-green-400', iconBg: 'bg-green-400/10' },
  { name: 'React.js', icon: Code2, years: '2+ Years', iconColor: 'text-cyan-500', iconBg: 'bg-cyan-500/10' },
  { name: 'Next.js', icon: Code2, years: '1+ Years', iconColor: 'text-gray-400', iconBg: 'bg-gray-400/10' },
  { name: 'MySQL', icon: Database, years: '4+ Years', iconColor: 'text-blue-600', iconBg: 'bg-blue-600/10' },
  { name: 'REST APIs', icon: Package, years: '3+ Years', iconColor: 'text-indigo-500', iconBg: 'bg-indigo-500/10' },
  { name: 'GraphQL', icon: Zap, years: '2+ Years', iconColor: 'text-pink-500', iconBg: 'bg-pink-500/10' },
  { name: 'Git & GitHub', icon: GitBranch, years: '4+ Years', iconColor: 'text-red-400', iconBg: 'bg-red-400/10' },
  { name: 'AWS', icon: Cloud, years: '1+ Years', iconColor: 'text-orange-400', iconBg: 'bg-orange-400/10' },
  { name: 'SEO & Performance', icon: Search, years: '3+ Years', iconColor: 'text-yellow-400', iconBg: 'bg-yellow-400/10' }
];

const softSkills: Skill[] = [
  { name: 'Problem Solving', icon: Target, years: '', iconColor: 'text-primary', iconBg: 'bg-primary/10' },
  { name: 'Communication', icon: MessageSquare, years: '', iconColor: 'text-primary', iconBg: 'bg-primary/10' },
  { name: 'Time Management', icon: Clock, years: '', iconColor: 'text-primary', iconBg: 'bg-primary/10' },
  { name: 'Teamwork', icon: Users, years: '', iconColor: 'text-primary', iconBg: 'bg-primary/10' },
  { name: 'Quick Learner', icon: Lightbulb, years: '', iconColor: 'text-primary', iconBg: 'bg-primary/10' },
  { name: 'High Adaptability', icon: Zap, years: '', iconColor: 'text-primary', iconBg: 'bg-primary/10' }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="relative" ref={ref}>
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
            02.
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-2 uppercase tracking-tight"
          >
            Skills & Expertise
          </motion.h2>
        </motion.div>

        <div className="space-y-12">
          {/* Technical Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg font-semibold mb-6 relative inline-block"
            >
              Technical Skills
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
            >
              {technicalSkills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                  variants={itemVariants}
                    className="bg-card border border-border rounded-lg p-3 hover:border-primary/50 hover:shadow-lg transition-all group"
                  >
                    <div className={`w-10 h-10 rounded-lg ${skill.iconBg} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                      <IconComponent size={20} className={skill.iconColor} />
                    </div>
                    <h4 className="font-semibold text-xs">{skill.name}</h4>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Soft Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg font-semibold mb-6 relative inline-block"
            >
              Soft Skills
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
            >
              {softSkills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                  variants={itemVariants}
                    className="bg-card border border-border rounded-lg p-3 hover:border-primary/50 hover:shadow-lg transition-all group"
                  >
                    <div className={`w-10 h-10 rounded-lg ${skill.iconBg} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                      <IconComponent size={20} className={skill.iconColor} />
                    </div>
                    <h4 className="font-semibold text-xs">{skill.name}</h4>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
