// src/constants/data.js

export const PERSONAL_INFO = {
  title: "Musthafa",
  name: "Muhammed Musthafa",
  email: "musthuvakkayil@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1jc5Wxgu9wuc80cQvkI7gYkXLss9zGdlJ/view?usp=drive_link",
  location: "Bangalore, India",
  github: "https://github.com/muhammed-shahal",
  linkedin: "https://linkedin.com/in/musthuvakkayil",
  about:
    "I’m a Software Engineer with over 3 years of experience specializing in backend development and AWS. I focus on building scalable systems and writing clean, efficient, and maintainable code in Python and Go.",
};

export const TEXT_LITERALS = {
  intrest: "CODE IS CRAFT",
  title: "Let’s Talk",
  message: "I’m always open to exciting backend challenges—especially where Go or Python can make a real impact. If you’re working on something ambitious or looking to strengthen your team, I’d love to hear from you"
};

export const SKILLS = [
  "aws",
  "docker",
  "go",
  "kubernetes",
  "mysql",
  "postgresql",
  "python",
  "rabbitmq",
  "react",
  "redis",
];

export const KEYEWORDS = ["Secure", "Modern", "Scalable"];

export const myProjects = [
  {
    id: 1,
    title: "Event Scheduling System",
    description:
      "Automates one-time and recurring events with efficient task management, enabling seamless monitoring and control of over 100 scheduled tasks through a unified dashboard.",
    subDescription: [
      "Developed a robust scheduling system in Go to handle both one-time and recurring events using Redis for background task queues.",
      "Implemented authentication and authorization using JWT and PASETO for secure access management.",
      "Designed and optimized the database schema in MySQL for reliability and performance.",
      "Integrated a UI dashboard for real-time monitoring and management of scheduled events.",
      "Containerized the application using Docker for consistent and portable deployments.",
    ],
    href: "https://github.com/muhammed-shahal/event_scheduler_v2",
    logo: "",
    image: "/assets/projects/event-scheduler.jpg",
    tags: [
      {
        id: 1,
        name: "Go",
        path: "/assets/logos/go.svg",
      },
      {
        id: 2,
        name: "Redis",
        path: "/assets/logos/redis.svg",
      },
      {
        id: 3,
        name: "MySQL",
        path: "/assets/logos/mysql.svg",
      },
      {
        id: 4,
        name: "Docker",
        path: "/assets/logos/docker.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Planning Poker",
    description:
      "A tool with socket programming designed for Agile sprint planning, enabling real-time collaboration and efficient task management.",
    subDescription: [
      "Built a real-time collaborative planning poker tool using React.js and Node.js with Socket programming.",
      "Implemented admin functionality to manage rooms and polling for organized sprint planning sessions.",
      "Added 'tea break' functionality to allow participants to take breaks without disrupting sessions.",
      "Widely adopted by teams in the organization for agile sprint planning and task estimation.",
      "Developed backend APIs using Express.js to support smooth data flow and user management.",
    ],
    href: "https://github.com/muhammed-shahal/planingpoker",
    logo: "",
    image: "/assets/projects/planning-poker.jpg",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/node.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Passman",
    description:
      "A simple, secure command-line password manager written in Python.",
    subDescription: [
      "Developed a command-line password manager in Python with a focus on security and simplicity.",
      "Integrated SQLite to securely store and retrieve passwords.",
      "Implemented login functionality using a master password for user authentication.",
      "Utilized cryptography libraries to encrypt and protect sensitive user data.",
    ],
    href: "https://github.com/muhammed-shahal/passman",
    logo: "",
    image: "/assets/projects/passman.jpg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
    ],
  }
];

export const experiences = [
  {
    title: "Software Engineer Trainee",
    job: "impelsys",
    date: "2022-2024",
    contents: [
      "Developed a Go validation Library to streamline code and enhance development efficiency across multiple projects (3+), reducing boilerplate code.",
      "Increased backend unit test coverage to over 80%, reducing the number of production bugs by a measurable margin and ensuring higher code quality.",
      "Designed and built ETL pipelines using AWS Step Functions and AWS Glue, ensuring seamless and reliable ingestion of large-scale data."
    ],
  },
  {
    title: "Software Engineer 1",
    job: "impelsys",
    date: "2024-Present",
    contents: [
      "Integrated multiple user role switching support across three applications with zero server downtime. Designed backend APIs and integrated them with React-based UI components to enable seamless multi-role switching across applications.",
      "Optimized database queries by switching from paginated to cursor-based fetching and implementing caching, improving API response times by approximately 40%.",
      "Resolved a major AWS EMR production outage, restoring system availability within a critical timeframe and preventing further downtime for 100+ users.",
      "Led migration from AWS SDK to CDK, deploying a support application within one week and reducing deployment time by 50%.",
    ],
  }
];

export const blogs = [
  {
    title: "Setting Up AWS Glue Locally",
    description:
      "A step-by-step guide to setting up AWS Glue on your local machine.",
    href: "https://medium.com/impelsys/amazon-glue-local-setup-test-etl-scripts-locally-a0df8ee50858",
  },
  {
    title: "Blockchain: Writing Chaincode",
    description:
      "Learn how to write your first chaincode using Hyperledger Fabric.",
    href: "https://medium.com/impelsys/certificate-credentialing-service-writing-chaincode-blog-2-6c94d0c2cf6b",
  },
  {
    title: "Running a HAPI FHIR Server Locally",
    description:
      "Set up your own local HAPI FHIR server for testing and development.",
    href: "https://medium.com/impelsys/running-and-interacting-with-your-own-hapi-fhir-server-in-local-0f12c0cbbfdd",
  },
  {
    title: "Preparing Data with SageMaker Data Wrangler",
    description:
      "An introduction and walkthrough of AWS SageMaker Data Wrangler.",
    href: "https://medium.com/impelsys/preparing-data-using-sagemaker-data-wrangler-part-1-a8f41e506950",
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/musthafashahal/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: "/assets/socials/instagram.svg",
  },
];