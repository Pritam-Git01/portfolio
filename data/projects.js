// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: "Crypto Wallet & Exchange Platform",
    description:
      "A full-featured crypto wallet and exchange platform built with React, Next.js, and RainbowKit. Features secure wallet management, token swapping, portfolio tracking, and real-time market data.",
    technologies: [
      "React",
      "Redux",
      "Next.js",
      "RainbowKit",
      "Tailwind",
      "recharts",
    ],
    image: "/images/projects/crypto-wallet.png",
    category: "frontend",
    liveUrl: "https://crypto-wallet-edge.vercel.app/",
    githubUrl: "https://github.com/pritam-git01/crypto-wallet",
  },
  {
    id: 2,
    title: "JSON Tree Visualizer",
    description:
      "A web application that visualizes JSON data structures in an interactive tree format, allowing users to explore and manipulate complex JSON objects easily.",
    technologies: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "html-to-image",
      "Reactflow",
    ],
    image: "/images/projects/json-tree-visualizer.png",
    category: "frontend",
    liveUrl: "https://json-tree-visualizer-prit.vercel.app/",
    githubUrl: "https://github.com/pritam-git01/json-tree-visualizer",
  },
  {
    id: 3,
    title: "Pipeline Builder",
    description:
      "A visual pipeline builder application that allows you to create, edit, and analyze workflow pipelines using a drag-and-drop interface. Built with React Flow and FastAPI, this tool enables users to design complex data processing workflows and automatically validates them as Directed Acyclic Graphs (DAGs).",
    technologies: [
      "React",
      "FastAPI",
      "Reactflow",
      "Tailwind CSS",
      "Next.js",
      "Shadcn UI",
    ],
    image: "/images/projects/pipeline-builder.png",
    category: "frontend",
    githubUrl: "https://github.com/pritam-git01/pipeline-builder",
  },
  {
    id: 4,
    title: "AI-Powered RFP Management",
    description:
      "A modern, full-stack RFP (Request for Proposal) management platform that leverages artificial intelligence to streamline the procurement process - from creating RFPs using natural language to automatically parsing vendor proposals and generating intelligent comparisons.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "OpenAI API",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini",
      "SMTP + Nodemailer",
      "Tesseract.js",
      "Docker",
      "Docker-Compose",
    ],
    image: "/images/projects/rfp-management.png",
    category: "ai/ml",
    githubUrl: "https://github.com/pritam-git01/rfp-management",
  },

  {
    id: 5,
    title: "Project Management System",
    description:
      "A full-stack multi-tenant project management application built with Django, GraphQL, Next.js, and PostgreSQL. This project demonstrates a complete production-ready setup with organization-based data isolation, real-time task management, and a modern React frontend.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Apollo Client",
      "GraphQL",
      "Django",
      "Python",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
    ],
    image: "/images/projects/project-management-system.png",
    category: "full stack",
    githubUrl: "https://github.com/pritam-git01/project-management-system",
  },
  //     {
  //   id: 6,
  //   title: "The NZT - AI Finance Bot",
  //   description: "TheNZT enhances your cognitive abilities with AI-powered financial insights, transforming complex market data into clear, actionable intelligence across every global market.",
  //   technologies: ["React","Next.js", "recharts", "Plotly", "Tailwind CSS", "Python", "FastAPI", "MongoDB", "Redis", "OpenAI API", "Docker", "Docker Compose"],
  //   image: "/images/projects/the-nzt.png",
  //   category: "ai/ml",
  //   liveUrl: "https://iagentlo.iaisolution.com"

  // },
  {
    id: 7,
    title: "Library Management System",
    description:
      "A full-stack Library Management System built following SOLID principles, Clean Code practices, and TDD approach.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "Docker Compose",
    ],
    image: "/images/projects/library-management-system.png",
    category: "full stack",
    githubUrl: "https://github.com/pritam-git01/library-management-system",
  },
];
