import {
    FaWhatsapp,
    FaEnvelope,
    FaPhone,
    FaLinkedin,
    FaGithub,
  } from "react-icons/fa";
  
  function Contact({ contact }) {
    return (
      <section
        id="contact"
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Header */}
          <div className="mb-14 text-center">
            <p className="mb-3 font-semibold uppercase tracking-widest text-emerald-400">
              Get In Touch
            </p>
  
            <h2 className="text-4xl font-black md:text-5xl">
              Contact Me
            </h2>
  
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              Feel free to reach out for collaboration, projects, or opportunities.
            </p>
          </div>
  
          {/* Cards */}
          <div
            className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            "
          >
  
            {/* WhatsApp */}
            <a
              href={contact.whatsapp}
              target="_blank"
              className="group rounded-3xl border border-green-800 bg-[#0A2418] p-6 transition hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]"
            >
              <FaWhatsapp className="text-3xl text-emerald-400" />
              <h3 className="mt-4 text-xl font-bold">WhatsApp</h3>
              <p className="mt-2 text-slate-300">Chat instantly</p>
            </a>
  
            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="group rounded-3xl border border-green-800 bg-[#0A2418] p-6 transition hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]"
            >
              <FaEnvelope className="text-3xl text-emerald-400" />
              <h3 className="mt-4 text-xl font-bold">Email</h3>
              <p className="mt-2 text-slate-300">{contact.email}</p>
            </a>
  
            {/* Phone */}
            <a
              href={`tel:${contact.phone}`}
              className="group rounded-3xl border border-green-800 bg-[#0A2418] p-6 transition hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]"
            >
              <FaPhone className="text-3xl text-emerald-400" />
              <h3 className="mt-4 text-xl font-bold">Phone</h3>
              <p className="mt-2 text-slate-300">{contact.phone}</p>
            </a>
  
            {/* LinkedIn */}
            <a
              href={contact.linkedin}
              target="_blank"
              className="group rounded-3xl border border-green-800 bg-[#0A2418] p-6 transition hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]"
            >
              <FaLinkedin className="text-3xl text-emerald-400" />
              <h3 className="mt-4 text-xl font-bold">LinkedIn</h3>
              <p className="mt-2 text-slate-300">Professional Profile</p>
            </a>
  
            {/* GitHub */}
            <a
              href={contact.github}
              target="_blank"
              className="group rounded-3xl border border-green-800 bg-[#0A2418] p-6 transition hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]"
            >
              <FaGithub className="text-3xl text-emerald-400" />
              <h3 className="mt-4 text-xl font-bold">GitHub</h3>
              <p className="mt-2 text-slate-300">View Projects</p>
            </a>
  
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;
