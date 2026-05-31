const BASE_URL = import.meta.env.VITE_API_URL;

export const API = {
  profile: `${BASE_URL}/api/profile`,
  about: `${BASE_URL}/api/about`,
  skills: `${BASE_URL}/api/skills`,
  projects: `${BASE_URL}/api/projects`,
  qualifications: `${BASE_URL}/api/qualifications`,
  contact: `${BASE_URL}/api/contact`,
  resume: `${BASE_URL}/api/resume`,
  resumeDownload: `${BASE_URL}/api/resume/download`,
};
