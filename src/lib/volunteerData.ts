// ─── Volunteer Page Data ─────────────────────────────────────────────────────
// All mock data consumed by the Volunteer page components
import type { LucideIcon } from "lucide-react";
import {
  Award,
  BookOpen,
  Building2,
  CalendarDays,
  Camera,
  Church,
  ClipboardList,
  Clock3,
  FileBadge2,
  FolderOpen,
  Footprints,
  Globe2,
  GraduationCap,
  HandCoins,
  Handshake,
  Heart,
  HeartHandshake,
  House,
  MessageCircle,
  Palette,
  Package,
  Phone,
  RefreshCw,
  School,
  ShieldCheck,
  Smartphone,
  Sprout,
  Star,
  Stethoscope,
  Truck,
  Trophy,
  UsersRound,
} from "lucide-react";

export interface VolunteerRole {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  commitment: string;
  skills: string[];
  location: string;
  category: string;
  color: string;
}

export interface VolunteerStory {
  id: string;
  name: string;
  role: string;
  location: string;
  yearsOfService: number;
  quote: string;
  fullStory: string;
  image: string;
  tags: string[];
}

export interface VolunteerStat {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

export interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  thumb: string;
  caption: string;
  category: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface JourneyStep {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export interface BenefitCard {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bg: string;
}

export interface RecognitionItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export interface GroupType {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  color: string;
}

export interface TrainingItem {
  icon: LucideIcon;
  title: string;
  content: string;
}

// ─── Why Volunteer Benefits ───────────────────────────────────────────────────
export const WHY_VOLUNTEER_BENEFITS: BenefitCard[] = [
  {
    icon: Heart,
    title: "Change Lives",
    description: "Directly impact the health, dignity, and future of children in underserved communities across Nigeria.",
    color: "text-red-600",
    bg: "bg-[#F3F4F6]",
  },
  {
    icon: House,
    title: "Build Stronger Communities",
    description: "Your service strengthens neighborhoods, schools, and local economies where every child matters.",
    color: "text-[#1A3A6B]",
    bg: "bg-slate-50",
  },
  {
    icon: GraduationCap,
    title: "Gain Valuable Experience",
    description: "Develop real-world skills in outreach, logistics, communication, and nonprofit operations.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Handshake,
    title: "Meet Inspiring People",
    description: "Connect with passionate changemakers, community leaders, and compassionate professionals.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Star,
    title: "Develop Leadership Skills",
    description: "Take on coordination roles, lead field teams, and grow into a trusted community ambassador.",
    color: "text-[#1A3A6B]",
    bg: "bg-[#FFFFFF]",
  },
  {
    icon: Camera,
    title: "Create Lasting Memories",
    description: "Experience moments of joy, tears, and triumph that you will carry with you for a lifetime.",
    color: "text-pink-600",
    bg: "bg-rose-50",
  },
];

// ─── Volunteer Roles ──────────────────────────────────────────────────────────
export const VOLUNTEER_ROLES: VolunteerRole[] = [
  {
    id: "community-outreach",
    icon: MessageCircle,
    title: "Community Outreach Volunteer",
    description: "Engage local communities, raise awareness, and identify children in greatest need of footwear support.",
    commitment: "4–8 hrs/week",
    skills: ["Communication", "Empathy", "Local Language"],
    location: "Enugu, Kaduna, Edo",
    category: "Field",
    color: "bg-[#1A3A6B]",
  },
  {
    id: "shoe-collection",
    icon: Footprints,
    title: "Shoe Collection Volunteer",
    description: "Organize drives, collect, sort, and quality-check donated footwear at partner locations and drop-off points.",
    commitment: "2–4 hrs/week",
    skills: ["Organization", "Attention to Detail"],
    location: "Multiple States",
    category: "Logistics",
    color: "bg-[#111827]",
  },
  {
    id: "event-coordinator",
    icon: ClipboardList,
    title: "Event Coordinator",
    description: "Plan and manage distribution events, school visits, and community outreach days from start to finish.",
    commitment: "6–10 hrs/week",
    skills: ["Project Management", "Teamwork", "Leadership"],
    location: "Nationwide",
    category: "Events",
    color: "bg-[#111827]",
  },
  {
    id: "school-liaison",
    icon: School,
    title: "School Liaison Volunteer",
    description: "Build and maintain partnerships with schools, coordinate student measurements, and track impact metrics.",
    commitment: "3–5 hrs/week",
    skills: ["Networking", "Education", "Data Entry"],
    location: "Enugu State",
    category: "Partnerships",
    color: "bg-[#16A34A]",
  },
  {
    id: "medical-health",
    icon: Stethoscope,
    title: "Medical & Health Outreach Assistant",
    description: "Support foot health screenings, educate families on hygiene, and assist medical professionals during events.",
    commitment: "4–6 hrs/week",
    skills: ["Healthcare Background", "Empathy", "First Aid"],
    location: "Field Events",
    category: "Health",
    color: "bg-[#1A3A6B]",
  },
  {
    id: "logistics-distribution",
    icon: Truck,
    title: "Logistics & Distribution Volunteer",
    description: "Coordinate transportation, storage, and delivery of shoes and supplies to distribution centers and schools.",
    commitment: "5–8 hrs/week",
    skills: ["Driving License", "Logistics", "Physical Fitness"],
    location: "Multiple States",
    category: "Logistics",
    color: "bg-slate-600",
  },
  {
    id: "photographer",
    icon: Camera,
    title: "Photographer & Videographer",
    description: "Document outreach activities, capture authentic stories, and create visual content for reports and campaigns.",
    commitment: "2–4 hrs/event",
    skills: ["Photography", "Video Editing", "Storytelling"],
    location: "All Events",
    category: "Creative",
    color: "bg-[#1A3A6B]",
  },
  {
    id: "social-media",
    icon: Smartphone,
    title: "Social Media & Content Creator",
    description: "Create compelling posts, reels, stories, and campaigns that grow our digital presence and donor community.",
    commitment: "3–5 hrs/week",
    skills: ["Copywriting", "Design", "Social Media Strategy"],
    location: "Remote / Nationwide",
    category: "Digital",
    color: "bg-[#111827]",
  },
  {
    id: "graphic-designer",
    icon: Palette,
    title: "Graphic Designer",
    description: "Design flyers, banners, reports, social media graphics, and branded materials for campaigns and events.",
    commitment: "3–6 hrs/week",
    skills: ["Adobe Suite / Figma", "Branding", "Creativity"],
    location: "Remote",
    category: "Creative",
    color: "bg-[#1A3A6B]",
  },
  {
    id: "fundraising",
    icon: HandCoins,
    title: "Fundraising Volunteer",
    description: "Help organize campaigns, approach donors, write grant proposals, and cultivate long-term giving relationships.",
    commitment: "4–8 hrs/week",
    skills: ["Sales", "Persuasion", "Grant Writing"],
    location: "Remote / Nationwide",
    category: "Fundraising",
    color: "bg-[#16A34A]",
  },
  {
    id: "admin-support",
    icon: FolderOpen,
    title: "Administrative Support",
    description: "Assist with data management, volunteer records, email correspondence, scheduling, and reporting.",
    commitment: "3–5 hrs/week",
    skills: ["Microsoft Office", "Organization", "Communication"],
    location: "Remote",
    category: "Admin",
    color: "bg-[#111827]",
  },
  {
    id: "corporate-teams",
    icon: Building2,
    title: "Corporate Volunteer Teams",
    description: "Bring your entire team for a meaningful team-building day — sorting shoes, visiting schools, or organizing events.",
    commitment: "1 full day (minimum)",
    skills: ["Teamwork", "Leadership", "Community Spirit"],
    location: "Customizable",
    category: "Corporate",
    color: "bg-[#1A3A6B]",
  },
];

// ─── Volunteer Journey Steps ──────────────────────────────────────────────────
export const VOLUNTEER_JOURNEY_STEPS: JourneyStep[] = [
  {
    step: 1,
    icon: ClipboardList,
    title: "Submit Application",
    description: "Complete our simple online registration form with your personal details and areas of interest.",
    color: "bg-[#1A3A6B]",
  },
  {
    step: 2,
    icon: Handshake,
    title: "Review & Interview",
    description: "Our volunteer coordinator reviews your application and schedules a brief welcome call within 48 hours.",
    color: "bg-[#111827]",
  },
  {
    step: 3,
    icon: BookOpen,
    title: "Orientation & Training",
    description: "Attend our volunteer orientation session covering the foundation's mission, safety, and child protection.",
    color: "bg-[#16A34A]",
  },
  {
    step: 4,
    icon: Globe2,
    title: "Join Outreach Activities",
    description: "Participate in scheduled distribution events, school visits, community drives, and field programs.",
    color: "bg-[#111827]",
  },
  {
    step: 5,
    icon: Star,
    title: "Make a Lasting Impact",
    description: "Your contributions directly help children access education, improve their health, and walk with dignity.",
    color: "bg-[#1A3A6B]",
  },
  {
    step: 6,
    icon: Award,
    title: "Become a Community Ambassador",
    description: "Long-serving volunteers take on leadership roles, mentor new volunteers, and represent our mission.",
    color: "bg-[#1A3A6B]",
  },
];

// ─── Volunteer Stories ────────────────────────────────────────────────────────
export const VOLUNTEER_STORIES: VolunteerStory[] = [
  {
    id: "amaka-obi",
    name: "Amaka Obi",
    role: "Community Outreach Lead",
    location: "Enugu State",
    yearsOfService: 3,
    quote: "Seeing a child smile when they receive their first proper pair of shoes — that moment alone is worth everything. I can't imagine not doing this.",
    fullStory: "Amaka joined Shoe My Feet in 2021 after reading about our first distribution event. Within six months, she had recruited 12 community volunteers and helped expand our reach to 3 new villages in Enugu State. Today she leads a team of 18 and is the face of our rural outreach program.",
    image: "/images/team1.jpg",
    tags: ["Outreach", "Team Leadership", "3 Years"],
  },
  {
    id: "chidi-eze",
    name: "Chidi Eze",
    role: "Photographer & Storyteller",
    location: "Abuja",
    yearsOfService: 2,
    quote: "Every photograph I take is a story of hope. I want the world to see what we see — children who deserve better, and a team giving it to them.",
    fullStory: "Chidi is a professional photographer who donates his weekends to capture our field events. His work has been featured in NGO annual reports and social campaigns that raised over ₦2 million in donations. He also trains new volunteers in basic photography and documentation.",
    image: "/images/team2.jpg",
    tags: ["Photography", "Content", "2 Years"],
  },
  {
    id: "fatima-usman",
    name: "Fatima Usman",
    role: "School Liaison Coordinator",
    location: "Kaduna State",
    yearsOfService: 4,
    quote: "The teachers used to tell me that students skipped school to avoid embarrassment from torn shoes. We changed that story — together.",
    fullStory: "Fatima has coordinated partnerships with 22 schools in Kaduna State, ensuring that over 3,000 pupils received properly fitted shoes. She created the 'Measurement Day' protocol now used across all our school visits, saving hours of time and improving size accuracy.",
    image: "/images/team3.jpg",
    tags: ["Education", "Partnerships", "4 Years"],
  },
  {
    id: "james-nwosu",
    name: "James Nwosu",
    role: "Logistics & Distribution Manager",
    location: "Lagos",
    yearsOfService: 2,
    quote: "Logistics is the backbone of every mission. If the shoes don't get there on time, every other effort is wasted. I make sure they always get there.",
    fullStory: "James coordinates transportation and storage across three distribution hubs. He developed our tracking spreadsheet that reduced distribution errors by 60% and ensures that every pair of shoes reaches the right child at the right school.",
    image: "/images/team1.jpg",
    tags: ["Logistics", "Operations", "2 Years"],
  },
  {
    id: "ngozi-okafor",
    name: "Ngozi Okafor",
    role: "Social Media Strategist",
    location: "Port Harcourt",
    yearsOfService: 1,
    quote: "Social media is just a megaphone. The real story is what these children go through every day — I just help more people hear it.",
    fullStory: "In her first year, Ngozi grew our Instagram following by 340% and managed a viral campaign that attracted three new corporate sponsors. She works entirely remotely, dedicating 5 hours per week to content planning and community engagement.",
    image: "/images/team2.jpg",
    tags: ["Digital", "Content", "1 Year"],
  },
  {
    id: "samuel-adeyemi",
    name: "Samuel Adeyemi",
    role: "Fundraising Champion",
    location: "Ibadan",
    yearsOfService: 3,
    quote: "I've never written a grant proposal in my life before joining. Now I've helped secure over ₦5 million for shoes for children. Never underestimate what you can learn.",
    fullStory: "Samuel is a retired teacher who joined to give back. He has written 7 successful grant proposals, organized 4 fundraising galas, and mentors 6 other volunteer fundraisers. His dedication earned him the foundation's 'Volunteer of the Year' award in 2023.",
    image: "/images/team3.jpg",
    tags: ["Fundraising", "Mentorship", "3 Years"],
  },
];

// ─── Volunteer Impact Stats ───────────────────────────────────────────────────
export const VOLUNTEER_STATS: VolunteerStat[] = [
  { value: 480, suffix: "+", label: "Active Volunteers", icon: UsersRound, color: "bg-[#1A3A6B]" },
  { value: 24000, suffix: "+", label: "Volunteer Hours Contributed", icon: Clock3, color: "bg-[#111827]" },
  { value: 62, suffix: "+", label: "Communities Served", icon: House, color: "bg-[#16A34A]" },
  { value: 130, suffix: "+", label: "Outreach Events Supported", icon: CalendarDays, color: "bg-[#111827]" },
  { value: 14000, suffix: "+", label: "Children Impacted", icon: Footprints, color: "bg-[#1A3A6B]" },
  { value: 78, suffix: "%", label: "Returning Volunteers", icon: RefreshCw, color: "bg-[#16A34A]" },
];

// ─── Volunteer Gallery ────────────────────────────────────────────────────────
export const VOLUNTEER_GALLERY: GalleryItem[] = [
  { id: "g1", type: "image", src: "/images/gallery1.jpg", thumb: "/images/gallery1.jpg", caption: "Community shoe distribution, Enugu 2024", category: "Outreach" },
  { id: "g2", type: "image", src: "/images/gallery2.jpg", thumb: "/images/gallery2.jpg", caption: "Sorting donated footwear at the Abuja hub", category: "Logistics" },
  { id: "g3", type: "image", src: "/images/gallery3.jpg", thumb: "/images/gallery3.jpg", caption: "Volunteers visiting Ogui Primary School", category: "School Visits" },
  { id: "g4", type: "image", src: "/images/gallery4.jpg", thumb: "/images/gallery4.jpg", caption: "Annual Volunteer Appreciation Event 2023", category: "Events" },
  { id: "g5", type: "image", src: "/images/gallery5.jpg", thumb: "/images/gallery5.jpg", caption: "Team briefing before Kaduna distribution", category: "Team Meetings" },
  { id: "g6", type: "image", src: "/images/gallery6.jpg", thumb: "/images/gallery6.jpg", caption: "New volunteer orientation session", category: "Training" },
  { id: "g7", type: "image", src: "/images/gallery7.jpg", thumb: "/images/gallery7.jpg", caption: "Foot health screening, Edo State 2024", category: "Health" },
  { id: "g8", type: "image", src: "/images/gallery8.jpg", thumb: "/images/gallery8.jpg", caption: "Children receiving shoes at St. Francis School", category: "Outreach" },
  { id: "g9", type: "image", src: "/images/gallery1.jpg", thumb: "/images/gallery1.jpg", caption: "Corporate volunteer day — GTBank team", category: "Corporate" },
  { id: "g10", type: "image", src: "/images/gallery2.jpg", thumb: "/images/gallery2.jpg", caption: "Fundraising gala, Lagos 2023", category: "Events" },
  { id: "g11", type: "image", src: "/images/gallery3.jpg", thumb: "/images/gallery3.jpg", caption: "Shoe collection drive at Shoprite Mall", category: "Logistics" },
  { id: "g12", type: "image", src: "/images/gallery4.jpg", thumb: "/images/gallery4.jpg", caption: "Volunteer meeting — monthly team debrief", category: "Team Meetings" },
];

// ─── Training & Support ───────────────────────────────────────────────────────
export const TRAINING_ITEMS: TrainingItem[] = [
  {
    icon: GraduationCap,
    title: "New Volunteer Orientation",
    content: "Every volunteer attends a 2-hour onboarding session (virtual or in-person) covering the foundation's history, mission, values, code of conduct, and field protocols. You'll leave feeling confident and ready to serve.",
  },
  {
    icon: ShieldCheck,
    title: "Child Protection & Safety",
    content: "Our child protection policy is paramount. All volunteers complete mandatory child safeguarding training, learn how to identify at-risk situations, and understand reporting procedures to keep every child safe during outreach.",
  },
  {
    icon: Stethoscope,
    title: "Health & Safety Guidelines",
    content: "Field volunteers receive first aid awareness, hygiene protocols, and safe lifting guidance. Medical volunteers receive specialized briefings tailored to foot health screening and community health outreach best practices.",
  },
  {
    icon: UsersRound,
    title: "Team Mentorship Program",
    content: "Every new volunteer is paired with an experienced 'Volunteer Buddy' for their first three events. Your buddy helps you navigate the field, answers questions, and introduces you to the wider volunteer community.",
  },
  {
    icon: Package,
    title: "Resource & Materials Library",
    content: "Access our private volunteer portal with training videos, field guides, distribution templates, photography tips, and safety checklists — all available 24/7 on mobile or desktop.",
  },
  {
    icon: Phone,
    title: "Continuous Support & Community",
    content: "Our WhatsApp volunteer communities, monthly check-in calls, and dedicated volunteer coordinator ensure you always have someone to reach out to — before, during, and after every event.",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq1",
    question: "Who can volunteer with Shoe My Feet Foundation?",
    answer: "Anyone who is passionate about making a difference is welcome! We accept volunteers of all ages (with parental consent for under-18s), backgrounds, professions, and nationalities. Whether you are a student, retiree, professional, or homemaker — there is a role for you.",
  },
  {
    id: "faq2",
    question: "Is prior volunteering experience required?",
    answer: "Not at all. We believe that willingness, heart, and dedication matter more than a résumé. We provide full training and mentorship for all new volunteers, ensuring you feel equipped and supported from day one.",
  },
  {
    id: "faq3",
    question: "Can students volunteer with the foundation?",
    answer: "Absolutely! Many of our most energetic volunteers are students from secondary school through university. We provide official volunteer certificates that count toward school service requirements, NYSC, and internship credits where applicable.",
  },
  {
    id: "faq4",
    question: "Can families volunteer together?",
    answer: "Yes, and we actively encourage it! Family volunteering is a wonderful way to instill values of compassion and service in children. Families can participate in sorting events, community drives, and school visits together. Children under 12 must be accompanied by a parent or guardian.",
  },
  {
    id: "faq5",
    question: "How much time do I need to commit?",
    answer: "It depends on your chosen role. Some volunteers contribute as little as 2 hours per week; others do 8–10 hours. We accommodate busy schedules and only ask for your honest availability. You can also volunteer for one-off events without a recurring commitment.",
  },
  {
    id: "faq6",
    question: "Will I receive training before going into the field?",
    answer: "Yes, always. Every volunteer attends a mandatory orientation session before their first event. Role-specific training is also provided — for example, photographers receive documentation guidelines, health volunteers receive safety briefings, and team leads receive coordination training.",
  },
  {
    id: "faq7",
    question: "Can companies and organizations volunteer as a group?",
    answer: "Absolutely. Corporate volunteer days are one of our most impactful programs. We work with companies to design meaningful team-building experiences aligned with their CSR goals. A minimum team of 5 is recommended, and we handle all logistics for the day.",
  },
  {
    id: "faq8",
    question: "Are virtual volunteering opportunities available?",
    answer: "Yes. Remote volunteers support us in areas like social media management, graphic design, fundraising campaigns, content creation, grant writing, and administrative support. If you can't be physically present, your digital skills are equally valued and needed.",
  },
];

// ─── Recognition Items ────────────────────────────────────────────────────────
export const RECOGNITION_ITEMS: RecognitionItem[] = [
  {
    icon: Trophy,
    title: "Volunteer of the Month",
    description: "Outstanding volunteers are spotlighted monthly across our website, social media, and newsletter — celebrating their unique contribution.",
    color: "bg-[#1A3A6B]",
  },
  {
    icon: FileBadge2,
    title: "Appreciation Certificates",
    description: "Every active volunteer receives official certificates recognizing their service hours — valuable for CVs, university applications, and NYSC records.",
    color: "bg-[#111827]",
  },
  {
    icon: Star,
    title: "Annual Recognition Gala",
    description: "Once a year, we celebrate our volunteer family with an in-person appreciation evening featuring awards, testimonials, and heartfelt recognition.",
    color: "bg-[#111827]",
  },
  {
    icon: Sprout,
    title: "Leadership Pathways",
    description: "High-performing volunteers are invited into coordinator and ambassador roles, gaining real leadership experience in a registered nonprofit.",
    color: "bg-[#16A34A]",
  },
  {
    icon: HeartHandshake,
    title: "Community & Belonging",
    description: "Beyond recognition, we build a genuine family. Volunteer WhatsApp groups, social events, and ongoing mentorships foster deep, lasting friendships.",
    color: "bg-[#1A3A6B]",
  },
];

// ─── Group / Corporate Types ──────────────────────────────────────────────────
export const GROUP_TYPES: GroupType[] = [
  {
    icon: Building2,
    title: "Companies & Corporations",
    description: "Create meaningful CSR impact. Bring your team for a structured volunteer day that builds morale and changes lives.",
    benefits: ["Custom event planning", "CSR documentation", "Brand recognition", "Team certificates"],
    color: "bg-[#111827]",
  },
  {
    icon: Church,
    title: "Churches & Faith Groups",
    description: "Live your faith's call to service. Organize congregation-wide shoe drives, collection campaigns, and field outreach.",
    benefits: ["Group coordination support", "Prayer initiative alignment", "Community testimonials", "Recognition in reports"],
    color: "bg-[#111827]",
  },
  {
    icon: School,
    title: "Schools & Colleges",
    description: "Inspire the next generation of changemakers. Student volunteering builds empathy, leadership, and community service credentials.",
    benefits: ["Student volunteer certificates", "Service-learning hours", "School recognition", "Curriculum alignment"],
    color: "bg-[#16A34A]",
  },
  {
    icon: GraduationCap,
    title: "Universities & Research Groups",
    description: "Partner with us for field research, student placements, and data-driven outreach programs that advance academic goals.",
    benefits: ["Research partnership options", "Student placement letters", "Academic citations", "Field data access"],
    color: "bg-[#1A3A6B]",
  },
  {
    icon: Handshake,
    title: "Community Groups & NGOs",
    description: "Collaborate on joint outreach initiatives, pool volunteer resources, and expand our collective impact across communities.",
    benefits: ["Co-branding opportunities", "Shared event logistics", "Joint impact reports", "Network expansion"],
    color: "bg-[#16A34A]",
  },
];
