import React, { useEffect, useState } from "react";
import AIChatAssistant from "./components/AIChatAssistant";
import Navbar from "./components/Navbar";
import { MotionConfig } from "framer-motion";
import Hero from "./components/Hero";
import Reveal from "./components/motion/Reveal";
import SelectedWorks from "./components/selected-works/SelectedWorks";
import { PORTFOLIO_DATA } from "./constants";
import "./index.css";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main id="main-content">
          <Hero />
          <SelectedWorks />

          {/* About Section */}
          <section id="about" className="py-20 px-6">
            <Reveal className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <div className="aspect-square rounded-2xl overflow-hidden mb-8 border border-zinc-100 dark:border-zinc-800">
                  <img
                    loading="lazy"
                    src={PORTFOLIO_DATA.profileImage}
                    alt={PORTFOLIO_DATA.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {PORTFOLIO_DATA.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">
                  About Me
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 break-words">
                  Designing for people, one pixel at a time.
                </h2>
                <div className="space-y-6 text-lg text-secondary leading-relaxed">
                  <p>{PORTFOLIO_DATA.longBio}</p>
                  <p>
                    Beyond design, I'm passionate about exploring emerging
                    technologies like AI, contributing to open-source UI libraries,
                    and mentoring junior designers on accessibility and usability in
                    fintech products.
                  </p>
                </div>

                <div className="mt-10 pt-10 border-t border-zinc-100 dark:border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-sm font-bold uppercase mb-2">Location</h4>
                    <p className="text-secondary">Lagos, Nigeria (Remote)</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase mb-2">Experience</h4>
                    <p className="text-secondary">4+ Years</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase mb-2">Languages</h4>
                    <p className="text-secondary">English</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="py-20 px-6 bg-primary text-white dark:bg-white dark:text-primary"
          >
            <Reveal className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                Ready to build something amazing?
              </h2>
              <p className="text-xl text-zinc-400 dark:text-zinc-500 mb-12 max-w-xl mx-auto">
                I'm currently available for freelance, contract projects and full-time
                opportunities.
              </p>
              <a
                href={`mailto:${PORTFOLIO_DATA.email}`}
                className="text-2xl md:text-4xl font-medium underline underline-offset-8 hover:text-zinc-300 dark:hover:text-zinc-600 transition-colors break-words"
              >
                {PORTFOLIO_DATA.email}
              </a>

              <div className="flex justify-center space-x-8 mt-16">
                <a
                  href={PORTFOLIO_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  LinkedIn
                </a>
                <a
                  href={PORTFOLIO_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  GitHub
                </a>
              </div>
            </Reveal>
          </section>

        </main>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-zinc-100 dark:border-zinc-900">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-secondary">
            <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Built with Vite (React TypeScript).</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <a href="#" className="hover:text-primary dark:hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary dark:hover:text-white">
                Accessibility
              </a>
            </div>
          </div>
        </footer>

        {/* AI Assistant */}
        <AIChatAssistant />
      </div>
    </MotionConfig>
  );
};

export default App;
