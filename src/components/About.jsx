function About({ about }) {
    return (
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-emerald-400">
            About Me
          </p>
  
          <h2 className="text-4xl font-black md:text-5xl">
            Who I Am
          </h2>
        </div>
  
        <div className="grid items-center gap-12 lg:grid-cols-2">
  
          {/* Image */}
          <div>
            <div
              className="
              overflow-hidden
              rounded-3xl
              border
              border-green-800
              bg-[#0A2418]
              "
            >
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
            <h3 className="mb-6 text-3xl font-bold text-emerald-400">
              {about.title}
            </h3>
  
            <p className="mb-8 leading-8 text-slate-300">
              {about.description}
            </p>
  
            <div className="flex flex-wrap gap-3">
              {about.tags?.map((tag) => (
                <span
                  key={tag}
                  className="
                  rounded-full
                  border
                  border-emerald-500
                  bg-emerald-500/10
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-emerald-300
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  
  export default About;
