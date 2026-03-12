export type JourneyItem = {
  year: string;
  title: string;
  organization: string;
  description: string;
  projects?: string[];
  techStack?: string[];
};

export const journey: JourneyItem[] = [
  {
    year: "2026",
    title: "AI Software Engineer Intern",
    organization: "Home Team Science and Technology Agency (HTX)",
    description:
      "Incoming internship at HTX, working on AI/ML prototyping and web development projects.",
  },
  {
    year: "2025 - Now",
    title: "Research Engineer Intern (Frontend)",
    organization: "Health Informatics Research Lab (HIRL) @ NUS",
    description:
      "Collaborated in a cross-functional team using Agile/Scrum methodologies and participated in weekly sprints to ensure timely delivery of high-priority features for existing/new projects. Projects worked on include:",
    projects: [
      "Healdi - A patient tracking portal for doctors",
      "HealthRoots - An Android/iOS mobile application for obesity tracking in children @ KK Women and Children's Hospital",
      "Admin portals for these applications for data visualisation and analysis",
    ],
    techStack: ["React Native", "Next.js", "Node.js", "PostgreSQL", "Firebase", "AWS Lambda"],
  },
  {
    year: "2024",
    title: "Bachelor of Computing, Computer Science",
    organization: "National University of Singapore",
    description:
      "Matriculated into the Bachelor of Computing (Honours) in Computer Science programme at NUS.",
  },
  {
    year: "2022 - 2023",
    title: "Armament Technician",
    organization: "Singapore Armed Forces",
    description:
      "Maintained and repaired Terrex and Belrex fleets, and supported field missions in Singapore and at Exercise Wallaby. Took charge of administrative tasks, working extensively with Excel and Word. Awarded the rank of Corporal First Class (CFC) and attained 9AMB’s Depot Best Soldier Award in June 2023.",
  },
  {
    year: "2016 - 2021",
    title: "GCE A-Levels",
    organization: "Hwa Chong Institution",
    description:
      "Scored A for H2 Computing, Mathematics, and Physics.",
  },
];

