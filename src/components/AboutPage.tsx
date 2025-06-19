import { useState, useEffect } from 'react'
import Header from './Header'

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('story')

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    { value: '25+', label: 'Years Experience', desc: 'Industry Leadership' },
    { value: '0.001"', label: 'Precision', desc: 'Tolerance Capability' },
    { value: '10,000+', label: 'Projects Completed', desc: 'Successful Deliveries' },
    { value: '100+', label: 'Materials', desc: 'Cutting Capability' }
  ]

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Excellence',
      description: 'Uncompromising commitment to quality and precision in every project we undertake.'
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: 'Innovation',
      description: 'Continuously advancing our technology and processes to deliver cutting-edge solutions.'
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Partnership',
      description: 'Building lasting relationships through transparent communication and reliable service.'
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: 'Reliability',
      description: 'Consistent delivery of precision parts on time, every time, meeting your critical deadlines.'
    }
  ]

  const capabilities = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Precision Cutting',
      specs: ['±0.001" tolerance', 'Complex geometries', 'Smooth edge finish', 'No heat affected zone'],
      description: 'State-of-the-art waterjet systems delivering unmatched precision for the most demanding applications.'
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: 'Material Expertise',
      specs: ['Titanium & Inconel', 'Ceramics & Glass', 'Composites', 'Precious metals'],
      description: 'Comprehensive material knowledge spanning over 100 different materials and alloys.'
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      title: 'Advanced Technology',
      specs: ['CNC automation', 'CAD integration', 'Quality assurance', 'Real-time monitoring'],
      description: 'Cutting-edge equipment and software systems ensuring consistent quality and efficiency.'
    }
  ]

  const team = [
    {
      name: 'Michael Rodriguez',
      role: 'Founder & CEO',
      experience: '25+ years',
      specialization: 'Aerospace & Defense',
      description: 'Leading precision manufacturing with decades of experience in critical applications.',
      image: 'MR'
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Technology Officer',
      experience: '15+ years',
      specialization: 'Medical Devices',
      description: 'Driving innovation in precision cutting technology and quality systems.',
      image: 'SC'
    },
    {
      name: 'David Thompson',
      role: 'Operations Director',
      experience: '20+ years',
      specialization: 'Production Management',
      description: 'Ensuring seamless operations and on-time delivery for every project.',
      image: 'DT'
    },
    {
      name: 'Lisa Johnson',
      role: 'Quality Assurance Manager',
      experience: '12+ years',
      specialization: 'Metrology & Inspection',
      description: 'Maintaining the highest quality standards through rigorous testing protocols.',
      image: 'LJ'
    }
  ]

  const tabContent = {
    story: {
      title: 'Our Story',
      content: (
        <div className="space-y-8">
          <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
            <p>
              Founded in 1999, Arro-Jet began as a vision to revolutionize precision manufacturing through 
              advanced waterjet cutting technology. What started as a small operation in Camarillo, California, 
              has evolved into a leading precision cutting facility serving industries across the nation.
            </p>
            <p>
              Our journey has been defined by an unwavering commitment to excellence, continuous innovation, 
              and the pursuit of perfection in every cut. From aerospace components that demand the highest 
              precision to medical devices that save lives, we've built our reputation on delivering quality 
              that exceeds expectations.
            </p>
            <p>
              Today, Arro-Jet stands as a testament to the power of precision, innovation, and dedication. 
              With over 25 years of experience and more than 10,000 successful projects, we continue to 
              push the boundaries of what's possible in precision manufacturing.
            </p>
          </div>
        </div>
      )
    },
    mission: {
      title: 'Our Mission',
      content: (
        <div className="space-y-8">
          <div className="bg-accent-50 rounded-lg p-8 border-l-4 border-accent-600">
            <h3 className="font-display text-2xl font-bold text-neutral-900 mb-4">Mission Statement</h3>
            <p className="text-lg text-neutral-700 leading-relaxed">
              To deliver unparalleled precision cutting solutions that enable our clients to achieve their most 
              ambitious goals, while maintaining the highest standards of quality, innovation, and service excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-neutral-900 mb-3">Our Vision</h4>
              <p className="text-neutral-700">
                To be the world's most trusted partner for precision cutting solutions, recognized for our 
                innovation, quality, and commitment to customer success.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-3">Our Purpose</h4>
              <p className="text-neutral-700">
                Empowering industries to build the future through precision manufacturing that meets the 
                most demanding specifications and tightest tolerances.
              </p>
            </div>
          </div>
        </div>
      )
    },
    technology: {
      title: 'Technology & Innovation',
      content: (
        <div className="space-y-8">
          <p className="text-lg text-neutral-700 leading-relaxed">
            Our state-of-the-art facility houses the most advanced waterjet cutting systems available, 
            combined with precision measurement equipment and quality control systems that ensure 
            consistent, repeatable results.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-elegant">
              <h4 className="font-semibold text-neutral-900 mb-3">Advanced Equipment</h4>
              <ul className="space-y-2 text-neutral-700">
                <li>• 5-axis waterjet cutting systems</li>
                <li>• High-pressure pumps up to 90,000 PSI</li>
                <li>• Precision measurement tools</li>
                <li>• Climate-controlled environment</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-elegant">
              <h4 className="font-semibold text-neutral-900 mb-3">Quality Systems</h4>
              <ul className="space-y-2 text-neutral-700">
                <li>• ISO 9001:2015 certified</li>
                <li>• AS9100 aerospace standard</li>
                <li>• Statistical process control</li>
                <li>• Full traceability documentation</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  }

  const tabs = [
    { id: 'story', label: 'Our Story' },
    { id: 'mission', label: 'Mission & Vision' },
    { id: 'technology', label: 'Technology' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-luxury-gradient overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
        <div className="container-luxury relative z-10">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6">
              Precision
              <span className="block text-accent-300">Redefined</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              For over 25 years, Arro-Jet has been at the forefront of precision manufacturing, 
              delivering cutting-edge solutions to the world's most demanding industries.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-8 relative z-20">
        <div className="container-luxury">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`group transition-all duration-500 ${
                  isVisible ? 'animate-slide-in-luxury' : 'opacity-0'
                }`}
              >
                <div className="bg-white rounded-lg p-6 text-center shadow-elegant hover:shadow-premium transition-all duration-400 group-hover:-translate-y-2">
                  <div className="text-3xl lg:text-4xl font-display font-bold text-accent-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-neutral-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {stat.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information Tabs */}
      <section className="py-16 bg-neutral-50">
        <div className="container-luxury">
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center mb-12 border-b border-neutral-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 font-medium text-lg transition-all duration-300 border-b-2 ${
                    activeTab === tab.id
                      ? 'text-accent-600 border-accent-600'
                      : 'text-neutral-600 border-transparent hover:text-accent-600 hover:border-neutral-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl p-8 lg:p-12 shadow-elegant">
              <h2 className="font-display text-3xl font-bold text-neutral-900 mb-8">
                {tabContent[activeTab as keyof typeof tabContent].title}
              </h2>
              {tabContent[activeTab as keyof typeof tabContent].content}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Our <span className="text-accent-600">Core Values</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every project we undertake
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center group"
              >
                <div className="bg-white rounded-lg p-8 shadow-elegant hover:shadow-luxury transition-all duration-500 group-hover:-translate-y-3 h-full">
                  <div className="w-16 h-16 bg-accent-gradient rounded-lg flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-neutral-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Advanced <span className="text-accent-600">Capabilities</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              State-of-the-art technology and expertise delivering precision solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="group"
              >
                <div className="bg-white rounded-lg p-8 shadow-elegant hover:shadow-luxury transition-all duration-500 group-hover:-translate-y-3 h-full">
                  <div className="w-16 h-16 bg-accent-gradient rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {capability.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-neutral-900 mb-4">
                    {capability.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {capability.description}
                  </p>
                  <ul className="space-y-2">
                    {capability.specs.map((spec) => (
                      <li key={spec} className="flex items-center text-neutral-700">
                        <svg className="w-4 h-4 text-accent-600 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span className="text-sm font-medium">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Meet Our <span className="text-accent-600">Expert Team</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering precision excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center group"
              >
                <div className="bg-white rounded-lg p-6 shadow-elegant hover:shadow-luxury transition-all duration-500 group-hover:-translate-y-3">
                  <div className="w-20 h-20 bg-accent-gradient rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.image}
                  </div>
                  <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent-600 font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-neutral-500 mb-2">
                    {member.experience} • {member.specialization}
                  </p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent-gradient">
        <div className="container-luxury text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Experience Precision?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Partner with Arro-Jet and discover why leading companies trust us for their most 
            critical precision cutting requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="btn-accent-white btn-xl group">
              <span>Get Your Quote</span>
              <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            
            <a 
              href="tel:8053882949"
              className="btn-ghost-white group"
            >
              <svg className="mr-3 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span>Call (805) 388-2949</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage 