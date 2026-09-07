export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  grade: string;
  origin: string;
  specifications: string[];
  imageUrl: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: 'pipes-tubes',
    name: 'Stainless Steel Pipes & Tubes',
    description: 'Seamless, ERW, and SSAW stainless steel pipes and tubes for industrial applications across the Middle East.',
    image: 'pipes',
    productCount: 84,
    products: [
      {
        id: 1,
        name: '304 Seamless Pipe',
        description: 'AISI 304 seamless stainless steel pipe, precision cold-finished.',
        category: 'pipes-tubes',
        grade: 'AISI 304',
        origin: 'Turkey, India, China',
        specifications: ['ASTM A213', 'EN 10216-14', 'DN15–DN325', 'Wall thickness: SCH5S–SCHXXS'],
        imageUrl: 'pipe-304',
        inStock: true,
      },
      {
        id: 2,
        name: '316L ERW Pipe',
        description: 'AISI 316L electric resistance welded pipe, ideal for corrosive environments.',
        category: 'pipes-tubes',
        grade: 'AISI 316L',
        origin: 'Saudi Arabia, UAE',
        specifications: ['ASTM A312', 'EN 10217-7', 'DN20–DN610', 'NACE MR0175 compliant'],
        imageUrl: 'pipe-316l',
        inStock: true,
      },
      {
        id: 3,
        name: '321 SSAW Pipe',
        description: 'AISI 321 stainless steel spiral submerged arc welded pipe for high-temperature applications.',
        category: 'pipes-tubes',
        grade: 'AISI 321',
        origin: 'UAE, Oman',
        specifications: ['ASTM A403', 'EN 10216-14', 'DN200–DN1200', 'Pressure rated to 40 bar'],
        imageUrl: 'pipe-321',
        inStock: false,
      },
    ],
  },
  {
    id: 'sheets-plates',
    name: 'Stainless Steel Sheets & Plates',
    description: 'Cold-rolled and hot-rolled stainless steel sheets and plates in standard and custom thicknesses.',
    image: 'sheets',
    productCount: 62,
    products: [
      {
        id: 4,
        name: '304 Cold-Rolled Sheet',
        description: 'AISI 304 cold-rolled stainless steel sheet, 2B and BA finishes.',
        category: 'sheets-plates',
        grade: 'AISI 304',
        origin: 'UAE, Qatar',
        specifications: ['ASTM A240', 'EN 10088-2', '0.3mm–6.0mm', 'Width: 1000–2000mm'],
        imageUrl: 'sheet-304',
        inStock: true,
      },
      {
        id: 5,
        name: '316 Hot-Rolled Plate',
        description: 'AISI 316 hot-rolled pickled & oiled stainless steel plate.',
        category: 'sheets-plates',
        grade: 'AISI 316',
        origin: 'Saudi Arabia, Kuwait',
        specifications: ['ASTM A480', 'EN 10029', '5mm–100mm', 'Width: 1500–3000mm'],
        imageUrl: 'plate-316',
        inStock: true,
      },
    ],
  },
  {
    id: 'coils-strips',
    name: 'Stainless Steel Coils & Strips',
    description: 'Stainless steel coils and strips in various grades and gauges for forming applications.',
    image: 'coils',
    productCount: 47,
    products: [
      {
        id: 6,
        name: '304 Stainless Coil',
        description: 'AISI 304 stainless steel coil, slit-to-width strips available.',
        category: 'coils-strips',
        grade: 'AISI 304',
        origin: 'Bahrain, UAE',
        specifications: ['ASTM A666', 'EN 10139', '0.05mm–3.0mm', 'Coil ID: 508mm, OD up to 1500mm'],
        imageUrl: 'coil-304',
        inStock: true,
      },
    ],
  },
  {
    id: 'fittings',
    name: 'Stainless Steel Fittings',
    description: 'Butt-weld, threaded, and compression fittings for piping systems in harsh environments.',
    image: 'fittings',
    productCount: 36,
    products: [
      {
        id: 7,
        name: '316L Butt-Weld Fittings',
        description: 'AISI 316L butt-weld fittings including elbows, tees, and reducers.',
        category: 'fittings',
        grade: 'AISI 316L',
        origin: 'UAE, Saudi Arabia',
        specifications: ['ASME B16.9', 'EN 10235', 'DN15–DN500', 'RF and BW end options'],
        imageUrl: 'fittings-316l',
        inStock: true,
      },
    ],
  },
  {
    id: 'bars-rods',
    name: 'Stainless Steel Bars & Rods',
    description: 'Round, square, and flat stainless steel bars and rods for machining and structural use.',
    image: 'bars',
    productCount: 29,
    products: [
      {
        id: 8,
        name: '316 Round Bar',
        description: 'AISI 316 stainless steel round bar, precision ground.',
        category: 'bars-rods',
        grade: 'AISI 316',
        origin: 'Kuwait, Oman',
        specifications: ['ASTM A276', 'EN 10060', 'Diameter: 5mm–200mm', 'Lengths up to 6m'],
        imageUrl: 'bar-316',
        inStock: true,
      },
    ],
  },
  {
    id: 'wire-rope',
    name: 'Stainless Steel Wire & Rope',
    description: 'Stainless steel wire and wire rope for cable, architectural, and industrial applications.',
    image: 'wire',
    productCount: 18,
    products: [
      {
        id: 9,
        name: '316 Stainless Steel Wire',
        description: 'AISI 316 stainless steel wire for springs and cold heading.',
        category: 'wire-rope',
        grade: 'AISI 316',
        origin: 'Qatar, Bahrain',
        specifications: ['ASTM A586', 'EN 10270', '0.05mm–10mm', 'Tensile strength: 1000–1900 MPa'],
        imageUrl: 'wire-316',
        inStock: true,
      },
    ],
  },
];

export const middleEastCountries = [
  { name: 'Saudi Arabia', flag: '🇸🇦', code: 'SA' },
  { name: 'United Arab Emirates', flag: '🇦🇪', code: 'AE' },
  { name: 'Kuwait', flag: '🇰🇼', code: 'KW' },
  { name: 'Qatar', flag: '🇶🇦', code: 'QA' },
  { name: 'Bahrain', flag: '🇧🇭', code: 'BH' },
  { name: 'Oman', flag: '🇴🇲', code: 'OM' },
  { name: 'Jordan', flag: '🇯🇴', code: 'JO' },
  { name: 'Egypt', flag: '🇪🇬', code: 'EG' },
];
