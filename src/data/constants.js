export const Bio = {
  name: "Musthafa Vakkayil",
  roles: [
    "Backend Developer"
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/muhammed-shahal",
  resume:
    "https://drive.google.com/file/d/1xYUs1c_-1Wb4fzjSlse1LG_6BIoCnSe9/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/musthafashahal/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Golang",
        image:
          "https://img.icons8.com/?size=100&id=44442&format=png&color=000000",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Devops",
    skills: [
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "AWS",
        image:
          "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Postman",
        image:
          "https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://i.postimg.cc/7LY3rF0c/impelsys.png",
    role: "Software Engineer l",
    company: "Impelsys India Pvt. Ltd.",
    date: "Jan 2024 - Present",
    desc: "Developed and optimized backend APIs in Golang and TypeScript, promptly resolving bugs and vulnerabilities to enhance system stability and user experience. Maintained over 80% unit test coverage, ensuring code reliability and minimizing production defects. Successfully migrated AWS service deployments from SDK to CDK, improving infrastructure management and deployment efficiency.",
    skills: [
      "Go",
      "Python",
      "TypeScript",
      "Docker",
      "AWS",
      "Lambda",
      "Step Functions",
      "MySql"
    ],
  },
  {
    id: 1,
    img: "https://i.postimg.cc/7LY3rF0c/impelsys.png",
    role: "Software Engineer Trainee",
    company: "Impelsys India Pvt. Ltd.",
    date: "Nov 2022 - Dec 2024",
    desc: "Implemented user authorization and authentication using JWT, strengthening application security and access control. Efficiently resolved production bugs, ensuring a seamless client experience and minimizing downtime.",
    skills: [
      "Golang",
      "ReactJS",
      "NodeJs",
      "HTML",
      "CSS",
      "JavaScript",
      "AWS",
      "MongoDB",
    ],
  },
];

export const education = [
  {
    id: 0,
    school: "Cochin University of Science and Technology, Cochin",
    date: "Aug 2018 - May 2022",
    grade: "8.31 CGPA",
    desc: "I completed my Bachelor's degree in Computer Science and Engineering at Cochin University of Science and Technology, Cochin.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  {
    id: 1,
    school: "GHSS NGO Quarters, Calicut",
    date: "Jun 2015 - Mar 2017",
    grade: "83.2%",
    desc: "I completed my class 12 high school education at Methodist School, Dankuni, where I studied Computer Science.",
    degree: "XII, Computer Science",
  }
];

export const projects = [
  {
    id: 0,
    title: "Event Scheduler",
    date: "Jan 2025",
    description:
      "An event scheduling system built with Golang that automatically handles both one-time and recurring events, ensuring reliable and timely execution without manual intervention",
    image:
      "https://i.postimg.cc/9F0SBkDW/Screenshot-2025-08-31-052541.png",
    tags: ["Golang", "Gin", "Redis", "PostgreSQL", "Docker", "Asynq", "CI/CD"],
    category: "web app",
    github: "https://github.com/muhammed-shahal/event_scheduler_v2",
    webapp: "https://github.com/muhammed-shahal/event_scheduler_v2",
  },
  {
    id: 1,
    title: "Planning Poker",
    date: "Aug 2023",
    description:
      "A tool with socket programming designed for Agile sprint planning, enabling real-time collaboration and efficient task management.",
    image:
      "https://i.postimg.cc/HLdVqbDk/image-3.jpg",
    tags: [
      "React Js",
      "Node Js",
      "Sokcet Progrmming",
      "Expres Js"
    ],
    category: "web app",
    github: "",
    webapp: "http://65.0.110.61/",
  },
  {
    id: 3,
    title: "Passman",
    date: "Jun 2024",
    description:
      "A simple, secure command-line password manager written in Python.",
    image:
      "https://i.postimg.cc/76wNh5FB/passman.png",
    tags: [
      "Python",
      "Cryptography",
    ],
    category: "cli app",
    github: "https://github.com/muhammed-shahal/passman",
    webapp: "https://github.com/muhammed-shahal/passman",
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
