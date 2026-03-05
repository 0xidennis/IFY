

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download,
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Cloud,
  ChevronRight,
  MapPin,
  Phone,
  Calendar
} from 'lucide-react';

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    { category: 'Frontend', icon: Code, items: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'] },
    { category: 'Backend', icon: Server, items: ['Node.js', 'Express.js', 'REST APIs', 'POSTMAN'] },
    { category: 'Database', icon: Database, items: ['MongoDB', 'PostgreSQL', 'Firebase'] },
    // { category: 'DevOps & Cloud', icon: Cloud, items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux', 'Git'] },
    { category: 'Mobile', icon: Smartphone, items: ['React Native', ] }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Fronted e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=400',
      tech: ['React', 'Tailwind', 'Socket.io','chart.js',],
      github: 'https://github.com/0xidennis',
      live: 'https://fromafricab2b.com/ ',
      featured: true
    },
    {
      title: ' E-commerce',
      description: 'Fronted e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800&h=400',
      tech: ['React', 'Tailwind', 'Socket.io', ],
      github: 'https://github.com/0xidennis',
      live: 'https://www.princewillworld.com/',
      featured: true
    },
    {
      title: 'Loan agent web app',
      description: 'The web is for users to apply for loans , it was build with react ,tailwind and other libraries.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=400',
      tech: ['React', 'Tailwind','CONTEXT API'],
      github: 'https://github.com/0xidennis',
      live: 'https://mega-smoky-alpha.vercel.app/',
      featured: false
    },
    {
      title: 'Porfolio website',
      description: 'I collaborated with a group of teams to achieve it,Is website that shows upcoming programs and pass students with testimonies.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800&h=40',
      tech: ['React', 'Tailwind', 'Framer-motion'],
      github: 'https://github.com/0xidennis',
      // live: 'https://example.co',
      featured: false
    },
    {
      title: 'Admin Dashboard',
      description: 'I collaborated with a group of teams to achieve it,Is website that shows upcoming programs and pass students with testimonies.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=400',
      tech: ['React', 'Tailwind', 'Framer-motion', 'Recharts','context api','chart.js'],
      github: 'https://github.com/0xidennis',
      live: 'https://admin-africa-dnai.vercel.app/',
      featured: false
    }
  ];

  const experience = [
    {
      company: 'FromAfrica',
      position: 'Frontend Developer',
      duration: 'Jan 2025 - jan 2026',
      description: 'Developed responsive web applications and collaborated with UX/UI designers to create user-friendly interfaces.',
      achievements: [
        'Built responsive web applications',
        'Reduced page load time by 50%',
        'Implemented modern React patterns and hooks'
      ]
    },
    {
      company: 'Sail Innovations Lab ',
      position: ' Full Stack Developer',
      duration: 'Aug 2024 - March 2025',
      description: 'Technical lead, me and my team built a responsive website for an organization.',
      achievements: [
        'Improved application performance by 40%',
        'Technical lead of 4 developers',
        
      ]
    },
    
    {
      company: 'DigiPlus',
      position: 'Intern',
      duration: 'march 2023 - June 2023',
      description: 'Created websites for clients using modern web technologies and content management systems.',
      achievements: [
        'Delivered  client projects on time',
        'Learned full-stack development',
        'Collaborated with design and marketing teams'
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
               IFY
              </span>
            </div>
            
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Menewe Ifeanyi</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A passionate <span className="font-semibold text-blue-600">Full Stack Developer(Fronted heavy)</span> creating
                amazing digital experiences through clean code and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  View My Work
                </button>
                <a
                  href="/Menewe cv.docx.pdf"
                  download
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
              <div className="flex gap-6 mt-8 justify-center lg:justify-start">
                <a href="https://github.com/0xidennis?tab=overview&from=2025-09-01&to=2025-09-24" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/menewe-ifeanyi/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:meneweifeanyi1@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="/menewe.jpg"
                    alt="menewe ifeanyi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Code className="text-blue-600" size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I'm a dedicated full-stack developer with 2+ years of experience creating robust web applications
              and solving complex technical challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Started as a curious problem-solver who discovered the world of programming. What began as a hobby
                quickly became a passion. I love building applications that make a real difference in people's lives.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My expertise spans both frontend and backend technologies, with a strong focus on creating
                scalable, maintainable, and user-friendly applications.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">2+ Years</h4>
                  <p className="text-gray-600 text-sm">Experience</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">6+ Projects</h4>
                  <p className="text-gray-600 text-sm">Completed</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">8+ Technologies</h4>
                  <p className="text-gray-600 text-sm">Mastered</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">70% Remote</h4>
                  <p className="text-gray-600 text-sm">Available</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/Ifeanyi.jpg"
                alt="Developer workspace"
                className="rounded-lg shadow-lg w-full object-cover h-150"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <p className="text-lg text-gray-600">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.category} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <skill.icon className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">
              A selection of projects that showcase my skills and experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${project.featured ? 'lg:col-span-2' : ''}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-lg text-gray-600">
              My professional journey and career highlights
            </p>
          </div>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.position}</h3>
                    <p className="text-blue-600 font-medium">{job.company}</p>
                  </div>
                  <div className="flex items-center text-gray-500 mt-2 lg:mt-0">
                    <Calendar size={16} className="mr-2" />
                    {job.duration}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="space-y-2">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start">
                      <ChevronRight size={16} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <p className="text-lg text-gray-600">
              Have a project in mind? I'd love to hear about it
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Whether you're a company looking to hire, or you're looking for a
                developer to help build your ideas.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-blue-600 mr-4" size={20} />
                  <span className="text-gray-700">meneweifeanyi1@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-600 mr-4" size={20} />
                  <span className="text-gray-700">09034340791</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-600 mr-4" size={20} />
                  <span className="text-gray-700">lagos, nigeria</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-gray-700">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  onClick={() => alert('Thanks for your interest!')}
                  className="w-full bg-gradient-
to-r from-blue-600 to-purple-600 text-gray-500 font-medium py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                    Send Message
                </button>
           </div>
          </div>
        </div>
      

      


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-19">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              IFYDEV
            </h3>
            <p className="text-gray-400 mb-6">
              Building amazing digital experiences, one line of code at a time.
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://github.com/0xidennis" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/menewe-ifeanyi/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:meneweifeanyi1@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Menewe ifeanyi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
    </section>
    </div>

    
    
  )
}

export default Portfolio