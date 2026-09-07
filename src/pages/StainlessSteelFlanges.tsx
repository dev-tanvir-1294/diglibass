import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EnquiryForm from '../components/EnquiryForm';
import {
  flangeGrades,
  flangeSpecifications,
  flangeTypes,
  certifications,
  exportInfo,
  FlangeGrade,
} from '../data/flanges';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const gradeColors: Record<string, string> = {
  '304': 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
  '316': 'from-teal-500/20 to-teal-600/20 border-teal-500/30',
  '316L': 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30',
};

const gradeBadgeColors: Record<string, string> = {
  '304': 'bg-blue-500',
  '316': 'bg-teal-500',
  '316L': 'bg-cyan-500',
};

const certIcons: Record<string, string> = {
  'ASTM A182': '/images/certs/astm.svg',
  'ASME B16.5': '/images/certs/asme.svg',
  'ISO 9001:2015': '/images/certs/iso.svg',
  'EN 1092-1': '/images/certs/en.svg',
  'API 5A': '/images/certs/api.svg',
  'CE Marking': '/images/certs/ce.svg',
};

const flangeIconMap: Record<string, string> = {
  'Weld Neck (WN)': '/images/icons/flange-wn.svg',
  'Slip-On (SO)': '/images/icons/flange-so.svg',
  'Blind (BL)': '/images/icons/flange-bl.svg',
  'Socket Weld (SW)': '/images/icons/flange-sw.svg',
  'Lap Joint (LJ)': '/images/icons/flange-lj.svg',
  ' Threaded (THD)': '/images/icons/flange-thd.svg',
};

const gradeIconMap: Record<string, string> = {
  '304': '/images/icons/grade-304.svg',
  '316': '/images/icons/grade-316.svg',
  '316L': '/images/icons/grade-316l.svg',
};

