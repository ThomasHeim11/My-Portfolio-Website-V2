import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  starbucks,
  carrent,
  solidity,
  hardhat,
  chatgtp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Blochain Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Hardhat",
    icon: hardhat,
  },
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
    name: "React JS",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Blockchain Developer",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "February 2022 - present",
    points: [
      "Worked on end-to-end blockchain development projects, including designing, developing, testing, and deploying smart contracts and blockchain applications.",
      "Designed and built user-friendly front-end interfaces for dApps using JavaScript, HTML, and CSS, enhancing the user experience and driving engagement.",

      "Contributed to open-source blockchain projects, gaining experience with collaborative software development and community-driven projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "From our interactions, I can see that you have a deep understanding of blockchain technology and the ability to create efficient, secure, and scalable solutions. You also have a strong passion for the technology, which is essential for staying up to date with the latest developments and advancements in the field. ",
    name: "ChatGTP",
    designation: "Chat Generative Pre-trained Transformer)",
    company: "OpenAI",
    name: "chatgtp",
    icon: chatgtp,
  },
];

const projects = [
  {
    name: "CrowdBlock",
    description:
      "This DApp is a decentralized crowdfunding platform built with Vite and smart contracts. Users can create campaigns, make donations, and view campaign details, enabling transparent and secure crowdfunding on the blockchain.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "hardhat",
        color: "yellow-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ThomasHeim11/CrowdBlock",
  },
];

export { services, technologies, experiences, testimonials, projects };
