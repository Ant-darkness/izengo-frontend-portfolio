function Hero({ profile }) {
    return (
      <section
        id="home"
            //className="py-8 sm:py-12 lg:py-16"
            className="max-w-6xl mx-auto px-4 py-10"
      >
        <div
          className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          grid
          items-center
          gap-6 lg:gap-10
          lg:grid-cols-2
          "
        >
          {/* Content */}
          <div
            className="
            order-2
            text-center
            lg:order-1
            lg:text-left
            "
          >
            <p className="mb-4 text-base font-semibold text-emerald-400 sm:text-lg">
              Hello, I'm
            </p>
  
            <h1
              className="
              text-4xl
              font-black
              leading-tight
              sm:text-5xl
              lg:text-6xl
              "
            >
              {profile.name}
            </h1>
  
            <h2
              className="
              mt-4
              font-bold
              text-green-300
              text-lg
              sm:text-xl
              lg:text-2xl
              "
            >
              {profile.subtitle}
            </h2>
  
            <p
              className="
              mx-auto
              mt-6
              max-w-2xl
              text-xs
              leading-6
              text-slate-300
              sm:text-sm
              lg:mx-0
              "
            >
              {profile.description}
            </p>
  
            <div
              className="
              mt-8
              flex
              justify-center
              lg:justify-start
              "
            >
              <a
                href="#projects"
                className="
                rounded-full
                bg-emerald-500
                px-5
                py-2
                font-semibold
                text-black
                transition
                hover:scale-105
                "
              >
                View Projects
              </a>
            </div>
          </div>
  
          {/* Image */}
            <div
            className="
            order-1
            flex
            justify-center
            lg:justify-end
            lg:order-2
            "
            >
            <img
                src="/izengo.jpg"
                alt={profile.name}
                className="
                aspect-square
                w-32
                sm:w-44
                md:w-56
                lg:w-72
                rounded-full
                object-cover
                border-4
                border-emerald-500
                shadow-[0_0_30px_rgba(16,185,129,0.35)]
"
            />
            </div>
        </div>
      </section>
    );
  }
  
  export default Hero;
