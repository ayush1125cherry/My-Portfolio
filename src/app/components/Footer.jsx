import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Heart } from "lucide-react";
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-cyan-500/20 py-8 px-4 sm:px-6 lg:px-8 backdrop-blur-sm bg-black/40", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          className: "text-gray-400 font-mono text-sm text-center md:text-left",
          children: /* @__PURE__ */ jsx("p", { children: "\xA9 2026 Ayush Rawat. All systems operational." })
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          className: "flex items-center gap-2 text-gray-400 font-mono text-sm",
          children: [
            /* @__PURE__ */ jsx("span", { children: "Powered by" }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: {
                  scale: [1, 1.2, 1]
                },
                transition: { duration: 1, repeat: Infinity },
                children: /* @__PURE__ */ jsx(Heart, { size: 16, className: "text-red-500 fill-red-500" })
              }
            ),
            /* @__PURE__ */ jsx("span", { children: "and" }),
            /* @__PURE__ */ jsx("span", { className: "text-cyan-400", children: "JARVIS.SYS" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          className: "flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "w-2 h-2 bg-green-400 rounded-full",
                animate: { opacity: [1, 0.3, 1] },
                transition: { duration: 2, repeat: Infinity }
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-green-400 font-mono text-sm", children: "ALL SYSTEMS ONLINE" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        className: "mt-6 pt-6 border-t border-cyan-500/10 text-center",
        children: /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 font-mono", children: "JARVIS.SYS v2.0.26 | React + Tailwind + Motion | Build: 20260403" })
      }
    )
  ] }) });
}
export {
  Footer
};
