import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Folder, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

// Import project images
import lkArrangementsImg from '@/assets/projects/lk-arrangements.png';
import pawplanImg from '@/assets/projects/pawplan.png';
import thevoxspotImg from '@/assets/projects/thevoxspot.png';
import prestprintcoImg from '@/assets/projects/prestprintco.png';
import coetianImg from '@/assets/projects/coetian.png';
import rexpImg from '@/assets/projects/rexp.png';
import pixuploadImg from '@/assets/projects/pixupload.png';
import phenikoImg from '@/assets/projects/pheniko.jpeg';

interface Project {
  title: string;
  description: string;
  tech: string[];
  year: string;
  image?: string;
  link?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Lars Ragnar Karlin',
    description: 'Developed a professional website for internationally recognized Swedish trombonist Lars Ragnar Karlin, designed to reflect his musical identity while enabling online sales of brass and trombone arrangements. Implemented event scheduling and display features for upcoming, current, and past events with dedicated detail pages.',
    tech: ['WordPress', 'PHP', 'Custom Plugins'],
    year: '2025',
    image: lkArrangementsImg,
    link: 'https://lkarrangements.com',
    featured: true
  },
  {
    title: 'PawPlan',
    description: 'Built a subscription-based pet care platform for Australian pets, delivering personalised product recommendations based on pet age, weight, and postcode. Implemented flexible subscription cycles, multi-pet account support, postcode-based parasite protection logic, and seamless subscription management.',
    tech: ['Shopify', 'Subscriptions', 'Liquid'],
    year: '2024',
    image: pawplanImg,
    featured: true
  },
  {
    title: 'TheVoxSpot',
    description: 'TheVoxSpot is a music production and streaming platform focused on cheerleading music, vocal packs, and live music streaming. It provides downloadable vocals and beats, premade rap and song sections, and fully customized cheer music mixes tailored to routines. The website is built completely from scratch based on Figma designs, delivering a modern UI, smooth interactions, and a performance-focused user experience.',
    tech: ['React', 'TypeScript', 'Figma', 'Music Streaming'],
    year: '2025',
    image: thevoxspotImg,
    featured: true
  },
  {
    title: 'PrestPrintCo',
    description: 'Prest Print Co is a custom packaging and print solutions platform that enables businesses to design, customize, and order branded packaging online. The website features a comprehensive product catalog, flexible custom packaging options, and an integrated 3D package designing tool using an API, allowing users to design and preview packaging in real time. It focuses on a seamless user experience, efficient order management, and simplifying the packaging design-to-production workflow.',
    tech: ['WordPress', 'WooCommerce', 'PHP', '3D API'],
    year: '2025',
    image: prestprintcoImg,
    featured: true
  },
  {
    title: 'Lefleuriste',
    description: 'Developed a UAE-based flower shopping website using WooCommerce, implementing robust web technologies to deliver a responsive, reliable, and scalable eCommerce platform. Customized core functionality to ensure smooth product management, ordering workflows, and an enhanced user experience.',
    tech: ['WordPress', 'WooCommerce', 'PHP'],
    year: '2025'
  },
  {
    title: 'Coetian',
    description: 'Built using HTML, CSS, and JavaScript, and hosted on Netlify and GitHub, Coetian is a web application that provides share-auto ride functionality along with detailed transportation information. The platform integrates Chatzi, a third-party anonymous chat service, enabling students to communicate securely and coordinate share-auto rides without revealing personal identities.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Netlify', 'GitHub'],
    year: '2024',
    image: coetianImg
  },
  {
    title: 'Rexp',
    description: 'Provided ongoing support for the internal WordPress static website of the upcoming product Rexp.in. Worked on customization tasks, implemented new features, and resolved bugs at various levels to ensure smooth performance and improved user experience.',
    tech: ['WordPress', 'PHP', 'Customization'],
    year: '2024',
    image: rexpImg
  },
  {
    title: 'PixUpload',
    description: 'A React-based Shopify app built using Remix and Shopify Polaris, designed for performance and scalability. It enables merchants to add configurable file and image upload components to product pages, allowing customers to upload assets during the purchase flow. Uploaded files are securely stored and associated with the corresponding Shopify order, streamlining personalized product workflows, minimizing manual handling, and improving fulfillment accuracy.',
    tech: ['React', 'Remix', 'Shopify Polaris'],
    year: '2024',
    image: pixuploadImg
  },
  {
    title: 'Wallmark Ply',
    description: 'Developed a modern, responsive WordPress website using PHP-based theme customization. Integrated an AI-powered chatbot for automated customer queries and product assistance, improving user engagement and overall user experience.',
    tech: ['WordPress', 'PHP', 'AI Chatbot'],
    year: '2024'
  },
  {
    title: 'Tokenterra',
    description: 'Developed a blockchain-based real estate investment platform utilizing Node.js and Express for the backend, with MongoDB and Firebase Storage as the database. Integrated Ethereum blockchain using Ethers.js for secure and transparent transactions, and implemented Firebase Auth for robust authentication.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'Ethers.js', 'Blockchain'],
    year: '2024'
  },
  {
    title: 'Pheniko',
    description: 'Led a complete homepage redesign on Shopify, built with custom Liquid code to deliver a modern, responsive, and brand-focused storefront.',
    tech: ['Shopify', 'Liquid', 'Custom Development'],
    year: '2024',
    image: phenikoImg
  }
];

const FeaturedProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionLength = project.description.length;
  const shouldShowReadMore = descriptionLength > 150; // Approximate 3 lines
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="group h-full flex flex-col"
    >
      <div className="bg-card border border-border rounded-lg overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
        {/* Project Image - Extends to card edges */}
        <div className="relative overflow-hidden w-full aspect-video group/image">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative w-full h-full"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105"
            />
            {/* View More Overlay - appears on image hover */}
            {project.link && (
              <div className="absolute top-4 right-4 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium uppercase tracking-wide rounded-lg hover:bg-primary/90 transition-all shadow-lg group/link"
                >
                  View More
                  <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            )}
          </a>
        </div>

        {/* Project Info */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-3 group/title">
            {project.link ? (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
          
          <div className="mb-4 flex-grow">
            <p className={`text-muted-foreground text-sm leading-relaxed ${!isExpanded && shouldShowReadMore ? 'line-clamp-3' : ''}`}>
              {project.description}
            </p>
        {shouldShowReadMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary text-xs font-medium mt-2 hover:underline transition-all"
          >
            {isExpanded ? 'read less' : 'read more'}
          </button>
        )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const OtherProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionLength = project.description.length;
  const shouldShowReadMore = descriptionLength > 100; // Approximate 2-3 lines

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="group h-full flex flex-col"
    >
      <div className="bg-card border border-border rounded-lg overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
        {/* Project Image */}
        {project.image && (
          <div className="relative overflow-hidden w-full aspect-video bg-secondary">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Project Info */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-bold mb-2 text-foreground">
            {project.title}
          </h3>
          
          <div className="flex-grow">
            <p className={`text-muted-foreground text-sm leading-relaxed ${!isExpanded && shouldShowReadMore ? 'line-clamp-3' : ''}`}>
              {project.description}
            </p>
            {shouldShowReadMore && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary text-xs font-medium mt-2 hover:underline transition-all"
              >
                {isExpanded ? 'read less' : 'read more'}
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const RegularProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionLength = project.description.length;
  const shouldShowReadMore = descriptionLength > 100; // Approximate 2-3 lines

  return (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 * index }}
    viewport={{ once: true }}
      className="project-card group h-full flex flex-col"
  >
    <div className="flex items-start justify-between mb-4">
      <Folder className="text-primary" size={40} strokeWidth={1} />
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground mono text-sm">{project.year}</span>
          {project.link && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
        <ExternalLink 
          size={18} 
          className="text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" 
        />
            </a>
          )}
      </div>
    </div>

      <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
      {project.title}
    </h3>
    
      <div className="mb-6 flex-grow">
        <p className={`text-muted-foreground text-sm leading-relaxed ${!isExpanded && shouldShowReadMore ? 'line-clamp-3' : ''}`}>
      {project.description}
    </p>
        {shouldShowReadMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary text-xs font-medium mt-2 hover:underline transition-all"
          >
            {isExpanded ? 'read less' : 'read more'}
          </button>
        )}
      </div>

    <div className="flex flex-wrap gap-2 mt-auto">
      {project.tech.map((tech) => (
        <span key={tech} className="text-xs mono text-muted-foreground">
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);
  const [api, setApi] = useState<CarouselApi>();

  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);
  
  // Separate projects with images and without images
  const projectsWithImages = regularProjects.filter(p => p.image);
  const projectsWithoutImages = regularProjects.filter(p => !p.image);
  
  // Display only projects with images initially (now includes Pheniko)
  const displayedProjects = projectsWithImages;

  // Auto-scroll carousel
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Loop back to start
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="projects" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-primary mono text-sm"
              >
                04.
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold mt-2 uppercase tracking-tight"
              >
                Featured Projects
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-muted-foreground text-sm mt-3 max-w-2xl"
              >
                A selection of my recent work showcasing modern design, clean code, and exceptional user experiences.
              </motion.p>
            </div>
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors uppercase text-sm tracking-wide"
            >
              View All Projects
            </a>
          </div>
        </motion.div>

        {/* Featured Projects Grid - 2 columns (2x2 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-left mb-6 text-foreground uppercase">
            Other Projects
          </h3>
        </motion.div>

        {/* Display projects with images - Auto Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full mb-8"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {displayedProjects.map((project, index) => (
              <CarouselItem key={project.title} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                <OtherProjectCard project={project} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Display remaining projects without images below */}
        {projectsWithoutImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsWithoutImages.map((project, index) => (
              <RegularProjectCard key={project.title} project={project} index={index + displayedProjects.length} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
