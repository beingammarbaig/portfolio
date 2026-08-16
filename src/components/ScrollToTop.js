import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed z-[9998] flex items-center justify-center cursor-pointer border-none rounded-full right-4 bottom-[24px] md:left-4 md:right-auto"
          style={{
            width: "38px",
            height: "38px",
            background: "linear-gradient(135deg, #16a34a, #059669)",
            boxShadow: "0 0 16px rgba(22,163,74,0.40)",
          }}
          aria-label="Scroll to top"
        >
          <FaArrowUp style={{ color: "#fff", fontSize: "14px" }} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
