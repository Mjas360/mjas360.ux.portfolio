import { AnimatePresence, motion } from "framer-motion";
import type { CSSProperties } from "react";
import { PORTFOLIO_DATA } from "../../constants";
import ProjectLinks from "../ProjectLinks";
import Reveal, { revealTransition } from "../motion/Reveal";
import ProjectStory, { ProjectTransition, projectNumber } from "./ProjectStory";
import useProjectTimeline from "./useProjectTimeline";
import "./selectedWorks.css";

const featuredProjects = PORTFOLIO_DATA.projects.filter((project) => project.featured);
const additionalProjects = PORTFOLIO_DATA.projects.filter((project) => !project.featured);

export default function SelectedWorks() {
  const { enhanced, trackRef, stageRef, activeIndex, progress, selectProject, update } = useProjectTimeline(featuredProjects.length);
  const activeProject = featuredProjects[activeIndex];

  return (
    <section id="projects" className="selected-works py-20 px-6 bg-zinc-50 dark:bg-zinc-900/50" aria-labelledby="works-heading">
      <div className="max-w-7xl mx-auto">
        <Reveal className="works-heading">
          <h2 id="works-heading" className="text-3xl font-bold mb-2">Selected Works</h2>
          <p className="text-secondary">Product design and frontend engineering, in practice.</p>
        </Reveal>

        {enhanced ? (
          <div ref={trackRef} className="project-track" style={{ "--project-count": featuredProjects.length } as CSSProperties}>
            <div ref={stageRef} className="project-stage">
              <nav className="project-index" aria-label="Selected projects">
                <div className="project-index-list">
                  <div className="timeline-line" aria-hidden="true"><motion.span style={{ scaleY: progress }} /></div>
                  {featuredProjects.map((project, index) => (
                    <button key={project.id} type="button" className="project-index-button"
                      aria-current={activeIndex === index ? "step" : undefined}
                      aria-controls="active-project" onClick={() => selectProject(index)}>
                      {activeIndex === index && <motion.span className="project-index-marker" layoutId="active-project-marker" transition={revealTransition} aria-hidden="true" />}
                      <span className="project-index-number">{projectNumber(index)}</span>
                      <span>{project.title}</span>
                    </button>
                  ))}
                </div>
                <a className="project-skip" href="#about">
                  Continue to About
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4v16m-6-6 6 6 6-6" /></svg>
                </a>
              </nav>

              <div className="project-display" id="active-project" role="region" aria-label="Project details" onBlur={() => requestAnimationFrame(update)}>
                <div className="project-media" aria-hidden="true">
                  {featuredProjects.map((project, index) => (
                    <motion.img key={project.id} src={project.imageUrl} alt="" decoding="async"
                      initial={false} animate={{ opacity: activeIndex === index ? 1 : 0, scale: activeIndex === index ? 1 : 1.025 }}
                      transition={{ duration: 0.5, ease: revealTransition.ease }}
                    />
                  ))}
                </div>
                <div className="project-story-stage">
                  <AnimatePresence initial={false} mode="sync">
                    <ProjectTransition key={activeProject.id}>
                      <ProjectStory project={activeProject} index={activeIndex} count={featuredProjects.length} />
                    </ProjectTransition>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="project-sequence">
            {featuredProjects.map((project, index) => (
              <article key={project.id} className="project-chapter" aria-label={project.title}>
                <Reveal>
                  <div className="project-media"><img src={project.imageUrl} alt={`${project.title} interface`} loading="lazy" decoding="async" /></div>
                  <ProjectStory project={project} index={index} count={featuredProjects.length} />
                </Reveal>
              </article>
            ))}
          </div>
        )}

        <div className="additional-work">
          <Reveal><h3 className="text-xl font-semibold">Additional work</h3></Reveal>
          {additionalProjects.map((project) => (
            <Reveal key={project.id}>
              <article className="additional-project" aria-label={project.title}>
                <div className="additional-project-image"><img src={project.imageUrl} alt={`${project.title} interface`} loading="lazy" decoding="async" /></div>
                <div className="additional-project-copy">
                  <h4>{project.title}</h4>
                  <p className="project-disciplines">{project.tags.join(" / ")}</p>
                  <p className="text-secondary">{project.shortDescription}</p>
                </div>
                <ProjectLinks project={project} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