export default function StainlessSteelFlanges() {
  const container = useRef<HTMLDivElement>(null);
  const enquiryRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
    const ctx = gsap.context(() => {
      const items = container.current?.querySelectorAll('.fade-in');
      items?.forEach((el, index) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: index * 0.03,
          ease: 'power2.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const scrollToEnquiry = () => {
    enquiryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      ref={container}
      className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900 antialiased"
    >
      {/* ===== Header ===== */}
      <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold tracking-tight">
                Steel<span className="text-teal-400">Export</span>Pro
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#overview" className="hover:text-teal-400 transition-colors">Overview</a>
              <a href="#grades" className="hover:text-teal-400 transition-colors">Grades</a>
              <a href="#specs" className="hover:text-teal-400 transition-colors">Specifications</a>
              <a href="#certs" className="hover:text-teal-400 transition-colors">Certifications</a>
              <a href="#export" className="hover:text-teal-400 transition-colors">Export</a>
            </nav>

            {/* Enquiry-First Contact Bar */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-1 text-xs text-slate-300">
                <span>📞</span>
                <span>+971 4 123 4567</span>
              </div>
              <button
                onClick={scrollToEnquiry}
                className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold px-4 py-2 rounded text-sm transition-colors"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="inline-block bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-xs font-medium mb-4">
                B2B Export • Middle East
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Stainless Steel Flanges
              </h1>
              <p className="text-lg text-slate-300 mb-6 max-w-lg">
                Premium ASME/EN-compliant stainless steel flanges for oil & gas,
                petrochemical, desalination, and industrial projects across Saudi
                Arabia, UAE, and the wider Middle East.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={scrollToEnquiry}
                  className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold py-2.5 px-6 rounded transition-colors"
                >
                  Get a Free Quote
                </button>
                <a
                  href="tel:+97141234567"
                  className="border border-slate-600 hover:border-teal-500 text-slate-200 font-medium py-2.5 px-6 rounded transition-colors flex items-center gap-2"
                >
                  <span>📞</span> Call Now: +971 4 123 4567
                </a>
              </div>
            </div>

            {/* Product Image */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-slate-600 rounded-xl overflow-hidden">
              <div className="aspect-[4/3] relative">
                <img
                  src="/images/hero-flange.svg"
                  alt="Stainless Steel Flange"
                  className="w-full h-full object-contain p-4"
                  loading="eager"
                  width="800"
                  height="600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Enquiry-First Contact Bar (Mobile) ===== */}
      <div className="md:hidden bg-teal-500 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-4 text-sm">
            <a href="tel:+97141234567" className="font-semibold">📞 +971 4 123 4567</a>
            <a href="https://wa.me/971501234567" className="font-semibold">💬 WhatsApp</a>
            <a href="mailto:sales@steelexportpro.com" className="font-semibold">📧 Email Us</a>
          </div>
        </div>
      </div>

      {/* ===== Product Overview ===== */}
      <section id="overview" className="py-12 sm:py-16 fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Product Overview</h2>
          <p className="text-slate-600 text-lg mb-6 max-w-4xl">
            We supply a comprehensive range of stainless steel flanges conforming to
            ASME B16.5, ASME B16.47, EN 1092-1, and other international standards. Available
            in AISI 304, 316, and 316L grades with various pressure ratings (150#–2500#)
            and sizes up to 60".
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {flangeTypes.map((ft) => (
              <div
                key={ft.code}
                className="bg-white rounded-lg p-6 shadow-md border border-slate-200 flex items-start gap-4 fade-in"
              >
                <img
                  src={flangeIconMap[ft.name] || '/images/icons/flange-wn.svg'}
                  alt={ft.name}
                  className="w-12 h-12 object-contain flex-shrink-0"
                  loading="lazy"
                  width="48"
                  height="48"
                />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{ft.name}</h3>
                  <p className="text-sm text-slate-500">{ft.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Grade Variants ===== */}
      <section id="grades" className="py-12 sm:py-16 bg-slate-800 text-white fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Grade Variants</h2>
          <p className="text-slate-300 mb-10">
            Available in three premium stainless steel grades optimized for Middle Eastern conditions.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {flangeGrades.map((grade) => (
              <GradeCard key={grade.grade} grade={grade} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Specifications Table ===== */}
      <section id="specs" className="py-12 sm:py-16 fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Technical Specifications</h2>

          <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-left font-semibold text-slate-900">Standard</th>
                  <th className="px-4 sm:px-6 py-3 text-left font-semibold text-slate-900">Size Range</th>
                  <th className="px-4 sm:px-6 py-3 text-left font-semibold text-slate-900">Pressure Rating</th>
                  <th className="px-4 sm:px-6 py-3 text-left font-semibold text-slate-900">Thickness</th>
                  <th className="px-4 sm:px-6 py-3 text-left font-semibold text-slate-900">Material Grades</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {flangeSpecifications.map((spec, idx) => (
                  <tr key={idx}>
                    <td className="px-4 sm:px-6 py-3 text-slate-800">{spec.standard}</td>
                    <td className="px-4 sm:px-6 py-3 text-slate-600">{spec.sizeRange}</td>
                    <td className="px-4 sm:px-6 py-3 text-slate-600">{spec.pressureRating}</td>
                    <td className="px-4 sm:px-6 py-3 text-slate-600">{spec.thickness}</td>
                    <td className="px-4 sm:px-6 py-3 text-slate-600">{spec.material}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-white rounded-lg p-6 shadow-md border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-3">Chemical Composition</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2">Element</th>
                  <th className="text-left py-2">304</th>
                  <th className="text-left py-2">316</th>
                  <th className="text-left py-2">316L</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Chromium (Cr)</td>
                  <td className="py-2">18–20%</td>
                  <td className="py-2">16–18%</td>
                  <td className="py-2">16–18%</td>
                </tr>
                <tr>
                  <td className="py-2">Nickel (Ni)</td>
                  <td className="py-2">8–10.5%</td>
                  <td className="py-2">10–14%</td>
                  <td className="py-2">10–14%</td>
                </tr>
                <tr>
                  <td className="py-2">Molybdenum (Mo)</td>
                  <td className="py-2">—</td>
                  <td className="py-2">2–3%</td>
                  <td className="py-2">2–3%</td>
                </tr>
                <tr>
                  <td className="py-2">Carbon (C)</td>
                  <td className="py-2">≤0.08%</td>
                  <td className="py-2">≤0.08%</td>
                  <td className="py-2">≤0.03%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== Certifications ===== */}
      <section id="certs" className="py-12 sm:py-16 bg-slate-100 fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Certifications</h2>
          <p className="text-slate-600 mb-8">
            All flanges are manufactured under strict quality control and certified to international standards.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-white rounded-lg p-6 shadow-md border border-slate-200 flex items-center gap-4 fade-in"
              >
                <img
                  src={certIcons[cert.name] || `/images/certs/default.svg`}
                  alt={cert.name}
                  className="h-12 w-20 object-contain flex-shrink-0"
                  loading="lazy"
                  width="80"
                  height="48"
                />
                <div>
                  <h3 className="font-bold text-slate-900">{cert.name}</h3>
                  <p className="text-sm text-slate-600 mt-1">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Export & Shipping Info ===== */}
      <section id="export" className="py-12 sm:py-16 fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Export & Shipping</h2>
          <p className="text-slate-600 mb-8">
            We serve B2B buyers across Saudi Arabia, UAE, and the wider Middle East with reliable export logistics.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {exportInfo.map((info) => (
              <div
                key={info.region}
                className="bg-white rounded-lg p-6 shadow-md border border-slate-200"
              >
                <h3 className="text-xl font-bold text-teal-700 mb-3">{info.region}</h3>
                <table className="w-full text-sm">
                  <tbody>
                    <tr>
                      <td className="font-medium text-slate-700 py-1 pr-2">Ports</td>
                      <td className="text-slate-600">{info.ports.join(', ')}</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-slate-700 py-1 pr-2">Lead Time</td>
                      <td className="text-slate-600">{info.leadTime}</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-slate-700 py-1 pr-2">Packaging</td>
                      <td className="text-slate-600">{info.packaging}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Enquiry Section (Enquiry-First) ===== */}
      <section ref={enquiryRef} className="py-12 sm:py-16 bg-slate-900 text-white fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Request a Quote</h2>
            <p className="text-slate-300">
              Contact us for pricing, availability, and custom orders. We respond within 2 hours.
            </p>
          </div>

          {/* Click-to-Contact Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="tel:+97141234567"
              className="flex items-center gap-3 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold py-3 px-6 rounded-lg transition-colors w-full sm:w-auto justify-center"
            >
              <span className="text-xl">📞</span>
              <span>+971 4 123 4567</span>
            </a>
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-400 text-slate-900 font-semibold py-3 px-6 rounded-lg transition-colors w-full sm:w-auto justify-center"
            >
              <span className="text-xl">💬</span>
              <span>WhatsApp Us</span>
            </a>
            <a
              href="mailto:sales@steelexportpro.com"
              className="flex items-center gap-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full sm:w-auto justify-center"
            >
              <span className="text-xl">📧</span>
              <span>Email: sales@steelexportpro.com</span>
            </a>
          </div>

          {/* Enquiry Form */}
          <div className="max-w-2xl mx-auto">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <span className="text-xl font-bold text-white">SteelExport Pro</span>
              <p className="mt-3 text-sm">
                B2B supplier of premium stainless steel flanges and forgings.
                Serving the Middle East since 2010.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-3">Products</h4>
              <ul className="space-y-2 text-sm">
                {flangeTypes.map((ft) => (
                  <li key={ft.code}>{ft.name}</li>
                ))}
              </ul>
            </div>

            {/* Target Markets */}
            <div>
              <h4 className="text-white font-semibold mb-3">Our Markets</h4>
              <ul className="space-y-2 text-sm">
                {exportInfo.map((info) => (
                  <li key={info.region}>{info.region}</li>
                ))}
              </ul>
            </div>

            {/* Contact (also prominent, not buried) */}
            <div>
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>📞 +971 4 123 4567</li>
                <li>💬 WhatsApp: +971 50 123 4567</li>
                <li>📧 sales@steelexportpro.com</li>
                <li>📍 Dubai, United Arab Emirates</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-6 text-center text-xs text-slate-600">
            <p>© {new Date().getFullYear()} SteelExport Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function GradeCard({ grade }: { grade: FlangeGrade }) {
  const colorClass = gradeColors[grade.grade] || 'from-slate-500/20 to-slate-600/20 border-slate-500/30';
  const badgeColor = gradeBadgeColors[grade.grade] || 'bg-slate-500';

  return (
    <div
      className={`bg-gradient-to-br ${colorClass} border rounded-xl p-6 transition-transform hover:scale-[1.02] fade-in`}
    >
      <div className="flex items-center gap-3 mb-3">
        <img
          src={gradeIconMap[grade.grade] || '/images/icons/grade-304.svg'}
          alt={`Grade ${grade.grade}`}
          className="w-10 h-10 object-contain"
          loading="lazy"
          width="40"
          height="40"
        />
        <span className={`inline-block ${badgeColor} text-white text-xs font-bold px-3 py-1 rounded`}>
          Grade {grade.grade}
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">AISI {grade.grade}</h3>
      <p className="text-slate-300 text-sm mb-4">{grade.description}</p>

      <div className="mb-3">
        <h4 className="text-xs font-semibold text-slate-400 uppercase mb-1">Key Properties</h4>
        <ul className="text-sm text-slate-300 space-y-0.5">
          {grade.properties.map((prop) => (
            <li key={prop} className="flex items-center">
              <span className="w-1 h-1 bg-teal-400 rounded-full mr-2"></span>
              {prop}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-slate-400 uppercase mb-1">Applications</h4>
        <ul className="text-sm text-slate-300 space-y-0.5">
          {grade.applications.map((app) => (
            <li key={app} className="flex items-center">
              <span className="w-1 h-1 bg-teal-400 rounded-full mr-2"></span>
              {app}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
