import Link from 'next/link';

export default function Portfolio() {
  // Your real projects styled as business-grade case studies
  const projects = [
    {
      title: "TaskFlow — Enterprise Productivity Manager",
      category: "Full-Stack Web App",
      description: "Built a high-performance task management web application featuring real-time state management, persistent local storage, and a sleek responsive dashboard.",
      problem: "Teams and freelancers struggle to organize daily workflows and track project completion without lagging interfaces.",
      solution: "Engineered a lightning-fast UI with Next.js and Tailwind CSS, reducing interaction latency and providing a clean visual hierarchy.",
      tech: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      liveDemo: "#", // Replace with your live deployment link later
    },
    {
      title: "ShopApex — Modern E-Commerce Mini Storefront",
      category: "E-Commerce / Retail",
      description: "Developed a data-driven shopping cart interface equipped with dynamic product filtering, cart calculations, and responsive product cards.",
      problem: "Local retail businesses lose online sales due to clunky, slow-loading checkout pages and messy mobile navigation.",
      solution: "Created a modular, component-based shopping platform with smooth DOM updates and instant mobile responsiveness.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Vite"],
      liveDemo: "#",
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Featured <span className="text-indigo-400">Case Studies</span>
        </h1>
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed">
          Real web applications built with modern frameworks designed to solve practical problems and drive results.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 grid md:grid-cols-2 gap-8 items-center hover:border-indigo-500/50 transition-all duration-300"
          >
            {/* Left Column: Details */}
            <div className="space-y-6">
              <span className="inline-block bg-indigo-950 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-800/50">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">{project.title}</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{project.description}</p>
              
              <div className="space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 text-xs sm:text-sm">
                <div>
                  <span className="font-semibold text-rose-400">The Challenge:</span> <span className="text-slate-400">{project.problem}</span>
                </div>
                <div>
                  <span className="font-semibold text-emerald-400">Our Solution:</span> <span className="text-slate-400">{project.solution}</span>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((techItem, techIdx) => (
                  <span key={techIdx} className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded-lg">
                    {techItem}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition"
                >
                  Request Similar Project
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M5 13h11.86l-5.6 5.6 1.42 1.42L21.42 12l-8.8-8.02-1.42 1.42 5.6 5.6H5v2z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Mockup / Placeholder Box */}
            <div className="bg-gradient-to-br from-slate-950 to-indigo-950/40 border border-slate-800 rounded-2xl h-64 sm:h-80 flex flex-col items-center justify-center p-6 text-center space-y-3 relative overflow-hidden group">
              <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="text-5xl">🚀</div>
              <h3 className="text-lg font-semibold text-slate-200">Interactive Application Preview</h3>
              <p className="text-xs text-slate-400 max-w-xs">
                Built with clean component architecture, robust hooks, and responsive Tailwind styling.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Banner */}
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-100">Have a custom project idea in mind?</h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Let’s talk about your business requirements and build a high-converting web presence tailored specifically to your goals.
        </p>
        <Link href="/contact" className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-xl transition">
          Get in Touch Today
        </Link>
      </div>
    </div>
  );
}