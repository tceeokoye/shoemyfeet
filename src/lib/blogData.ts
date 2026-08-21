export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
  articleCount: number;
  totalViews: number;
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "pullQuote"; quote: string; attribution?: string }
  | { type: "imageGallery"; images: { url: string; caption: string }[] }
  | { type: "videoEmbed"; videoUrl: string; poster: string; title: string }
  | { type: "statsGrid"; stats: { label: string; value: string; description: string }[] }
  | { type: "calloutBox"; variant: "tip" | "important" | "success" | "warning"; title: string; text: string }
  | { type: "bulletList"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "downloadAttachment"; title: string; fileSize: string; fileType: string; downloadUrl: string };

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: Author;
  publishedAt: string; // ISO date string or formatted date
  year: number;
  month: string; // e.g. "July", "August"
  readingTime: string;
  viewsCount: number;
  sharesCount: number;
  isFeatured?: boolean;
  isTrending?: boolean;
  isNew?: boolean;
  isEditorsPick?: boolean;
  contentBlocks: ContentBlock[];
}

export interface SuccessStory {
  id: string;
  childName: string;
  age?: number;
  community: string;
  state: string;
  summary: string;
  quote: string;
  coverImage: string;
  storyId?: string; // links to full article ID
  impactMetrics: { label: string; value: string }[];
}

export interface EducationalResource {
  id: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  iconName: "ShieldCheck" | "HeartPulse" | "GraduationCap" | "Users" | "Sparkles";
  downloadUrl: string;
  fileSize: string;
  keyTakeaways: string[];
}

export interface VolunteerSpotlight {
  id: string;
  name: string;
  role: string;
  organization: string;
  location: string;
  avatar: string;
  bio: string;
  quote: string;
  shoesDistributed: number;
  storyId?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string; // e.g. "2026-08-20T09:00:00"
  displayDate: string;
  time: string;
  location: string;
  state: string;
  mapUrl: string;
  capacity: number;
  seatsLeft: number;
  organizer: string;
  contactEmail: string;
  description: string;
  coverImage: string;
  category: string;
}

// Global Categories List (10 categories required)
export const BLOG_CATEGORIES = [
  "All Posts",
  "Foundation News",
  "Success Stories",
  "Community Outreach",
  "School Visits",
  "Volunteer Stories",
  "Events",
  "Partnerships",
  "Health & Education",
  "Child Development",
] as const;

// Global Tags List (12 tags required)
export const BLOG_TAGS = [
  "Education",
  "Hope",
  "Shoes",
  "Outreach",
  "Volunteers",
  "Children",
  "Schools",
  "Health",
  "Community",
  "Donations",
  "Events",
  "Partnerships",
] as const;

// Sample Authors
export const AUTHORS: Record<string, Author> = {
  dr_chidinma: {
    id: "dr_chidinma",
    name: "Dr. Chidinma Okafor",
    role: "Founder & Executive Director",
    avatar: "/images/founder.jpg",
    bio: "Pediatric healthcare advocate and founder of Shoe My Feet Foundation with over 12 years of community outreach experience across rural Nigerian states.",
    socialLinks: {
      twitter: "https://twitter.com/shoemyfeet",
      linkedin: "https://linkedin.com/in/shoemyfeet",
      email: "chidinma@shoemyfeet.org",
    },
    articleCount: 14,
    totalViews: 38400,
  },
  emmanuel_nwankwo: {
    id: "emmanuel_nwankwo",
    name: "Emmanuel Nwankwo",
    role: "Head of Field Operations & Logistics",
    avatar: "/images/volunteers.jpg",
    bio: "Lead field coordinator overseeing school shoe distributions, podiatry health screenings, and community partner engagements in Enugu & Kaduna.",
    socialLinks: {
      twitter: "https://twitter.com/shoemyfeet",
      email: "emmanuel@shoemyfeet.org",
    },
    articleCount: 9,
    totalViews: 22100,
  },
  grace_adebayo: {
    id: "grace_adebayo",
    name: "Grace Adebayo",
    role: "Child Development & Education Specialist",
    avatar: "/images/community.jpg",
    bio: "Child psychologist researching the behavioral and academic impacts of dignified footwear and footwear hygiene in primary school children.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/shoemyfeet",
      email: "grace@shoemyfeet.org",
    },
    articleCount: 7,
    totalViews: 17800,
  },
};

