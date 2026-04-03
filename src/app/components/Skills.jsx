import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Cpu, Database, Globe, Terminal } from "lucide-react";
const skills = [
  { name: "React / Next.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Python", level: 85, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "Git / GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "AWS / Cloud", level: 65, category: "tools" },
  { name: "System Design", level: 75, category: "other" },
  { name: "Data Structures", level: 85, category: "other" }
];
const categoryConfig = {
  frontend: { icon: Globe, color: "cyan", label: "FRONTEND" },
  backend: { icon: Database, color: "blue", label: "BACKEND" },
  tools: { icon: Terminal, color: "purple", label: "TOOLS" },
  other: { icon: Cpu, color: "green", label: "OTHER" }
};
function Skills() {
  const categories = ["frontend", "backend", "tools", "other"];
  return /* @__PURE__ */ jsx("section", { id: "skills", className: "min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "mb-16",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
            /* @__PURE__ */ jsx(Cpu, { className: "w-8 h-8 text-cyan-400" }),
            /* @__PURE__ */ jsx(
              "h2",
              {
                className: "text-4xl md:text-5xl font-bold text-cyan-400",
                style: { fontFamily: "Orbitron, sans-serif" },
                children: "SKILLS.HUD"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-1 w-32 bg-gradient-to-r from-cyan-400 to-transparent" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: categories.map((category, categoryIndex) => {
      const config = categoryConfig[category];
      const Icon = config.icon;
      const categorySkills = skills.filter((s) => s.category === category);
      return /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: categoryIndex * 0.1 },
          className: "bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-cyan-400" }) }),
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: "text-xl font-bold text-cyan-300",
                  style: { fontFamily: "Orbitron, sans-serif" },
                  children: config.label
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-5", children: categorySkills.map((skill, skillIndex) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-300 font-mono text-sm", children: skill.name }),
                /* @__PURE__ */ jsxs("span", { className: "text-cyan-400 font-mono text-sm font-bold", children: [
                  skill.level,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative h-2 bg-gray-800/50 rounded-full overflow-hidden border border-cyan-500/20", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "absolute inset-0 opacity-20",
                    style: {
                      backgroundImage: "linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)",
                      backgroundSize: "10px 100%"
                    }
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300 rounded-full",
                    initial: { width: "0%" },
                    whileInView: { width: `${skill.level}%` },
                    viewport: { once: true },
                    transition: { duration: 1, delay: skillIndex * 0.1 + categoryIndex * 0.2 }
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "absolute inset-y-0 left-0 bg-gradient-to-r from-transparent to-cyan-400/50 rounded-full blur-sm",
                    initial: { width: "0%" },
                    whileInView: { width: `${skill.level}%` },
                    viewport: { once: true },
                    transition: { duration: 1, delay: skillIndex * 0.1 + categoryIndex * 0.2 }
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "absolute inset-y-0 w-1 bg-white/80 shadow-lg shadow-cyan-400/50",
                    initial: { left: "0%" },
                    animate: { left: ["0%", "100%", "0%"] },
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: skillIndex * 0.2
                    },
                    style: { display: "none" }
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "flex items-center gap-1 mt-1",
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: true },
                  transition: { delay: skillIndex * 0.1 + categoryIndex * 0.2 + 0.5 },
                  children: [...Array(Math.floor(skill.level / 20))].map((_, i) => /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "w-1 h-1 bg-cyan-400 rounded-full",
                      animate: {
                        opacity: [1, 0.3, 1]
                      },
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }
                    },
                    i
                  ))
                }
              )
            ] }, skill.name)) }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 pt-4 border-t border-cyan-500/20", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs font-mono", children: [
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "SYSTEM STATUS" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "w-2 h-2 bg-green-400 rounded-full",
                    animate: { opacity: [1, 0.3, 1] },
                    transition: { duration: 2, repeat: Infinity }
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "OPERATIONAL" })
              ] })
            ] }) })
          ]
        },
        category
      );
    }) }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6",
        children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 text-center", children: [
          { label: "AVG PROFICIENCY", value: "82%" },
          { label: "SKILLS ACTIVE", value: skills.length },
          { label: "CATEGORIES", value: categories.length },
          { label: "STATUS", value: "OPTIMAL" }
        ].map((stat, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.8 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "text-2xl md:text-3xl font-bold text-cyan-400 mb-1",
                  style: { fontFamily: "Orbitron, sans-serif" },
                  children: stat.value
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400 font-mono", children: stat.label })
            ]
          },
          stat.label
        )) })
      }
    )
  ] }) });
}
export {
  Skills
};
