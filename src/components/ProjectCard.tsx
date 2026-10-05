import React from "react";
import ProjectLinks from "./ProjectLinks";
import { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group flex flex-col space-y-4 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition-all hover:shadow-md">
      <div className="aspect-video overflow-hidden">
        <img
          loading="lazy"
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col space-y-3 p-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase tracking-wider text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-sm text-secondary leading-relaxed">
          {project.shortDescription}
        </p>

        <div className="grid grid-cols-1 gap-3 py-2 border-y border-zinc-100 dark:border-zinc-800 text-xs">
          <div>
            <span className="font-semibold text-zinc-500 uppercase tracking-tighter mr-2">
              Problem:
            </span>
            <span className="text-zinc-700 dark:text-zinc-300">
              {project.problem}
            </span>
          </div>
          <div>
            <span className="font-semibold text-zinc-500 uppercase tracking-tighter mr-2">
              Role:
            </span>
            <span className="text-zinc-700 dark:text-zinc-300">
              {project.role}
            </span>
          </div>
          <div>
            <span className="font-semibold text-zinc-500 uppercase tracking-tighter mr-2">
              Outcome:
            </span>
            <span className="text-zinc-700 dark:text-zinc-300">
              {project.outcome}
            </span>
          </div>
        </div>

        <ProjectLinks project={project} />
      </div>
    </div>
  );
};

export default ProjectCard;
