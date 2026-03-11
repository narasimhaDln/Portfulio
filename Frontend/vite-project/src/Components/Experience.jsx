import { CalendarDays, Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Software Developer",
    company: "MS TECH HIVE",
    duration: "11/2025 - Present",
    description: "Developed and maintained multiple scalable web applications using the MERN stack and Next.js, including complex hospital and billing management systems.",
    highlights: [
      "MSCureChain: Built a multi-tenant Hospital Management System with tenant-based data isolation and RBAC using JWT.",
      "MSCureChain: Developed core healthcare workflows and designed tenant-aware backend architecture securely separating hospital data.",
      "MSCureChain: Integrated real-time operational flow between departments and built responsive UI using Next.js, TailwindCSS, and Zustand.",
      "MS Billing Softwares: Developed 7 customized billing management systems for various industries using the MERN stack and Next.js.",
      "MS Billing Softwares: Implemented automated billing, inventory management, invoice generation, and sales analytics dashboards.",
      "SujanaGold: Developed a full-stack jewellery billing system with gold invoice generation, automatic weight-based calculations, and old-gold exchange handling."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "DEZIGN SHARKS",
    duration: "08/2025 - 11/2025",
    description: "Worked on building web applications and gained hands-on experience mainly in digital marketing websites.",
    highlights: [
      "Built dynamic, responsive front-end interfaces for digital marketing websites.",
      "Collaborated on full-stack feature implementation and optimizing user experiences."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 md:py-16 flex flex-col scroll-mt-24">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
          Work <span className="text-blue-400">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-80 mb-6"></div>
        <p className="text-zinc-400 max-w-2xl leading-relaxed text-lg">
          My professional journey and the roles where I've grown as a developer over the past 2+ years.
        </p>
      </div>

      <div className="relative border-l-2 border-zinc-800 ml-3 sm:ml-6 pb-4">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 relative pl-8 sm:pl-12 group">
            {/* Timeline dot */}
            <div className="absolute w-6 h-6 bg-zinc-900 border-2 border-blue-500 rounded-full -left-[13px] top-1 group-hover:bg-blue-500 transition-colors duration-300"></div>
            
            <div className="bg-[#18181b] border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-zinc-700 transition-colors shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                    {exp.role}
                  </h3>
                  <p className="text-zinc-400 font-medium mt-1">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800 w-fit">
                  <CalendarDays className="w-4 h-4" />
                  {exp.duration}
                </div>
              </div>
              
              <p className="text-zinc-400 leading-relaxed mb-6">
                {exp.description}
              </p>
              
              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-300">
                    <span className="text-blue-500 mt-1.5 shadow-[0_0_10px_rgba(59,130,246,0.5)] bg-blue-500 rounded-full w-1.5 h-1.5 shrink-0"></span>
                    <span className="text-sm leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
