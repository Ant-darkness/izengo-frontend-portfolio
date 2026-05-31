function Projects({ projects }) {
    return (
      <section
        id="projects"
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Header */}
          <div className="mb-14 text-center">
            <p className="mb-3 font-semibold uppercase tracking-widest text-emerald-400">
              My Work
            </p>
  
            <h2 className="text-4xl font-black md:text-5xl">
              Projects
            </h2>
  
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              A collection of machine learning and data science projects built to solve real-world problems.
            </p>
          </div>
  
          {/* Grid */}
          <div
            className="
            grid
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
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
                border-green-800
                bg-[#0A2418]
                transition
                hover:-translate-y-2
                hover:border-emerald-500
                hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]
                "
              >
                {/* Image */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-110
                    "
                  />
                </div>
  
                {/* Content */}
                <div className="p-6">
  
                  <h3 className="mb-2 text-xl font-bold text-emerald-400">
                    {project.title}
                  </h3>
  
                  <p className="mb-4 text-sm text-slate-300">
                    {project.description}
                  </p>
  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="
                        rounded-full
                        bg-emerald-500/10
                        px-3
                        py-1
                        text-xs
                        text-emerald-300
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
  
                  {/*<button
                    className="
                    w-full
                    rounded-full
                    bg-emerald-500
                    py-3
                    text-sm
                    font-semibold
                    text-black
                    transition
                    hover:bg-emerald-400
                    "
                  >
                    View Project
                  </button>*/}
  
                </div>
              </article>
            ))}
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Projects;
