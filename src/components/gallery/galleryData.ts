export interface MediaItem {
  id: string;
  type: "photo" | "video";
  title: string;
  caption: string;
  location: string;
  event: string;
  date: string;
  year: string;
  categories: string[]; // e.g. ["Photos", "Shoe Distribution", "Children"]
  image: string;
  videoUrl?: string; // MP4 or YouTube embed
  duration?: string;
  beneficiaries?: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "wide";
  featured?: boolean;
}

export interface FeaturedMoment {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  coverImage: string;
  date: string;
  location: string;
  itemCount: number;
  tags: string[];
  albumMedia: MediaItem[];
}

export interface TransformationItem {
  id: string;
  childName: string;
  age: number;
  location: string;
  story: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  testimonialVideo?: string;
  quote: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  date: string;
  title: string;
  location: string;
  beneficiaries: string;
  description: string;
  coverImage: string;
  mediaType: "photo" | "video";
  videoUrl?: string;
}

export interface CommunityVoice {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  quote: string;
  hasVideo: boolean;
  videoUrl?: string;
  thumbnail?: string;
}

export const GALLERY_STATS = [
  { label: "Photos Captured", value: 5400, suffix: "+", icon: "camera", color: "bg-[#111827]" },
  { label: "Videos Recorded", value: 120, suffix: "+", icon: "video", color: "bg-[#1A3A6B]" },
  { label: "Outreach Events", value: 85, suffix: "+", icon: "calendar", color: "bg-[#16A34A]" },
  { label: "Communities Visited", value: 42, suffix: "+", icon: "map-pin", color: "bg-[#111827]" },
  { label: "Children Reached", value: 15000, suffix: "+", icon: "users", color: "bg-[#1A3A6B]" },
];

export const CATEGORY_TABS = [
  "All Media",
  "Photos",
  "Videos",
  "Shoe Distribution",
  "School Visits",
  "Community Outreach",
  "Volunteers",
  "Events",
  "Children",
  "Partners",
];

export const FEATURED_VIDEO: MediaItem = {
  id: "fv-1",
  type: "video",
  title: "Restoring Dignity in Northern Nigeria: The Kaduna Outreach Documentary",
  caption: "Over 2,000 children in Kaduna State received brand new fitted school shoes in our largest northern outreach to date.",
  location: "Kaduna State, Nigeria",
  event: "Kaduna State Shoe Distribution",
  date: "March 15, 2026",
  year: "2026",
  categories: ["Videos", "Shoe Distribution", "Children", "Events"],
  image: "/images/children_walking_school.jpg",
  videoUrl: "/videos/story.mp4",
  duration: "03:45",
  beneficiaries: "2,000+ Children",
  featured: true,
};

