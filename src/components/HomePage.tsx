import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const setRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el;
  };

  // Scroll to capabilities section
  const scrollToCapabilities = () => {
    const capabilitiesSection = document.getElementById('capabilities');
    if (capabilitiesSection) {
      capabilitiesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Scroll to contact
  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  useEffect(() => {
    setIsVisible(true);

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
        if (entry.target instanceof HTMLElement) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  // Auto-advance carousel with pause functionality
  useEffect(() => {
    if (isAutoPaused) return; // Don't auto-advance if paused

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % capabilities.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPaused]);

  const nextSlide = () => {
    setIsAutoPaused(true); // Pause auto-rotation when user interacts
    setCurrentSlide((prev) => (prev + 1) % capabilities.length);
  };

  const prevSlide = () => {
    setIsAutoPaused(true); // Pause auto-rotation when user interacts
    setCurrentSlide((prev) => (prev - 1 + capabilities.length) % capabilities.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPaused(true); // Pause auto-rotation when user interacts
    setCurrentSlide(index);
  };

  const capabilities = [
    {
      title: "State-of-the-Art Equipment",
      description: "Jet-Edge equipment capable of cutting any shape in a variety of materials",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    { 
      title: "Versatile File Support",
      description: "We work with all computer formats, line art, and technical drawings",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Large Capacity",
      description: "Handle materials including plates 12' x 30' up to 12,000 lbs",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v1M7 4V3a1 1 0 011-1v0M7 4l1 16h8l1-16M7 4h10" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14l-1 13H6L5 8z" />
        </svg>
      )
    },
    {
      title: "Four-Head Production",
      description: "The only four-head production water jet machine in southern California",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Complete Solutions",
      description: "Second operations and finished parts with Fadal 16 x 20 for 2nd operations",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      title: "Precision Excellence",
      description: "Intricate patterns, inlays, and both soft and brittle materials handled with ease",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Main Headline */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4 leading-tight">
                Precision Waterjet
                <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 bg-clip-text text-transparent">
                  Cutting Solutions
                </span>
              </h2>
              
              {/* Professional Tagline */}
              <div className="inline-flex items-center bg-slate-100/80 rounded-full px-6 py-2 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-slate-700 text-sm font-medium">Industry-Leading Precision & Quality</span>
              </div>
            </div>

            {/* Professional Description */}
            <div className="max-w-3xl mx-auto mb-10">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                Delivering ultra-precise waterjet cutting services with state-of-the-art technology. 
                From aerospace components to architectural elements, we handle your most demanding projects 
                with exceptional accuracy and reliability.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <span className="flex items-center">
                  Get Your Quote
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              <button 
                onClick={scrollToCapabilities}
                className="group bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  View Capabilities
                </span>
              </button>
            </div>

            {/* Trust Indicators - Modern Professional Design */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
              {/* Precision Card */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-blue-100/20 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-blue-200/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-50"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full -translate-y-10 translate-x-10"></div>
                
                <div className="relative flex md:flex-col items-center justify-center md:items-center">
                  <div className="w-12 md:w-14 h-12 md:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 md:mr-0 md:mx-auto md:mb-4 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 md:w-7 h-6 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 md:text-center text-center md:flex-none">
                    <h3 className="font-bold text-slate-900 mb-1 text-lg md:text-xl">±0.001" Tolerance</h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">Exceptional precision for critical applications</p>
                  </div>
                </div>
                
                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>

              {/* Eco-Friendly Card */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-white via-emerald-50/30 to-emerald-100/20 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-emerald-200/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-50"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-full -translate-y-10 translate-x-10"></div>
                
                <div className="relative flex md:flex-col items-center justify-center md:items-center">
                  <div className="w-12 md:w-14 h-12 md:h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 md:mr-0 md:mx-auto md:mb-4 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 md:w-7 h-6 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 md:text-center text-center md:flex-none">
                    <h3 className="font-bold text-slate-900 mb-1 text-lg md:text-xl">Eco-Friendly</h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">Cold cutting process with no harmful emissions</p>
                  </div>
                </div>
                
                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>

              {/* Any Material Card */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-purple-100/20 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-purple-200/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-50"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 rounded-full -translate-y-10 translate-x-10"></div>
                
                <div className="relative flex md:flex-col items-center justify-center md:items-center">
                  <div className="w-12 md:w-14 h-12 md:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 md:mr-0 md:mx-auto md:mb-4 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 md:w-7 h-6 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1 md:text-center text-center md:flex-none">
                    <h3 className="font-bold text-slate-900 mb-1 text-lg md:text-xl">Any Material</h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">From steel to composites, we cut it all</p>
                  </div>
                </div>
                
                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Description */}
      <section 
        ref={setRef(1)}
        className="py-12 px-4 sm:px-6 lg:px-8 fade-in-section"
      >
        <div className="max-w-6xl mx-auto">
        </div>
        
        {/* Simple Divider */}
        <div className="h-px bg-slate-200 w-full"></div>
      </section>

      {/* Revolutionary Dark Section */}
      <section 
        id="technology"
        ref={setRef(2)}
        className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden fade-in-section"
      >
        <div className="relative max-w-7xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-200/50 mb-4 md:mb-8">
              <div className="w-2 md:w-3 h-2 md:h-3 bg-green-500 rounded-full mr-2 md:mr-3 animate-pulse"></div>
              <span className="text-slate-700 font-semibold text-xs md:text-sm tracking-wide">ENVIRONMENTALLY RESPONSIBLE</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
              Advanced Waterjet
              <span className="block text-blue-600">Technology</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-6 md:mb-12">
              Our state-of-the-art waterjet cutting systems deliver unmatched precision while maintaining 
              the highest environmental standards. Experience the perfect balance of performance and sustainability.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-16">
            
            {/* Process Overview Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl md:rounded-2xl shadow-xl border border-slate-200/50 p-6 md:p-8 h-full">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <svg className="w-6 md:w-8 h-6 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">Process Excellence</h3>
                <p className="text-slate-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                  Ultra-high pressure water streams combined with natural abrasive particles create 
                  clean, precise cuts with zero thermal impact on your materials.
                </p>
                
                <div className="space-y-2 md:space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 md:mr-3"></div>
                    <span className="text-slate-700 font-medium text-sm md:text-base">Up to 90,000 PSI pressure</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 md:mr-3"></div>
                    <span className="text-slate-700 font-medium text-sm md:text-base">Natural garnet abrasives</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 md:mr-3"></div>
                    <span className="text-slate-700 font-medium text-sm md:text-base">Cold cutting process</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Grid - Optimized for Mobile */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                
                {/* Precision Card */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl md:rounded-2xl p-6 md:p-8 border border-blue-200/30">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-10 md:w-14 h-10 md:h-14 bg-blue-500 rounded-lg md:rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-5 md:w-7 h-5 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-1">Exceptional Precision</h4>
                      <p className="text-blue-600 text-sm md:text-lg font-semibold">±0.001" Tolerance</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm md:text-base">Achieve the tightest tolerances for critical aerospace and medical components.</p>
                </div>

                {/* Quality Card */}
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl md:rounded-2xl p-6 md:p-8 border border-emerald-200/30">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-10 md:w-14 h-10 md:h-14 bg-emerald-500 rounded-lg md:rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-5 md:w-7 h-5 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-1">Superior Quality</h4>
                      <p className="text-emerald-600 text-sm md:text-lg font-semibold">No Heat Affected Zone</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm md:text-base">Maintain material properties with our cold cutting process.</p>
                </div>

                {/* Efficiency Card */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl md:rounded-2xl p-6 md:p-8 border border-orange-200/30">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-10 md:w-14 h-10 md:h-14 bg-orange-500 rounded-lg md:rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-5 md:w-7 h-5 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-1">Material Efficiency</h4>
                      <p className="text-orange-600 text-sm md:text-lg font-semibold">Minimal Waste</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm md:text-base">Narrow kerf width maximizes material utilization and reduces costs.</p>
                </div>

                {/* Environmental Card */}
                <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl md:rounded-2xl p-6 md:p-8 border border-green-200/30">
                  <div className="flex items-center mb-4 md:mb-6">
                    <div className="w-10 md:w-14 h-10 md:h-14 bg-green-500 rounded-lg md:rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-5 md:w-7 h-5 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-1">Eco-Friendly</h4>
                      <p className="text-green-600 text-sm md:text-lg font-semibold">Zero Emissions</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm md:text-base">Completely clean process with no harmful chemicals or fumes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications - Mobile Optimized */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-xl border border-slate-200/50 p-6 md:p-8">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">Technical Capabilities</h3>
              <p className="text-slate-600 text-sm md:text-base">Industry-leading specifications for demanding applications</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center">
                <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl font-bold text-blue-600">90K</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-1 text-sm md:text-base">PSI Pressure</h4>
                <p className="text-slate-600 text-xs md:text-sm">Maximum cutting power</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl font-bold text-emerald-600">±.001"</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-1 text-sm md:text-base">Tolerance</h4>
                <p className="text-slate-600 text-xs md:text-sm">Exceptional accuracy</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl font-bold text-orange-600">12"</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-1 text-sm md:text-base">Max Thickness</h4>
                <p className="text-slate-600 text-xs md:text-sm">Material capacity</p>
        </div>
              
              <div className="text-center">
                <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl font-bold text-purple-600">4</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-1 text-sm md:text-base">Cutting Heads</h4>
                <p className="text-slate-600 text-xs md:text-sm">Production efficiency</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-50 pointer-events-none"></div>
      </section>

      {/* Capabilities Section */}
      <section 
        id="capabilities"
        ref={setRef(3)}
        className="py-16 px-4 sm:px-6 lg:px-8 fade-in-section bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto">
          {/* Professional Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white shadow-lg mb-8">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
              <span className="font-medium text-lg">EQUIPMENT CAPABILITIES</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              State-of-the-Art
              <span className="block text-blue-600">Equipment</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Advanced waterjet cutting systems and expertise to handle your most demanding projects 
              with precision and reliability.
            </p>
          </div>
          
          {/* Carousel Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Main Carousel */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-white shadow-2xl border border-slate-200/50">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {capabilities.map((capability, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-12">
                    <div className="text-center max-w-2xl mx-auto">
                      {/* Icon */}
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <div className="text-white scale-150">
                          {capability.icon}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        {capability.title}
                      </h3>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
              </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all duration-200 hover:scale-110 group cursor-pointer"
            >
              <svg className="w-6 h-6 text-slate-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all duration-200 hover:scale-110 group cursor-pointer"
            >
              <svg className="w-6 h-6 text-slate-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {capabilities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-blue-500 w-8'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-6 w-full bg-slate-200 rounded-full h-1">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1 rounded-full transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / capabilities.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section - Professional Design */}
      <section 
        id="materials"
        ref={setRef(4)}
        className="py-16 px-4 sm:px-6 lg:px-8 fade-in-section bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Professional Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full text-white shadow-lg mb-8">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span className="font-medium text-lg">MATERIAL CAPABILITIES</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Advanced Material
              <span className="block text-slate-700">Processing</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Precision cutting across a comprehensive range of materials with industry-leading 
              accuracy and efficiency for every application.
            </p>
          </div>

          {/* Interactive Material Display - Mobile Optimized */}
          <div className="relative">
            {/* Desktop: Professional Capability Matrix */}
            <div className="hidden md:block">
              <div className="relative w-full max-w-4xl mx-auto">
                {/* Professional Material Grid - Increased spacing */}
                <div className="grid grid-cols-5 gap-12 items-center justify-items-center">
                  
                  {/* Steel Capability */}
                  <div className="group flex flex-col items-center cursor-pointer">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-700 rounded-xl flex items-center justify-center shadow-lg border border-slate-400/30 group-hover:scale-110 transition-all duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div className="absolute -inset-2 bg-slate-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="mt-3 text-center">
                      <h4 className="font-semibold text-slate-800 text-sm">Steel Alloys</h4>
                      <p className="text-slate-600 text-xs mt-1">Up to 10" thick</p>
                    </div>
                  </div>

                  {/* Aluminum Capability */}
                  <div className="group flex flex-col items-center cursor-pointer">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg border border-blue-400/30 group-hover:scale-110 transition-all duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="absolute -inset-2 bg-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="mt-3 text-center">
                      <h4 className="font-semibold text-slate-800 text-sm">Aluminum</h4>
                      <p className="text-slate-600 text-xs mt-1">7000 Series</p>
                    </div>
                  </div>

                  {/* Titanium Capability */}
                  <div className="group flex flex-col items-center cursor-pointer">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center shadow-lg border border-purple-400/30 group-hover:scale-110 transition-all duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="absolute -inset-2 bg-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="mt-3 text-center">
                      <h4 className="font-semibold text-slate-800 text-sm">Titanium</h4>
                      <p className="text-slate-600 text-xs mt-1">All grades</p>
                    </div>
                  </div>

                  {/* Composite Capability */}
                  <div className="group flex flex-col items-center cursor-pointer">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center shadow-lg border border-emerald-400/30 group-hover:scale-110 transition-all duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div className="absolute -inset-2 bg-emerald-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="mt-3 text-center">
                      <h4 className="font-semibold text-slate-800 text-sm">Composites</h4>
                      <p className="text-slate-600 text-xs mt-1">Carbon, Kevlar</p>
                    </div>
                  </div>

                  {/* Specialty Materials */}
                  <div className="group flex flex-col items-center cursor-pointer">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg border border-orange-400/30 group-hover:scale-110 transition-all duration-300">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <div className="absolute -inset-2 bg-orange-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="mt-3 text-center">
                      <h4 className="font-semibold text-slate-800 text-sm">Specialty</h4>
                      <p className="text-slate-600 text-xs mt-1">Glass, Ceramics</p>
                    </div>
                  </div>
                </div>

                {/* Capability Metrics - Increased top margin */}
                <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-sm">±.001"</span>
                    </div>
                    <p className="text-slate-700 font-medium text-sm">Precision</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-sm">12"</span>
                    </div>
                    <p className="text-slate-700 font-medium text-sm">Max Thickness</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <p className="text-slate-700 font-medium text-sm">Cutting Heads</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Simplified Grid Layout */}
            <div className="md:hidden">
              <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                {/* Material Cards - Mobile */}
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-md border border-slate-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-500 to-slate-700 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">Steel Alloys</span>
                </div>

                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-md border border-slate-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">Aluminum</span>
                </div>

                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-md border border-slate-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">Titanium</span>
                </div>

                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-md border border-slate-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">Composites</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;