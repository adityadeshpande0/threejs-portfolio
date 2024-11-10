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
    name: "Work",
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
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};