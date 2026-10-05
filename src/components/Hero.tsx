import { motion, useReducedMotion } from "framer-motion";
import { PORTFOLIO_DATA } from "../constants";
import { revealTransition } from "./motion/Reveal";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const titleLines = PORTFOLIO_DATA.title.split(" & ");
  const lines = [`I'm ${PORTFOLIO_DATA.name.split(" ")[0]}`, ...titleLines.map((line, index) => `${line}${index < titleLines.length - 1 ? " &" : ""}`)];

  return (
    <section className="pt-40 pb-20 px-6" aria-labelledby="hero-heading">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h1 id="hero-heading" className="hero-heading text-4xl md:text-7xl font-bold tracking-tight mb-6 break-words">
          {lines.map((line, index) => (
            <span key={line} className={`hero-mask${index > 0 ? " text-secondary" : ""}`}>
              <motion.span
                initial={reduceMotion ? false : { y: "105%" }}
                animate={{ y: 0 }}
                transition={{ ...revealTransition, duration: 0.7, delay: index * 0.08 }}
              >{line}</motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...revealTransition, delay: 0.22 }}
          className="text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed mb-10 break-words"
        >{PORTFOLIO_DATA.shortIntro}</motion.p>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...revealTransition, delay: 0.3 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start"
        >
          <a href="#projects" className="hero-button px-8 py-4 bg-primary dark:bg-white text-white dark:text-primary rounded-full font-semibold">View Projects</a>
          <a href="#contact" className="hero-button px-8 py-4 border border-zinc-200 dark:border-zinc-800 rounded-full font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900">Get in Touch</a>
        </motion.div>
      </div>
    </section>
  );
}
