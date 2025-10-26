import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

const features = [
  {
    title: "Create Tickets",
    description: "Quickly create and organize tickets with an intuitive interface",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Track Progress",
    description: "Monitor ticket status and team performance in real-time",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    gradient: "from-green-500 to-emerald-600"
  },
  {
    title: "Resolve Fast",
    description: "Streamline workflows and close tickets efficiently",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-purple-500 to-indigo-600"
  }
];

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <section className="bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              Why Choose Ticket Easy?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Powerful, intuitive, and built to help your team stay productive and focused.
            </p>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 shadow-lg rounded-2xl p-8 text-center border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
