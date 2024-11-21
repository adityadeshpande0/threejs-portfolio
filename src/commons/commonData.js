export const workExperiences = [
  {
    id: 1,
    name: "Infosys",
    pos: "Front End Developer",
    duration: "2022 - Feb - Present",
    title:
      "Led end-to-end development of React components, from gathering requirements to deployment. Designed reusable components and interfaces with TypeScript, improving code maintainability and reducing development time. Optimized application performance using Redux and Redux Toolkit for efficient state management. Integrated APIs via React Query, enhancing data fetching and synchronization. Converted Figma wireframes into functional React components, improving UI/UX. Refactored code for better readability, performance, and scalability. Ensured high code quality with SonarQube-compliant, defect-free code.",
    icon: "/assets/infosys-logo.jpg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Collabera",
    pos: "Talent Specialist",
    duration: "2021 - Mar - 2022 - Jan",
    title:
      "Worked as a US IT Recruiter manged entire life cycle of the recruitment process for clients in the US.",
    icon: "/assets/collabera-logo.png",
    animation: "clapping",
  },
];

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];
export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -1.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [1, -2, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [6, 6, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};

export const skillsDataTechnology = [
  { title: "React", image: "xyz", left: "35%", top: "0%" },
  { title: "React Native", image: "xyz", left: "50%", top: "12%" },
  { title: "Redux Toolkit", image: "", left: "46%", top: "23%" },
  { title: "Hooks", image: "xyz", left: "0%", top: "34%" },
  { title: "Redux Thunk", image: "xyz", left: "0%", top: "12%" },
  { title: "React Query", image: "xyz", left: "0%", top: "45%" },
  { title: "Node Js", image: "xyz", left: "45%", top: "57%" },
];
export const skillsDataDevelopment = [
  { title: "HTML", image: "xyz", left: "0%", top: "0%" },
  { title: "Typescript", image: "xyz", left: "0%", top: "23%" },
  { title: "Javascript", image: "xyz", left: "52%", top: "34%" },
  { title: "Tailwind CSS", image: "xyz", left: "49%", top: "45%" },
  { title: "Bootstrap", image: "xyz", left: "0%", top: "57%" },
  { title: "CSS", image: "xyz", left: "75%", top: "69%" },
  { title: "SCSS", image: "xyz", left: "70%", top: "0" },
];
export const skillsDataMisc = [
  { title: "Framer Motion", image: "xyz", left: "0%", top: "81%" },
  { title: "Material UI", image: "xyz", left: "0%", top: "81%" },
  { title: "Native Base", image: "xyz", left: "0%", top: "81%" },
  { title: "Expo CLI", image: "xyz", left: "0%", top: "81%" },
  { title: "React Bootstrap", image: "xyz", left: "0%", top: "81%" },
];
export const skillsDataCloud = [
  { title: "Azure Cloud", image: "xyz", left: "0%", top: "69%" },
  { title: "Version Control", image: "xyz", left: "45%", top: "57%" },
  { title: "RTL", image: "xyz", left: "75%", top: "57%" },
  { title: "Jira", image: "xyz", left: "45%", top: "57%" },
  { title: "Testing", image: "xyz", left: "45%", top: "57%" },
  { title: "Git", image: "xyz", left: "45%", top: "57%" },
];
export const myProjects = [
  {
    title: "VS - Code Style Portfolio",
    desc: "A sleek, VS Code-inspired portfolio showcasing my skills, projects, and experience in a developer-friendly layout. Designed for a seamless, interactive user experience, mirroring the feel of a code editor.",
    subdesc:
      "A dynamic VS Code-style portfolio built with React, Vite, SCSS, and JavaScript, showcasing a seamless developer-like interface.",
    href: "https://adityadeshpande.netlify.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/vscode.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Javascript",
        path: "assets/js_icon.png",
      },
      {
        id: 3,
        name: "CSS",
        path: "/assets/css-3.png",
      },
      {
        id: 4,
        name: "Bootstrap",
        path: "/assets/bootstrap-logo.png",
      },
      {
        id: 5,
        name: "Vite",
        path: "/assets/vite-logo.svg",
      },
    ],
  },
  {
    title: "Interview Scheduler",
    desc: "A comprehensive interview scheduling and management system built with React, TypeScript, Node.js, and MongoDB. This application streamlines the process of organizing, tracking, and conducting interviews, offering users a seamless experience for both candidates and interviewers.",
    subdesc:
      "Effortlessly schedule and manage interviews with an intuitive platform designed for efficiency and reliability.",
    href: "https://intprep.netlify.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/react.svg",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 3,
        name: "MongoDb",
        path: "/assets/mongodb-icon-2.png",
      },
      {
        id: 4,
        name: "Node",
        path: "/assets/node-js_icon.png",
      },
    ],
  },
];
