export interface FlangeGrade {
  grade: string;
  description: string;
  properties: string[];
  applications: string[];
  chemistry: Record<string, string>;
}

export interface FlangeSpecification {
  standard: string;
  sizeRange: string;
  pressureRating: string;
  thickness: string;
  material: string;
}

export interface Certification {
  name: string;
  description: string;
  icon: string;
}

export interface ExportInfo {
  region: string;
  ports: string[];
  leadTime: string;
  packaging: string;
}

export const flangeGrades: FlangeGrade[] = [
  {
    grade: '304',
    description:
      'AISI 304 is the most widely used stainless steel, offering excellent corrosion resistance in a broad range of environments. Ideal for general-purpose flange applications.',
    properties: [
      'Corrosion resistance: Excellent',
      'Formability: Excellent',
      'Weldability: Excellent',
      'Temperature range: -196°C to 870°C',
    ],
    applications: [
      'Water treatment plants',
      'Food and beverage processing',
      'Chemical processing (mild)',
      'HVAC systems',
    ],
    chemistry: {
      Chromium: '18-20%',
      Nickel: '8-10.5%',
      Carbon: '≤0.08%',
    },
  },
  {
    grade: '316',
    description:
      'AISI 316 contains molybdenum for superior resistance to chlorides and acidic environments. The preferred choice for coastal and marine applications in the Gulf region.',
    properties: [
      'Corrosion resistance: Superior (molybdenum-enhanced)',
      'Marine grade: Yes',
      'Chloride resistance: Excellent',
      'Temperature range: -196°C to 870°C',
    ],
    applications: [
      'Offshore oil & gas platforms',
      'Marine desalination plants',
      'Chemical processing (severe)',
      'Coastal infrastructure',
    ],
    chemistry: {
      Chromium: '16-18%',
      Nickel: '10-14%',
      Molybdenum: '2-3%',
      Carbon: '≤0.08%',
    },
  },
  {
    grade: '316L',
    description:
      'AISI 316L is the low-carbon variant of 316, minimizing carbide precipitation during welding. Offers maximum corrosion resistance in the heat-affected zone.',
    properties: [
      'Corrosion resistance: Maximum (post-weld)',
      'Carbon content: ≤0.03%',
      'Weldability: Superior',
      'Heat sensitivity: Low',
    ],
    applications: [
      'Welded process piping',
      'Pharmaceutical equipment',
      'Chemical tank construction',
      'Pulp and paper mills',
    ],
    chemistry: {
      Chromium: '16-18%',
      Nickel: '10-14%',
      Molybdenum: '2-3%',
      Carbon: '≤0.03%',
    },
  },
];

export const flangeSpecifications: FlangeSpecification[] = [
  {
    standard: 'ASME B16.5',
    sizeRange: 'NPS ½" – 24"',
    pressureRating: '150#, 300#, 600#, 900#, 1500#, 2500#',
    thickness: '3mm – 120mm',
    material: '304, 304L, 316, 316L, 321, 904L',
  },
  {
    standard: 'ASME B16.47',
    sizeRange: 'NPS 26" – 60"',
    pressureRating: '75#, 150#, 300#, 600#',
    thickness: '10mm – 200mm',
    material: '304, 304L, 316, 316L, 321',
  },
  {
    standard: 'EN 1092-1 (PN10–PN64)',
    sizeRange: 'DN15 – DN1500',
    pressureRating: 'PN10, PN16, PN25, PN40, PN64',
    thickness: '3mm – 150mm',
    material: '304, 304L, 316, 316L, 317, 321',
  },
  {
    standard: 'ANSI B16.5 RF & RTJ',
    sizeRange: 'NPS ½" – 24"',
    pressureRating: 'RF & RTJ facings',
    thickness: 'Standard & custom',
    material: '304, 316, 316L',
  },
];

export const flangeTypes = [
  { name: 'Weld Neck (WN)', code: 'WN', description: 'Butt-welded, high-strength joint' },
  { name: 'Slip-On (SO)', code: 'SO', description: 'Slide-over and welded, cost-effective' },
  { name: 'Blind (BL)', code: 'BL', description: 'Sealing plug for vessel heads' },
  { name: 'Socket Weld (SW)', code: 'SW', description: 'Socket fit, ideal for small bore' },
  { name: 'Lap Joint (LJ)', code: 'LJ', description: 'Rotating collar, easy alignment' },
  { name: ' Threaded (THD)', code: 'THD', description: 'Screwed, for low-pressure lines' },
];

export const certifications: Certification[] = [
  { name: 'ASTM A182', description: 'Standard specification for forged/rolled flanges', icon: '🔗' },
  { name: 'ASME B16.5', description: 'Pipe flanges and gaskets standards', icon: '📋' },
  { name: 'ISO 9001:2015', description: 'Quality management system certification', icon: '🏆' },
  { name: 'EN 1092-1', description: 'European flange standard compliance', icon: '🇪🇺' },
  { name: 'API 5A', description: 'Petroleum industry pipe connector standards', icon: '🛢️' },
  { name: 'CE Marking', description: 'European conformity compliance', icon: '✓' },
];

export const exportInfo: ExportInfo[] = [
  {
    region: 'Saudi Arabia',
    ports: ['Dammam (King Abdulaziz)', 'Jeddah Islamic Port', 'King Abdullah Port'],
    leadTime: '10–14 days',
    packaging: 'Wooden crates, fumigated ISPM-15',
  },
  {
    region: 'United Arab Emirates',
    ports: ['Dubai Port', 'Jebel Ali Port', 'Khor Fakkan Port'],
    leadTime: '7–10 days',
    packaging: 'Standard export packaging, custom marking',
  },
  {
    region: 'Kuwait',
    ports: ['Shuaiba Port', 'Mina Al-Ahmadi'],
    leadTime: '10–12 days',
    packaging: 'Steel-strapped crates, weatherproof',
  },
  {
    region: 'Qatar',
    ports: ['Hamad Port', 'Doha Port'],
    leadTime: '8–12 days',
    packaging: 'Containerized, palletized',
  },
  {
    region: 'Bahrain',
    ports: ['Mina Salman', 'Mina Jazya'],
    leadTime: '7–10 days',
    packaging: 'Export-grade wooden crates',
  },
  {
    region: 'Oman',
    ports: ['Duqm Port', 'Salalah Port', 'Sohar Port'],
    leadTime: '10–14 days',
    packaging: 'Heavy-duty crating, rust prevention',
  },
  {
    region: 'Rest of Middle East',
    ports: ['Jordan: Aqaba', 'Egypt: Alexandria', 'Jordan: Amman'],
    leadTime: '14–21 days',
    packaging: 'Custom export packaging per destination',
  },
];

export const enquiryContacts = [
  { type: 'Phone', value: '+971 4 123 4567', href: 'tel:+97141234567', icon: '📞' },
  { type: 'WhatsApp', value: '+971 50 123 4567', href: 'https://wa.me/971501234567', icon: '💬' },
  { type: 'Email', value: 'sales@steelexportpro.com', href: 'mailto:sales@steelexportpro.com', icon: '📧' },
];
