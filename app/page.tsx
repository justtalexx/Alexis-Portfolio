"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, FileText, Code, Server, Terminal, ExternalLink, ChevronDown, Database, Cpu, Layers, Cloud } from "lucide-react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-blue-500/30">
      
      {/* 1. BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
        <ShootingStars />
        <StarsBackground />
      </div>

      {/* 2. STICKY HEADER */}
      <AnimatePresence>
        {scrolled && (
          <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4"
          >
            <div className="max-w-5xl mx-auto flex justify-between items-center">
              <span className="font-bold text-white text-xl tracking-tight">AO</span>
              <div className="flex gap-6 text-sm font-medium text-neutral-400">
                <Link href="#about" className="hover:text-blue-400 transition-colors">About</Link>
                <Link href="#experience" className="hover:text-blue-400 transition-colors">Experience</Link>
                <Link href="#projects" className="hover:text-blue-400 transition-colors">Projects</Link>
                <Link href="#contact" className="hover:text-blue-400 transition-colors">Contact</Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Hello, I'm <br />
              <span className="text-blue-500">Alexis Orellana</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-neutral-400 font-light mb-10">
              Software Developer.
            </h2>

            {/* BUTTONS */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link 
                href="#projects" 
                className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
              >
                View My Work
              </Link>
              
              <a 
                href="mailto:alexorell121@gmail.com"
                className="px-8 py-3 rounded-full border border-neutral-700 text-neutral-300 font-medium hover:bg-neutral-800 hover:text-white hover:border-white transition-all flex items-center gap-2"
              >
                <Mail size={18} /> Get In Touch
              </a>
            </div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 text-neutral-600"
          >
            <ChevronDown size={32} />
          </motion.div>
        </section>


        {/* --- 01. ABOUT ME --- */}
        <section id="about" className="max-w-4xl mx-auto py-24 px-6 scroll-mt-20">
          <SectionTitle number="01" title="About Me" />
          
          <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
            <p>
              I am a Computer Science senior at the <b>University of Houston</b> (Class of 2026) with a minor in Mathematics. 
              My interests span systems programming, algorithm optimization, and scalable cloud infrastructure.
            </p>
            <p>
              Currently, I serve as the <b>Director of Operations</b> for CougarCS, where I manage logistics and lead teams. 
              Previously, I interned at <b>AWS</b>, where I automated CI/CD pipelines and practiced maintaining 99.9% uptime for cloud applications.
            </p>
            <p>
              I value precision and efficiency in my work. Whether I’m debugging a distributed system or writing a Bash script to automate a repetitive task, I focus on building solutions that are practical, reliable, and easy to maintain. I care about understanding problems deeply and choosing straightforward approaches that scale well over time.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <Terminal className="text-blue-500" size={20}/> Technologies I Work With
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <TechBadge icon="☕" name="Java" />
              <TechBadge icon="🐍" name="Python" />
              <TechBadge icon="⚙️" name="C++" />
              <TechBadge icon="☁️" name="AWS" />
              <TechBadge icon="🐧" name="Linux" />
              <TechBadge icon="🗄️" name="MySQL" />
              <TechBadge icon="🐚" name="Bash" />
              <TechBadge icon="🐙" name="Git" />
            </div>
          </div>
        </section>


        {/* --- 02. EXPERIENCE --- */}
        <section id="experience" className="max-w-4xl mx-auto py-24 px-6 scroll-mt-20">
           <SectionTitle number="02" title="Experience" />
           
           <div className="space-y-12">
             <ExperienceItem 
                role="Cloud Support Engineering Intern" 
                company="Amazon Web Services (AWS)"
                date="May 2025 – Aug 2025"
                desc={[
                  "Automated software delivery by constructing a CI/CD pipeline with AWS CodePipeline.",
                  "Deployed a fault-tolerant web app using ALB, ASG, and EC2, achieving 99.9% uptime.",
                  "Resolved complex global cloud challenges using advanced AWS diagnostic tools."
                ]}
             />
             
             <ExperienceItem 
                role="Director of Operations" 
                company="CougarCS"
                date="Dec 2025 – Present"
                desc={[
                  "Manage a 4-person Operations Committee for event setup and logistics.",
                  "Orchestrate resource procurement for large-scale events while maintaining budget compliance.",
                  "Implement strict inventory control protocols for 100% asset accountability."
                ]}
             />
           </div>
        </section>


        {/* --- 03. PROJECTS --- */}
        <section id="projects" className="max-w-6xl mx-auto py-24 px-6 scroll-mt-20">
           <SectionTitle number="03" title="Projects" />

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <ProjectCard 
                title="Serverless Metadata Pipeline"
                tags={["AWS Lambda", "DynamoDB", "Step Functions"]}
                desc="Architected an event-driven ETL pipeline handling file ingestion via S3 and NoSQL storage. Scales to handle 10,000 concurrent uploads with zero server management."
                icon={<Cloud className="text-blue-400" />}
                repoUrl="https://github.com/justtalexx" 
              />

              <ProjectCard 
                title="Workshop Management System"
                tags={["React", "Node.js", "MySQL"]}
                desc="Full-stack RBAC system for student makers. Engineered complex SQL triggers for business logic and a secure API for managing project materials."
                icon={<Database className="text-purple-400" />}
                repoUrl="https://github.com/justtalexx" 
              />

              <ProjectCard 
                title="Distributed Trading Platform"
                tags={["Java", "Spring Boot", "RabbitMQ"]}
                desc="Decoupled market data ingestion from trade execution using RabbitMQ to prevent blocking during volatility. Implemented precise currency handling with Java BigDecimal."
                icon={<Cpu className="text-green-400" />}
                repoUrl="https://github.com/justtalexx"
              />
           </div>
        </section>


        {/* --- 04. CONTACT --- */}
        <section id="contact" className="max-w-4xl mx-auto py-24 px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
             I am currently looking for full-time opportunities in DevOps and Software Engineering. 
             Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          
          <div className="flex justify-center gap-6">
             <a href="mailto:alexorell121@gmail.com" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium shadow-[0_0_20px_rgba(37,99,235,0.3)]">
               Say Hello
             </a>
             <Link href="/resume.pdf" target="_blank" className="px-8 py-3 border border-neutral-700 text-neutral-300 rounded-lg hover:bg-neutral-800 transition-all font-medium flex items-center gap-2">
               <FileText size={18}/> Resume
             </Link>
          </div>

          <div className="mt-20 border-t border-neutral-900 pt-8 flex justify-center gap-6 text-neutral-600">
             <a href="https://github.com/justtalexx" target="_blank" className="hover:text-white transition-colors"><Github /></a>
             <a href="https://linkedin.com/in/alexis-orellana-ao" target="_blank" className="hover:text-white transition-colors"><Linkedin /></a>
          </div>
        </section>

      </main>
    </div>
  );
}

// --- COMPONENTS ---

function SectionTitle({ number, title }: { number: string, title: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="text-blue-500 font-mono text-xl">{number}.</span>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <div className="h-[1px] bg-neutral-800 flex-grow max-w-[200px]"></div>
    </div>
  );
}

function TechBadge({ icon, name }: { icon: string, name: string }) {
  return (
    <div className="flex items-center gap-3 bg-neutral-900/50 border border-neutral-800 px-4 py-3 rounded-lg hover:border-blue-500/30 transition-colors cursor-default hover:scale-105 transform duration-200">
      <span className="text-lg">{icon}</span>
      <span className="text-neutral-300 font-mono text-sm">{name}</span>
    </div>
  );
}

function ExperienceItem({ role, company, date, desc }: { role: string, company: string, date: string, desc: string[] }) {
  return (
    <div className="relative pl-8 border-l border-neutral-800 hover:border-blue-500/50 transition-colors duration-300">
      <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
      <h3 className="text-xl font-bold text-white">{role}</h3>
      <p className="text-blue-400 font-mono text-sm mb-4">{company} • {date}</p>
      <ul className="space-y-2 text-neutral-400">
        {desc.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-neutral-600 mt-1.5">▹</span> 
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, tags, desc, icon, repoUrl }: { title: string, tags: string[], desc: string, icon: React.ReactNode, repoUrl: string }) {
  return (
    <a 
      href={repoUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block bg-neutral-900/30 border border-neutral-800 rounded-xl p-6 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_10px_30px_-15px_rgba(37,99,235,0.2)] transition-all duration-300 group cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-neutral-800 rounded-lg group-hover:bg-blue-500/10 transition-colors">
          {icon}
        </div>
        <div className="flex gap-3 text-neutral-500">
           <Github size={18} className="hover:text-white transition-colors"/>
           <ExternalLink size={18} className="hover:text-white transition-colors"/>
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
      
      <p className="text-neutral-400 text-sm mb-6 leading-relaxed h-[80px]">
        {desc}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-mono text-blue-400/80 bg-blue-400/5 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}