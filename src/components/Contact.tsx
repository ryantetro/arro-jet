import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Simple Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to start your project? Send us your drawings and specifications for a quick quote.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Contact Methods - Simple Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Email Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Email Your Project</h3>
              <div className="text-2xl font-bold text-blue-600 mb-4 font-mono">
                info@arrojet.com
              </div>
              <p className="text-slate-600 mb-6">
                Send CAD files, drawings, and project details for fastest response
              </p>
              <a
                href="mailto:info@arrojet.com?subject=Waterjet Cutting Quote Request&body=Hello Arro-Jet,%0D%0A%0D%0APlease provide a quote for the following waterjet cutting project:%0D%0A%0D%0AMaterial:%0D%0AThickness:%0D%0AQuantity:%0D%0ATimeline:%0D%0ASpecial Requirements:%0D%0A%0D%0AThank you,%0D%0A[Your Name]%0D%0A[Your Company]%0D%0A[Your Phone Number]"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Send Email
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Call Direct</h3>
              <div className="text-2xl font-bold text-slate-700 mb-4 font-mono">
                (805) 388-2949
              </div>
              <p className="text-slate-600 mb-6">
                Speak with our precision experts about your project requirements
              </p>
              <a
                href="tel:8053882949"
                className="inline-flex items-center bg-slate-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-700 transition-colors duration-200"
              >
                Call Now
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Location & Hours - Simple Layout */}
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Location */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Visit Our Facility</h3>
                </div>
                <div className="text-slate-600 mb-4">
                  <p className="font-semibold">850 Calle Plano, Suite E</p>
                  <p>Camarillo, CA 93012</p>
                </div>
                <a
                  href="https://maps.google.com/?q=850+Calle+Plano+Suite+E+Camarillo+CA+93012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                >
                  Get Directions
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Hours */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Business Hours</h3>
                </div>
                <div className="text-slate-600 space-y-1">
                  <p><span className="font-medium">Monday - Friday:</span> 7:00 AM - 4:30 PM</p>
                  <p><span className="font-medium">Saturday - Sunday:</span> Closed</p>
                  <p className="text-sm text-slate-500 mt-3">
                    Emergency services available by appointment
                  </p>
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

export default Contact;
