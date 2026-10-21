export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-indigo-400 mb-4">About Our Company</h1>
      <p className="text-slate-300 leading-relaxed mb-6">
        With years of hands-on experience serving our local community, our team takes pride in delivering exceptional craftsmanship and reliable customer service. Whether you need comprehensive construction support, commercial cleaning, or digital growth solutions, we treat every project like our own.
      </p>
      <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl">
        <h3 className="text-xl font-semibold text-white mb-2">Why Choose Us?</h3>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li>Licensed and trusted local professionals</li>
          <li>Transparent pricing with no hidden fees</li>
          <li>Dedicated support tailored to your business needs</li>
        </ul>
      </div>
    </div>
  );
}