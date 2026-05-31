function About({ about }) {
    return (
      <section
        id="about"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
  
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">
              About Me
            </p>
  
            <h2 className="text-2xl
                        font-black
                        sm:text-3xl
                        lg:text-4xl">
              Who I Am
            </h2>
          </div>
  
          <div
            className="
            grid
            items-center
            gap-6 lg:gap-10
            lg:grid-cols-2
            "
          >
            {/* Image */}
            <div className="mx-auto max-w-md">
              <div className="overflow-hidden rounded-3xl border border-green-900 bg-[#0A2418]">
                <img
                  src={about.image}
                  alt="About"
                  className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-500
                  hover:scale-105
                  "
                />
              </div>
            </div>
  
            {/* Content */}
            <div>
              <h3 className="mb-5 text-xl font-bold text-emerald-400 sm:text-2xl">
                {about.title}
              </h3>
  
              <p
                className="
                text-xs
                leading-6
                text-slate-300
                sm:text-sm
                "
              >
                {about.description}
              </p>
  
              <div className="mt-8 flex flex-wrap gap-3">
                {about.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="
                    rounded-full
                    border
                    border-emerald-500
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
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
