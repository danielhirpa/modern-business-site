import { Suspense } from 'react'; // ✅ Correct // or standard react suspense

async function getServices() {
  try {
    // Using a short revalidate or default fetch to satisfy Next.js prerendering rules
    const res = await fetch('http://127.0.0.1:8000/api/services/', { 
      next: { revalidate: 0 } 
    });
    
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Django backend offline:", error);
    return [];
  }
}

export default async function Services() {
  const servicesList = await getServices();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-3">
          Our Professional <span className="text-indigo-400">Services</span>
        </h1>
        <p className="text-slate-400 text-base">
          Delivering top-tier commercial construction, facility maintenance, and modern digital solutions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesList && servicesList.length > 0 ? (
          servicesList.map((service) => (
            <div 
              key={service.id} 
              className="group bg-slate-800/80 border border-slate-700/80 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col"
            >
              {/* Image Container */}
              {service.image_url ? (
                <div className="h-48 w-full overflow-hidden relative bg-slate-900">
                  <img 
                    src={service.image_url} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="h-48 w-full bg-slate-700/50 flex items-center justify-center text-slate-500 text-sm">
                  No Image Provided
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-700/60">
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider group-hover:underline inline-flex items-center space-x-1">
                    <span>Learn More</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-slate-400 py-12 bg-slate-800/40 rounded-2xl border border-slate-700">
            No services found. Ensure your Django server is running and add services via the Django admin panel.
          </div>
        )}
      </div>
    </div>
  );
}