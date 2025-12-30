import React, { useState } from "react";
import './App.css';
import image from './assets/boy.png';

const LandingPage = () => {
  // State for Mobile Navbar Toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0B0F19] text-white font-sans selection:bg-[#3B82F6]/30">
      
      {/* --- Sticky Navbar --- */}
      <nav className="bg-[#0B0F19]/90 backdrop-blur-md fixed w-full z-50 top-0 start-0 border-b border-white/10">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3">
            <span className="self-center text-xl font-bold whitespace-nowrap">Bank<span className="text-blue-600">.</span></span>
          </a>
          <div className="flex md:order-2 space-x-3">
            <button className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full text-sm px-6 py-2 transition-all">Get Started</button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-400 rounded-lg md:hidden hover:bg-white/10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
            </button>
          </div>
          <div className={`${isOpen ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white/10 rounded-xl bg-[#0B0F19] md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li><a href="#" className="block py-2 px-3 text-gray-400 hover:text-blue-500">Home</a></li>
              <li><a href="#" className="block py-2 px-3 text-gray-400 hover:text-blue-500">About</a></li>
              <li><a href="#" className="block py-2 px-3 text-gray-400 hover:text-blue-500">OurApp</a></li>
              <li><a href="#" className="block py-2 px-3 text-gray-400 hover:text-blue-500">Services</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* --- Main Content Wrapper --- */}
      <div className="flex flex-col">
        
        {/* 1. Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font text-5xl lg:text-7xl mb-6 font-bold text-white leading-tight">
                Banking Has <br /> Become <span className="text-blue-600">easy</span>
              </h1>
              <p className="mb-8 leading-relaxed text-gray-400 text-lg max-w-lg">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-10 py-4 shadow-lg transition-transform hover:scale-105">
                Let's get started
              </button>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
               <div className="absolute inset-0 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
               <img className="relative z-10 object-cover object-center rounded-3xl" alt="hero" src={image}/>
            </div>
          </div>
        </section>

        {/* 2. Payment Solution Section */}
        <section className="py-24 px-6 border-t border-white/5 bg-[#0B0F19]">
          <div className="max-w-7xl mx-auto text-center mb-20">
             <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto text-white">
                Transform your checkout experience with our <br className="hidden md:block" />
                <span className="text-blue-600">payment initiation</span> and <span className="text-blue-600">request</span> solution.
              </h2>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative flex justify-center items-center h-100 lg:h-125">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" className="absolute w-[90%] rounded-lg opacity-40" alt="bg"/>
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400" className="absolute left-0 bottom-0 w-[45%] rounded-[2.5rem] border-4 border-gray-900 shadow-2xl z-20" alt="mobile"/>
                <div className="absolute right-0 top-0 w-[40%] bg-white p-4 rounded-xl shadow-2xl z-10 text-black text-center">
                  <div className="w-16 h-16 bg-gray-200 mx-auto mb-2 rounded"></div>
                  <p className="text-[10px] font-bold">Scan to pay £500.00</p>
                </div>
              </div>
             <div className="space-y-12">
            
            {/* Feature 1 */}
            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Faster</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Customers get seamless checkouts with no card details to enter; merchants receive real-time alerts to confirm the outcomes of transactions.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-6 group">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Cost efficient</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  100% Free payments. No charges for failed or declined transactions. No chargebacks. Complete data for reconciliation. Super simple integration.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-6 group">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">More secure</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Drastically reduced fraud rates through SCA compliancy. No Personal Identifiable Information (PII) disclosed to merchants. No PCI DSS requirements.
                </p>
              </div>
            </div>

          </div>
          </div>
        </section>

        {/* 3. Mobile App Section */}
        <MobileAppSection />

        {/* 4. Services Section */}
        <ServicesSection />

        {/* 5. Footer Section */}
        <Footer />

      </div>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const FeatureItem = ({ color, title, desc }) => (
  <div className="flex items-start gap-6 group">
    <div className={`shrink-0 w-14 h-14 rounded-2xl bg-${color}-500/10 flex items-center justify-center text-${color}-500 group-hover:bg-${color}-500 group-hover:text-white transition-all`}>
      <div className="w-6 h-6 border-2 border-current rounded-full" />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const MobileAppSection = () => {
  return (
    <section className="bg-[#0B0F19] py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="w-full lg:w-1/2 space-y-8 text-left">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Mobile App</span>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">Just tap app <br /> and go!</h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-md">Get interest on your money, mobile has quickly become an important tool for banks.</p>
          <button className="group flex items-center justify-between border-2 border-blue-600 rounded-2xl px-6 py-4 w-full max-w-sm hover:bg-blue-700 transition-all">
            <span className="font-semibold text-lg">Frequently asked questions</span>
            <div className="bg-blue-600 group-hover:bg-blue-500 p-1 rounded-lg">
              <svg className="h-6 w-6 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 11l5-5m0 0l5 5m-5-5v12" /></svg>
            </div>
          </button>
        </div>
        
        {/* --- FIXED RIGHT SECTION --- */}
        <div className="w-full lg:w-1/2 relative flex justify-center">
          {/* Fixed width/height classes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
          
          {/* Fixed width and aspect-ratio syntax */}
          <div className="relative z-10 w-[280px] md:w-[320px] bg-black rounded-[3rem] border-[8px] border-gray-900 shadow-2xl aspect-[9/19] overflow-hidden">
            <div className="bg-white h-full w-full p-4 flex flex-col">
              <div className="flex justify-between items-center text-[10px] text-black font-bold mb-4"><span>1:64</span><span>8%</span></div>
              
              {/* Fixed typo: bg-lineat -> bg-gradient */}
              <div className="bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl p-4 text-white shadow-lg mb-4">
                <p className="text-[10px] opacity-80">BALANCE</p>
                <div className="flex justify-between items-end mt-2"><span className="text-2xl font-bold">5,000</span><span className="text-xs">GBP</span></div>
              </div>
              
              <div className="space-y-2">
                {[1,2,3].map(i => <div key={i} className="h-10 bg-gray-50 rounded-xl border border-gray-100"></div>)}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    { title: "Warranty documents", desc: "An obligation in which a third party agrees to repay a debt." },
    { title: "Quick credit", desc: "Money and tangible provided to you by the creditor for use." },
    { title: "Create deposit", desc: "Return the money after a certain period of time with interest." }
  ];
  return (
    <section className="bg-[#0B0F19] py-24 px-6 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[#3B82F6] font-bold tracking-widest text-sm uppercase">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Get financial visibility</h2>
          <p className="text-gray-400 mt-6 max-w-2xl">Sight Bank team does everything to make banking services convenient and safe.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            {services.map((item, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="shrink-0 w-14 h-14 bg-[#FF7D54] rounded-xl flex items-center justify-center text-white shadow-lg"></div>
                <div><h3 className="text-xl font-bold mb-2">{item.title}</h3><p className="text-gray-400 text-sm max-w-xs">{item.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden bg-white aspect-[4/3]">
             <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="expert"/>
             <div className="absolute bottom-0 right-0 bg-white p-8 rounded-tl-[2.5rem] text-black font-bold text-xl">Get good service ↗</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] text-white pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="text-2xl font-bold">Bank<span className="text-[#3B82F6]">.</span></div>
          <p className="text-gray-400 text-sm">Making banking easy for 18 million customers.</p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-gray-400 text-sm"><li>About Us</li><li>Careers</li></ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-gray-400 text-sm"><li>Help Center</li><li>Contact</li></ul>
        </div>
        <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
          <h4 className="font-bold mb-4">Join Us</h4>
          <form className="space-y-3">
            <input type="email" placeholder="Your email" className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-[#3B82F6] outline-none"/>
            <button className="w-full bg-[#3B82F6] font-bold py-3 rounded-xl hover:bg-blue-700 transition-all">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs border-t border-white/5 pt-8">© 2025 Bank. All rights reserved.</div>
    </footer>
  );
};

export default LandingPage;