function Qualifications({ qualifications }) {
    return (
      <section
        id="qualifications"
        className="bg-[#0A2418] py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Header */}
          <div className="mb-14 text-center">
            <p className="mb-3 font-semibold uppercase tracking-widest text-emerald-400">
              Background
            </p>
  
            <h2 className="text-4xl font-black md:text-5xl">
              Qualifications
            </h2>
          </div>
  
          <div className="grid gap-10 lg:grid-cols-2">
  
            {/* Education */}
            <div
              className="
              rounded-3xl
              border
              border-green-800
              bg-[#071A12]
              p-6
              "
            >
              <h3 className="mb-6 text-2xl font-bold text-emerald-400">
                Education
              </h3>
  
              <div className="space-y-5 text-slate-300">
                <p>
                  🎓 EASTC — Bachelor of Data Science (2023 - 2026)
                </p>
  
                <p>
                  🎓 Advanced Level — Mwenge Boys High School (2021 - 2023)
                </p>
  
                <p>
                  🎓 Secondary — 2017 - 2020
                </p>
  
                <p>
                  🎓 Primary — 2010 - 2016
                </p>
              </div>
            </div>
  
            {/* Other Qualifications */}
            <div className="space-y-6">
  
              <div
                className="
                rounded-3xl
                border
                border-green-800
                bg-[#071A12]
                p-6
                "
              >
                <h3 className="mb-4 text-2xl font-bold text-emerald-400">
                  Certifications
                </h3>
  
                <ul className="space-y-2 text-slate-300">
                  <li>Python Programming Certificate</li>
                  <li>Data Science Fundamentals</li>
                </ul>
              </div>
  
              <div
                className="
                rounded-3xl
                border
                border-green-800
                bg-[#071A12]
                p-6
                "
              >
                <h3 className="mb-4 text-2xl font-bold text-emerald-400">
                  Technical Training
                </h3>
  
                <ul className="space-y-2 text-slate-300">
                  <li>Git & GitHub</li>
                  <li>Excel & Data Analysis</li>
                  <li>Computer Maintenance</li>
                </ul>
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Qualifications;