export const ALL_MEDIA_ITEMS: MediaItem[] = [
  {
    id: "m-1",
    type: "photo",
    title: "Distribution Day Excitement",
    caption: "Children lined up with eager smiles as volunteers prepare custom fittings for every student.",
    location: "Enugu State",
    event: "Enugu Back-to-School Distribution",
    date: "February 2026",
    year: "2026",
    categories: ["Photos", "Shoe Distribution", "Children", "Events"],
    image: "/images/gallery1.jpg",
    aspectRatio: "wide",
  },
  {
    id: "m-2",
    type: "photo",
    title: "Walking Tall & Proud",
    caption: "A young girl steps into school with newfound confidence and joy in her durable black school shoes.",
    location: "Kaduna State",
    event: "Northern Hope Campaign",
    date: "January 2026",
    year: "2026",
    categories: ["Photos", "School Visits", "Children"],
    image: "/images/gallery2.jpg",
    aspectRatio: "portrait",
  },
  {
    id: "m-3",
    type: "photo",
    title: "Child Shoemaking Workshop",
    caption: "Trainees master the art of sole cutting and leather stitching at our Benin City Empowerment Center.",
    location: "Edo State",
    event: "Benin City Artisan Academy",
    date: "December 2025",
    year: "2025",
    categories: ["Photos", "Community Outreach", "Partners"],
    image: "/images/gallery3.jpg",
    aspectRatio: "square",
  },
  {
    id: "m-4",
    type: "video",
    title: "Volunteers in Action — Logistics & Fitting",
    caption: "Watch our dedicated volunteer team handle sizing, shoe distribution, and child engagement.",
    location: "Kaduna State",
    event: "Kaduna Distribution Drive",
    date: "November 2025",
    year: "2025",
    categories: ["Videos", "Volunteers", "Events"],
    image: "/images/gallery4.jpg",
    videoUrl: "/videos/story.mp4",
    duration: "02:18",
    aspectRatio: "landscape",
  },
  {
    id: "m-5",
    type: "photo",
    title: "Joy of Belonging — 137 Smiles",
    caption: "Entire primary school class posing together after receiving their new fitted uniforms and footwear.",
    location: "Enugu State",
    event: "Classroom Unity Drive",
    date: "October 2025",
    year: "2025",
    categories: ["Photos", "School Visits", "Children"],
    image: "/images/gallery5.jpg",
    aspectRatio: "landscape",
  },
  {
    id: "m-6",
    type: "photo",
    title: "First Pair, First Smile",
    caption: "The heartwarming moment a 7-year-old boy ties his shoelaces for the first time in his life.",
    location: "Kaduna State",
    event: "Kaduna Primary Outreach",
    date: "September 2025",
    year: "2025",
    categories: ["Photos", "Children", "Shoe Distribution"],
    image: "/images/gallery6.jpg",
    aspectRatio: "portrait",
  },
  {
    id: "m-7",
    type: "video",
    title: "Benin City Empowerment Journey",
    caption: "Highlight video showcasing young students creating 500+ pairs of school shoes locally.",
    location: "Edo State",
    event: "kids Vocational Showcase",
    date: "August 2025",
    year: "2025",
    categories: ["Videos", "Community Outreach", "Partners"],
    image: "/images/shoemaking.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "04:12",
    aspectRatio: "wide",
  },
  {
    id: "m-8",
    type: "photo",
    title: "Community Leader Partnership",
    caption: "Local elders and school headmasters blessing the outreach before distribution begins.",
    location: "Enugu State",
    event: "Community Alignment Summit",
    date: "July 2025",
    year: "2025",
    categories: ["Photos", "Community Outreach", "Partners"],
    image: "/images/community.jpg",
    aspectRatio: "landscape",
  },
  {
    id: "m-9",
    type: "photo",
    title: "Volunteer Fitting Team",
    caption: "Volunteers sitting on footstools ensuring every child gets an exact, comfortable shoe size.",
    location: "Kaduna State",
    event: "Kaduna Fitting Brigade",
    date: "June 2025",
    year: "2025",
    categories: ["Photos", "Volunteers", "Shoe Distribution"],
    image: "/images/volunteers.jpg",
    aspectRatio: "square",
  },
  {
    id: "m-10",
    type: "video",
    title: "Walking to School in Dignity",
    caption: "A short documentary film following three children on their daily journey to school before and after receiving shoes.",
    location: "Enugu State",
    event: "Dignity in Motion Film",
    date: "May 2025",
    year: "2025",
    categories: ["Videos", "School Visits", "Children"],
    image: "/images/children_walking_school.jpg",
    videoUrl: "/videos/story.mp4",
    duration: "05:05",
    aspectRatio: "wide",
  },
  {
    id: "m-11",
    type: "photo",
    title: "Back-to-School Celebration",
    caption: "Children cheering with their brand new shoe boxes held high in the air.",
    location: "Enugu State",
    event: "Annual Back-to-School Drive",
    date: "September 2024",
    year: "2024",
    categories: ["Photos", "Events", "Children"],
    image: "/images/distribution.jpg",
    aspectRatio: "portrait",
  },
  {
    id: "m-12",
    type: "photo",
    title: "Founder's Field Inspection",
    caption: "Philomena Nwajagu interacting with students and assessing footwear conditions prior to distribution.",
    location: "Enugu State",
    event: "Needs Assessment Survey",
    date: "March 2024",
    year: "2024",
    categories: ["Photos", "School Visits", "Partners"],
    image: "/images/founder.jpg",
    aspectRatio: "square",
  },
];

