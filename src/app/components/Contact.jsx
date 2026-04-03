import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Linkedin, Github, Twitter, Send, FileText } from "lucide-react";
import { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3e3);
    }, 2e3);
  };
  const contactInfo = [
    { icon: Mail, label: "Email", value: "ayush.rawat@example.com", link: "mailto:ayush.rawat@example.com" },
    { icon: Phone, label: "Phone", value: "+91 98765 43210", link: "tel:+919876543210" },
    { icon: MapPin, label: "Location", value: "India", link: null }
  ];
  const socialLinks = [
    { icon: Github, label: "GitHub", link: "https://github.com", color: "hover:text-gray-300" },
    { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com", color: "hover:text-blue-400" },
    { icon: Twitter, label: "Twitter", link: "https://twitter.com", color: "hover:text-cyan-400" }
  ];
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "mb-16",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
            /* @__PURE__ */ jsx(Mail, { className: "w-8 h-8 text-cyan-400" }),
            /* @__PURE__ */ jsx(
              "h2",
              {
                className: "text-4xl md:text-5xl font-bold text-cyan-400",
                style: { fontFamily: "Orbitron, sans-serif" },
                children: "CONTACT.SYS"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-1 w-32 bg-gradient-to-r from-cyan-400 to-transparent" }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-400 font-mono text-sm mt-4", children: [
            "> ",
            "Initializing communication channel..."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 lg:gap-12", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          className: "space-y-6",
          children: [
            /* @__PURE__ */ jsx("div", { className: "space-y-4", children: contactInfo.map((info, index) => {
              const Icon = info.icon;
              return /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { delay: index * 0.1 },
                  className: "bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-400/40 transition-all group",
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg group-hover:border-cyan-400/50 transition-all", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-cyan-400" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 font-mono mb-1", children: info.label }),
                      info.link ? /* @__PURE__ */ jsx(
                        "a",
                        {
                          href: info.link,
                          className: "text-gray-300 hover:text-cyan-400 transition-colors font-mono",
                          children: info.value
                        }
                      ) : /* @__PURE__ */ jsx("p", { className: "text-gray-300 font-mono", children: info.value })
                    ] })
                  ] })
                },
                info.label
              );
            }) }),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6",
                children: [
                  /* @__PURE__ */ jsx(
                    "h3",
                    {
                      className: "text-xl font-bold text-cyan-300 mb-4",
                      style: { fontFamily: "Orbitron, sans-serif" },
                      children: "CONNECT"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return /* @__PURE__ */ jsx(
                      motion.a,
                      {
                        href: social.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        initial: { opacity: 0, scale: 0.8 },
                        whileInView: { opacity: 1, scale: 1 },
                        viewport: { once: true },
                        transition: { delay: index * 0.1 },
                        whileHover: { scale: 1.1, rotate: 5 },
                        whileTap: { scale: 0.95 },
                        className: `p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-gray-400 ${social.color} transition-all`,
                        children: /* @__PURE__ */ jsx(Icon, { size: 24 })
                      },
                      social.label
                    );
                  }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                className: "bg-gradient-to-br from-yellow-600/10 to-yellow-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6",
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5 text-yellow-400 mt-0.5" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(
                      "h3",
                      {
                        className: "text-sm font-bold text-yellow-400 mb-2",
                        style: { fontFamily: "Orbitron, sans-serif" },
                        children: "RESUME AVAILABLE"
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 font-mono leading-relaxed", children: "Resume available on request or download from the navigation bar above." })
                  ] })
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
          children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 md:p-8", children: [
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: "text-2xl font-bold text-cyan-300 mb-6",
                style: { fontFamily: "Orbitron, sans-serif" },
                children: "SEND MESSAGE"
              }
            ),
            /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("label", { className: "block text-sm text-gray-400 font-mono mb-2", children: [
                  "> ",
                  "NAME"
                ] }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    value: formData.name,
                    onChange: (e) => setFormData({ ...formData, name: e.target.value }),
                    required: true,
                    className: "w-full px-4 py-3 bg-black/30 border border-cyan-500/30 rounded-lg text-gray-300 focus:outline-none focus:border-cyan-400 transition-colors font-mono",
                    placeholder: "Enter your name"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("label", { className: "block text-sm text-gray-400 font-mono mb-2", children: [
                  "> ",
                  "EMAIL"
                ] }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "email",
                    value: formData.email,
                    onChange: (e) => setFormData({ ...formData, email: e.target.value }),
                    required: true,
                    className: "w-full px-4 py-3 bg-black/30 border border-cyan-500/30 rounded-lg text-gray-300 focus:outline-none focus:border-cyan-400 transition-colors font-mono",
                    placeholder: "your.email@example.com"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("label", { className: "block text-sm text-gray-400 font-mono mb-2", children: [
                  "> ",
                  "MESSAGE"
                ] }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    value: formData.message,
                    onChange: (e) => setFormData({ ...formData, message: e.target.value }),
                    required: true,
                    rows: 6,
                    className: "w-full px-4 py-3 bg-black/30 border border-cyan-500/30 rounded-lg text-gray-300 focus:outline-none focus:border-cyan-400 transition-colors font-mono resize-none",
                    placeholder: "Type your message here..."
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                motion.button,
                {
                  type: "submit",
                  disabled: isSending || isSent,
                  className: "w-full px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden relative group",
                  whileHover: { scale: isSending || isSent ? 1 : 1.02 },
                  whileTap: { scale: isSending || isSent ? 1 : 0.98 },
                  style: { fontFamily: "Orbitron, sans-serif" },
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "relative z-10 flex items-center justify-center gap-2", children: isSent ? /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx(
                        motion.span,
                        {
                          initial: { scale: 0 },
                          animate: { scale: 1 },
                          children: "\u2713"
                        }
                      ),
                      "MESSAGE SENT"
                    ] }) : isSending ? /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          animate: { rotate: 360 },
                          transition: { duration: 1, repeat: Infinity, ease: "linear" },
                          children: /* @__PURE__ */ jsx(Send, { size: 20 })
                        }
                      ),
                      "TRANSMITTING..."
                    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx(Send, { size: 20 }),
                      "SEND MESSAGE"
                    ] }) }),
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "absolute inset-0",
                        animate: {
                          boxShadow: [
                            "0 0 10px rgba(0, 255, 255, 0.3)",
                            "0 0 20px rgba(0, 255, 255, 0.5)",
                            "0 0 10px rgba(0, 255, 255, 0.3)"
                          ]
                        },
                        transition: { duration: 2, repeat: Infinity }
                      }
                    ),
                    isSending && /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "absolute bottom-0 left-0 h-1 bg-white/30",
                        initial: { width: "0%" },
                        animate: { width: "100%" },
                        transition: { duration: 2, ease: "linear" }
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 pt-6 border-t border-cyan-500/20", children: /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 font-mono text-center", children: [
              "> ",
              "Secure encrypted communication channel"
            ] }) })
          ] })
        }
      )
    ] })
  ] }) });
}
export {
  Contact
};
