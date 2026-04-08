export interface Project {
  slug: string;
  name: string;
  location: string;
  type: string;
  services: string[];
  duration: string | null;
  desc: string;
  longDesc: string;
  img: string;
  gallery: string[];
  featured: boolean;
  scope: string;
  materials: string[];
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: "project-henlow",
    name: "Project Henlow",
    location: "Henlow, Bedfordshire",
    type: "New Build",
    services: ["Roofing", "Window Installation"],
    duration: "2–3 months",
    desc: "A roofing project with a new window installation, enhancing both the appearance and functionality of the property.",
    longDesc:
      "A comprehensive new build roofing project in Henlow, Bedfordshire, combining a full pitched roof system with integrated window installation. The project required precise coordination between the roofing and glazing teams to ensure seamless weatherproofing around all window openings. Lead flashing details were hand-crafted on site to meet strict weatherproofing specifications.",
    img: "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d66f9f030e4181e582eb8b_DR_P1_02.jpg",
    gallery: [
      "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d66f9f030e4181e582eb8b_DR_P1_02.jpg",
      "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d676654056998f9a78ba26_DR_P4_01.jpg",
      "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d6764dec5ec7c14be04350_DR_P3_01.jpg",
    ],
    featured: true,
    scope: "Full pitched roof installation with integrated window openings, lead flashing, and ridge detailing.",
    materials: ["Clay Tiles", "Lead Flashing", "Timber Battens", "Breathable Membrane", "VELUX Units"],
    outcome: "Delivered on time with all weatherproofing details signed off by the main contractor. Zero defects reported at handover.",
  },
  {
    slug: "project-rushden",
    name: "Project Rushden",
    location: "Rushden, Northamptonshire",
    type: "New Build",
    services: ["Property Roofing"],
    duration: "1–2 months",
    desc: "A completed roofing project for a new build property, ensuring long-term durability and protection from the elements.",
    longDesc:
      "A single-dwelling new build roofing project in Rushden, Northamptonshire. The project involved the full installation of a clay tile pitched roof system with all associated lead valley linings, ridge tiles, hip tiles, and guttering. The property required careful attention to the complex roof geometry with multiple hips and valleys.",
    img: "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d6764dec5ec7c14be04350_DR_P3_01.jpg",
    gallery: [
      "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d6764dec5ec7c14be04350_DR_P3_01.jpg",
      "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d6703ef0bec4b9baa1f0a0_DR_P2_01.jpg",
      "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d66f9f030e4181e582eb8b_DR_P1_02.jpg",
    ],
    featured: false,
    scope: "Complete clay tile pitched roof system including all hips, valleys, ridges, lead work, and guttering.",
    materials: ["Clay Plain Tiles", "Lead Valley Linings", "Hip Tiles", "Ridge Tiles", "Fascia & Soffit Boards"],
    outcome: "Completed ahead of schedule, allowing the main contractor to proceed with internal fit-out two weeks early.",
  },
  {
    slug: "project-corby",
    name: "Project Corby",
    location: "Corby, Northamptonshire",
    type: "New Build",
    services: ["Roofing", "Solar Integration"],
    duration: "1–2 months",
    desc: "Exceptional skills demonstrated in a new build project, seamlessly integrating solar panels within the roofing design.",
    longDesc:
      "A forward-thinking new build project in Corby where solar photovoltaic panels were integrated directly into the roof structure during construction. Working closely with the solar PV contractor, our team installed a tile system specifically designed to accommodate in-roof solar panels, eliminating the need for on-roof frames and ensuring a clean, low-profile result.",
    img: "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d6703ef0bec4b9baa1f0a0_DR_P2_01.jpg",
    gallery: [
      "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d6703ef0bec4b9baa1f0a0_DR_P2_01.jpg",
      "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d6767c9bec4b57edf30ace_DR_P5_01.jpg",
      "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d6764dec5ec7c14be04350_DR_P3_01.jpg",
    ],
    featured: false,
    scope: "In-roof solar PV integration alongside full tile installation, cable management, and weatherproofing.",
    materials: ["In-Roof Solar Frames", "Monocrystalline PV Panels", "Concrete Interlocking Tiles", "Lead Flashings", "Weatherproof Cable Entry"],
    outcome: "Clean solar integration achieving a sleek, low-profile result approved by the local planning authority.",
  },
  {
    slug: "project-northampton",
    name: "Project Northampton",
    location: "Northampton, Northamptonshire",
    type: "New Build",
    services: ["Roofing", "Window Installation"],
    duration: "1–2 months",
    desc: "A roofing project that also involved installing new windows, improving the property's aesthetics and energy performance.",
    longDesc:
      "A new build residential project in Northampton requiring coordinated delivery of both roof and window packages. The complex roofline featured dormers and multiple gable ends, each requiring precise lead work and tile cutting. All windows were installed within the roofline with full airtight tape detailing and lead soakers.",
    img: "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d676654056998f9a78ba26_DR_P4_01.jpg",
    gallery: [
      "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d676654056998f9a78ba26_DR_P4_01.jpg",
      "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d66f9f030e4181e582eb8b_DR_P1_02.jpg",
      "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d6703ef0bec4b9baa1f0a0_DR_P2_01.jpg",
    ],
    featured: false,
    scope: "Dormer roofline with integrated windows, full lead flashings, airtight detailing, and external guttering.",
    materials: ["Concrete Plain Tiles", "Lead Soakers & Flashings", "Dormer Cladding", "Aluminium Windows", "Airtight Membrane"],
    outcome: "High energy-performance result with all details passing building control inspection on first visit.",
  },
  {
    slug: "project-bedfordshire",
    name: "Project Bedfordshire",
    location: "Bedfordshire",
    type: "New Build",
    services: ["Solar Panel Installation"],
    duration: "1–2 months",
    desc: "Installed solar panels on a property's roof, promoting sustainability and reducing long-term energy costs.",
    longDesc:
      "A retrofit solar PV installation on an existing property in Bedfordshire, adapted to work with the existing tile system. Our team assessed the structural capability of the existing roof, installed new rafter reinforcements where required, and fitted a full 12-panel photovoltaic array with all associated rail systems, flashings, and cable penetrations.",
    img: "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d6767c9bec4b57edf30ace_DR_P5_01.jpg",
    gallery: [
      "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d6767c9bec4b57edf30ace_DR_P5_01.jpg",
      "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d6703ef0bec4b9baa1f0a0_DR_P2_01.jpg",
      "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d6764dec5ec7c14be04350_DR_P3_01.jpg",
    ],
    featured: false,
    scope: "12-panel solar array installation on existing roof with structural assessment, rail system, and weatherproofed cable entry.",
    materials: ["Aluminium Rail System", "Monocrystalline Solar Panels", "Lead Weathering Flashings", "Stainless Steel Fixings", "Weatherproof Conduit"],
    outcome: "12-panel array installed and commissioned within 3 days. Estimated to generate 3,200kWh per year.",
  },
  {
    slug: "union-view",
    name: "Union View",
    location: "Northamptonshire, UK",
    type: "New Build",
    services: ["Full Roofing Package"],
    duration: null,
    desc: "A flagship new build roofing project demonstrating our full capabilities, from structural systems to final weatherproofing.",
    longDesc:
      "Union View is our most comprehensive project to date — a flagship residential development in Northamptonshire involving the complete roofing of multiple new build units. From structural deck installation through to final ridge tile bedding, our team was on site throughout the full construction programme, coordinating with the main contractor, structural engineer, and building control.",
    img: "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d66f9f030e4181e582eb8b_DR_P1_02.jpg",
    gallery: [
      "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d66f9f030e4181e582eb8b_DR_P1_02.jpg",
      "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d676654056998f9a78ba26_DR_P4_01.jpg",
      "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d6764dec5ec7c14be04350_DR_P3_01.jpg",
      "https://cdn.prod.website-files.com/6495714d052e260635f92f28/65d6703ef0bec4b9baa1f0a0_DR_P2_01.jpg",
    ],
    featured: true,
    scope: "Multi-unit residential development — full roofing package from structural deck to finished ridge on all units.",
    materials: ["Concrete Interlocking Tiles", "Lead Work Throughout", "Breathable Roofing Membrane", "Timber Battens & Counter Battens", "Aluminium Guttering Systems"],
    outcome: "All units signed off by building control with zero defects. Development fully handed over on programme.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
