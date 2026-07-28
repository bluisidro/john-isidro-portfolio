export const profile = {
  name: "John Floriel Isidro",
  role: "Senior Software Engineer & Engineering Team Lead",
  tagline:
    "I architect and scale enterprise software — microservices, cloud infrastructure, and the teams that ship them.",
  location: "Bataan, Philippines",
  email: "johnflorielisidro@gmail.com",
  phone: "+63 962 624 4904",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/avatar.jpg",
  social: {
    github: "https://github.com/bluisidro",
    linkedin: "https://linkedin.com/in/johnflorielisidro",
  } as { github?: string; linkedin?: string; twitter?: string },
};

export const about = {
  bio: [
    "I'm a results-driven Senior Software Engineer and Engineering Team Lead with extensive experience designing, building, and scaling enterprise-grade web applications, distributed backend microservices, and robust cloud infrastructure. My expertise spans the full software development lifecycle, with a proven track record in modern JavaScript and TypeScript ecosystems including Node.js, NestJS, React, and Next.js.",
    "I'm known for strong leadership in mentoring engineering teams, managing CI/CD pipelines, and collaborating closely with stakeholders to align sophisticated software solutions with strategic business goals. I hold a Bachelor of Science in Computer Science from Microcity College of Business and Technology.",
  ],
};

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Backend Architecture",
    items: [
      "NestJS",
      "Node.js",
      "Express",
      "Fastify",
      "RESTful APIs",
      "GraphQL",
      "WebSockets (Socket.IO)",
    ],
  },
  {
    category: "Frontend Frameworks",
    items: ["HTML5", "CSS3", "React", "Next.js", "Angular", "Vue.js", "Tailwind CSS"],
  },
  {
    category: "Databases & Caching",
    items: ["PostgreSQL", "MySQL", "MSSQL", "MongoDB", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, Lambda, Lightsail)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "Nginx",
      "Cloudflare",
      "Firebase",
      "Azure",
      "GCP",
    ],
  },
  {
    category: "Messaging & Event-Driven",
    items: ["Kafka", "RabbitMQ", "Event-Driven Architectures"],
  },
  {
    category: "Security & Auth",
    items: ["OAuth2", "OpenID Connect", "JWT Authentication", "OWASP Security Testing"],
  },
  {
    category: "Tools & Testing",
    items: ["Git", "Postman", "Swagger", "Rapidoc", "Sourcetree", "Jest", "Mocha"],
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "MADLABS",
    location: "Remote / Manila",
    period: "February 2022 — Present",
    description: [
      "Lead a high-performing software engineering team responsible for building and architecting highly scalable web applications and enterprise backend systems.",
      "Designed and implemented robust microservice-based architectures using NestJS and Node.js, significantly boosting system modularity and maintainability.",
      "Developed enterprise-grade RESTful and GraphQL APIs supporting high-volume, mission-critical business operations.",
      "Managed end-to-end cloud infrastructure deployments and automation workflows using AWS, Docker, and customized CI/CD pipelines.",
      "Conducted rigorous code reviews, instituted rigorous engineering standards, and established company-wide development best practices.",
      "Collaborated closely with cross-functional stakeholders to align architectural decisions with overarching business requirements.",
      "Mentored junior and mid-level developers, fostering a culture of continuous learning and improving overall team delivery productivity.",
    ],
  },
  {
    role: "Team Lead / Senior Software Engineer",
    company: "TAS Tradesoft",
    location: "Remote / Negros Occidental",
    period: "February 2020 — February 2022",
    description: [
      "Led agile engineering teams in designing and launching business-critical enterprise software solutions.",
      "Engineered backend services and scalable APIs using Node.js, Express, and TypeScript to support intensive data workflows.",
      "Oversaw software architecture planning, technical roadmapping, and full software development lifecycle (SDLC) execution.",
      "Optimized deployment automation, cloud infrastructure reliability, and application performance, decreasing system latency.",
      "Coordinated sprint planning sessions, facilitated daily stand-ups, managed technical decision-making, and ensured timely project delivery.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Dunbrae Subic, Inc.",
    location: "Subic Bay Freeport Zone",
    period: "April 2019 — February 2020",
    description: [
      "Developed internal operational systems and customer-facing web platforms utilizing modern JavaScript/TypeScript libraries.",
      "Built production-ready backend APIs and interactive frontend views supporting multifaceted operational workflows.",
      "Designed, indexed, and optimized relational database structures (PostgreSQL/MySQL) to maximize application processing speeds.",
      "Partnered with internal departments to clarify requirements and deliver critical software solutions on schedule.",
    ],
  },
  {
    role: "Quality Assurance Engineer / Full Stack Developer",
    company: "Strategy Lions",
    location: "Remote / Australia",
    period: "August 2018 — April 2019",
    description: [
      "Executed thorough software quality assurance testing, test plan formulation, and validation for major production releases.",
      "Investigated complex software defects, documented root-cause issues, and coordinated with development teams for prompt technical resolution.",
      "Developed full-stack features and bug-fixes for internal and client-facing business applications.",
      "Collaborated closely with senior architects to continuously enhance software reliability and overall product excellence.",
    ],
  },
  {
    role: "Team Lead / Full Stack Developer",
    company: "Lagility",
    location: "Pampanga, Philippines",
    period: "April 2017 — August 2018",
    description: [
      "Spearheaded a software development team focused on building and maintaining comprehensive full-stack web applications.",
      "Managed daily task delegation, sprint planning, feature scoping, and overall project delivery timelines.",
      "Developed responsive frontend user interfaces and structured backend APIs across multiple concurrent client projects.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Microservices Migration",
    description:
      "Architected, structured, and deployed scalable microservices infrastructure for enterprise platforms, migrating legacy monolithic frameworks to decoupled, service-oriented environments.",
    tags: ["NestJS", "Node.js", "Microservices"],
  },
  {
    title: "Database & Caching Optimization",
    description:
      "Tuned multi-tenant PostgreSQL/MySQL clusters and implemented high-efficiency Redis caching layers to optimize large-scale system performance and data management.",
    tags: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "Cloud Automation Pipelines",
    description:
      "Spearheaded the integration of Terraform, Docker, and Kubernetes automation pipelines, orchestrating seamless containerized deployments across AWS infrastructure.",
    tags: ["Terraform", "Docker", "Kubernetes", "AWS"],
  },
  {
    title: "Real-Time Communication Layer",
    description:
      "Designed and maintained low-latency distributed communication tiers leveraging event-driven messaging networks like Kafka, RabbitMQ, and real-time WebSockets.",
    tags: ["Kafka", "RabbitMQ", "Socket.IO"],
  },
  {
    title: "Enterprise Security & Auth",
    description:
      "Established robust authorization layers using OAuth2, OpenID Connect, and JWT standards, backed by systematic OWASP security compliance audits.",
    tags: ["OAuth2", "OpenID Connect", "JWT", "OWASP"],
  },
  {
    title: "Enterprise API Ecosystem",
    description:
      "Engineered flexible, high-volume API ecosystems using an advanced blend of RESTful interfaces and complex GraphQL data federation strategies.",
    tags: ["REST", "GraphQL"],
  },
];