// Sample Articles Dataset
export const ARTICLES: Article[] = [
  {
    id: "article-1",
    slug: "stepping-into-hope-enugu-outreach-2026",
    title: "Stepping Into Hope: 1,500 School Children Receive Shoes in Enugu State Outreach",
    subtitle: "How proper fitting leather footwear is restoring school attendance and self-esteem across rural schools in Nsukka and Udi.",
    excerpt: "Over 1,500 primary school children in Enugu State walked into their classrooms this week wearing brand new, locally crafted school shoes. For many, it was their first pair of protective footwear.",
    coverImage: "/images/hero.jpg",
    category: "Community Outreach",
    tags: ["Outreach", "Shoes", "Education", "Children", "Community"],
    author: AUTHORS.dr_chidinma,
    publishedAt: "July 28, 2026",
    year: 2026,
    month: "July",
    readingTime: "5 min read",
    viewsCount: 4820,
    sharesCount: 340,
    isFeatured: true,
    isTrending: true,
    isNew: true,
    isEditorsPick: true,
    contentBlocks: [
      {
        type: "paragraph",
        text: "Across many rural communities in Enugu State, walking to school barefoot is a daily reality for thousands of young pupils. Beyond the physical discomfort, barefoot walking exposes children to soil-transmitted helminths, sharp objects, and severe infections that frequently cause extended school absences.",
      },
      {
        type: "heading",
        level: 2,
        text: "A Transformative Morning at St. Joseph's Primary School",
      },
      {
        type: "paragraph",
        text: "Last Tuesday, the Shoe My Feet Foundation field team arrived at St. Joseph’s Primary School, Nsukka, with 15 large crates of custom-fitted leather shoes and cotton socks. Before receiving their footwear, every pupil underwent a gentle foot inspection and washing session led by our volunteer podiatry nurses.",
      },
      {
        type: "pullQuote",
        quote: "Seeing a child stand tall and smile after putting on their very first pair of polished school shoes is a feeling money cannot buy. It changes how they view themselves and their future.",
        attribution: "Dr. Chidinma Okafor — Founder, Shoe My Feet Foundation",
      },
      {
        type: "statsGrid",
        stats: [
          { label: "Children Shod", value: "1,520+", description: "Pupils across 4 rural schools received new durable shoes" },
          { label: "Attendance Surge", value: "+34%", description: "Reported increase in weekly attendance following distribution" },
          { label: "Volunteers Engaged", value: "48", description: "Dedicated field volunteers and healthcare personnel" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Empowering Local Craftsmen in the Process",
      },
      {
        type: "paragraph",
        text: "In line with our sustainable impact framework, 100% of the footwear distributed in Enugu was crafted by young cobblers trained through our Kids Shoemaking & Skills Initiative in Aba and Enugu. By sourcing locally, every donation supports dual impact: equipping a child while creating dignified livelihoods for local kids.",
      },
      {
        type: "calloutBox",
        variant: "success",
        title: "Key Milestone Achieved",
        text: "This outreach marks 14,000 total pairs of shoes distributed by Shoe My Feet Foundation since our inception in 2024!",
      },
      {
        type: "bulletList",
        items: [
          "Complete foot measurement and sizing for 1,520 pupils",
          "Distribution of 2 pairs of durable cotton socks with every shoe",
          "Educational workshop on foot hygiene and shoe maintenance for parents & teachers",
          "Setup of school shoe repair stations supported by local cobbler apprentices",
        ],
      },
    ],
  },
  {
    id: "article-2",
    slug: "why-proper-footwear-matters-for-child-health",
    title: "Why Proper Footwear Matters: The Science of Child Foot Health & Academic Growth",
    subtitle: "Understanding the physiological and psychological impact of protective shoes on growing children.",
    excerpt: "Medical research shows that protective shoes do far more than prevent cuts; they actively improve posture, reduce parasitic infections, and boost cognitive engagement in school.",
    coverImage: "/images/children_walking_school.jpg",
    category: "Health & Education",
    tags: ["Health", "Education", "Child Development", "Schools"],
    author: AUTHORS.dr_chidinma,
    publishedAt: "July 20, 2026",
    year: 2026,
    month: "July",
    readingTime: "6 min read",
    viewsCount: 3950,
    sharesCount: 290,
    isTrending: true,
    isEditorsPick: true,
    contentBlocks: [
      {
        type: "paragraph",
        text: "Childhood foot development is a critical window between ages 4 and 14. During these formative years, bones in the feet are predominantly pliable cartilage. Walking long distances on uneven or unpaved terrain without proper arch support or protective soles leads to structural deformities and chronic pain.",
      },
      {
        type: "heading",
        level: 2,
        text: "3 Direct Health Consequences of Barefoot School Journeys",
      },
      {
        type: "bulletList",
        items: [
          "Soil-Transmitted Helminthiasis (Hookworm): Larvae penetrate bare skin, leading to chronic anemia and impaired cognitive function.",
          "Plantars & Structural Micro-trauma: Repeated punctures from thorns and sharp stones cause chronic ulcers and bacterial infections.",
          "Thermal Stress & Blisters: Extreme soil temperatures exceeding 42°C cause severe skin burns during afternoon walks home.",
        ],
      },
      {
        type: "calloutBox",
        variant: "important",
        title: "Educational Impact",
        text: "Children who miss 3 or more school days per month due to preventable foot infections are 40% more likely to fall behind in foundational literacy and numeracy.",
      },
      {
        type: "heading",
        level: 2,
        text: "The Psychological Boost of Dignified Attire",
      },
      {
        type: "paragraph",
        text: "In many Nigerian public primary schools, wearing a neat school uniform with proper black shoes instills a profound sense of pride and equality. Children who previously felt isolated or ashamed due to torn or missing shoes show immediate improvements in classroom participation and social interactions.",
      },
    ],
  },
  {
    id: "article-3",
    slug: "kids-shoemaking-empowerment-kaduna-batch-3",
    title: "Empowering the Next Generation: Kaduna Child Shoemaking Cohort Graduates 35 Apprentices",
    subtitle: "Combining vocational training with humanitarian distribution to build sustainable local supply chains.",
    excerpt: "Meet the 35 young men and women in Kaduna who completed our 6-month intensive shoemaking mastery program and are now producing school shoes for rural pupils.",
    coverImage: "/images/shoemaking.jpg",
    category: "Foundation News",
    tags: ["Volunteers", "Partnerships", "Hope", "Community"],
    author: AUTHORS.emmanuel_nwankwo,
    publishedAt: "July 14, 2026",
    year: 2026,
    month: "July",
    readingTime: "4 min read",
    viewsCount: 2840,
    sharesCount: 195,
    isTrending: true,
    isNew: true,
    contentBlocks: [
      {
        type: "paragraph",
        text: "Our Child Shoemaking Empowerment Initiative reached a major milestone this month with the graduation of 35 young apprentices at our Kaduna Vocational Hub. Each graduate received a certified shoe-crafting starter kit, including heavy-duty sewing machines, lasting tools, and raw leather supplies.",
      },
      {
        type: "pullQuote",
        quote: "I used to be unemployed with no clear future. Today, I lead a team of 4 cobblers producing 200 pairs of shoes every month for children in my LGA.",
        attribution: "Kabiru Usman — Kaduna Cohort Valedictorian",
      },
      {
        type: "heading",
        level: 2,
        text: "A Closed-Loop Model for Sustainable Charity",
      },
      {
        type: "paragraph",
        text: "Instead of importing cheap synthetic shoes, Shoe My Feet Foundation commissions all shoes from local graduates. This creates an economic multiplier effect: donor funds remain inside the local economy, fueling kids employment while equipping underserved students.",
      },
    ],
  },
  {
    id: "article-4",
    slug: "amina-story-nsukka-enugu",
    title: "Amina's Journey: From Walking 5km Barefoot to Becoming Top of Her Class",
    subtitle: "A heartwarming look at how a simple pair of shoes transformed a 9-year-old girl's school journey.",
    excerpt: "9-year-old Amina used to dread the hot 5km walk to school in Nsukka. Today, in her shiny black leather shoes, she leads her class with attendance and academic excellence.",
    coverImage: "/images/story1.jpg",
    category: "Success Stories",
    tags: ["Children", "Hope", "Education", "Success Stories"],
    author: AUTHORS.grace_adebayo,
    publishedAt: "June 29, 2026",
    year: 2026,
    month: "June",
    readingTime: "4 min read",
    viewsCount: 5120,
    sharesCount: 420,
    isTrending: true,
    isEditorsPick: true,
    contentBlocks: [
      {
        type: "paragraph",
        text: "Every morning at 6:00 AM, 9-year-old Amina sets off on a 5-kilometer trek across rough, dusty pathways in rural Nsukka, Enugu State. For two years, Amina made this journey without shoes, stepping carefully to avoid sharp thorns and blistering hot sand during the dry season.",
      },
      {
        type: "paragraph",
        text: "In October 2025, during our primary school distribution outreach, Amina was fitted with her very first pair of hand-stitched leather school shoes. The transformation was immediate.",
      },
      {
        type: "pullQuote",
        quote: "Before I got my shoes, my feet used to bleed and hurt so much that I would stay home for days. Now I run to school every single morning because my feet feel safe and comfortable!",
        attribution: "Amina — Primary 4 Pupil, Nsukka",
      },
    ],
  },
  {
    id: "article-5",
    slug: "corporate-partnerships-zenith-bank-shoe-drive",
    title: "Corporate Action for Impact: Zenith Bank Partners for 5,000-Shoe National Campaign",
    subtitle: "Expanding outreach across 3 geopolitical zones through corporate social responsibility collaboration.",
    excerpt: "We are thrilled to announce a major partnership with Zenith Bank Plc to deliver 5,000 pairs of shoes to public primary schools across Enugu, Kaduna, and Edo states.",
    coverImage: "/images/distribution.jpg",
    category: "Partnerships",
    tags: ["Partnerships", "Donations", "Events", "Outreach"],
    author: AUTHORS.dr_chidinma,
    publishedAt: "June 18, 2026",
    year: 2026,
    month: "June",
    readingTime: "5 min read",
    viewsCount: 3100,
    sharesCount: 210,
    contentBlocks: [
      {
        type: "paragraph",
        text: "Sustainable impact requires bold partnerships between civil society and leading corporate citizens. Shoe My Feet Foundation is proud to announce a flagship CSR partnership with Zenith Bank Plc to supply 5,000 pairs of high-quality school shoes and socks over the next 6 months.",
      },
      {
        type: "calloutBox",
        variant: "tip",
        title: "Partnership Vision",
        text: "This initiative will cover 25 underserved public primary schools, providing comprehensive foot health assessments and shoe repair stations.",
      },
    ],
  },
  {
    id: "article-6",
    slug: "preparing-children-for-school-resumption-guide",
    title: "Back to School with Dignity: A Community Guide on School Readiness & Hygiene",
    subtitle: "Practical advice for parents, teachers, and guardians on supporting children's physical and emotional readiness.",
    excerpt: "As school resumption approaches, here are essential tips for parents and teachers on ensuring children have clean uniforms, comfortable shoes, and positive learning mindsets.",
    coverImage: "/images/gallery4.jpg",
    category: "Health & Education",
    tags: ["Education", "Schools", "Health", "Children"],
    author: AUTHORS.grace_adebayo,
    publishedAt: "May 25, 2026",
    year: 2026,
    month: "May",
    readingTime: "5 min read",
    viewsCount: 2200,
    sharesCount: 140,
    contentBlocks: [
      {
        type: "paragraph",
        text: "School readiness goes beyond textbooks. When a child feels presentable and comfortable, their enthusiasm for learning skyrockets. Here is our comprehensive checklist for parents ahead of the new academic term.",
      },
      {
        type: "bulletList",
        items: [
          "Check shoe fit: Leave a thumb-width space between the longest toe and the tip of the shoe.",
          "Sock hygiene: Ensure children wear clean cotton socks daily to absorb moisture and prevent fungal infections.",
          "Daily shoe care: Teach children to wipe leather shoes clean with a dry cloth and polish weekly.",
        ],
      },
    ],
  },
  {
    id: "article-7",
    slug: "volunteer-diaries-a-day-with-field-team-in-edo",
    title: "Volunteer Diaries: What It Takes to Measure, Fit, and Shod 500 Pupils in One Day",
    subtitle: "An intimate behind-the-scenes look into field logistics with volunteer nurse Blessing Chukwu.",
    excerpt: "Join volunteer nurse Blessing Chukwu as she walks us through a high-energy distribution day in Benin City, Edo State.",
    coverImage: "/images/volunteers.jpg",
    category: "Volunteer Stories",
    tags: ["Volunteers", "Community", "Outreach"],
    author: AUTHORS.emmanuel_nwankwo,
    publishedAt: "May 10, 2026",
    year: 2026,
    month: "May",
    readingTime: "4 min read",
    viewsCount: 2650,
    sharesCount: 180,
    contentBlocks: [
      {
        type: "paragraph",
        text: "The sun hasn't fully risen when our logistics bus pulls into Central Primary School, Benin City. Onboard are 20 excited volunteers, foot measuring callipers, antiseptic wipes, and 600 neatly labeled shoe boxes.",
      },
    ],
  },
  {
    id: "article-8",
    slug: "school-visit-st-marks-kaduna-impact-report",
    title: "School Visit Spotlight: St. Mark's Primary School 6 Months Later",
    subtitle: "Tracking long-term attendance, health, and academic retention following our December distribution.",
    excerpt: "We revisited St. Mark's Primary School in Kaduna to measure the lasting effects of shoe distribution 6 months post-outreach.",
    coverImage: "/images/community.jpg",
    category: "School Visits",
    tags: ["Schools", "Education", "Health"],
    author: AUTHORS.dr_chidinma,
    publishedAt: "April 28, 2026",
    year: 2026,
    month: "April",
    readingTime: "5 min read",
    viewsCount: 1980,
    sharesCount: 125,
    contentBlocks: [
      {
        type: "paragraph",
        text: "Evaluating post-distribution impact is central to our accountability framework. 6 months after delivering 450 pairs of shoes to St. Mark's Primary School, headteacher Mr. Usman shared startling data.",
      },
    ],
  },
];

// Success Stories Highlights
export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "story-1",
    childName: "Amina & Family",
    age: 9,
    community: "Nsukka Rural Community",
    state: "Enugu State",
    summary: "Walked 5km barefoot daily across rocky pathways. Receiving her first pair of durable leather shoes restored her attendance and boosted her class rank to #1.",
    quote: "Now I run to school with my friends because my feet don't hurt anymore!",
    coverImage: "/images/story1.jpg",
    storyId: "article-4",
    impactMetrics: [
      { label: "Daily Walk Saved", value: "5 km" },
      { label: "Attendance Increase", value: "100%" },
    ],
  },
  {
    id: "story-2",
    childName: "Chidi & Primary 3 Pupils",
    age: 10,
    community: "Ogbete Community School",
    state: "Enugu State",
    summary: "Overcame recurring foot infections caused by sharp stones. Now leads his school soccer team with confidence and protective sports footwear.",
    quote: "My shoes make me feel like I can accomplish anything I put my mind to.",
    coverImage: "/images/story2.jpg",
    storyId: "article-1",
    impactMetrics: [
      { label: "Infections Prevented", value: "100%" },
      { label: "Classroom Participation", value: "+85%" },
    ],
  },
  {
    id: "story-3",
    childName: "Zainab & Kaduna young students",
    age: 11,
    community: "Tudun Wada District",
    state: "Kaduna State",
    summary: "Beneficiary turned ambassador. Zainab's father enrolled in our Child Shoemaking initiative and now crafts school shoes for neighboring schools.",
    quote: "My father made my shoes with his own hands. I wear them with so much pride!",
    coverImage: "/images/story3.jpg",
    storyId: "article-3",
    impactMetrics: [
      { label: "Family Income Boost", value: "+120%" },
      { label: "Local Cobblers Trained", value: "35" },
    ],
  },
];

