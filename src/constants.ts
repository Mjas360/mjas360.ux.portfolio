import { PortfolioData } from "../types";

/**
 * EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO CONTENT
 */
export const PORTFOLIO_DATA: PortfolioData = {
  name: "Sulyman Amosa",
  title: "Product Designer & Frontend Engineer",
  shortIntro:
    "I design digital product experiences and engineer them into production. Working across commerce, fintech and SaaS with React and TypeScript.",

  longBio: `
I am a Frontend Engineer with 4+ years of experience building fintech and SaaS platforms using React and TypeScript.

My work focuses on developing financial interfaces such as transaction monitoring dashboards, remittance platforms, and merchant systems used for operational and compliance workflows.

With a hybrid background in product design and engineering, I bridge the gap between design and development — translating complex financial workflows into clear, scalable user interfaces.

I specialize in building reusable component architectures, implementing design systems, and delivering responsive interfaces that support real-world financial operations across multiple markets.
  `,

  profileImage: "/assets/images/mjas-profile-image.png",

  email: "amosasulyman360@gmail.com",
  linkedin: "https://www.linkedin.com/in/amosa-sulyman-baa132245",
  github: "https://github.com/Mjas360",

  skills: [
    { name: "React.js", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "React Native", category: "Frontend" },
    { name: "Vue.js", category: "Frontend" },
    { name: "API Integration", category: "Frontend" },
    { name: "Component Architecture", category: "Frontend" },
    { name: "Responsive UI", category: "Frontend" },
    { name: "Styled Components", category: "Frontend" },

    { name: "Design Systems", category: "Product Engineering" },
    { name: "UI Architecture", category: "Product Engineering" },
    { name: "Accessibility (WCAG)", category: "Product Engineering" },
    { name: "State Management Patterns", category: "Product Engineering" },

    { name: "Figma", category: "Tools" },
    { name: "Git", category: "Tools" },
    { name: "VS Code", category: "Tools" },
    { name: "Linear / Jira", category: "Tools" },
  ],

  projects: [
    {
      featured: true,
      id: "4",
      title: "Asoebi Africa",
      shortDescription:
        "A marketplace connecting African fashion vendors and customers, from discovery to checkout.",

      problem:
        "The early-stage marketplace required clear product workflows and scalable UI structures for vendor management, product listings, and customer transactions.",

      role: "Product Designer & Frontend Engineer",

      outcome:
        "Designed and implemented customer, vendor, and admin interfaces that structured the marketplace experience. Developed scalable UI flows supporting vendor onboarding, product management, and checkout processes.",

      imageUrl: "/assets/images/asoebi-thumbnail.png",
      liveUrl: "https://asoebi.africa/",
      caseStudyUrl:
        "https://www.figma.com/design/h0WV7u9C9UMNY5S3xzpRuV/Vendor-Center-asoebi.africa--Revamp-?node-id=1-2&t=coNKtRYqdmfTDVyK-1",
      tags: ["Commerce", "Marketplace", "UI/UX", "Design System", "Frontend"],
    },

    {
      featured: true,
      id: "5",
      title: "MooniePay",
      shortDescription:
        "Modern payment aggregator platform helping African merchants collect payments and manage multi-currency wallets.",

      problem:
        "Businesses needed a unified platform to manage payment collection, KYC, transaction tracking, and payouts across multiple currencies.",

      role: "Frontend Engineer | Product Designer",

      outcome:
        "Designed and built merchant-facing dashboards and payment workflows for dynamic payment links, wallet management, reporting, and KYC processes. Simplified complex multi-currency payment operations into clear, scalable UI structures.",

      imageUrl: "/assets/images/mooniepay-thumbnail.png",
      liveUrl: "https://mooniepay-merchant-fe-4gfk.onrender.com/",
      caseStudyUrl:
        "https://www.figma.com/design/GYvDnCsE3xIfK7synYvNc4/Moonie---Public-Pages?node-id=209-1014&t=dJCjfOKueU9uiLrL-1",
      tags: ["Fintech", "0→1 Product", "Product Design", "Frontend"],
    },

    {
      id: "sendnex",
      featured: true,
      title: "SendNex",
      shortDescription:
        "A remittance experience for sending money from the US and Canada to Africa.",
      problem:
        "Making cross-border transfers easy to understand, from currency selection to delivery method.",
      role: "Frontend Engineer",
      outcome: "Frontend engineering for the SendNex remittance experience.",
      imageUrl: "/assets/images/sendnex-thumbnail.png",
      liveUrl: "https://sendnex.app",
      tags: ["Remittance", "Payments", "Frontend Engineering"],
    },

    {
      featured: true,
      id: "1",
      title: "Sukate & Bezeboh",
      shortDescription:
        "Fintech web applications and admin platforms for transaction monitoring, remittance operations, and compliance workflows.",

      problem:
        "Financial operations teams required secure, scalable interfaces to monitor transactions, manage compliance processes, and operate cross-border remittance systems.",

      role: "Lead Frontend Engineer | Product Designer",

      outcome:
        "Led frontend development using React and TypeScript, building scalable admin dashboards and reusable UI components. Implemented a shared component architecture that reduced design-to-development delivery time by ~30% and improved consistency across multiple fintech products.",

      imageUrl: "/assets/images/sbremit-app-thumbnail.png",
      liveUrl: "https://sbremit.com/",
      caseStudyUrl:
        "https://www.figma.com/design/CgRWrugM4rdXJGY6bF7dxe/SBremit-App-Revamp?node-id=1213-2675&t=5jAUt8oWVw28ceVQ-1",
      tags: ["Banking", "Enterprise", "Frontend"],
    },

    {
      featured: true,
      id: "2",
      title: "KwilaX",
      shortDescription:
        "B2B platform enabling Nigerian businesses to purchase Chinese Yuan (CNY) and execute international payments.",

      problem:
        "Businesses struggled with complex FX payment workflows and unclear transaction states during international transfers.",

      role: "Frontend Engineer | Product Designer",

      outcome:
        "Designed and implemented simplified step-based transaction flows for FX purchasing and international transfers. Improved onboarding clarity and payment status visibility, helping reduce transaction errors and drop-offs.",

      imageUrl: "/assets/images/kwilax-thumbnail.png",
      liveUrl: "https://kwilax.com/",
      caseStudyUrl:
        "https://www.figma.com/design/5hWDcVt5l3t4y1zAHoQ2Pw/KWILAX--Yuan--%3E-Alipay-?node-id=22-467&t=5ElaWIiVgWJqR4E1-1",
      tags: ["FX", "Payments", "Product Design"],
    },

    {
      id: "3",
      title: "Foodcart",
      shortDescription:
        "POS and vendor management platform designed for high-volume food businesses and operational teams.",

      problem:
        "Existing POS workflows were slow and error-prone during peak business hours, leading to operational delays and user frustration.",

      role: "Product Designer",

      outcome:
        "Developed optimized vendor dashboards and POS interfaces focused on speed, clarity, and reliability in real-world usage environments. Reduced operational friction and improved usability during high-volume transactions.",

      imageUrl: "/assets/images/foodcart-thumbnail.png",
      liveUrl: "https://www.foodcart.ng/",
      caseStudyUrl:
        "https://www.figma.com/design/HVrqyalNMTsOyDhEQSUz64/FoodCart-Restaurant-Portal?node-id=39-13582&t=xNHYckzdIAeQUyrA-1",
      tags: ["POS", "Vendor", "E-commerce"],
    },

    {
      id: "6",
      title: "Errandify",
      shortDescription:
        "Business platform helping companies manage deliveries, pickups, and logistics operations.",

      problem:
        "Businesses struggled with coordinating delivery operations and tracking runners using fragmented tools.",

      role: "Frontend Engineer | Product Designer",

      outcome:
        "Developed dashboards and task management interfaces for scheduling deliveries, tracking errands, and monitoring operational activity in real time. Improved visibility and operational efficiency for business users.",

      imageUrl: "/assets/images/errandify-thumbnail.png",
      liveUrl: "https://errandify.io",
      caseStudyUrl:
        "https://www.figma.com/design/N442d6ysFSMrDw5PAVo69F/Errandify?node-id=463-3113&t=XvvXnCKAWrey1poO-1",
      tags: ["Logistics", "Delivery", "B2B", "Dashboard"],
    },
  ],
};
