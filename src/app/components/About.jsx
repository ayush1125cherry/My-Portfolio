import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { User, Scan, FileText } from "lucide-react";
import { ResumeButton } from "./ResumeButton";
function About() {
  return  jsx("section", { id: "about", className: "min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative", children:  jsxs("div", { className: "max-w-6xl mx-auto", children: [
     jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "mb-16",
        children: [
           jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
             jsx(User, { className: "w-8 h-8 text-cyan-400" }),
             jsx(
              "h2",
              {
                className: "text-4xl md:text-5xl font-bold text-cyan-400",
                style: { fontFamily: "Orbitron, sans-serif" },
                children: "ABOUT.MODULE"
              }
            )
          ] }),
           jsx("div", { className: "h-1 w-32 bg-gradient-to-r from-cyan-400 to-transparent" })
        ]
      }
    ),
     jsxs("div", { className: "grid md:grid-cols-2 gap-8 lg:gap-12", children: [
       jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          className: "relative",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative aspect-square max-w-md mx-auto", children: [
              /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl border border-cyan-500/30 overflow-hidden", children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-full",
                    animate: { y: ["0%", "100%", "0%"] },
                    transition: { duration: 3, repeat: Infinity, ease: "linear" }
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border-2 border-cyan-400/50 flex items-center justify-center",
                    animate: {
                      boxShadow: [
                        "0 0 20px rgba(0, 255, 255, 0.3)",
                        "0 0 40px rgba(0, 255, 255, 0.6)",
                        "0 0 20px rgba(0, 255, 255, 0.3)"
                      ]
                    },
                    transition: { duration: 2, repeat: Infinity },
                    children: /* @__PURE__ */ jsx(Scan, { className: "w-24 h-24 text-cyan-400" })
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400" }),
                /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400" }),
                /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400" }),
                /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400" }),
                /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-6 right-6 space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs font-mono text-cyan-400", children: [
                    /* @__PURE__ */ jsx("span", { children: "IDENTITY SCAN" }),
                    /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "COMPLETE" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "h-1 bg-cyan-900/50 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "h-full bg-gradient-to-r from-cyan-400 to-green-400",
                      initial: { width: "0%" },
                      whileInView: { width: "100%" },
                      viewport: { once: true },
                      transition: { duration: 2, delay: 0.5 }
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute inset-0 border-2 border-cyan-500/20 rounded-full",
                  animate: { rotate: 360 },
                  transition: { duration: 10, repeat: Infinity, ease: "linear" },
                  style: { transformOrigin: "center" }
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.8 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { delay: 0.5 },
                className: "mt-6 flex justify-center",
                children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 bg-yellow-600/10 border border-yellow-500/30 rounded-full backdrop-blur-sm", children: [
                  /* @__PURE__ */ jsx(FileText, { size: 16, className: "text-yellow-400" }),
                  /* @__PURE__ */ jsx("span", { className: "text-yellow-400 text-sm font-mono", children: "Resume Access Available" })
                ] })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          className: "flex flex-col justify-center",
          children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6", children: [
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: "text-2xl font-bold text-cyan-300 mb-4",
                  style: { fontFamily: "Orbitron, sans-serif" },
                  children: "SYSTEM OVERVIEW"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-gray-300", style: { fontFamily: "Exo, sans-serif" }, children: [
                /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: "Computer Science Engineering student with a passion for building innovative software solutions. Specialized in full-stack development, artificial intelligence, and system architecture." }),
                /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: "Experienced in developing scalable applications using modern technologies and frameworks. Committed to writing clean, efficient code and creating exceptional user experiences." }),
                /* @__PURE__ */ jsx("p", { className: "leading-relaxed", children: "Always eager to learn new technologies and tackle complex challenges in software development." })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: [
              { label: "Projects", value: "25+" },
              { label: "Technologies", value: "15+" },
              { label: "Experience", value: "2+ Yrs" },
              { label: "Certifications", value: "10+" }
            ].map((stat, index) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.8 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { delay: index * 0.1 },
                className: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 text-center group hover:border-cyan-400/50 transition-all",
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "text-3xl font-bold text-cyan-400 mb-1",
                      style: { fontFamily: "Orbitron, sans-serif" },
                      children: stat.value
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400 font-mono", children: stat.label })
                ]
              },
              stat.label
            )) }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: 0.4 },
                className: "pt-4",
                children: /* @__PURE__ */ jsx(ResumeButton, { variant: "hero" })
              }
            )
          ] })
        }
      )
    ] })
  ] }) });
}
export {
  About
};
