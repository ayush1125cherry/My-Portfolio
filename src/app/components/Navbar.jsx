import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X, Shield } from "lucide-react";
import { ResumeButton } from "./ResumeButton";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];
  return /* @__PURE__ */ jsxs(
    motion.nav,
    {
      initial: { y: -100 },
      animate: { y: 0 },
      className: "fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-cyan-500/20",
      style: { fontFamily: "Orbitron, sans-serif" },
      children: [
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "flex items-center gap-3",
              whileHover: { scale: 1.05 },
              children: [
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 text-cyan-400" }),
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "absolute inset-0",
                      animate: {
                        boxShadow: [
                          "0 0 10px rgba(0, 255, 255, 0.5)",
                          "0 0 20px rgba(0, 255, 255, 0.8)",
                          "0 0 10px rgba(0, 255, 255, 0.5)"
                        ]
                      },
                      transition: { duration: 2, repeat: Infinity }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-cyan-400", children: "JARVIS.SYS" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-6", children: [
            navItems.map((item) => /* @__PURE__ */ jsxs(
              "a",
              {
                href: item.href,
                className: "text-cyan-300 hover:text-cyan-400 transition-colors relative group text-sm",
                children: [
                  item.name,
                  /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" })
                ]
              },
              item.name
            )),
            /* @__PURE__ */ jsx(ResumeButton, { variant: "navbar" })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsOpen(!isOpen),
              className: "md:hidden text-cyan-400 hover:text-cyan-300 transition-colors",
              children: isOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
            }
          )
        ] }) }),
        isOpen && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            className: "md:hidden bg-black/90 border-t border-cyan-500/20",
            children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-4 space-y-3", children: [
              navItems.map((item) => /* @__PURE__ */ jsx(
                "a",
                {
                  href: item.href,
                  className: "block text-cyan-300 hover:text-cyan-400 transition-colors py-2",
                  onClick: () => setIsOpen(false),
                  children: item.name
                },
                item.name
              )),
              /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsx(ResumeButton, { variant: "mobile" }) })
            ] })
          }
        )
      ]
    }
  );
}
export {
  Navbar
};
