import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    suntek,
    LMS,
    COM,
    PRO,
    threejs,
    njit
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About Me",
    },
    {
      id: "work",
      title: "Work Experience",
    },
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
   
  ];
  
  const services = [
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "Suntek Corp Solutions Pvt Ltd.",
      icon: suntek,
      iconBg: "#383E56",
      date: "Sep 2022 - Dec 2022",
      points: [
        "Created an automated assessment platform using Python, enabling real-time evaluation of students’ Data Structures and Algorithms (DSA) skills, which reduced grading time by 40%, and improved feedback efficiency.",
        "Spearheaded the development of a data analytics dashboard to track student performance metrics, identifying key areas for improvement and facilitating targeted instructional strategies that boosted student completion rates by 25%.",
        "Implementing responsive design and ensuring cross-browser compatibility.",      ],
    },
    {
      title: "Teaching Assistant",
      company_name: "New Jerset Institute of Technology",
      icon: njit,
      iconBg: "#E6DEDD",
      date: "Nov 2023 - Present",
      points: [
        "Facilitated personalized tutoring sessions for over 40 students, implementing targeted strategies to address individual learning obstacles; resulted in a significant decrease in course dropouts and enhanced overall academic success.",
        "Built Python scripts to visualize complex data structures and algorithms, resulting in a 50% improvement in students’ conceptual clarity and engagement in coding assignments.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Path-Finder",
      description:
        "PathFinder is a web-based platform that enables users to access, manage, and engage with online courses in a seamless learning environment. It offers a scalable solution for educators and learners, supporting secure course storage, streamlined billing, and up to 5,000 concurrent users.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "AWS",
          color: "green-text-gradient",
        },
        {
          name: "Stripe",
          color: "pink-text-gradient",
        },
      ],
      image: LMS,
      source_code_link: "https://github.com/hemanth0504/PathFinder",
    },
    {
      name: "Connectly",
      description:
        "Connectly is a web-based platform that facilitates secure and efficient team communication through real-time messaging and user interactions. Designed to support seamless collaboration, it ensures scalability and high availability for over 1,000 users, making it a robust solution for team-based workflows.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Convex",
          color: "green-text-gradient",
        },
        {
          name: "Next.js",
          color: "pink-text-gradient",
        },
      ],
      image: COM,
      source_code_link: "https://github.com/hemanth0504/Connectly",
      live_link : "https://connectly-app-hemanth-s-projects-429ff77e.vercel.app/auth"
    },
    {
      name: "Project-360X",
      description:
        "Project360X is a web-based platform that provides a comprehensive and user-friendly dashboard for managing projects in real-time. It features a scalable and efficient architecture, enabling streamlined data handling, responsive design, and improved query performance for enhanced productivity and collaboration.",
      tags: [
        {
          name: "Prisma",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL ",
          color: "green-text-gradient",
        },
        {
          name: "Redux-Toolkit",
          color: "pink-text-gradient",
        },
      ],
      image: PRO,
      source_code_link: "https://github.com/hemanth0504/Project-360X",
    },
  ];
  
  export { services, technologies, experiences, projects };
  