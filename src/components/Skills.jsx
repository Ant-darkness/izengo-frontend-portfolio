function Skills({ skills }) {
    return (
      <section
        id="skills"
        className="bg-[#0A2418] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
  
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">
              My Skills
            </p>
  
            <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">
              Technologies & Tools
            </h2>
          </div>
  
          <div
            className="
            grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3
            "
          >
            {skills.map((skill, index) => (
              <article
                key={index}
                className="
                overflow-hidden
                rounded-3xl
                border
                border-green-900
                bg-[#071A12]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-emerald-500
                "
              >
                <div className="h-24 sm:h-28 overflow-hidden">
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
  
                <div className="p-3">
                <h3 className="mb-2 text-sm font-bold text-emerald-400">
                    {skill.title}
                  </h3>
  
                  <p className="mb-2 text-xs leading-5 text-slate-300">
                    {skill.description}
                  </p>
  
                  <div className="flex flex-wrap gap-2">
                    {skill.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="
                        rounded-full
                        bg-emerald-500/10
                        px-2 py-0.5 text-[10px]
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
