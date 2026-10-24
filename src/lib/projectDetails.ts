import type { Metadata } from "next";

export interface ProjectStat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface ProjectPhoto {
  src: string;
  alt: string;
}

export interface ProjectDetails {
  metadata: Metadata;
  title: string;
  titleAccent: string;
  projectDetails: string;
  heroImage: string;
  heroImageAlt: string;
  stats: ProjectStat[];
  description: string[];
  photos: ProjectPhoto[];
}

export const PROJECT_DETAILS = {
  "shoe-distribution": {
    metadata: {
      title: "School Shoe Distribution Initiative | Shoe My Feet Foundation",
      description:
        "Our flagship program provides durable, properly fitted school shoes to children across primary schools in Nigeria.",
    },
    title: "A fitted pair of shoes for",
    titleAccent: "every child.",
    projectDetails: "Since 2022 · Nationwide, Nigeria",
    heroImage: "/images/shoe_distribution.jpg",
    heroImageAlt: "Shoe My Feet volunteers fitting school shoes on a child",
    stats: [
      { value: 6500, suffix: "+", label: "Pairs distributed to date" },
      { value: 100, suffix: "%", label: "Individual sizing & fitting rate" },
      { value: 18, suffix: "+", label: "Partner schools & communities" },
      { value: 30, prefix: "+", suffix: "%", label: "Average attendance increase" },
    ],
    description: [
      "Across underserved communities in Nigeria, many children trek long distances to school along unpaved roads, broken glass, sharp gravel, and mud. Without suitable footwear, the journey to the classroom can put their health and safety at risk.",
      "Walking barefoot can expose children to cuts, infections, and preventable foot conditions. Some pupils also miss school or feel excluded when they cannot meet uniform requirements because they lack proper shoes.",
      "The Shoe Distribution Initiative provides durable, properly fitted school shoes to children who need them. By working with schools and communities, we help protect children’s feet, support school attendance, and give every child greater confidence to take part in class.",
    ],
    photos: [
      { src: "/images/shoe_distribution.jpg", alt: "A volunteer helping with school shoe distribution" },
      { src: "/images/everychild.jpg", alt: "Shoe My Feet volunteers and children at a school" },
      { src: "/images/keeping-children.jpg", alt: "Children walking together outdoors" },
      { src: "/images/happy-kids.jpeg", alt: "School children sharing a happy moment" },
      { src: "/images/protecting_little.jpg", alt: "A child taking part in a Shoe My Feet project" },
      { src: "/images/everymoment.jpeg", alt: "Children taking part in a community programme" },
    ],
  },
  "back-to-school": {
    metadata: {
      title: "Back-to-School Campaign | Shoe My Feet Foundation",
      description:
        "Equipping underserved pupils with school shoes before each academic term across Nigeria.",
    },
    title: "Starting the school term with",
    titleAccent: "confidence.",
    projectDetails: "Every Academic Term · Primary Schools, Nigeria",
    heroImage: "/images/keeping-children.jpg",
    heroImageAlt: "Schoolchildren walking proudly together on resumption day",
    stats: [
      { value: 3, label: "School terms supported each year" },
      { value: 34, suffix: "%", label: "Average attendance increase" },
      { value: 4, label: "Ways the campaign supports pupils" },
      { value: 18, suffix: "+", label: "Partner schools & communities" },
    ],
    description: [
      "The start of a school term can bring added pressure for families who cannot afford required uniform shoes. Some children are turned away at the school gate or stay home because they do not have suitable footwear.",
      "The Back-to-School Campaign works with headteachers and parent-teacher associations to identify pupils who need support and get shoes to them before classes begin.",
      "By providing durable footwear at the start of each academic term, the campaign helps pupils return to class with confidence and gives families one less barrier to manage.",
    ],
    photos: [
      { src: "/images/keeping-children.jpg", alt: "Children walking together outdoors" },
      { src: "/images/happy-kids.jpeg", alt: "School children sharing a happy moment" },
      { src: "/images/everychild.jpg", alt: "Children with the Shoe My Feet school team" },
      { src: "/images/shoe_distribution.jpg", alt: "A volunteer helping distribute school shoes" },
      { src: "/images/everymoment.jpeg", alt: "Children taking part in a school programme" },
      { src: "/images/protecting_little.jpg", alt: "A child taking part in the campaign" },
    ],
  },
  "community-outreach": {
    metadata: {
      title: "Community Outreach | Shoe My Feet Foundation",
      description:
        "Grassroots outreach combining shoe distribution with foot health and family engagement.",
    },
    title: "Meeting families where",
    titleAccent: "need is greatest.",
    projectDetails: "Ongoing · Enugu, Kaduna & Edo States, Nigeria",
    heroImage: "/images/addressing.jpg",
    heroImageAlt: "Community members gathered during a Shoe My Feet outreach",
    stats: [
      { value: 3, label: "States reached" },
      { value: 4, label: "Community outreach focus areas" },
      { value: 2, label: "Rural and urban communities" },
      { value: 3, label: "Families, leaders & health workers engaged" },
    ],
    description: [
      "Not every child without shoes is enrolled in a school with an active partnership. Some children live in rural villages, riverine settlements, or urban communities where support can be difficult to reach.",
      "Our Community Outreach program brings assistance directly to families. We work with local leaders to welcome children, provide properly fitted shoes, and share practical foot-health and hygiene guidance.",
      "By involving caregivers, community leaders, and local health workers, each outreach builds local connections alongside immediate support for children.",
    ],
    photos: [
      { src: "/images/addressing.jpg", alt: "Community members gathered during an outreach" },
      { src: "/images/everymoment.jpeg", alt: "Children taking part in a community programme" },
      { src: "/images/everychild.jpg", alt: "Volunteers and children at a community school" },
      { src: "/images/IMG_9272-01.jpeg", alt: "Volunteers celebrating with the community" },
      { src: "/images/happy-kids.jpeg", alt: "Children enjoying a community event" },
      { src: "/images/shoe_distribution.jpg", alt: "A volunteer helping a child receive shoes" },
    ],
  },
  "school-partnerships": {
    metadata: {
      title: "School Partnership Program | Shoe My Feet Foundation",
      description:
        "Working with schools to identify vulnerable pupils and deliver footwear support.",
    },
    title: "Partnering with educators to",
    titleAccent: "keep children in class.",
    projectDetails: "18+ Partner Schools · Nationwide, Nigeria",
    heroImage: "/images/happy-kids.jpeg",
    heroImageAlt: "School children in uniform with their school community",
    stats: [
      { value: 18, suffix: "+", label: "Partner schools" },
      { value: 4, label: "Steps from request to follow-up" },
      { value: 4, label: "Needs-based partnership criteria" },
      { value: 2, label: "Primary and secondary school levels" },
    ],
    description: [
      "Teachers and school leaders understand the daily challenges their pupils face. They can help identify children who lack suitable footwear and may miss school because of it.",
      "Through school partnerships, the Foundation works with educators to identify pupils fairly, coordinate shoe sizing and distribution, and follow up on attendance and participation.",
      "Partner schools provide a trusted setting for support, helping shoes reach children based on need while keeping families and school communities involved.",
    ],
    photos: [
      { src: "/images/happy-kids.jpeg", alt: "School children sharing a happy moment" },
      { src: "/images/keeping-children.jpg", alt: "Children walking together outdoors" },
      { src: "/images/everychild.jpg", alt: "Children and volunteers at a partner school" },
      { src: "/images/shoe_distribution.jpg", alt: "A volunteer distributing school shoes" },
      { src: "/images/everymoment.jpeg", alt: "Pupils taking part in a school activity" },
      { src: "/images/protecting_little.jpg", alt: "A child supported through a school partnership" },
    ],
  },
  "kids-shoemaking": {
    metadata: {
      title: "Kids Shoemaking & Vocational Skills | Shoe My Feet Foundation",
      description:
        "Empowering young people through practical shoemaking, vocational training, and entrepreneurship.",
    },
    title: "From shoe recipients to",
    titleAccent: "skilled creators.",
    projectDetails: "Since 2024 · Lagos, Nigeria",
    heroImage: "/images/crafting7.jpeg",
    heroImageAlt: "A trainee learning shoemaking in the workshop",
    stats: [
      { value: 137, suffix: "+", label: "Youth & children trained" },
      { value: 6, suffix: " weeks", label: "Practical cohort curriculum" },
      { value: 100, suffix: "%", label: "Toolkits provided free" },
      { value: 12, label: "Graduate peer mentors" },
    ],
    description: [
      "The Kids and Youth Shoemaking Academy gives young people from underserved backgrounds the opportunity to learn practical footwear-making skills.",
      "With guidance from experienced shoemakers, trainees learn to measure, cut materials, assemble uppers, attach soles, and finish durable footwear.",
      "The training builds craft skills and confidence, helping young people explore local work and small-business opportunities while contributing to footwear production in their communities.",
    ],
    photos: [
      { src: "/images/crafting7.jpeg", alt: "A trainee learning shoemaking in the workshop" },
      { src: "/images/crafting1.jpeg", alt: "An apprentice cutting leather for a shoe" },
      { src: "/images/crafting2.jpeg", alt: "A young person practising shoemaking" },
      { src: "/images/crafting4.jpeg", alt: "Shoemaking workshop training session" },
      { src: "/images/crafting6.jpeg", alt: "Trainees working on footwear together" },
      { src: "/images/crafting8.jpeg", alt: "A trainee learning footwear production" },
      { src: "/images/crafting9.jpeg", alt: "Hands-on shoemaking practice" },
      { src: "/images/crafting10.jpeg", alt: "Shoemaking students at work" },
    ],
  },
  "corporate-partnerships": {
    metadata: {
      title: "Corporate Partnerships & CSR | Shoe My Feet Foundation",
      description:
        "Partner with Shoe My Feet Foundation through sponsorship, employee volunteering, and matching donations.",
    },
    title: "Purpose-driven partnerships with",
    titleAccent: "measurable impact.",
    projectDetails: "Open to All Sectors · Nigeria & Diaspora",
    heroImage: "/images/IMG_9272-01.jpeg",
    heroImageAlt: "Corporate volunteers celebrating with the community",
    stats: [
      { value: 4, label: "Ways to partner with us" },
      { value: 2, label: "Corporate gift-matching options" },
      { value: 200, label: "Pupils at a partner school minimum" },
      { value: 600, label: "Pupils at a partner school maximum" },
    ],
    description: [
      "Shoe My Feet Foundation works with businesses and organizations to design community support that reflects their goals and creates lasting value for children.",
      "Partners can sponsor a school, match employee donations, join a volunteer day, or contribute logistics and supplies. The Foundation coordinates with schools and communities so support reaches pupils who need it.",
      "Each collaboration is supported with documented outcomes and impact information, helping partners understand how their contributions support education, health, and dignity.",
    ],
    photos: [
      { src: "/images/IMG_9272-01.jpeg", alt: "Corporate volunteers with the Shoe My Feet team" },
      { src: "/images/everychild.jpg", alt: "A partner team visiting a school" },
      { src: "/images/happy-kids.jpeg", alt: "School children welcoming community partners" },
      { src: "/images/shoe_distribution.jpg", alt: "Volunteers supporting a shoe distribution" },
      { src: "/images/addressing.jpg", alt: "Community members and partners at an outreach" },
      { src: "/images/everymoment.jpeg", alt: "Children participating in a partner-supported programme" },
    ],
  },
} satisfies Record<string, ProjectDetails>;

export const PROJECT_DETAILS_BY_SLUG: Record<string, ProjectDetails> = {
  ...PROJECT_DETAILS,
  shoemaking: PROJECT_DETAILS["kids-shoemaking"],
  "school-partnership": PROJECT_DETAILS["school-partnerships"],
  "corporate-partnership": PROJECT_DETAILS["corporate-partnerships"],
};

export function getProjectDetails(slug: string): ProjectDetails | undefined {
  return Object.prototype.hasOwnProperty.call(PROJECT_DETAILS_BY_SLUG, slug)
    ? PROJECT_DETAILS_BY_SLUG[slug]
    : undefined;
}
