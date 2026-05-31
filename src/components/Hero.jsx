import { FaDownload } from "react-icons/fa";

function Hero({ profile }) {
  const downloadResume = () => {
    window.open(
      `${import.meta.env.VITE_API_URL}/api/resume/download`,
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-6 py-20 lg:py-32"
    >
      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* Left Side */}
        <div>
          <p className="mb-4 text-xl font-semibold text-emerald-400">
            Hello, I'm
          </p>

          <h1 className="mb-4 text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <h2 className="mb-6 text-2xl font-bold text-green-300 md:text-4xl">
            {profile.subtitle}
          </h2>

          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            {profile.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="
              rounded-full
              bg-emerald-500
              px-8
              py-4
              font-semibold
              text-black
              transition
              hover:scale-105
              "
            >
              View Projects
            </a>

            <button
              onClick={downloadResume}
              className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-500
              px-8
              py-4
              font-semibold
              transition
              hover:bg-emerald-500
              hover:text-black
              "
            >
              <FaDownload />
              Resume
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div
            className="
            overflow-hidden
            rounded-full
            border-4
            border-emerald-500
            shadow-[0_0_50px_rgba(16,185,129,0.35)]
            "
          >
            <img
              src="/favicon.svg"
              alt={profile.name}
              className="
              h-72
              w-72
              object-cover
              md:h-96
              md:w-96
              "
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