// Educational Resources
export const EDUCATIONAL_RESOURCES: EducationalResource[] = [
  {
    id: "res-1",
    title: "Why Proper Footwear Matters: Complete Health Guide",
    description: "An educational handbook on preventing hookworm, podoconiosis, and bone deformities through protective shoes.",
    category: "Child Foot Health",
    readingTime: "8 min read",
    iconName: "ShieldCheck",
    downloadUrl: "#",
    fileSize: "2.4 MB PDF",
    keyTakeaways: [
      "Understanding anatomical foot growth in children aged 4-14",
      "Identifying early signs of soil-transmitted infections",
      "Optimal shoe materials for tropical climates",
    ],
  },
  {
    id: "res-2",
    title: "School Readiness & Footwear Sizing Chart for Teachers",
    description: "Printable sizing ruler and fitting guide for primary school administrators and outreach volunteers.",
    category: "School Readiness",
    readingTime: "5 min read",
    iconName: "GraduationCap",
    downloadUrl: "#",
    fileSize: "1.8 MB PDF",
    keyTakeaways: [
      "Step-by-step millimeter foot measuring technique",
      "Allowance rules for growth spurts",
      "Sock thickness selection criteria",
    ],
  },
  {
    id: "res-3",
    title: "Community Foot Hygiene & Maintenance Manual",
    description: "Practical guide for parents on leather cleaning, drying, polishing, and simple cobbler repairs.",
    category: "Hygiene & Maintenance",
    readingTime: "6 min read",
    iconName: "HeartPulse",
    downloadUrl: "#",
    fileSize: "3.1 MB PDF",
    keyTakeaways: [
      "Natural polish recipes using local beeswax",
      "Fungal infection prevention in warm weather",
      "Stretching shoe lifespan up to 18 months",
    ],
  },
  {
    id: "res-4",
    title: "kids Vocational Shoemaking Starter Curriculum",
    description: "Outline of our 6-month hands-on cobbling module for community kids and vocational centers.",
    category: "Kids Empowerment",
    readingTime: "10 min read",
    iconName: "Sparkles",
    downloadUrl: "#",
    fileSize: "4.2 MB PDF",
    keyTakeaways: [
      "Pattern making and leather lasting fundamentals",
      "Sole stitching and adhesive safety",
      "Small business management for cobbler entrepreneurs",
    ],
  },
];

