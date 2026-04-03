import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Terminal, Code, Zap } from "lucide-react";
import { ResumeButton } from "./ResumeButton";
function Hero() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "home",
      className: "min-h-screen flex items-center justify-center relative overflow-hidden pt-16",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px"
            }
          }
        ) }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute top-20 right-10 w-32 h-32 border-2 border-cyan-500/30 rounded-full",
            animate: { rotate: 360 },
            transition: { duration: 20, repeat: Infinity, ease: "linear" },
            children: /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2" })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute bottom-20 left-10 w-24 h-24 border-2 border-red-500/30 rounded-full",
            animate: { rotate: -360 },
            transition: { duration: 15, repeat: Infinity, ease: "linear" }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              className: "mb-6",
              children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm", children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "w-2 h-2 bg-cyan-400 rounded-full",
                    animate: { opacity: [1, 0.3, 1] },
                    transition: { duration: 2, repeat: Infinity }
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-cyan-400 text-sm font-mono", children: "SYSTEM ONLINE" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: 0.2 },
              className: "mb-4",
              children: [
                /* @__PURE__ */ jsx(
                  "h1",
                  {
                    className: "text-5xl sm:text-7xl md:text-8xl font-bold mb-4",
                    style: { fontFamily: "Orbitron, sans-serif" },
                    children: /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400", children: "AYUSH RAWAT" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent",
                    animate: { opacity: [0.3, 1, 0.3] },
                    transition: { duration: 2, repeat: Infinity }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.4 },
              className: "mb-8",
              children: [
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "text-xl sm:text-2xl md:text-3xl text-cyan-300 mb-2",
                    style: { fontFamily: "Exo, sans-serif" },
                    children: "Computer Science Engineer"
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-gray-400", style: { fontFamily: "Exo, sans-serif" }, children: "Software Developer | Full Stack Engineer" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.6 },
              className: "mb-12 max-w-2xl mx-auto",
              children: /* @__PURE__ */ jsxs("p", { className: "text-gray-400 font-mono text-sm sm:text-base", children: [
                "> ",
                "Building intelligent systems and innovative solutions",
                " ",
                /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    animate: { opacity: [1, 0] },
                    transition: { duration: 0.8, repeat: Infinity },
                    children: "_"
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.8 },
              className: "flex flex-col sm:flex-row items-center justify-center gap-6",
              children: [
                /* @__PURE__ */ jsx(ResumeButton, { variant: "hero" }),
                /* @__PURE__ */ jsxs(
                  motion.button,
                  {
                    onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
                    className: "relative px-8 py-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 text-cyan-400 font-bold rounded-lg border border-cyan-500/50 backdrop-blur-sm group overflow-hidden",
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    style: { fontFamily: "Orbitron, sans-serif" },
                    children: [
                      /* @__PURE__ */ jsxs("span", { className: "relative z-10 flex items-center gap-3 text-lg", children: [
                        /* @__PURE__ */ jsx(Terminal, { size: 24 }),
                        "Activate System"
                      ] }),
                      /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          className: "absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20",
                          initial: { x: "-100%" },
                          whileHover: { x: "100%" },
                          transition: { duration: 0.5 }
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.button,
                  {
                    onClick: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
                    className: "relative px-8 py-4 border-2 border-red-500/50 text-red-400 font-bold rounded-lg backdrop-blur-sm group overflow-hidden",
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    style: { fontFamily: "Orbitron, sans-serif" },
                    children: [
                      /* @__PURE__ */ jsxs("span", { className: "relative z-10 flex items-center gap-3 text-lg", children: [
                        /* @__PURE__ */ jsx(Code, { size: 24 }),
                        "View Projects"
                      ] }),
                      /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          className: "absolute inset-0 bg-red-500/10",
                          initial: { opacity: 0 },
                          whileHover: { opacity: 1 },
                          transition: { duration: 0.3 }
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 1 },
              className: "mt-16 inline-block",
              children: /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-yellow-600/10 to-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm font-mono", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Zap, { size: 16, className: "text-yellow-400" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "File:" }),
                  /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: "Ayush_Rawat_Resume.pdf" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "w-px h-4 bg-gray-600" }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Status:" }),
                  /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "\u2713 Verified" })
                ] })
              ] }) })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-500/30" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-cyan-500/30" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-cyan-500/30" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cyan-500/30" })
      ]
    }
  );
}
export {
  Hero
};
