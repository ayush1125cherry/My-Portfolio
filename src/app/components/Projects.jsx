import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { FolderGit2, ExternalLink, Github, FileCode } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "Intelligent task management system with ML-based priority suggestions and automated scheduling.",
    tech: ["React", "TensorFlow.js", "Node.js", "MongoDB"],
    status: "Completed",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Real-Time Collaboration Platform",
    description: "Multi-user collaboration tool with WebSocket integration, live editing, and version control.",
    tech: ["Next.js", "Socket.io", "PostgreSQL", "Redis"],
    status: "Deployed",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "E-Commerce Analytics Dashboard",
    description: "Comprehensive analytics dashboard with data visualization and predictive insights for e-commerce.",
    tech: ["React", "D3.js", "Python", "FastAPI"],
    status: "Completed",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Blockchain Voting System",
    description: "Secure decentralized voting platform using blockchain technology for transparent elections.",
    tech: ["Solidity", "Web3.js", "React", "Ethereum"],
    status: "In Progress",
    github: "#"
  },
  {
    id: 5,
    title: "Cloud Storage API",
    description: "RESTful API for cloud file storage with encryption, compression, and sharing capabilities.",
    tech: ["Node.js", "AWS S3", "Docker", "Redis"],
    status: "Deployed",
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "Neural Network Visualizer",
    description: "Interactive tool for visualizing and understanding neural network architectures and training.",
    tech: ["Python", "PyTorch", "Flask", "Three.js"],
    status: "Completed",
    link: "#",
    github: "#"
  }
];
const statusColors = {
  Completed: "text-green-400 border-green-500/30 bg-green-500/10",
  "In Progress": "text-yellow-400 border-yellow-500/30 bg-yellow-500/10",
  Deployed: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10"
};
function Projects() {
  return /* @__PURE__ */ jsx("section", { id: "projects", className: "min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "mb-16",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
            /* @__PURE__ */ jsx(FolderGit2, { className: "w-8 h-8 text-cyan-400" }),
            /* @__PURE__ */ jsx(
              "h2",
              {
                className: "text-4xl md:text-5xl font-bold text-cyan-400",
                style: { fontFamily: "Orbitron, sans-serif" },
                children: "PROJECTS.DIR"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-1 w-32 bg-gradient-to-r from-cyan-400 to-transparent" }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-400 font-mono text-sm mt-4", children: [
            "> ",
            "Accessing project repository..."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: projects.map((project, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: index * 0.1 },
        className: "group relative",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "h-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(FileCode, { className: "w-5 h-5 text-cyan-400" }),
                /* @__PURE__ */ jsxs("span", { className: "text-xs font-mono text-gray-500", children: [
                  "PROJECT_",
                  project.id.toString().padStart(3, "0")
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: `px-2 py-1 rounded text-xs font-mono border ${statusColors[project.status]}`, children: project.status })
            ] }),
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: "text-xl font-bold text-cyan-300 mb-3 group-hover:text-cyan-400 transition-colors",
                style: { fontFamily: "Orbitron, sans-serif" },
                children: project.title
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm mb-4 leading-relaxed", style: { fontFamily: "Exo, sans-serif" }, children: project.description }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: project.tech.map((tech) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-xs font-mono text-cyan-300",
                children: tech
              },
              tech
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-4 border-t border-cyan-500/20", children: [
              project.link && /* @__PURE__ */ jsxs(
                motion.a,
                {
                  href: project.link,
                  className: "flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors font-mono",
                  whileHover: { x: 5 },
                  children: [
                    /* @__PURE__ */ jsx(ExternalLink, { size: 14 }),
                    "Live Demo"
                  ]
                }
              ),
              project.github && /* @__PURE__ */ jsxs(
                motion.a,
                {
                  href: project.github,
                  className: "flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors font-mono",
                  whileHover: { x: 5 },
                  children: [
                    /* @__PURE__ */ jsx(Github, { size: 14 }),
                    "Code"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/0 to-blue-400/0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none",
                style: {
                  background: "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(0, 255, 255, 0.1), transparent)"
                }
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3 w-4 h-4 border-r border-t border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-3 left-3 w-4 h-4 border-l border-b border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors" })
          ] }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute inset-0 pointer-events-none",
              initial: { opacity: 0 },
              whileHover: { opacity: 1 },
              children: /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent",
                  animate: { y: ["-100%", "200%"] },
                  transition: { duration: 1.5, repeat: Infinity }
                }
              )
            }
          )
        ]
      },
      project.id
    )) }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6",
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: "text-lg font-bold text-cyan-400 mb-1",
                style: { fontFamily: "Orbitron, sans-serif" },
                children: "PROJECT REPORT"
              }
            ),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-400 font-mono", children: [
              "Total Projects: ",
              projects.length,
              " | Active Development: ",
              projects.filter((p) => p.status === "In Progress").length
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            motion.button,
            {
              className: "px-6 py-3 bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/30 transition-all font-mono text-sm",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              children: "View All Projects \u2192"
            }
          )
        ] })
      }
    )
  ] }) });
}
export {
  Projects
};
