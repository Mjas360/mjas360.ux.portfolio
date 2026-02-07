import { PortfolioData } from "./types";

/**
 * EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO CONTENT
 */
export const PORTFOLIO_DATA: PortfolioData = {
  name: "Sulyman Amosa",
  title: "Product Designer | Frontend Engineer",
  shortIntro:
    "Designing fintech and SaaS experiences that are simple, scalable, and user-friendly.",
  longBio: `
I am a Product Designer with 4+ years of experience in fintech, payment infrastructure, and B2B SaaS products.
My hybrid background in Frontend Engineering (React/Vue) allows me to collaborate seamlessly with developers
and build technically feasible, scalable design systems. I specialize in simplifying complex financial workflows,
including cross-border remittance, transaction monitoring, and merchant dashboards for the African market.
  `,
  profileImage: "/assets/images/mjas-profile-image.jpeg",
  email: "amosasulyman360@gmail.com",
  linkedin: "https://www.linkedin.com/in/amosa-sulyman-baa132245",
  github: "https://github.com/Mjas360",
  skills: [
    { name: "User Research", category: "Design" },
    { name: "Wireframing", category: "Design" },
    { name: "Design Systems", category: "Design" },
    { name: "Prototyping", category: "Design" },
    { name: "Figma", category: "Tools" },
    { name: "Adobe Photoshop", category: "Tools" },
    { name: "Canva", category: "Tools" },
    { name: "Jira/Linear", category: "Tools" },
    { name: "React.js", category: "Development" },
    { name: "Vue.js", category: "Development" },
    { name: "React Native", category: "Development" },
    { name: "TypeScript", category: "Development" },
    { name: "Styled-Components", category: "Development" },
  ],
  projects: [
    {
      id: "1",
      title: "SUKATE & BEZEBOH Digital Banking",
      shortDescription:
        "End-to-end fintech web apps and admin consoles for transaction monitoring and compliance.",
      problem:
        "Need for secure, scalable financial interfaces for cross-border remittance and compliance reporting.",
      role: "Lead Frontend Engineer | Product Designer",
      outcome:
        "Reduced design-to-development handoff by 30% and improved UI consistency across mobile and web.",
      imageUrl: "/assets/images/sbremit-app-thumbnail.png",
      liveUrl: "https://sbremit.com/",
      caseStudyUrl:
        "https://www.figma.com/design/CgRWrugM4rdXJGY6bF7dxe/SBremit-App-Revamp?node-id=1213-2675&t=5jAUt8oWVw28ceVQ-1",
      tags: ["FinTech", "Admin Dashboard", "Remittance"],
    },
    {
      id: "2",
      title: "KWILAX Cross-Border Payments",
      shortDescription:
        "B2B platform for Yuan (CNY) transfers and FX payments for Nigerian businesses.",
      problem:
        "Complex FX payment logic causing drop-offs and failed transactions.",
      role: "Senior UI/UX Designer",
      outcome:
        "Simplified onboarding and FX workflows, increasing successful transaction completion rates.",
      imageUrl: "/assets/images/kwilax-thumbnail.png",
      liveUrl: "https://kwilax.com/",
      caseStudyUrl: "https://www.figma.com/design/5hWDcVt5l3t4y1zAHoQ2Pw/KWILAX--Yuan--%3E-Alipay-?node-id=22-467&t=5ElaWIiVgWJqR4E1-1",
      tags: ["B2B", "FinTech", "FX"],
    },
    {
      id: "3",
      title: "FOODCART POS & Vendor Ecosystem",
      shortDescription:
        "Optimized POS workflows and vendor interfaces for non-technical users.",
      problem:
        "Existing POS and vendor systems were slow and error-prone for real-world use.",
      role: "UI/UX Designer",
      outcome:
        "Improved vendor adoption and reduced errors during high-pressure environments.",
      imageUrl: "/assets/images/foodcart-thumbnail.png",
      liveUrl: "https://www.foodcart.ng/",
      caseStudyUrl: "https://www.figma.com/design/HVrqyalNMTsOyDhEQSUz64/FoodCart-Restaurant-Portal?node-id=39-13582&t=xNHYckzdIAeQUyrA-1",
      tags: ["POS", "Vendor", "E-commerce"],
    },
    {
      id: "4",
      title: "ASOEBI AFRICA Marketplace",
      shortDescription:
        "Two-sided e-commerce marketplace connecting customers and vendors, with admin tools.",
      problem:
        "Early-stage marketplace needed a cohesive design system and clear workflows for both vendors and customers.",
      role: "Senior UI/UX Designer",
      outcome:
        "Delivered high-fidelity prototypes and platform design, supporting successful launch and early growth.",
      imageUrl: "/assets/images/asoebi-thumbnail.png",
      liveUrl: "https://asoebi.africa/",
      caseStudyUrl: "https://www.figma.com/design/h0WV7u9C9UMNY5S3xzpRuV/Vendor-Center-asoebi.africa--Revamp-?node-id=1-2&t=coNKtRYqdmfTDVyK-1",
      tags: ["E-commerce", "Marketplace", "Vendor Tools"],
    },
    {
      id: "5",
      title: "MooniePay",
      shortDescription:
        "Modern payment aggregator platform for African merchants, unifying local and regional payment methods into a single, scalable interface.",
      problem:
        "African businesses needed a simple, intuitive platform to collect payments, manage multi-currency wallets, and handle payouts efficiently.",
      role: "UI/UX Designer",
      outcome:
        "Designed merchant-facing and admin dashboards, creating intuitive flows for payments, KYC, wallets, dynamic links, and reporting. Simplified complex multi-currency and cross-border workflows for merchants, ensuring clarity and scalability.",
      imageUrl: "/assets/images/mooniepay-thumbnail.png",
      liveUrl: "#",
      caseStudyUrl:
        "https://www.figma.com/design/GYvDnCsE3xIfK7synYvNc4/Moonie---Public-Pages?node-id=209-1014&t=dJCjfOKueU9uiLrL-1",
      tags: ["FinTech", "Payments", "UX Design", "Dashboard", "Africa"],
    },
    {
      id: "6",
      title: "Errandify – Business Delivery & Errand Platform",
      shortDescription:
        "UI/UX design for a platform that helps businesses automate deliveries, pickups, and logistics operations.",
      problem:
        "Businesses struggled with coordinating bulk deliveries, tracking errands, and managing runners efficiently using fragmented tools.",
      role: "Product Designer (UI/UX)",
      outcome:
        "Designed clear workflows for creating deliveries, scheduling pickups, and monitoring runner activity in real time. Improved task visibility and reduced operational friction for business users.",
      imageUrl: "/assets/images/errandify-thumbnail.png",
      liveUrl: "https://errandify.io",
      caseStudyUrl: "https://www.figma.com/design/N442d6ysFSMrDw5PAVo69F/Errandify?node-id=463-3113&t=XvvXnCKAWrey1poO-1",
      tags: ["Logistics", "Delivery", "B2B", "Dashboard", "UI/UX Design"],
    },
  ],
};