export const FEATURED_MOMENTS: FeaturedMoment[] = [
  {
    id: "fm-1",
    title: "Back-to-School Campaign 2026",
    subtitle: "Equipping 1,500 students for the new academic year across Enugu and Kaduna.",
    summary: "Our annual flagship initiative provided brand-new fitted leather shoes, socks, and motivational sessions to ensure no child stays home due to footwear poverty.",
    coverImage: "/images/hero.jpg",
    date: "January – March 2026",
    location: "Enugu & Kaduna States",
    itemCount: 48,
    tags: ["Shoe Distribution", "Children", "School Visits"],
    albumMedia: ALL_MEDIA_ITEMS.slice(0, 4),
  },
  {
    id: "fm-2",
    title: "Kaduna Mega Shoe Distribution",
    subtitle: "2,000+ pairs delivered in our largest Northern Nigeria outreach.",
    summary: "In partnership with local community organizations, we brought hope to over 14 primary schools in Kaduna, empowering kids to walk comfortably across long distances.",
    coverImage: "/images/distribution.jpg",
    date: "November 2025",
    location: "Kaduna State",
    itemCount: 64,
    tags: ["Shoe Distribution", "Events", "Volunteers"],
    albumMedia: ALL_MEDIA_ITEMS.slice(3, 7),
  },
  {
    id: "fm-3",
    title: "Benin City Child Shoemaking Academy",
    subtitle: "Training 50 young adults in sustainable shoemaking craftsmanship.",
    summary: "Equipping local kids with professional shoemaking tools, leather cutting techniques, and business mentorship so they can manufacture high-quality school shoes for their communities.",
    coverImage: "/images/shoemaking.jpg",
    date: "August – October 2025",
    location: "Edo State",
    itemCount: 32,
    tags: ["Community Outreach", "Partners", "Volunteers"],
    albumMedia: ALL_MEDIA_ITEMS.slice(2, 6),
  },
  {
    id: "fm-4",
    title: "Volunteer Appreciation Gala & Outreach",
    subtitle: "Honoring the 120+ volunteers who power our field distributions.",
    summary: "A celebration of the selfless individuals who donate their time, energy, and love to measure feet, carry boxes, and bring smiles to thousands of children.",
    coverImage: "/images/volunteers.jpg",
    date: "December 2025",
    location: "Enugu State",
    itemCount: 28,
    tags: ["Volunteers", "Events"],
    albumMedia: ALL_MEDIA_ITEMS.slice(8, 12),
  },
  {
    id: "fm-5",
    title: "Rural School Visits & Footwear Assessment",
    subtitle: "Mapping out underserved schools across remote agrarian communities.",
    summary: "Our field team conducts rigorous assessments to identify children walking barefoot over 5km daily, prioritizing those with urgent medical or safety needs.",
    coverImage: "/images/community.jpg",
    date: "May 2025",
    location: "Enugu & Edo States",
    itemCount: 40,
    tags: ["School Visits", "Community Outreach"],
    albumMedia: ALL_MEDIA_ITEMS.slice(4, 8),
  },
  {
    id: "fm-6",
    title: "Children's Day Joy & Fitness Drive",
    subtitle: "Celebrating International Children's Day with sports, shoes, and smiles.",
    summary: "A day filled with track races, dance competitions, hot meals, and shoe fittings where children celebrated their childhood in complete comfort.",
    coverImage: "/images/gallery5.jpg",
    date: "May 27, 2025",
    location: "Kaduna State",
    itemCount: 52,
    tags: ["Children", "Events", "Shoe Distribution"],
    albumMedia: ALL_MEDIA_ITEMS.slice(0, 5),
  },
];

