import { PersonalInfo, Education, Publication, SkillCategory, Award, Project } from './types';

export const personalInfo: PersonalInfo = {
  name: "He Maosheng",
  title: "Master Student in Computer Science",
  bio: "I am a Master's student at Beijing Electronic Science and Technology Institute (BESTI), specializing in Computer Vision and Deep Learning. My research focuses on robust crowd counting, medical recommendation systems, and secure AI.",
  photo: "/assets/photo.jpg",
  photos: [
    "/assets/carousel/128244C4-2451-4FA1-B637-0C797BD9D67F.jpg",
    "/assets/carousel/67D5376C-FE90-42CC-8E8D-093A56C5181C.jpg",
    "/assets/carousel/CC3ABED3-6D2B-4DA8-A15A-784E4FCFE263.jpg",
    "/assets/carousel/E923265A-9209-409D-B57E-F8BF36D4F09B.jpg",
    "/assets/carousel/IMG_20251215_142210.jpg",
    "/assets/carousel/IMG_4238.jpeg",
    "/assets/carousel/Screenshot_2025-10-28-19-07-16-918_com.tencent.mm.jpg",
    "/assets/carousel/mmexport1760603131640.jpg",
    "/assets/carousel/mmexport1760603473369.jpg",
    "/assets/carousel/mmexport1764497825131.jpg",
    "/assets/carousel/mmexport1764509638823.jpg"
  ],
  email: "maoshenghe2@gmail.com",
  location: "Beijing, China",
  social: {
    // googleScholar: "https://scholar.google.com/citations?user=placeholder", // Placeholder as per PRD
  }
};

export const education: Education[] = [
  {
    id: "edu1",
    degree: "Master of Engineering in Computer Science",
    institution: "Beijing Electronic Science and Technology Institute (BESTI)",
    period: "2024 - Present",
    description: "Focusing on Deep Learning and Computer Vision. Conducting research on adaptive representation learning."
  },
  {
    id: "edu2",
    degree: "Bachelor of Engineering",
    institution: "Southwest University of Science and Technology (SWUST)",
    period: "2020 - 2024",
    description: "Major in Computer Science and Technology. Graduated with honors."
  }
];

export const publications: Publication[] = [
  {
    id: "pub1",
    title: "AFT-Net: Adaptive Representation Learning for Robust Crowd Counting and Localization",
    authors: ["X. Dong", "M. He", "Z. Wang", "et al."],
    journal: "Proceedings of the 8th Chinese Conference on Pattern Recognition and Computer Vision (PRCV)",
    year: 2025,
    type: "conference",
    status: "accepted",
    citationCount: 0 // New publication
  },
  {
    id: "pub2",
    title: "DiffNN-Med: Task-Adaptive Fuzzy Neural Networks for Interpretable Medical Drug Recommendation",
    authors: ["Z. Wang", "M. He", "Z. Liang", "et al."],
    journal: "2025 IEEE International Conference on Bioinformatics and Biomedicine (BIBM) Workshops",
    year: 2025,
    type: "conference",
    status: "accepted"
  }
];

export const skills: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "C/C++", level: 80 },
      { name: "MATLAB", level: 70 },
      { name: "LaTeX", level: 85 }
    ]
  },
  {
    category: "AI & Frameworks",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 75 },
      { name: "OpenCV", level: 80 },
      { name: "Scikit-learn", level: 85 }
    ]
  },
  {
    category: "Research Areas",
    skills: [
      { name: "Computer Vision", level: 85 },
      { name: "Deep Learning", level: 90 },
      { name: "Pattern Recognition", level: 80 },
      { name: "Model Security", level: 75 }
    ]
  }
];

export const awards: Award[] = [
  {
    id: "award1",
    title: "National Second Prize",
    issuer: "19th 'Challenge Cup' National College Student Extracurricular Academic Science and Technology Works Competition",
    date: "Nov 2025",
    level: "National",
    description: "Artificial Intelligence Track"
  },
  {
    id: "award2",
    title: "National Second Prize",
    issuer: "'Huawei Cup' 22nd China Graduate Mathematical Modeling Competition",
    date: "Nov 2025",
    level: "National"
  },
  {
    id: "award3",
    title: "First Prize (North China Region)",
    issuer: "20th China Graduate Electronics Design Contest",
    date: "July 2025",
    level: "Regional"
  },
  {
    id: "award4",
    title: "National Second Prize",
    issuer: "'Huawei Cup' 4th China Graduate Cybersecurity Innovation Competition (Challenge IV)",
    date: "Nov 2025",
    level: "National"
  },
  {
    id: "award5",
    title: "National Third Prize",
    issuer: "'Huawei Cup' 4th China Graduate Cybersecurity Innovation Competition (Challenge I)",
    date: "Nov 2025",
    level: "National"
  },
  {
    id: "award6",
    title: "National Third Prize",
    issuer: "'Huawei Cup' 4th China Graduate Cybersecurity Innovation Competition (Creative Works)",
    date: "Nov 2025",
    level: "National"
  },
  {
    id: "award7",
    title: "National Third Prize",
    issuer: "10th National Cryptography Technology Competition",
    date: "Nov 2025",
    level: "National"
  }
];

export const projects: Project[] = [
  // Extracted from awards logic, as specific project details were not in the snippet but implied by awards.
  // Using placeholders or generic descriptions based on awards if needed, but for now leaving empty or simple.
  // The resume mentioned specific competitions which are projects.
];
