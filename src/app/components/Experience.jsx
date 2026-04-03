import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Tech Innovations Inc.",
    location: "Remote",
    period: "Jan 2025 - Present",
    description: [
      "Developed and maintained full-stack web applications serving 10K+ users",
      "Implemented RESTful APIs and microservices architecture",
      "Optimized database queries reducing response time by 40%"
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Docker"],
    type: "work"
  },
  {
    id: 2,
    role: "Software Engineering Intern",
    company: "StartupX Labs",
    location: "Bangalore, India",
    period: "Jun 2024 - Dec 2024",
    description: [
      "Built responsive web interfaces using React and TypeScript",
      "Collaborated with cross-functional teams in Agile environment",
      "Contributed to open-source projects and internal tools"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Git"],
    type: "internship"
  },
  {
    id: 3,
    role: "Backend Developer Intern",
    company: "CloudTech Solutions",
    location: "Mumbai, India",
    period: "Jan 2024 - May 2024",
    description: [
      "Designed and implemented scalable backend services",
      "Worked with cloud infrastructure and deployment pipelines",
      "Automated testing and CI/CD workflows"
    ],
    tech: ["Python", "FastAPI", "AWS", "MongoDB"],
    type: "internship"
  },
  {
    id: 4,
    role: "Research Assistant",
    company: "University AI Lab",
    location: "On Campus",
    period: "Aug 2023 - Dec 2023",
    description: [
      "Conducted research in machine learning and computer vision",
      "Developed ML models for image classification tasks",
      "Published findings in university research symposium"
    ],
    tech: ["Python", "TensorFlow", "PyTorch", "OpenCV"],
    type: "project"
  }
];
const typeColors = {
  work: "from-green-500/20 to-green-600/20 border-green-500/30",
  internship: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30",
  project: "from-purple-500/20 to-purple-600/20 border-purple-500/30"
};
const typeLabels = {
  work: "FULL-TIME",
  internship: "INTERNSHIP",
  project: "RESEARCH"
};
function Experience() {
  return /* @__PURE__ */ jsx("section", { id: "experience", className: "min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "mb-16",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "w-8 h-8 text-cyan-400" }),
            /* @__PURE__ */ jsx(
              "h2",
              {
                className: "text-4xl md:text-5xl font-bold text-cyan-400",
                style: { fontFamily: "Orbitron, sans-serif" },
                children: "EXPERIENCE.LOG"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-1 w-32 bg-gradient-to-r from-cyan-400 to-transparent" }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-400 font-mono text-sm mt-4", children: [
            "> ",
            "Loading system logs..."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-cyan-500/30 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-8", children: experiences.map((exp, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          className: "relative pl-8 md:pl-20",
          children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "absolute left-0 md:left-8 top-6 w-4 h-4 -translate-x-1/2",
                initial: { scale: 0 },
                whileInView: { scale: 1 },
                viewport: { once: true },
                transition: { delay: index * 0.1 + 0.2 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-cyan-400 rounded-full" }),
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "absolute inset-0 bg-cyan-400 rounded-full",
                      animate: {
                        scale: [1, 1.5, 1],
                        opacity: [1, 0, 1]
                      },
                      transition: { duration: 2, repeat: Infinity }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: `bg-gradient-to-br ${typeColors[exp.type]} backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400/50 transition-all group`, children: [
              /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4", children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-xs font-mono text-cyan-400", children: typeLabels[exp.type] }),
                  /* @__PURE__ */ jsxs("span", { className: "text-xs font-mono text-gray-500", children: [
                    "LOG_",
                    exp.id.toString().padStart(3, "0")
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: "text-2xl font-bold text-cyan-300 mb-1",
                    style: { fontFamily: "Orbitron, sans-serif" },
                    children: exp.role
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-300", style: { fontFamily: "Exo, sans-serif" }, children: exp.company })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 mb-4 text-sm text-gray-400 font-mono", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Calendar, { size: 14, className: "text-cyan-400" }),
                  /* @__PURE__ */ jsx("span", { children: exp.period })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(MapPin, { size: 14, className: "text-cyan-400" }),
                  /* @__PURE__ */ jsx("span", { children: exp.location })
                ] })
              ] }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2 mb-4 text-gray-300", style: { fontFamily: "Exo, sans-serif" }, children: exp.description.map((item, i) => /* @__PURE__ */ jsxs(
                motion.li,
                {
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { delay: index * 0.1 + i * 0.05 },
                  className: "flex items-start gap-2 text-sm",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-cyan-400 mt-1", children: "\u25B9" }),
                    /* @__PURE__ */ jsx("span", { children: item })
                  ]
                },
                i
              )) }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 pt-4 border-t border-cyan-500/20", children: exp.tech.map((tech) => /* @__PURE__ */ jsx(
                "span",
                {
                  className: "px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-xs font-mono text-cyan-300",
                  children: tech
                },
                tech
              )) }),
              /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3 w-4 h-4 border-r border-t border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors" }),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-3 left-3 w-4 h-4 border-l border-b border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors" })
            ] })
          ]
        },
        exp.id
      )) })
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "mt-12 ml-8 md:ml-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6",
        children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-mono", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "w-2 h-2 bg-green-400 rounded-full",
              animate: { opacity: [1, 0.3, 1] },
              transition: { duration: 2, repeat: Infinity }
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "LOGS LOADED" }),
          /* @__PURE__ */ jsxs("span", { className: "text-cyan-400", children: [
            "| ",
            experiences.length,
            " ENTRIES"
          ] })
        ] }) })
      }
    )
  ] }) });
}
export {
  Experience
};
