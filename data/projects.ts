export type ProjectCategory = "Web" | "Mobile" | "Systems" | "UI/UX" | "School Projects" | "Other" | "Senior High School Capstone Project" | "Roblox Game" | "College Project";
export type ProjectSection = "First Projects" | "Roblox Games" | "College Projects";

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  section: ProjectSection;
  github?: string;
  demo?: string;
  play?: string;
  overview?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  challenges?: string;
  demoAccounts?: { role: string; email: string; password: string }[];
  screenshots: string[];
};

export const projects: Project[] = [
  {
    title: "ISHARE",
    description: "Local bartering, borrowing, and selling of items.",
    image: "/images/projects/ishare.png",
    technologies: ["Capstone Project", "Web Application", "Bartering", "Borrowing", "Marketplace"],
    category: "Senior High School Capstone Project",
    section: "First Projects",
    github: "https://github.com/Licoresh/1SHARE",
    overview: "A local marketplace for bartering, borrowing, and selling items.",
    features: ["Barter items", "Borrow items", "Buy and sell locally"],
    screenshots: ["/images/projects/ishare.png", "/images/projects/ishare2.png"],
  },
  {
    title: "Clicker Frenzy X",
    description: "Click, collect pets, make rebirths, explore new worlds, and much more.",
    image: "/images/projects/clicker_frenzy.png",
    technologies: ["Roblox Studio", "Roblox Game", "Clicker", "Pets", "Rebirths"],
    category: "Roblox Game",
    section: "Roblox Games",
    play: "https://www.roblox.com/games/9442785015/Clicker-Frenzy-X",
    overview: "A Roblox clicker experience featuring pets, rebirths, and unlockable worlds.",
    features: ["Click-based progression", "Collectible pets", "Rebirths and new worlds"],
    screenshots: ["/images/projects/clicker_frenzy.png", "/images/projects/clickerfrenzy2.png"],
  },
  {
    title: "My Obby",
    description: "Play the game to find out if you can complete all of the stages! Can you escape all stages or will you quit before doing so?",
    image: "/images/projects/roblox-obby.png",
    technologies: ["Roblox Studio", "Roblox Game", "Obby", "Parkour"],
    category: "Roblox Game",
    section: "Roblox Games",
    play: "https://www.roblox.com/games/9574370132/My-Obby",
    overview: "A Roblox obstacle course that challenges players to complete every stage.",
    features: ["Multiple obby stages", "Platforming challenges", "Stage progression"],
    screenshots: ["/images/projects/roblox-obby.png", "/images/projects/myobby2.png"],
  },
  {
    title: "Snowball Obby",
    description: "Grow a tiny marble into a 999 kg snowball while completing challenging stages that test reflexes and momentum.",
    image: "/images/projects/roblox_snowball.png",
    technologies: ["Roblox Studio", "Roblox Game", "Obby", "Physics", "Progression"],
    category: "Roblox Game",
    section: "Roblox Games",
    play: "https://www.roblox.com/games/84235944929277/Snowball-Obby",
    overview: "A momentum-based Roblox obby centered on growing and controlling a snowball.",
    features: ["Snowball growth up to 999 kg", "Momentum-based stages", "Reflex challenges"],
    screenshots: ["/images/projects/roblox_snowball.png", "/images/projects/snowball2.png"],
  },
  {
    title: "Bantay Daluyan",
    description: "Drainage Monitoring and Reporting System in Iligan City — a high-fidelity prototype.",
    image: "/images/projects/bantay-daluyan(2).png",
    technologies: ["College Project", "Monitoring System", "Reporting System", "High-Fidelity Prototype"],
    category: "College Project",
    section: "College Projects",
    github: "https://github.com/Licoresh/BantayDaluyanFinal",
    demo: "https://bantaydaluyan.netlify.app/",
    overview: "A high-fidelity drainage monitoring and reporting prototype for Iligan City.",
    features: ["Drainage monitoring", "Incident reporting", "Map-based report overview"],
    demoAccounts: [
      { role: "Resident", email: "jolo@example.com", password: "password123" },
      { role: "Barangay", email: "bari@barangay.gov", password: "password123" },
      { role: "Engineer", email: "jazleen@cityeng.gov", password: "password123" },
      { role: "Admin", email: "admin@system.gov", password: "admin123" },
    ],
    screenshots: ["/images/projects/bantay-daluyan(2).png", "/images/projects/bantay daluyan.png"],
  },
  {
    title: "Vitals",
    description: "A small clinic management system application designed for small clinics in Iligan City.",
    image: "/images/projects/vitals.png",
    technologies: ["College Project", "Clinic Management", "Web Application"],
    category: "College Project",
    section: "College Projects",
    github: "https://github.com/jolocanete-creator/vital",
    overview: "A clinic management application designed for small clinics in Iligan City.",
    features: ["Clinic management", "Patient information", "Small-clinic workflow"],
    screenshots: ["/images/projects/vitals.png", "/images/projects/vitals2.png"],
  },
  {
    title: "Disaster Assistance Management System (DAMS)",
    description: "A disaster assistance management system for barangay aid, including scheduling, announcements, and aid requests.",
    image: "/images/projects/damsss.png",
    technologies: ["College Project", "Disaster Assistance", "Barangay", "Aid Management", "Scheduling"],
    category: "College Project",
    section: "College Projects",
    github: "https://github.com/jolocanete-creator/DAMS_LATEST",
    demo: "https://dams-latest.vercel.app/",
    overview: "A barangay-focused system for coordinating disaster assistance and aid.",
    features: ["Aid scheduling", "Announcements", "Aid requests"],
    screenshots: ["/images/projects/damsss.png", "/images/projects/dams2.png"],
  },
];
