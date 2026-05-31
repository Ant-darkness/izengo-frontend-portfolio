import { useEffect, useState } from "react";

import { API } from "./api/api";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Qualifications from "./components/Qualifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [profile, setProfile] = useState({});
  const [about, setAbout] = useState({});
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [qualifications, setQualifications] = useState({});
  const [contact, setContact] = useState({});

  useEffect(() => {
    Promise.all([
      fetch(API.profile).then((res) => res.json()),
      fetch(API.about).then((res) => res.json()),
      fetch(API.skills).then((res) => res.json()),
      fetch(API.projects).then((res) => res.json()),
      fetch(API.qualifications).then((res) => res.json()),
      fetch(API.contact).then((res) => res.json()),
    ])
      .then(
        ([
          profileData,
          aboutData,
          skillsData,
          projectsData,
          qualificationsData,
          contactData,
        ]) => {
          setProfile(profileData);
          setAbout(aboutData);
          setSkills(skillsData);
          setProjects(projectsData);
          setQualifications(qualificationsData);
          setContact(contactData);
        }
      )
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#071A12] text-white overflow-x-hidden">
      <Navbar />

      <Hero profile={profile} />

      <About about={about} />

      <Skills skills={skills} />

      <Projects projects={projects} />

      <Qualifications qualifications={qualifications} />

      <Contact contact={contact} />

      <Footer />
    </div>
  );
}

export default App;
