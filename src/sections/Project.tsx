import { useMemo, useState } from "react";
import type { Project as ProjectType } from "../data/projects";
import { projects } from "../data/projects";

const MAX_DESCRIPTION_LINES = 3;

const ProjectCard = ({
  project,
  onSelect,
}: {
  project: ProjectType;
  onSelect: (project: ProjectType) => void;
}) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:cursor-pointer focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-blue-500"
    >
      <div className="aspect-video w-full overflow-hidden rounded-t-2xl bg-slate-100">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-3 px-4 py-5 text-left">
        <h3 className="text-lg font-semibold text-slate-900">
          {project.title}
        </h3>
        <p
          className="text-sm text-slate-600"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: MAX_DESCRIPTION_LINES,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>
      </div>
    </button>
  );
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: ProjectType | null;
  onClose: () => void;
}) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-white/90 p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-row gap-4">
              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                {project.title}
              </h2>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700"
                >
                  Visit
                </a>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-100 hover: cursor-pointer"
            aria-label="Close project details"
          >
            ×
          </button>
        </div>

        <p className="mt-4 text-base leading-relaxed text-slate-700">
          {project.description}
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl bg-slate-100">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const projectList = useMemo(() => projects, []);

  return (
    <section id="projects" className="py-20">
      <div className="space-y-4 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.4em] text-blue-600">
          Projects
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Project;
