function Qualifications() {
    return (
      <section
        id="qualifications"
        className="bg-[#0A2418] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
  
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Education
            </p>
  
            <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">
              Qualifications
            </h2>
          </div>
  
          <div className="grid gap-3 md:grid-cols-2">
  
            <div className="rounded-3xl border border-green-900 bg-[#071A12] p-4">
              <h3 className="mb-6 text-lg font-bold text-emerald-400">
                Education
              </h3>
  
              <div className="space-y-2 text-slate-300">
                <p>🎓 EASTC — Bachelor Degree of Data Science: 2023 - present</p>
                <p>🎓 Advanced Level - Mwenge Boys High School: 2021 - 2023 </p>
                <p>🎓 Secondary Education - Jana Secondary School: 2017 - 2020</p>
                <p>🎓 Primary Education - Jana Primary School: 2010 - 2016</p>
              </div>
            </div>
  
            <div className="space-y-6">
  
              <div className="rounded-3xl border border-green-900 bg-[#071A12] p-4">
                <h3 className="mb-4 text-xl font-bold text-emerald-400">
                  Certifications
                </h3>
  
                <ul className="space-y-2 text-slate-300">
                  <li>Python Programming</li>
                  <li>Data Science Fundamentals</li>
                </ul>
              </div>
  
              <div className="rounded-3xl border border-green-900 bg-[#071A12] p-4">
                <h3 className="mb-4 text-xl font-bold text-emerald-400">
                  Technical Skills
                </h3>
  
                <ul className="space-y-2 text-slate-300">
                  <li>Git & GitHub</li>
                  <li>Excel Analytics</li>
                  <li>Data Visualization</li>
                </ul>
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Qualifications;
