import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileDown, Lock, Check } from "lucide-react";
function ResumeButton({ variant = "hero" }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setIsComplete(true);
      setTimeout(() => {
        setIsComplete(false);
      }, 2e3);
      console.log("Downloading Resume...");
    }, 2e3);
  };
  if (variant === "navbar") {
    return /* @__PURE__ */ jsxs(
      motion.button,
      {
        onClick: handleDownload,
        onHoverStart: () => setIsHovered(true),
        onHoverEnd: () => setIsHovered(false),
        disabled: isDownloading || isComplete,
        className: "relative px-4 py-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold rounded-md overflow-hidden text-sm",
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300",
              initial: { opacity: 0 },
              animate: { opacity: isHovered ? 1 : 0 },
              transition: { duration: 0.3 }
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "relative z-10 flex items-center gap-2", children: isComplete ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Check, { size: 16 }),
            "Access Granted"
          ] }) : isDownloading ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: { rotate: 360 },
                transition: { duration: 1, repeat: Infinity, ease: "linear" },
                children: /* @__PURE__ */ jsx(Lock, { size: 16 })
              }
            ),
            "Decrypting..."
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(FileDown, { size: 16 }),
            "Resume"
          ] }) }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute inset-0 rounded-md",
              animate: {
                boxShadow: [
                  "0 0 10px rgba(255, 215, 0, 0.5)",
                  "0 0 20px rgba(255, 215, 0, 0.8)",
                  "0 0 10px rgba(255, 215, 0, 0.5)"
                ]
              },
              transition: { duration: 2, repeat: Infinity }
            }
          ),
          /* @__PURE__ */ jsx(AnimatePresence, { children: isHovered && !isDownloading && /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent",
              initial: { y: "-100%" },
              animate: { y: "100%" },
              exit: { y: "100%" },
              transition: { duration: 0.6, repeat: Infinity }
            }
          ) }),
          isDownloading && /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute bottom-0 left-0 h-1 bg-black/30",
              initial: { width: "0%" },
              animate: { width: "100%" },
              transition: { duration: 2, ease: "linear" }
            }
          )
        ]
      }
    );
  }
  if (variant === "mobile") {
    return /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleDownload,
        disabled: isDownloading || isComplete,
        className: "w-full px-4 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold rounded-md flex items-center justify-center gap-2",
        children: isComplete ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Check, { size: 18 }),
          "Access Granted"
        ] }) : isDownloading ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              animate: { rotate: 360 },
              transition: { duration: 1, repeat: Infinity, ease: "linear" },
              children: /* @__PURE__ */ jsx(Lock, { size: 18 })
            }
          ),
          "Decrypting..."
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(FileDown, { size: 18 }),
          "Download Resume"
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    motion.button,
    {
      onClick: handleDownload,
      onHoverStart: () => setIsHovered(true),
      onHoverEnd: () => setIsHovered(false),
      disabled: isDownloading || isComplete,
      className: "relative px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold rounded-lg overflow-hidden group",
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
      style: { fontFamily: "Orbitron, sans-serif" },
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300",
            initial: { opacity: 0 },
            animate: { opacity: isHovered ? 1 : 0 },
            transition: { duration: 0.3 }
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "relative z-10 flex items-center gap-3 text-lg", children: isComplete ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Check, { size: 24 }),
          "Access Granted"
        ] }) : isDownloading ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              animate: { rotate: 360 },
              transition: { duration: 1, repeat: Infinity, ease: "linear" },
              children: /* @__PURE__ */ jsx(Lock, { size: 24 })
            }
          ),
          "Decrypting..."
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(FileDown, { size: 24 }),
          "Access File: Resume.pdf"
        ] }) }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute inset-0 rounded-lg border-2 border-yellow-300",
            animate: {
              opacity: [0.3, 1, 0.3]
            },
            transition: { duration: 2, repeat: Infinity }
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute inset-0 rounded-lg",
            animate: {
              boxShadow: [
                "0 0 20px rgba(255, 215, 0, 0.5)",
                "0 0 40px rgba(255, 215, 0, 0.8)",
                "0 0 20px rgba(255, 215, 0, 0.5)"
              ]
            },
            transition: { duration: 2, repeat: Infinity }
          }
        ),
        /* @__PURE__ */ jsx(AnimatePresence, { children: isHovered && !isDownloading && /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent",
            initial: { y: "-100%" },
            animate: { y: "100%" },
            exit: { y: "100%" },
            transition: { duration: 0.6, repeat: Infinity }
          }
        ) }),
        isDownloading && /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute bottom-0 left-0 h-1.5 bg-black/30 rounded-full",
            initial: { width: "0%" },
            animate: { width: "100%" },
            transition: { duration: 2, ease: "linear" }
          }
        )
      ]
    }
  );
}
export {
  ResumeButton
};
