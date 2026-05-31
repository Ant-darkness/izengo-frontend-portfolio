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
        className="py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
  
          <div className="mb-12 text-center">
          <p className="mt-1 text-xs text-slate-400">
              Contact
            </p>
  
            <h2 className="text-2xl font-black sm:text-3xl lg:text-4xl">
              Get In Touch
            </h2>
          </div>
  
        <div
            className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            gap-3
            "
            >
  
            <a
              href={contact.whatsapp}
              target="_blank"
              className="
              rounded-2xl
              border
              border-green-900
              bg-[#0A2418]
              p-3
              text-center
              transition
              hover:border-emerald-500
              hover:-translate-y-1
              "
            >
              <FaWhatsapp className="mx-auto text-xl text-emerald-400" />
              <h3 className="mt-2 text-sm font-semibold">
                WhatsApp
              </h3>
            </a>
  
            <a
              href={`mailto:${contact.email}`}
              className="
              rounded-2xl
              border
              border-green-900
              bg-[#0A2418]
              p-3
              text-center
              transition
              hover:border-emerald-500
              hover:-translate-y-1
              "
            >
              <FaEnvelope className="mx-auto text-xl text-emerald-400" />
              <h3 className="mt-2 text-sm font-semibold">
                Email
              </h3>
            </a>
  
            <a
              href={`tel:${contact.phone}`}
              className="
              rounded-2xl
              border
              border-green-900
              bg-[#0A2418]
              p-3
              text-center
              transition
              hover:border-emerald-500
              hover:-translate-y-1
              "
            >
              <FaPhone className="mx-auto text-xl text-emerald-400" />
              <h3 className="mt-2 text-sm font-semibold">
                Phone
              </h3>
            </a>
  
            <a
              href={contact.linkedin}
              target="_blank"
              className="
              rounded-2xl
              border
              border-green-900
              bg-[#0A2418]
              p-3
              text-center
              transition
              hover:border-emerald-500
              hover:-translate-y-1
              "
            >
              <FaLinkedin className="mx-auto text-xl text-emerald-400" />
              <h3 className="mt-4 text-lg font-bold">
                LinkedIn
              </h3>
            </a>
  
            <a
              href={contact.github}
              target="_blank"
              className="
              rounded-2xl
              border
              border-green-900
              bg-[#0A2418]
              p-3
              text-center
              transition
              hover:border-emerald-500
              hover:-translate-y-1
              "
            >
              <FaGithub className="mx-auto text-xl text-emerald-400" />
              <h3 className="mt-4 text-lg font-bold">
                GitHub
              </h3>
            </a>
  
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;
