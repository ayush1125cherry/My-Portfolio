import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ParticleBackground } from "./components/ParticleBackground";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    document.documentElement.classList.add("dark");
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-black text-white overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(AnimatePresence, { children: isLoading && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black",
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-md w-full px-6", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { scale: 0.8, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              className: "text-center mb-8",
              children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4",
                    style: { fontFamily: "Orbitron, sans-serif" },
                    animate: {
                      textShadow: [
                        "0 0 20px rgba(0, 255, 255, 0.5)",
                        "0 0 40px rgba(0, 255, 255, 0.8)",
                        "0 0 20px rgba(0, 255, 255, 0.5)"
                      ]
                    },
                    transition: { duration: 2, repeat: Infinity },
                    children: "JARVIS"
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-cyan-400 font-mono text-sm", children: "Personal AI System Interface" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 mb-8 font-mono text-xs", children: [
            /* @__PURE__ */ jsxs(
              motion.p,
              {
                initial: { opacity: 0 },
                animate: { opacity: progress > 20 ? 1 : 0 },
                className: "text-green-400",
                children: [
                  "> ",
                  "Initializing core systems..."
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.p,
              {
                initial: { opacity: 0 },
                animate: { opacity: progress > 40 ? 1 : 0 },
                className: "text-cyan-400",
                children: [
                  "> ",
                  "Loading user interface modules..."
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.p,
              {
                initial: { opacity: 0 },
                animate: { opacity: progress > 60 ? 1 : 0 },
                className: "text-blue-400",
                children: [
                  "> ",
                  "Establishing secure connections..."
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.p,
              {
                initial: { opacity: 0 },
                animate: { opacity: progress > 80 ? 1 : 0 },
                className: "text-cyan-400",
                children: [
                  "> ",
                  "Boot sequence complete."
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative h-2 bg-gray-900 rounded-full overflow-hidden border border-cyan-500/30", children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full",
                initial: { width: "0%" },
                animate: { width: `${progress}%` },
                transition: { duration: 0.3 }
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute inset-y-0 left-0 bg-gradient-to-r from-transparent to-white/50 rounded-full blur-sm",
                initial: { width: "0%" },
                animate: { width: `${progress}%` },
                transition: { duration: 0.3 }
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            motion.p,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              className: "text-cyan-400 font-mono text-sm text-center mt-4",
              children: [
                progress,
                "%"
              ]
            }
          )
        ] })
      }
    ) }),
    !isLoading && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsx(ParticleBackground, {}),
          /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 -z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse", style: { animationDelay: "1s" } }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute inset-0 opacity-5",
                style: {
                  backgroundImage: "linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)",
                  backgroundSize: "100% 4px"
                },
                animate: { backgroundPositionY: ["0px", "4px"] },
                transition: { duration: 0.1, repeat: Infinity, ease: "linear" }
              }
            )
          ] }),
          /* @__PURE__ */ jsx(Navbar, {}),
          /* @__PURE__ */ jsx(Hero, {}),
          /* @__PURE__ */ jsx(About, {}),
          /* @__PURE__ */ jsx(Skills, {}),
          /* @__PURE__ */ jsx(Projects, {}),
          /* @__PURE__ */ jsx(Experience, {}),
          /* @__PURE__ */ jsx(Contact, {}),
          /* @__PURE__ */ jsx(Footer, {}),
          /* @__PURE__ */ jsx(
            motion.button,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              whileHover: { scale: 1.1 },
              whileTap: { scale: 0.9 },
              onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
              className: "fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full shadow-lg z-40",
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 10l7-7m0 0l7 7m-7-7v18" })
                }
              )
            }
          )
        ]
      }
    )
  ] });
}
export {
  App as default
};
