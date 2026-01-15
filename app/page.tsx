"use client";
import Link from "next/link";
import { Github, Linkedin, Mail, FileText, Code, CloudLightning, Server, Terminal, ExternalLink, Gamepad2 } from "lucide-react";export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 md:p-24 font-sans z-10 relative">
      <div className="max-w-5xl w-full space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px, auto)]">

          <Card className="md:col-span-2 row-span-1 flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
              <span className="text-blue-500">Hi,I'm Alexis!</span>
            </h1>
            <p className="text-neutral-400 text-lg">
              Software Developer & Director of Operations @ CougarCS.
            </p>
          </Card>
          
          <Card className="md:col-span-2 md:row-span-2 flex flex-col justify-between">
            <div>
                <h2 className="text-xl font-bold text-white mb-2">About Me</h2>
                <p className="text-neutral-400 text-sm leading-relaxed">
                I am a senior Computer Science student at the University of Houston, graduating in 2026.At my core, I am a builder who is deeply interested with technology and how things work.While I have a strong background in Full Stack development, my true passion lies in Cloud Infrastructure and DevOps. I am actively diving deep into Cloud Infrastructure and DevOps practices, aiming to build resilient Full Stack applications that are as efficient as they are reliable.
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed mt-4">
                Currently, I am diving deep into Containers, Kubernetes, and AWS to enhance my understanding of scalable infrastructure. I am eager to connect with like-minded professionals and explore opportunities in software development and cloud engineering.
                </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-green-400 bg-green-400/10 w-fit px-3 py-1 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Open to Work and Collaborate!
            </div>
          </Card>

          <Link href="/resume.pdf" className="md:col-span-1 group">

            <Card className="h-full flex flex-col items-center justify-center gap-4 hover:bg-neutral-800/80 cursor-pointer">

                <div className="p-4 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">

                <FileText className="w-8 h-8 text-blue-400" />

                </div>

                <span className="font-semibold text-neutral-300 group-hover:text-white">Resume</span>

            </Card>

          </Link>

          <Card className="md:col-span-1 bg-gradient-to-br from-purple-900/20 to-neutral-900/50 flex flex-col items-center justify-center text-center">
             <Code className="w-8 h-8 text-purple-400 mb-3" />
             <div className="text-xs font-mono text-neutral-400 space-y-1">
               <p className="bg-neutral-800 px-2 py-1 rounded">Python • C++ </p>
               <p className="bg-neutral-800 px-2 py-1 rounded">TypeScript</p>
               <p className="bg-neutral-800 px-2 py-1 rounded">Postgre • AWS</p>
               <p className="bg-neutral-800 px-2 py-1 rounded">Linux</p>
             </div>
          </Card>

          <Card className="md:col-span-4 flex items-center justify-between py-6">
            <h2 className="text-2xl font-bold text-neutral-500 hidden md:block">Let's Connect</h2>
            <div className="flex gap-4 w-full md:w-auto justify-between md:justify-end">
              <SocialLink href="https://github.com/justtalexx" icon={<Github size={20} />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/alexis-orellana-ao/" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialLink href="mailto:alexorell121@gmail.com" icon={<Mail size={20} />} label="Email" />
            </div>
          </Card>
        </div>

        <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <CloudLightning className="text-blue-400" /> Featured Projects
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="group flex flex-col justify-between min-h-[250px] hover:border-blue-500/50">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Houston Pulse (WIP)</h4>
                            <ExternalLink className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
                        </div>
                        <p className="text-neutral-400 text-sm mb-4">
                            An event aggregation platform built with Next.js and AWS Serverless. 
                            It polls reliable sites for local events and aggregates them into a single dashboard.
                        </p>
                        <div className="flex gap-2 flex-wrap mb-4">
                            <Badge>AWS Lambda</Badge>
                            <Badge>EventBridge</Badge>
                            <Badge>TypeScript</Badge>
                        </div>
                    </div>
                </Card>

                <Card className="group flex flex-col justify-between min-h-[250px] hover:border-purple-500/50">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Workshop Manager System</h4>
                            <Terminal className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
                        </div>
                        <p className="text-neutral-400 text-sm mb-4">
                            Full-stack application with Role-Based Access Control (RBAC). 
                            Engineered complex SQL triggers to automate business logic and built a secure RESTful API.
                        </p>
                        <div className="flex gap-2 flex-wrap mb-4">
                            <Badge>React</Badge>
                            <Badge>Node.js</Badge>
                            <Badge>Postgres</Badge>
                        </div>
                    </div>
                </Card>

                  <Card className="group flex flex-col justify-between min-h-[250px] hover:border-blue-500/50">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Serverless ETL Pipeline</h4>
                            <Server className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
                        </div>
                        <p className="text-neutral-400 text-sm mb-4">
                            Automated data extraction pipeline using AWS Step Functions and Lambda. 
                            Handles file ingestion via S3 and stores processed metadata in DynamoDB with 99.9% uptime reliability.
                        </p>
                        <div className="flex gap-2 flex-wrap mb-4">
                            <Badge>AWS Lambda</Badge>
                            <Badge>Step Functions</Badge>
                            <Badge>DynamoDB</Badge>
                        </div>
                    </div>
                </Card>

                <Card className="group flex flex-col justify-between min-h-[250px] hover:border-purple-500/50">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">The Tides of Andúnië</h4>
                            <Gamepad2 className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
                        </div>
                        <p className="text-neutral-400 text-sm mb-4">
                            A team-based game project built in Unity. I contributed art assets using Aseprite and implemented core gameplay mechanics.
                        </p>
                        <div className="flex gap-2 flex-wrap mb-4">
                            <Badge>Unity</Badge>
                            <Badge>C#</Badge>
                            <Badge>Aseprite</Badge>
                        </div>
                    </div>
                </Card>

            </div>
        </div>

        <div className="text-center text-neutral-600 text-sm py-4">
            © {new Date().getFullYear()} Alexis. Built with Next.js & Tailwind.
        </div>

      </div>
    </div>
  );
}

// Reusable Card stuf
function Card({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={`
      relative overflow-hidden rounded-3xl p-6 
      bg-neutral-900/60 border border-white/10 backdrop-blur-md
      transition-all duration-300 ease-in-out
      hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:-translate-y-1
      ${className}
    `}>
      {children}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300 font-mono">
            {children}
        </span>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-full text-neutral-300 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 font-medium text-sm"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
