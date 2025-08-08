import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MapPin, Phone, Mail, Linkedin, Github } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const portfolioProjects = [
    {
      id: 1,
      title: "Crypto Tracker Web App",
      category: "React, JavaScript, API",
      image: "src/images/crypto.jpg",
      description: "Real-time tracker showing cryptocurrency prices using APIs"
    },
    {
      id: 2,
      title: "PaathaDharma – Agri Insurance(still working on it)",
      category: "React, Node.js, MongoDB",
      image:"src/images/paathadharma.png",
      description: "Helps Indian farmers access insurance claims easily, with multi-language support"
    },
    {
      id: 3,
      title: "Psoriasis ML Classifier",
      category: "Python, TensorFlow",
      image: "src/images/psoriasis.jpg",
      description: "Detects psoriasis severity & suggests treatments using ML"
    },
    {
      id: 4,
      title: "Airline Reservation UI",
      category: "HTML, CSS, JavaScript",
      image: "src/images/air.jpg",
      description: "Frontend web app for booking flights"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold tracking-wider">VENISRI YALLAMPALLI</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Portfolio', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm tracking-wide transition-colors hover:text-stone-600 ${
                    activeSection === item.toLowerCase() ? 'text-stone-600 border-b border-stone-400' : ''
                  }`}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-stone-200 pt-4">
              {['Home', 'About', 'Portfolio', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-sm tracking-wide hover:text-stone-600"
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          <div className="space-y-8 flex-1 min-w-0">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-widest text-stone-800 truncate">
                VENISRI
              </h1>
              <div className="w-24 h-px bg-stone-400"></div>
              <p className="text-lg text-stone-600 leading-relaxed max-w-md">
                Frontend developer & computer science student passionate about creating intuitive, responsive web experiences. Bridging design and functionality through elegant code and user-first thinking.
              </p>
            </div>
            <div className="flex items-center space-x-4 text-sm tracking-wide text-stone-500">
              <span>2023</span>
              <div className="w-6 h-px bg-stone-300"></div>
              <span>2025</span>
            </div>
          </div>
          
          <div className="relative flex-shrink-0 w-full max-w-xs md:max-w-sm">
            <div className="aspect-[4/5] bg-stone-200 rounded-lg overflow-hidden">
              <img 
                src="src\images\1.jpg"
                alt="Venisri Yallampalli"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="text-xs font-semibold">VY</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-wide">ABOUT ME</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p>
                  Hi, I'm Venisri — a Computer Science student at VNR VJIET with a strong interest in frontend development, 
                  UI/UX design, and problem-solving. I'm experienced in HTML, CSS, JavaScript, React,C++ and C. 
                  I love building tools and interfaces that solve real-world problems for real people.
                </p>
                <p>
                  Currently pursuing my B.Tech in Computer Science Engineering with a CGPA of 9.63, I'm passionate about 
                  leveraging technology for social impact and creating meaningful digital experiences that make a difference.
                </p>
                <div className="pt-4">
  <a
    href="src/images/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center space-x-2 text-stone-800 hover:text-stone-600 transition-colors"
  >
    <span className="tracking-wide">VIEW RESUME</span>
    <ArrowRight size={16} />
  </a>
</div>

              </div>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2 tracking-wide">LOCATION</h3>
                  <p className="text-stone-600">Hyderabad, India</p>
                </div>
                <div className="bg-stone-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2 tracking-wide">EDUCATION</h3>
                  <p className="text-stone-600">B.Tech CSE, CGPA 9.63</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold tracking-wide">SKILLS</h3>
                <div className="space-y-3">
                  {[
                    { skill: 'React & JavaScript', level: 90 },
                    { skill: 'HTML & CSS', level: 95 },
                    { skill: 'Python', level: 85 },
                    { skill: 'UI/UX Design', level: 80 }
                  ].map((item) => (
                    <div key={item.skill}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{item.skill}</span>
                        <span className="text-sm text-stone-500">{item.level}%</span>
                      </div>
                      <div className="w-full bg-stone-200 h-1 rounded-full">
                        <div 
                          className="bg-stone-600 h-1 rounded-full transition-all duration-1000" 
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Quote/Testimonial Section */}
<section className="bg-rose-50 py-12 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-lg italic text-stone-700 leading-relaxed mb-4">
      "I believe in building tools and interfaces that solve real-world problems for real people, bridging the gap between design and functionality."
    </p>
    <p className="text-base font-semibold text-stone-800">– Venisri Yallampalli</p>
  </div>
</section>


      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 items-center">
            <h2 className="text-4xl font-bold mb-4 tracking-wide">PORTFOLIO</h2>
            <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed">
              A selection of my recent work showcasing various design disciplines and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-stone-500 tracking-wide uppercase">{project.category}</p>
                  <h3 className="text-xl font-semibold group-hover:text-stone-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 tracking-wide text-center">EXPERIENCE</h2>
          
          <div className="space-y-12">
            {[
              {
               company: "Viswam.AI",
               position: "AI intern",
               period: "2025",
               description: "Working on frontend development and AI integration for real-world problems, focusing on user experience and responsive design."
              },
              {
               company: "Infosys Springboard",
               position: "Virtual Intern(Artificial Intelligence)",
               period: "2025",
               description:"Real-world development training through comprehensive virtual internship program."
              }
            ].map((job, index) => (
              <div key={index} className="grid md:grid-cols-4 gap-8 items-start">
                <div className="md:text-right">
                  <p className="text-sm text-stone-500 tracking-wide">{job.period}</p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold mb-2">{job.position}</h3>
                  <p className="text-stone-600 mb-3 font-medium">{job.company}</p>
                  <p className="text-stone-600 leading-relaxed">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-wide">GET IN TOUCH</h2>
            <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and collaborations. Let's create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto">
                <MapPin size={20} className="text-stone-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">LOCATION</h3>
               <p className="text-stone-600">Hyderabad, India</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto">
                <Phone size={20} className="text-stone-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">PHONE</h3>
               <p className="text-stone-600">+91 7780699518</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto">
                <Mail size={20} className="text-stone-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">EMAIL</h3>
               <p className="text-stone-600">venisri870@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mt-12">
           <a href="https://www.linkedin.com/in/venisri-yallampalli-569670295/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center hover:bg-stone-200 transition-colors">
              <Linkedin size={20} className="text-stone-600" />
            </a>
           <a href="https://github.com/Venisriyallampalli" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center hover:bg-stone-200 transition-colors">
              <Github size={20} className="text-stone-600" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-stone-800 text-stone-300 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm tracking-wide">
            © 2025 VENISRI YALLAMPALLI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
