import React from 'react'
import { motion } from "framer-motion";
import "./style.css";
import { useEffect, useRef, useState } from "react";

const AnimateClickable = ({ children, className, onClick }) => {
  const [isClick, setIsClick] = useState(false);
  const buttonRef = useRef();

  useEffect(() => {
    buttonRef?.current?.addEventListener("click", () => {
      setIsClick(true);
    });
  }, []);

  useEffect(() => {
    if (isClick) {
      setTimeout(() => {
        setIsClick(false);
      }, 1000);
    }
  }, [isClick]);
  
  return (
    <div onClick={onClick}>
      <motion.div
        ref={buttonRef}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className={`animate-div ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimateClickable;
