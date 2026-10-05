import { motion, useIsPresent } from "framer-motion";
import type { PropsWithChildren } from "react";
import { revealTransition } from "../motion/Reveal";
import type { Project } from "../../../types";
import ProjectLinks from "../ProjectLinks";

export const projectNumber = (index: number) => String(index + 1).padStart(2, "0");

export default function ProjectStory({ project, index, count }: { project: Project; index: number; count: number }) {
  return (
    <div className="project-story" data-project-detail>
      <p className="project-number" aria-label={`Project ${index + 1} of ${count}`}>
        {projectNumber(index)} / {String(count).padStart(2, "0")}
      </p>
      <h3>{project.title}</h3>
      <p className="project-disciplines">{project.tags.join(" / ")}</p>
      <p className="project-statement">{project.shortDescription}</p>
      <div className="project-footer">
        <dl className="project-role"><dt>Role</dt><dd>{project.role}</dd></dl>
        <ProjectLinks project={project} />
      </div>
    </div>
  );
}

export function ProjectTransition({ children }: PropsWithChildren) {
  const isPresent = useIsPresent();
  return (
    <motion.div className="project-story-layer" inert={!isPresent}
      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.25, ease: revealTransition.ease }}>
      {children}
    </motion.div>
  );
}
