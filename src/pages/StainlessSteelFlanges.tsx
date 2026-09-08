import { useRef } from 'react';
import EnquiryForm from '../components/EnquiryForm';
import {
  flangeGrades,
  flangeSpecifications,
  flangeTypes,
  certifications,
  exportInfo,
  FlangeGrade,
} from '../data/flanges';

const gradeBadgeColors: Record<string, string> = {
  '304': 'bg-blue-500',
  '316': 'bg-teal-500',
  '316L': 'bg-cyan-500',
};

const gradeColorMap: Record<string, string> = {
  '304': '#3B82F8',
  '316': '#0D9488',
  '316L': '#06B6D4',
};

const certBgColors: Record<string, string> = {
  'ASTM A182': '#DBEAFE',
  'ASME B16.5': '#1E293B',
  'ISO 9001:2015': '#DCFCE8',
  'EN 1092-1': '#DBEAFE',
  'API 5A': '#FEE2E2',
  'CE Marking': '#DCFCE8',
};

const certTextColors: Record<string, string> = {
  'ASTM A182': '#1E40AF',
  'ASME B16.5': '#FACC15',
  'ISO 9001:2015': '#16A34A',
  'EN 1092-1': '#0369A1',
  'API 5A': '#DC2626',
  'CE Marking': '#15803D',
};

function GradeIcon({ grade }: { grade: string }) {
  const bg = gradeColorMap[grade] || '#64748B';
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false">
      <title>AISI {grade} stainless steel grade</title>
      <circle cx="24" cy="24" r="20" fill={bg} />
      <text x="24" y="31" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700" fill="white">
        {grade}
      </text>
    </svg>
  );
}

function CertificationBadge({ name }: { name: string }) {
  const bg = certBgColors[name] || '#F1F5F9';
  const text = certTextColors[name] || '#475569';
  return (
    <svg width="80" height="48" viewBox="0 0 80 48" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false">
      <title>{name} certification badge</title>
      <rect width="80" height="48" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="6" y="6" width="68" height="36" rx="4" fill={bg} />
      <text x="40" y="22" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="700" fill={text} letterSpacing="0.3">
        {name}
      </text>
      <text x="40" y="34" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="7" fill={text}>
        Certified
      </text>
    </svg>
  );
}

function FlangeTypeIcon({ code }: { code: string }) {
  const icons: Record<string, JSX.Element> = {
    WN: (
      <g transform="translate(20, 8)">
        <rect x="22" y="8" width="10" height="32" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
        <rect x="16" y="40" width="20" height="6" fill="#94A3B8" />
        <circle cx="26" cy="43" r="3" fill="#CBD5E1" />
      </g>
    ),
    SO: (
      <g transform="translate(20, 8)">
        <rect x="22" y="8" width="10" height="28" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
        <rect x="16" y="34" width="20" height="10" fill="#94A3B8" />
        <circle cx="26" cy="39" r="3" fill="#CBD5E1" />
      </g>
    ),
    BL: (
      <g transform="translate(24, 16)">
        <circle cx="26" cy="26" r="16" fill="#94A3B8" />
        <circle cx="26" cy="26" r="4" fill="#CBD5E1" />
      </g>
    ),
    SW: (
      <g transform="translate(26, 8)">
        <rect x="29" y="12" width="6" height="20" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
        <rect x="22" y="30" width="20" height="8" fill="#94A3B8" />
        <rect x="29" y="12" width="6" height="20" fill="none" stroke="#CBD5E1" strokeWidth="2" />
      </g>
    ),
    LJ: (
      <g transform="translate(20, 8)">
        <rect x="29" y="8" width="6" height="26" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
        <path d="M16 32 Q26 32 36 32" fill="none" stroke="#94A3B8" strokeWidth="8" strokeLinecap="round" />
      </g>
    ),
    THD: (
      <g transform="translate(26, 8)">
        <rect x="26" y="10" width="2" height="26" fill="#CBD5E1" />
        <rect x="22" y="32" width="12" height="6" fill="#94A3B8" />
        <circle cx="28" cy="35" r="2" fill="#CBD5E1" />
      </g>
    ),
  };
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false">
      <title>Flange type {code}</title>
      {icons[code] || icons.WN}
    </svg>
  );
}