export const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: "t-1",
    childName: "Chisom O.",
    age: 9,
    location: "Enugu State",
    story: "Chisom walked 4 kilometers barefoot to school every morning over rocky soil. Her feet frequently had cuts and infections that made her miss school weeks at a time.",
    beforeImage: "/images/gallery6.jpg",
    afterImage: "/images/gallery2.jpg",
    beforeLabel: "Tattered & Barefoot Journey",
    afterLabel: "Fitted School Shoes & Pride",
    quote: "I used to hide my feet in class. Now I run all the way to school with my friends!",
    testimonialVideo: "/videos/story.mp4",
  },
  {
    id: "t-2",
    childName: "Ibrahim K.",
    age: 11,
    location: "Kaduna State",
    story: "Ibrahim shared a single pair of broken slippers with his older brother, taking turns attending school on alternate days. After our distribution, both brothers got their own custom pairs.",
    beforeImage: "/images/story1.jpg",
    afterImage: "/images/gallery5.jpg",
    beforeLabel: "Shared Broken Slippers",
    afterLabel: "100% Daily School Attendance",
    quote: "Now my brother and I go to school together every single morning!",
  },
  {
    id: "t-3",
    childName: "Blessing M.",
    age: 10,
    location: "Edo State",
    story: "Blessing was reprimanded for dress code non-compliance because her family couldn't afford mandatory black school shoes. Our program provided fitted shoes and restored her dignity.",
    beforeImage: "/images/story4.jpg",
    afterImage: "/images/story2.jpg",
    beforeLabel: "Restricted Academic Participation",
    afterLabel: "Top Honor Student in Class",
    quote: "I feel like a real student now. My teachers say my grades have improved so much!",
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "tle-1",
    year: "2026",
    date: "March 2026",
    title: "Edo State & Benin City Expansion",
    location: "Edo State",
    beneficiaries: "1,200+ Children",
    description: "Expanded operations into Benin City, launching both shoe distribution drives and our inaugural Child Shoemaking Vocational Workshop.",
    coverImage: "/images/shoemaking.jpg",
    mediaType: "video",
    videoUrl: "/videos/story.mp4",
  },
  {
    id: "tle-2",
    year: "2025",
    date: "November 2025",
    title: "Northern Nigeria Hope Drive",
    location: "Kaduna State",
    beneficiaries: "2,000+ Children",
    description: "Conducted our largest northern outreach across 14 rural primary schools in Kaduna State, delivering fitted footwear and health education.",
    coverImage: "/images/children_walking_school.jpg",
    mediaType: "photo",
  },
  {
    id: "tle-3",
    year: "2024",
    date: "September 2024",
    title: "Access Bank CSR Partnership",
    location: "Enugu State",
    beneficiaries: "1,000+ Children",
    description: "Secured landmark corporate sponsorship with Access Bank to scale school distributions and establish sustainable community logistics.",
    coverImage: "/images/distribution.jpg",
    mediaType: "photo",
  },
  {
    id: "tle-4",
    year: "2023",
    date: "June 2023",
    title: "kids Vocational Shoemaking Program",
    location: "Enugu State",
    beneficiaries: "137 Kids Trained",
    description: "Pioneered local footwear manufacturing training to create jobs while producing high-durability school shoes locally.",
    coverImage: "/images/story3.jpg",
    mediaType: "video",
    videoUrl: "/videos/story.mp4",
  },
  {
    id: "tle-5",
    year: "2022",
    date: "March 8, 2022",
    title: "The First Step — International Women's Day",
    location: "Enugu State",
    beneficiaries: "100 Initial Children",
    description: "Philomena Nwajagu distributed the first 100 pairs of school shoes from her personal savings, birthing Shoe My Feet Foundation.",
    coverImage: "/images/founder.jpg",
    mediaType: "photo",
  },
];

export const COMMUNITY_VOICES: CommunityVoice[] = [
  {
    id: "cv-1",
    name: "Amina Lawal",
    role: "Head Teacher, Community Primary School",
    location: "Kaduna State",
    avatar: "/images/story2.jpg",
    quote: "After Shoe My Feet distributed shoes to our pupils, morning tardiness dropped by 80% and classroom attendance reached an all-time high. Children are eager to learn!",
    hasVideo: true,
    videoUrl: "/videos/story.mp4",
    thumbnail: "/images/story2.jpg",
  },
  {
    id: "cv-2",
    name: "Emeka Nnamdi",
    role: "Shoemaking Academy Graduate",
    location: "Edo State",
    avatar: "/images/story3.jpg",
    quote: "Learning shoemaking changed my life. I went from being unemployed to running my own footwear workshop and employing three other children in Benin City.",
    hasVideo: true,
    videoUrl: "/videos/story.mp4",
    thumbnail: "/images/shoemaking.jpg",
  },
  {
    id: "cv-3",
    name: "Grace Eze",
    role: "Lead Field Volunteer",
    location: "Enugu State",
    avatar: "/images/volunteers.jpg",
    quote: "There is nothing more rewarding than seeing a child's face light up when you slip a brand-new pair of fitted shoes onto their feet. It is pure dignity in action.",
    hasVideo: false,
  },
  {
    id: "cv-4",
    name: "Chisom O.",
    role: "Primary 4 Student",
    location: "Enugu State",
    avatar: "/images/story1.jpg",
    quote: "I can run, jump, and play football at break time without hurting my toes. Thank you Shoe My Feet for giving me my beautiful black shoes!",
    hasVideo: true,
    videoUrl: "/videos/story.mp4",
    thumbnail: "/images/gallery2.jpg",
  },
];
