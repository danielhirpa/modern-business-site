import { getServices } from './api';

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 space-y-16">
      {/* Header Section */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-500/10 text-cyan-400 border border-cyan-500/20">
          What We Deliver
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
          Modern Digital Solutions
        </h1>
        <p className="text-slate-400 text-lg">
          Scalable web architectures, full-stack applications, and high-converting digital experiences tailored for growth.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)] flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              {/* Decorative Top Accent Bar */}
              <div className="w-12 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
              
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>

            {service.price && (
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                  Starting Investment
                </span>
                <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-sm">
                  ${service.price}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}