export default function StainlessSteelFlanges() {
  const enquiryRef = useRef<HTMLDivElement>(null);

  const scrollToEnquiry = () => {
    enquiryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900 antialiased">
      {/* ===== Header ===== */}
      <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold tracking-tight">
                Steel<span className="text-teal-400">Export</span>Pro
              </span>
            </div>

            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#overview" className="hover:text-teal-400 transition-colors">Overview</a>
              <a href="#grades" className="hover:text-teal-400 transition-colors">Grades</a>
              <a href="#specs" className="hover:text-teal-400 transition-colors">Specifications</a>
              <a href="#certs" className="hover:text-teal-400 transition-colors">Certifications</a>
              <a href="#export" className="hover:text-teal-400 transition-colors">Export</a>
            </nav>

            {/* Enquiry-First Contact Bar */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-1 text-xs text-slate-200">
                <span>📞</span>
                <span>+971 4 123 4567</span>
              </div>
              <button
                onClick={scrollToEnquiry}
                type="button"
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
              <span className="inline-block bg-teal-500/20 text-teal-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
                B2B Export • Middle East
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Stainless Steel Flanges
              </h1>
              <p className="text-lg text-slate-200 mb-6 max-w-lg">
                Premium ASME/EN-compliant stainless steel flanges for oil & gas,
                petrochemical, desalination, and industrial projects across Saudi
                Arabia, UAE, and the wider Middle East.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={scrollToEnquiry}
                  type="button"
                  className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold py-2.5 px-6 rounded transition-colors"
                >
                  Get a Free Quote
                </button>
                <a
                  href="tel:+97141234567"
                  aria-label="Call +971 4 123 4567"
                  className="border border-slate-600 hover:border-teal-500 text-slate-200 font-medium py-2.5 px-6 rounded transition-colors flex items-center gap-2"
                >
                  <span>📞</span> Call Now: +971 4 123 4567
                </a>
              </div>
            </div>

            {/* Hero Product Image (inline SVG) */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-slate-600 rounded-xl overflow-hidden">
              <div className="aspect-[4/3] relative p-4 flex items-center justify-center">
                <svg viewBox="0 0 800 600" width="400" height="300" xmlns="http://www.w3.org/2000/svg" role="img" focusable="false" aria-label="Stainless steel flange illustration">
                  <title>Stainless Steel Flange</title>
                  <defs>
                    <linearGradient id="steelGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E2E8F0" />
                      <stop offset="50%" stopColor="#CBD5E1" />
                      <stop offset="100%" stopColor="#94A3B8" />
                    </linearGradient>
                    <linearGradient id="metalGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F1F5F9" />
                      <stop offset="100%" stopColor="#E2E8F0" />
                    </linearGradient>
                  </defs>
                  <rect width="800" height="600" fill="url(#steelGrad2)" rx="12" />
                  <rect x="280" y="200" width="240" height="200" rx="8" fill="url(#metalGrad2)" stroke="#94A3B8" strokeWidth="2" />
                  <rect x="330" y="250" width="140" height="140" fill="none" stroke="#CBD5E1" strokeWidth="2" />
                  <circle cx="400" cy="270" r="36" fill="#F8FAFC" />
                  <circle cx="400" cy="270" r="85" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4,4" />
                  <rect x="370" y="400" width="60" height="40" fill="url(#metalGrad2)" stroke="#94A3B8" strokeWidth="1" />
                  <text x="400" y="428" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="#64748B">Flange</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Mobile Contact Bar ===== */}
      <div className="md:hidden bg-teal-500 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-4 text-sm">
            <a href="tel:+97141234567" aria-label="Call +971 4 123 4567">📞 +971 4 123 4567</a>
            <a href="https://wa.me/971501234567" aria-label="WhatsApp chat">💬 WhatsApp</a>
            <a href="mailto:sales@steelexportpro.com" aria-label="Email sales">📧 Email Us</a>
          </div>
        </div>
      </div>

      {/* ===== Product Overview ===== */}
      <section id="overview" className="py-12 sm:py-16">
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
                className="bg-white rounded-lg p-6 shadow-md border border-slate-200 flex items-start gap-4"
              >
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  <FlangeTypeIcon code={ft.code} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{ft.name}</h3>
                  <p className="text-sm text-slate-600">{ft.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Grade Variants ===== */}
      <section id="grades" className="py-12 sm:py-16 bg-slate-800 text-white">
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
      <section id="specs" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Technical Specifications</h2>

          <div className="bg-white rounded-lg border border-slate-200 shadow-sm mb-8">
            <table className="w-full text-xs sm:text-sm table-auto">
              <caption className="sr-only">Flange technical specifications by standard</caption>
              <thead className="bg-slate-100">
                <tr>
                  <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left font-semibold text-slate-900">Standard</th>
                  <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left font-semibold text-slate-900">Size Range</th>
                  <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left font-semibold text-slate-900">Pressure Rating</th>
                  <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left font-semibold text-slate-900">Thickness</th>
                  <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left font-semibold text-slate-900">Material Grades</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {flangeSpecifications.map((spec, idx) => (
                  <tr key={idx}>
                    <td className="px-3 sm:px-6 py-2 sm:py-3 text-slate-800 break-words">{spec.standard}</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-3 text-slate-600 break-all">{spec.sizeRange}</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-3 text-slate-600 break-all">{spec.pressureRating}</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-3 text-slate-600 break-all">{spec.thickness}</td>
                    <td className="px-3 sm:px-6 py-2 sm:py-3 text-slate-600">{spec.material}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-3">Chemical Composition</h3>
            <table className="w-full text-xs sm:text-sm table-auto">
              <caption className="sr-only">Chemical composition of flange grades 304, 316, and 316L</caption>
              <thead>
                <tr className="border-b border-slate-200">
                  <th scope="col" className="text-left py-2">Element</th>
                  <th scope="col" className="text-left py-2">304</th>
                  <th scope="col" className="text-left py-2">316</th>
                  <th scope="col" className="text-left py-2">316L</th>
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
      <section id="certs" className="py-12 sm:py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Certifications</h2>
          <p className="text-slate-600 mb-8">
            All flanges are manufactured under strict quality control and certified to international standards.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-white rounded-lg p-6 shadow-md border border-slate-200 flex items-center gap-4"
              >
                <div className="w-20 h-12 flex-shrink-0 flex items-center justify-center">
                  <CertificationBadge name={cert.name} />
                </div>
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
      <section id="export" className="py-12 sm:py-16">
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
                      <td scope="row" className="font-medium text-slate-700 py-1 pr-2">Ports</td>
                      <td className="text-slate-600">{info.ports.join(', ')}</td>
                    </tr>
                    <tr>
                      <td scope="row" className="font-medium text-slate-700 py-1 pr-2">Lead Time</td>
                      <td className="text-slate-600">{info.leadTime}</td>
                    </tr>
                    <tr>
                      <td scope="row" className="font-medium text-slate-700 py-1 pr-2">Packaging</td>
                      <td className="text-slate-600">{info.packaging}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Enquiry Section ===== */}
      <section ref={enquiryRef} className="py-12 sm:py-16 bg-slate-900 text-white">
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
            <div>
              <span className="text-xl font-bold text-white">SteelExport Pro</span>
              <p className="mt-3 text-sm">
                B2B supplier of premium stainless steel flanges and forgings.
                Serving the Middle East since 2010.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Products</h4>
              <ul className="space-y-2 text-sm">
                {flangeTypes.map((ft) => (
                  <li key={ft.code}>{ft.name}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Our Markets</h4>
              <ul className="space-y-2 text-sm">
                {exportInfo.map((info) => (
                  <li key={info.region}>{info.region}</li>
                ))}
              </ul>
            </div>

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
  const badgeColor = gradeBadgeColors[grade.grade] || 'bg-slate-500';

  return (
    <div
      className={`bg-slate-900 border border-slate-700 rounded-xl p-6`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10">
          <GradeIcon grade={grade.grade} />
        </div>
        <span className={`inline-block ${badgeColor} text-white text-xs font-bold px-3 py-1 rounded`}>
          Grade {grade.grade}
        </span>
      </div>
      <h3 className={`text-xl font-bold text-white mb-2`}>AISI {grade.grade}</h3>
      <p className="text-slate-300 text-sm mb-4">{grade.description}</p>

      <div className="mb-3">
        <h4 className="text-xs font-semibold text-slate-400 uppercase mb-1">Key Properties</h4>
        <ul className="text-sm text-slate-300 space-y-0.5">
          {grade.properties.map((prop) => (
            <li key={prop} className="flex items-center">
              <span className={`w-1 h-1 ${badgeColor} rounded-full mr-2`}></span>
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
              <span className={`w-1 h-1 ${badgeColor} rounded-full mr-2`}></span>
              {app}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
