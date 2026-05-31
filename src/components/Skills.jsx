function Skills({ skills }) {
    return (
      <section
        id="skills"
        className="bg-[#0A2418] py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Header */}
          <div className="mb-14 text-center">
            <p className="mb-3 font-semibold uppercase tracking-widest text-emerald-400">
              My Skills
            </p>
  
            <h2 className="text-4xl font-black md:text-5xl">
              Technologies & Tools
            </h2>
          </div>
  
          {/* Skills Grid */}
          <div
            className="
            grid
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
            "
          >
            {skills.map((skill, index) => (
              <article
                key={index}
                className="
                overflow-hidden
                rounded-3xl
                border
                border-green-800
                bg-[#071A12]
                transition
                duration-300
                hover:-translate-y-2
                hover:border-emerald-500
                hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]
                "
              >
                {/* Image */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-500
                    hover:scale-110
                    "
                  />
                </div>
  
                {/* Content */}
                <div className="p-6">
  
                  <h3 className="mb-3 text-2xl font-bold text-emerald-400">
                    {skill.title}
                  </h3>
  
                  <p className="mb-5 text-slate-300">
                    {skill.description}
                  </p>
  
                  <div className="flex flex-wrap gap-2">
                    {skill.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="
                        rounded-full
                        bg-emerald-500/10
                        px-3
                        py-1
                        text-sm
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
  
  export default Skills;
