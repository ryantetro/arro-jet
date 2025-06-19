import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Company Information */}
          <div className="lg:col-span-2">
            <div className="mb-4 lg:mb-6">
              <h3 className="text-xl lg:text-2xl font-bold mb-1 lg:mb-2">Arro-Jet</h3>
              <p className="text-slate-300 text-xs lg:text-sm font-medium mb-2 lg:mb-4">Engineering and Consulting LLC</p>
              <p className="text-slate-400 leading-relaxed max-w-md text-sm lg:text-base">
                Leading the industry in precision waterjet cutting solutions with state-of-the-art 
                technology and uncompromising quality standards.
              </p>
            </div>
            
            {/* Certifications & Awards - More compact on mobile */}
            <div className="flex flex-wrap gap-2 lg:gap-4 mb-4 lg:mb-6">
              <div className="flex items-center bg-slate-800 rounded-lg px-2 lg:px-3 py-1 lg:py-2">
                <svg className="w-4 lg:w-5 h-4 lg:h-5 text-blue-400 mr-1 lg:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs lg:text-sm font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center bg-slate-800 rounded-lg px-2 lg:px-3 py-1 lg:py-2">
                <svg className="w-4 lg:w-5 h-4 lg:h-5 text-emerald-400 mr-1 lg:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-xs lg:text-sm font-medium">20+ Years</span>
              </div>
            </div>
          </div>

          {/* Services - More compact on mobile */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-6 text-white">Navigate</h4>
            <ul className="space-y-1 lg:space-y-3">
              <li>
                <a href="#hero" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group text-sm lg:text-base">
                  <svg className="w-3 lg:w-4 h-3 lg:h-4 mr-2 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#technology" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group text-sm lg:text-base">
                  <svg className="w-3 lg:w-4 h-3 lg:h-4 mr-2 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Technology
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group text-sm lg:text-base">
                  <svg className="w-3 lg:w-4 h-3 lg:h-4 mr-2 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#materials" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group text-sm lg:text-base">
                  <svg className="w-3 lg:w-4 h-3 lg:h-4 mr-2 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Materials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group text-sm lg:text-base">
                  <svg className="w-3 lg:w-4 h-3 lg:h-4 mr-2 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information - More compact on mobile */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-6 text-white">Contact Info</h4>
            <div className="space-y-2 lg:space-y-4">
              
              {/* Address */}
              <div className="flex items-start">
                <svg className="w-4 lg:w-5 h-4 lg:h-5 text-blue-400 mr-2 lg:mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-slate-400">
                  <p className="text-xs lg:text-sm">850 Calle Plano, Suite E</p>
                  <p className="text-xs lg:text-sm">Camarillo, CA 93012</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <svg className="w-4 lg:w-5 h-4 lg:h-5 text-emerald-400 mr-2 lg:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-slate-400">
                  <p className="text-xs lg:text-sm font-medium">(805) 388-2949</p>
                  <p className="text-xs text-slate-500 lg:block hidden">Main Office</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <svg className="w-4 lg:w-5 h-4 lg:h-5 text-orange-400 mr-2 lg:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="text-slate-400">
                  <a href="mailto:info@arrojet.com" className="text-xs lg:text-sm hover:text-white transition-colors">
                    info@arrojet.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact CTA - Smaller on mobile */}
            <div className="mt-4 lg:mt-6">
              <a href="Contact" className="block w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2 lg:py-3 px-3 lg:px-4 rounded-lg font-semibold text-xs lg:text-sm hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl text-center cursor-pointer">
                Get Quote Now
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
            
            {/* Business Hours & Additional Info - Compact mobile layout */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 lg:space-x-6 space-y-1 md:space-y-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-3 lg:w-4 h-3 lg:h-4 text-blue-400 mr-1 lg:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-slate-400 text-xs lg:text-sm">Mon-Fri: 7:00 AM - 5:00 PM PST</span>
              </div>
              <div className="hidden md:block">
                <span className="text-slate-600">•</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-slate-400 text-xs lg:text-sm">Fax: (805) 388-2951</span>
              </div>
            </div>

            {/* Social Media Links - Smaller on mobile */}
            {/* <div className="flex space-x-3 lg:space-x-4">
              <a href="#" className="w-8 lg:w-10 h-8 lg:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors duration-200 group">
                <svg className="w-4 lg:w-5 h-4 lg:h-5 text-slate-400 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-8 lg:w-10 h-8 lg:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors duration-200 group">
                <svg className="w-4 lg:w-5 h-4 lg:h-5 text-slate-400 group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-8 lg:w-10 h-8 lg:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors duration-200 group">
                <svg className="w-4 lg:w-5 h-4 lg:h-5 text-slate-400 group-hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar - Reduced padding on mobile */}
      <div className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-slate-400 text-xs lg:text-sm text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Arro-Jet Engineering and Consulting LLC. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;