// Volunteer & Partner Spotlights
export const VOLUNTEER_SPOTLIGHTS: VolunteerSpotlight[] = [
  {
    id: "spotlight-1",
    name: "Blessing Chukwu",
    role: "Lead Outreach Volunteer Nurse",
    organization: "Enugu Medical Volunteers Guild",
    location: "Enugu State",
    avatar: "/images/volunteers.jpg",
    bio: "Pediatric nurse who has led 12 community health screenings and shoe fitting sessions across rural primary schools.",
    quote: "The joy on a child's face when they slide their feet into fitted, polished shoes makes every long hour worth it.",
    shoesDistributed: 4200,
  },
  {
    id: "spotlight-2",
    name: "Mr. Festus Okonkwo",
    role: "Headteacher",
    organization: "St. Joseph's Primary School, Nsukka",
    location: "Enugu State",
    avatar: "/images/community.jpg",
    bio: "Dedicated education leader whose partnership helped shod over 1,200 pupils and boost attendance by 34%.",
    quote: "Shoe My Feet Foundation restored dignity to our pupils. They no longer feel inferior to city school students.",
    shoesDistributed: 1200,
  },
  {
    id: "spotlight-3",
    name: "Zenith Bank CSR Division",
    role: "Corporate Lead Partner",
    organization: "Zenith Bank Plc",
    location: "Lagos / National",
    avatar: "/images/distribution.jpg",
    bio: "Corporate sponsor funding 5,000 pairs of shoes and setting up 10 cobbler repair stations in public schools.",
    quote: "Investing in children's basic school equipment is investing in the future economic workforce of Nigeria.",
    shoesDistributed: 5000,
  },
];

