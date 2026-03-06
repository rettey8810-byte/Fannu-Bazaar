import type { ServiceCategory } from './types'

export type CategoryMeta = {
  category: ServiceCategory
  filename: string
  blurb: string
  subcategories: string[]
}

export const CATEGORY_CONFIG: CategoryMeta[] = [
  // Home Services (1-12)
  {
    category: 'AC',
    filename: 'Maintenance-bro.svg',
    blurb: 'Cooling & AC repair',
    subcategories: ['Installation', 'Gas refill', 'Not cooling', 'Cleaning/service', 'Compressor issue', 'General maintenance'],
  },
  {
    category: 'Plumbing',
    filename: 'Pipeline%20maintenance-amico.svg',
    blurb: 'Leaks, fittings, water',
    subcategories: ['Leak fixing', 'Tap replacement', 'Toilet repair', 'Drain blockage', 'Water heater', 'Pipe fitting'],
  },
  {
    category: 'Electrical',
    filename: 'Electrician-cuate.svg',
    blurb: 'Wiring, lights, power',
    subcategories: ['Wiring', 'Switchboard', 'Lights', 'Fan repair', 'Socket issue', 'CCTV install'],
  },
  {
    category: 'Carpentry',
    filename: 'Measure-amico.svg',
    blurb: 'Woodwork & fittings',
    subcategories: ['Furniture repair', 'Door/lock adjustment', 'Shelves/cabinets', 'Curtain rods', 'Hinges', 'Custom work'],
  },
  {
    category: 'Cleaning',
    filename: 'Laundry%20and%20dry%20cleaning-pana.svg',
    blurb: 'Home & office cleaning',
    subcategories: ['Deep cleaning', 'Regular cleaning', 'Sofa/mattress', 'Post-construction', 'Office cleaning', 'Move-in/out'],
  },
  {
    category: 'Painting',
    filename: 'Scaffold-amico.svg',
    blurb: 'Walls, touch-ups',
    subcategories: ['Interior painting', 'Exterior painting', 'Touch-up', 'Waterproofing', 'Ceiling', 'Wood polish'],
  },
  {
    category: 'Appliance',
    filename: 'Construction%20costs-amico.svg',
    blurb: 'Appliance repair',
    subcategories: ['Washing machine', 'Fridge', 'Microwave', 'TV', 'Water dispenser', 'Small appliances'],
  },
  {
    category: 'PestControl',
    filename: 'Firefighter-cuate.svg',
    blurb: 'Pest control service',
    subcategories: ['Cockroaches', 'Bed bugs', 'Termites', 'Mosquito', 'Rodents', 'General spray'],
  },
  {
    category: 'Masonry',
    filename: 'Bricklayer-amico.svg',
    blurb: 'Brick & tile works',
    subcategories: ['Tile fixing', 'Grouting', 'Plastering', 'Brick work', 'Concrete repair', 'Small renovations'],
  },
  {
    category: 'Welding',
    filename: 'Construction%20worker-cuate.svg',
    blurb: 'Metal welding',
    subcategories: ['Gate welding', 'Railing', 'Steel fabrication', 'Repair welding', 'Stainless steel', 'Custom work'],
  },
  {
    category: 'Moving',
    filename: 'Heavy%20box-amico.svg',
    blurb: 'Moving & delivery',
    subcategories: ['House shifting', 'Office shifting', 'Pickup & drop', 'Packing help', 'Furniture moving', 'Heavy items'],
  },
  {
    category: 'Gardening',
    filename: 'Florist-amico.svg',
    blurb: 'Garden care',
    subcategories: ['Planting', 'Trimming', 'Lawn care', 'Pest care', 'Pot setup', 'Landscaping'],
  },
  // Construction & Renovation (13-20)
  {
    category: 'CivilWorks',
    filename: 'Construction%20worker-bro.svg',
    blurb: 'Civil construction',
    subcategories: ['Foundation', 'Structural work', 'Columns/beams', 'Concrete work', 'Site preparation'],
  },
  {
    category: 'Roofing',
    filename: 'Construction%20worker-rafiki.svg',
    blurb: 'Roof installation',
    subcategories: ['Metal roofing', 'Tile roofing', 'Waterproofing', 'Gutter work', 'Leak repair'],
  },
  {
    category: 'Flooring',
    filename: 'Bricklayer-rafiki.svg',
    blurb: 'Floor installation',
    subcategories: ['Tile flooring', 'Marble', 'Wooden flooring', 'Vinyl', 'Polishing'],
  },
  {
    category: 'Waterproofing',
    filename: 'Construction%20worker-pana.svg',
    blurb: 'Waterproofing',
    subcategories: ['Terrace', 'Bathroom', 'Basement', 'Tank waterproofing', 'Leak sealing'],
  },
  {
    category: 'InteriorDesign',
    filename: 'Creative%20team-bro.svg',
    blurb: 'Interior design',
    subcategories: ['Space planning', 'Modular kitchen', 'Wardrobes', 'False ceiling', 'Wall decor'],
  },
  {
    category: 'Renovation',
    filename: 'Work%20in%20progress-amico.svg',
    blurb: 'Home renovation',
    subcategories: ['Full renovation', 'Partial remodeling', 'Kitchen upgrade', 'Bathroom redo', 'Office renovation'],
  },
  {
    category: 'Scaffolding',
    filename: 'Scaffold-amico.svg',
    blurb: 'Scaffold services',
    subcategories: ['Erection', 'Dismantling', 'Rental', 'Inspection', 'Maintenance'],
  },
  {
    category: 'Demolition',
    filename: 'Construction%20truck-pana.svg',
    blurb: 'Demolition work',
    subcategories: ['Building demolition', 'Wall breaking', 'Concrete breaking', 'Debris removal', 'Site clearing'],
  },
  // Technical & IT (21-28)
  {
    category: 'IT',
    filename: 'Processing-cuate.svg',
    blurb: 'Tech support',
    subcategories: ['Laptop/PC repair', 'Wi‑Fi setup', 'Printer setup', 'Software install', 'Data recovery', 'Phone setup'],
  },
  {
    category: 'CCTV',
    filename: 'Recording%20a%20movie-amico.svg',
    blurb: 'CCTV services',
    subcategories: ['Installation', 'Repair', 'Upgrades', 'Monitoring setup', 'Maintenance'],
  },
  {
    category: 'Networking',
    filename: 'World%20Youth%20Skills%20Day-amico.svg',
    blurb: 'Network setup',
    subcategories: ['LAN setup', 'WiFi extenders', 'Cabling', 'Router config', 'Network troubleshooting'],
  },
  {
    category: 'SecuritySystems',
    filename: 'Firefighter-cuate.svg',
    blurb: 'Security systems',
    subcategories: ['Alarm systems', 'Access control', 'Intercom', 'Smart locks', 'Sensors'],
  },
  {
    category: 'Solar',
    filename: 'Business%20growth-amico.svg',
    blurb: 'Solar solutions',
    subcategories: ['Panel installation', 'Inverter repair', 'Battery setup', 'Maintenance', 'Consultation'],
  },
  {
    category: 'Generator',
    filename: 'Construction%20costs-amico.svg',
    blurb: 'Generator services',
    subcategories: ['Installation', 'Repair', 'Servicing', 'Rental', 'AMC'],
  },
  {
    category: 'Elevator',
    filename: 'Logistics-cuate.svg',
    blurb: 'Elevator/lift',
    subcategories: ['Installation', 'Repair', 'Maintenance', 'Modernization', 'Breakdown'],
  },
  {
    category: 'FireSafety',
    filename: 'Firefighter-cuate.svg',
    blurb: 'Fire safety',
    subcategories: ['Fire extinguishers', 'Alarm systems', 'Sprinkler install', 'Safety audit', 'Training'],
  },
  // Beauty & Personal Care (29-34)
  {
    category: 'Beauty',
    filename: 'Hairdresser-cuate.svg',
    blurb: 'Salon at home',
    subcategories: ['Haircut', 'Hair color', 'Makeup', 'Henna', 'Facial', 'Bridal package'],
  },
  {
    category: 'Barber',
    filename: 'Hairdresser-cuate.svg',
    blurb: 'Barber services',
    subcategories: ['Men haircut', 'Beard styling', 'Shave', 'Head massage', 'Kids haircut'],
  },
  {
    category: 'Spa',
    filename: 'Soft%20skills-pana.svg',
    blurb: 'Spa & wellness',
    subcategories: ['Body massage', 'Facial', 'Manicure', 'Pedicure', 'Aromatherapy'],
  },
  {
    category: 'Massage',
    filename: 'Soft%20skills-bro.svg',
    blurb: 'Therapy massage',
    subcategories: ['Swedish', 'Deep tissue', 'Thai', 'Head massage', 'Foot reflexology'],
  },
  {
    category: 'Fitness',
    filename: 'Working%20from%20anywhere-rafiki.svg',
    blurb: 'Fitness training',
    subcategories: ['Personal trainer', 'Yoga instructor', 'Zumba', 'Crossfit', 'Diet planning'],
  },
  {
    category: 'Yoga',
    filename: 'Working%20from%20anywhere-rafiki.svg',
    blurb: 'Yoga classes',
    subcategories: ['Hatha yoga', 'Power yoga', 'Meditation', 'Pranayama', 'Therapeutic yoga'],
  },
  // Events & Media (35-42)
  {
    category: 'Photography',
    filename: 'Camera-amico.svg',
    blurb: 'Photo & video',
    subcategories: ['Event photography', 'Portraits', 'Product shoots', 'Video recording', 'Editing', 'Drone'],
  },
  {
    category: 'Videography',
    filename: 'Recording%20a%20movie-amico.svg',
    blurb: 'Video services',
    subcategories: ['Wedding films', 'Corporate videos', 'Live streaming', 'Music videos', 'Reels editing'],
  },
  {
    category: 'EventPlanning',
    filename: 'New%20team%20members-amico.svg',
    blurb: 'Event management',
    subcategories: ['Wedding planning', 'Corporate events', 'Birthday parties', 'Conferences', 'Exhibitions'],
  },
  {
    category: 'Catering',
    filename: 'Cocktail%20bartender-bro.svg',
    blurb: 'Food & events',
    subcategories: ['Small party', 'Office lunch', 'Snacks', 'Desserts', 'Live cooking', 'BBQ'],
  },
  {
    category: 'Bartending',
    filename: 'Cocktail%20bartender-bro.svg',
    blurb: 'Bartending',
    subcategories: ['Mocktails', 'Cocktails', 'Party bartender', 'Mobile bar', 'Flair bartending'],
  },
  {
    category: 'DJ',
    filename: 'Recording%20a%20movie-amico.svg',
    blurb: 'DJ services',
    subcategories: ['Wedding DJ', 'Party DJ', 'Sound system', 'Lighting', 'MC services'],
  },
  {
    category: 'Decoration',
    filename: 'Florist-amico.svg',
    blurb: 'Event decoration',
    subcategories: ['Flower decoration', 'Balloon decor', 'Stage setup', 'Lighting decor', 'Theme parties'],
  },
  {
    category: 'Entertainment',
    filename: 'Work%20in%20progress-pana.svg',
    blurb: 'Entertainment',
    subcategories: ['Magician', 'Musician', 'Dancer', 'Anchor', 'Game host', 'Kids entertainer'],
  },
  // Professional Services (43-48)
  {
    category: 'Tutoring',
    filename: 'World%20Youth%20Skills%20Day-amico.svg',
    blurb: 'Home tuition',
    subcategories: ['Math', 'English', 'Science', 'Dhivehi', 'Islam', 'Computer basics'],
  },
  {
    category: 'Legal',
    filename: 'Judge-bro.svg',
    blurb: 'Legal services',
    subcategories: ['Document drafting', 'Legal advice', 'Notary', 'Contract review', 'Consultation'],
  },
  {
    category: 'Accounting',
    filename: 'Business%20growth-rafiki.svg',
    blurb: 'Accounting',
    subcategories: ['Bookkeeping', 'Tax filing', 'Audit', 'Financial planning', 'Payroll'],
  },
  {
    category: 'Consulting',
    filename: 'Business%20growth-amico.svg',
    blurb: 'Business consulting',
    subcategories: ['Business setup', 'Marketing', 'Operations', 'HR consulting', 'Strategy'],
  },
  {
    category: 'Translation',
    filename: 'Soft%20skills-bro.svg',
    blurb: 'Translation',
    subcategories: ['English-Dhivehi', 'Document translation', 'Interpretation', 'Subtitling', 'Proofreading'],
  },
  {
    category: 'Writing',
    filename: 'Soft%20skills-pana.svg',
    blurb: 'Content writing',
    subcategories: ['Resume writing', 'Copywriting', 'Blog writing', 'Social media', 'Technical writing'],
  },
  // Transportation & Logistics (49-54)
  {
    category: 'Delivery',
    filename: 'Logistics-cuate.svg',
    blurb: 'Delivery services',
    subcategories: ['Food delivery', 'Package delivery', 'Grocery delivery', 'Same-day', 'Bulk delivery'],
  },
  {
    category: 'Driving',
    filename: 'Construction%20truck-pana.svg',
    blurb: 'Driver services',
    subcategories: ['Personal driver', 'Airport transfer', 'Outstation', 'Daily rental', 'School pickup'],
  },
  {
    category: 'Logistics',
    filename: 'Logistics-cuate.svg',
    blurb: 'Logistics',
    subcategories: ['Warehouse', 'Inventory', 'Transport', 'Supply chain', 'Distribution'],
  },
  {
    category: 'Courier',
    filename: 'Barcode-bro.svg',
    blurb: 'Courier services',
    subcategories: ['Document courier', 'Parcel delivery', 'International', 'Bulk shipping', 'Express'],
  },
  {
    category: 'BikeRepair',
    filename: 'Bicycle%20workshop-bro.svg',
    blurb: 'Bicycle repair',
    subcategories: ['Tune-up', 'Puncture', 'Brake repair', 'Gear fixing', 'Accessories install'],
  },
  {
    category: 'AutoRepair',
    filename: 'Bicycle%20workshop-rafiki.svg',
    blurb: 'Vehicle repair',
    subcategories: ['Car service', 'Bike service', 'AC repair', 'Denting/painting', 'Battery'],
  },
  // Other Specialized (55-60)
  {
    category: 'Laundry',
    filename: 'Laundry%20and%20dry%20cleaning-pana.svg',
    blurb: 'Laundry service',
    subcategories: ['Wash & fold', 'Dry cleaning', 'Ironing', 'Stain removal', 'Premium care'],
  },
  {
    category: 'Tailoring',
    filename: 'Measure-amico.svg',
    blurb: 'Stitching & tailoring',
    subcategories: ['Alterations', 'Stitching', 'Embroidery', 'Uniforms', 'Bridal wear'],
  },
  {
    category: 'PetCare',
    filename: 'Florist-amico.svg',
    blurb: 'Pet services',
    subcategories: ['Dog walking', 'Pet grooming', 'Pet sitting', 'Vet visits', 'Training'],
  },
  {
    category: 'ChildCare',
    filename: 'New%20team%20members-amico.svg',
    blurb: 'Child care',
    subcategories: ['Babysitting', 'Nanny', 'Day care', 'Tutoring', 'Activity classes'],
  },
  {
    category: 'ElderCare',
    filename: 'Soft%20skills-pana.svg',
    blurb: 'Elderly care',
    subcategories: ['Nursing', 'Companion care', 'Physiotherapy', 'Medication help', 'Daily assistance'],
  },
  {
    category: 'Other',
    filename: 'Work%20in%20progress-pana.svg',
    blurb: 'Any other services',
    subcategories: ['Custom request'],
  },
]

export const ALL_CATEGORIES: ServiceCategory[] = CATEGORY_CONFIG.map((c) => c.category)

export function getCategoryMeta(category: ServiceCategory) {
  return CATEGORY_CONFIG.find((c) => c.category === category)
}
