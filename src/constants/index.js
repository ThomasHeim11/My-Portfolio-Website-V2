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
  chain,
  tes,
  tickettoken,
  leonardo,
  uio,
  web3,
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
    title: "Solidity Developer",
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

  {
    title: " Bachelor's degree, Computer Science",
    company_name: "University of Oslo (UiO)",
    icon: uio,
    iconBg: "#383E56",
    date: "August 2023 - juli 2026",
    points: [
      "Comprehensive study of computer functionality, communication, and problem-solving applications. Focus on understanding the structure, development, and use of computers in large data systems, creating reliable, flexible, user-friendly, and efficient solutions, and exploring the role of computer technology in businesses and society.",
      "Practical and theoretical learning with an early start in programming. Opportunity to work on significant projects and gain teamwork experience with programmers and administrators of large data systems. U",

      "Foundational courses in programming, data communication, computer technology, and systems.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Congratulations! I've read the code, and it's very clear and well-structured, adhering to good practices. I'm particularly impressed with how the addresses are managed within the s_collateralTokens array and how they are integrated with the Chainlink priceFeed. This is excellent work! Recently, I've built a stablecoin from scratch using overcollateralization with WETH and WBTC. However, I didn't handle the health factor and precision feed as efficiently and safely as your code does. I'm planning to use and test your approach. Best of luck! ",
    // name: "Leandro Sanchez on Likedin",
    designation: "Blockchain Developer ",
    company: "Keywise Arg",
    name: "Leandro Sanchez on Linkedin",
    image: leonardo,
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
    source_code_link: "https://crowdblock.surge.sh/",
  },
  {
    name: "ChainSalary (Chainlink Spring Hackathon 2023) ",
    description:
      "ChainSalery is a employee salary payment automation application built using Chainlink Keepers. It leverages Chainlink's smart contract automation capabilities to automate salary payments in ETH to desired employees on a biweekly basis.",
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
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: chain,
    source_code_link: "https://github.com/ThomasHeim11/ChainSalary",
    source_code_link: "https://chainsalary.surge.sh/",
  },

  {
    name: "StableCryptoDollar  ",
    description:
      "StableCryptoDollar (SCD) is a decentralized, algorithmic stablecoin designed to maintain stability relative to the United States Dollar (USD). The contract, owned by DSCEngine, operates as an ERC20 token and enables users to mint and burn tokens through interaction with the DSCEngine smart contract.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "foundry",
        color: "yellow-text-gradient",
      },
      {
        name: "OpenZeppelin",
        color: "green-text-gradient",
      },
      // {
      //   name: "react",
      //   color: "pink-text-gradient",
      // },
    ],
    image: tes,
    source_code_link: "https://github.com/ThomasHeim11/StableCryptoDollar",
    source_code_link:
      "https://sepolia.etherscan.io/address/0xba1fea17c9781ea519424dc68ef843ba996076a2#code",
  },

  {
    name: "TicketToken",
    description:
      "This is a decentralized ticket marketplace smart contract for managing NFT (Non-Fungible Token) tickets using the ERC721 standard. The smart contract allows the creation of occasions (events) with specific details such as the name, cost of each ticket, maximum tickets available, date, time, and location. Users can then buy tickets for these occasions, and each ticket is represented as a unique NFT.",
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
        name: "OpenZeppelin",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: tickettoken,
    source_code_link: "https://github.com/ThomasHeim11/TicketToken",
    source_code_link: "https://tickettoken.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
