import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import { Phone, ArrowRight, Menu, X, Mail } from 'lucide-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const Logo = () => (
    <div 
      className="flex items-center cursor-pointer group transition-all duration-300 hover:scale-105" 
      onClick={() => navigate('/')}
    >
      <div className="relative">
        <img src={logo} alt="Arro-Jet Engineering" className="w-32 h-16 object-contain" />
      </div>
      <div className="ml-4 hidden xl:block">
        <div className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors duration-300">
          ARRO-JET
        </div>
        <div className="text-sm text-slate-600 font-medium tracking-wide">
          Engineering & Consulting
        </div>
      </div>
    </div>
  )

  const MobileMenuButton = () => (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="md:hidden relative w-10 h-10 rounded-lg border border-slate-200 bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-all duration-200 active:scale-95"
      aria-label="Toggle mobile menu"
    >
      <div className="relative w-5 h-5">
        <Menu 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-0 rotate-45 scale-50' : 'opacity-100 rotate-0 scale-100'
          }`} 
        />
        <X 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-50'
          }`} 
        />
      </div>
    </button>
  )

  return (
    <>
      {/* Single Professional Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-2xl shadow-2xl border-b border-slate-200/50' 
          : 'bg-white/90 backdrop-blur-xl shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Center: Contact Information - Desktop Only */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-6 bg-slate-50/80 backdrop-blur-sm rounded-xl px-6 py-3 border border-slate-200/60">
                <a 
                  href="tel:8053882949" 
                  className="flex items-center text-sm font-medium text-slate-700 hover:text-blue-600 transition-all duration-200 group"
                >
                  <Phone className="w-4 h-4 mr-2 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                  <span className="tracking-wide font-semibold">(805) 388-2949</span>
                </a>
                
                <div className="w-px h-4 bg-slate-300"></div>
                
                <a 
                  href="mailto:info@arrojet.com" 
                  className="flex items-center text-sm font-medium text-slate-700 hover:text-blue-600 transition-all duration-200 group"
                >
                  <Mail className="w-4 h-4 mr-2 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                  <span className="tracking-wide font-semibold">info@arrojet.com</span>
                </a>
              </div>
            </div>

            {/* Right: CTA & Mobile Menu */}
            <div className="flex items-center space-x-4">
              
              {/* Get Quote CTA Button */}
              <button
                onClick={() => navigate('/contact')}
                className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white font-semibold text-sm tracking-wide rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden cursor-pointer"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <span className="relative z-10 mr-2">Get Quote</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Mobile Menu Toggle */}
              <MobileMenuButton />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Mobile Menu Panel */}
        <div 
          className={`absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-white shadow-2xl transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-100">
            <div className="text-lg font-bold text-slate-900">Contact Info</div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-slate-200 transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Contact Content */}
          <div className="p-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">ARRO-JET</h3>
              <p className="text-slate-600">Engineering & Consulting</p>
            </div>
          </div>

          {/* Mobile Contact Section */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-100 bg-slate-50">
            <div className="space-y-3">
              <div className="text-center text-sm font-semibold text-slate-800 mb-4">
                📞 CONTACT US DIRECTLY
              </div>
              
              {/* Phone */}
              <a 
                href="tel:8053882949" 
                className="flex items-center justify-center w-full px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 group font-semibold"
              >
                <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                <span>(805) 388-2949</span>
              </a>
              
              {/* Email */}
              <a 
                href="mailto:info@arrojet.com" 
                className="flex items-center justify-center w-full px-4 py-3 bg-slate-600 text-white rounded-xl hover:bg-slate-700 transition-all duration-200 group font-semibold"
              >
                <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                <span>info@arrojet.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header