// Upcoming Events
export const UPCOMING_EVENTS: Event[] = [
  {
    id: "event-1",
    title: "Back-To-School Footwear Outreach — Nsukka Rural Cluster",
    date: "2026-08-20T09:00:00",
    displayDate: "August 20, 2026",
    time: "9:00 AM - 3:00 PM WAT",
    location: "St. Joseph's Primary School Grounds, Nsukka",
    state: "Enugu State",
    mapUrl: "https://maps.google.com/?q=Nsukka+Enugu",
    capacity: 200,
    seatsLeft: 38,
    organizer: "Shoe My Feet Field Ops Team",
    contactEmail: "outreach@shoemyfeet.org",
    description: "Targeting 2,000 pupils across 5 primary schools. Volunteers needed for foot measurements, sock distribution, and registration.",
    coverImage: "/images/hero.jpg",
    category: "Community Outreach",
  },
  {
    id: "event-2",
    title: "Child Shoemaking Vocational Workshop — Kaduna Batch 4",
    date: "2026-09-05T10:00:00",
    displayDate: "September 5, 2026",
    time: "10:00 AM - 4:00 PM WAT",
    location: "Kaduna Innovation & Vocational Hub, Tudun Wada",
    state: "Kaduna State",
    mapUrl: "https://maps.google.com/?q=Kaduna+Nigeria",
    capacity: 50,
    seatsLeft: 12,
    organizer: "Child Skills & Education Division",
    contactEmail: "empower@shoemyfeet.org",
    description: "6-week intensive cobbling masterclass for unemployed kids aged 18-28. Learn lasting, stitching, and business management.",
    coverImage: "/images/shoemaking.jpg",
    category: "School Visits",
  },
  {
    id: "event-3",
    title: "Annual Charity Gala & Footwear Fundraiser 2026",
    date: "2026-10-15T18:00:00",
    displayDate: "October 15, 2026",
    time: "6:00 PM - 10:00 PM WAT",
    location: "The Grand Ballroom, Transcorp Hilton, Abuja",
    state: "Abuja FCT",
    mapUrl: "https://maps.google.com/?q=Transcorp+Hilton+Abuja",
    capacity: 350,
    seatsLeft: 85,
    organizer: "Shoe My Feet Board & Donors Committee",
    contactEmail: "gala@shoemyfeet.org",
    description: "An elegant evening celebrating our milestone of 15,000 shod children. Keynote speeches, live auction, and partner awards.",
    coverImage: "/images/distribution.jpg",
    category: "Events",
  },
];
