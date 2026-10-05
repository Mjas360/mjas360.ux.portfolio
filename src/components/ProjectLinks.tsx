import type { Project } from "../../types";

export default function ProjectLinks({ project }: { project: Project }) {
  const links = [
    { href: project.caseStudyUrl, label: project.caseStudyUrl?.includes("figma.com") ? "View design" : "Case study" },
    { href: project.liveUrl, label: "Live product" },
  ];

  return (
    <div className="project-links">
      {links.filter((link) => link.href).map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
          className="project-link" aria-label={`${link.label}: ${project.title} (opens in a new tab)`}>
          {link.label}
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 18 18 6M6 6h12v12" />
          </svg>
        </a>
      ))}
    </div>
  );
}
