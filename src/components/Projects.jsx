function Projects({ projects }) {
    return (
      <section
        id="projects"
        className="bg-[#071A12] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
  
          {/* Header */}
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">
              My Projects
            </p>
  
            <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
  
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              Machine Learning, Data Analytics, Artificial Intelligence,
              and Data Science projects that solve real-world problems.
            </p>
          </div>
  
          {/* Projects Grid */}
          <div
            className="
            grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3
            "
          >
            {projects.map((project, index) => (
              <article
                key={index}
                className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-green-900
                bg-[#0A2418]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-emerald-500
                hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]
                "
              >
                {/* Image */}
                <div className="h-24 sm:h-28 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                    "
                  />
                </div>
  
                {/* Content */}
                <div className="p-3">
                  <h3 className="mb-3 text-sm font-bold text-emerald-400">
                    {project.title}
                  </h3>
  
                  <p className="mb-5 text-xs leading-5 text-slate-300">
                    {project.description}
                  </p>
  
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="
                        rounded-full
                        bg-emerald-500/10
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-emerald-300
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Projects;
