import React from "react";
import { motion } from "framer-motion";
import { DiVisualstudio } from "react-icons/di";
import { FaJsSquare, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

const icons = [
  { component: <DiVisualstudio />, key: "DiVisualstudio" },
  { component: <FaJsSquare />, key: "FaJsSquare" },
  { component: <FaReact />, key: "FaReact" },
  { component: <FaNodeJs />, key: "FaNodeJs" },
  { component: <FaHtml5 />, key: "FaHtml5" },
  { component: <FaCss3Alt />, key: "FaCss3Alt" },
];

const scrollVariants = {
  animate: {
    y: [-100, 100], // Défiler de haut en bas
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse", // Défiler de haut en bas puis de bas en haut
        duration: 5, // Durée d'un cycle de défilement
        ease: "linear",
      },
    },
  },
};

export const ScrollingIcons = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        overflow: "hidden", // Masquer les icônes hors du conteneur
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex : 50,
        // background : "red",
        left : 0,
        right : 0,
        top :0,
        bottom : 0,
      }}
    >
      {icons.map((icon) => (
        <motion.div
          key={icon.key}
          variants={scrollVariants}
          animate="animate"
          style={{
            fontSize: "2rem", // Taille des icônes
            color: "yellow", // Couleur des icônes
            margin: "0 20px", // Espacement entre les icônes
          }}
        >
          {icon.component}
        </motion.div>
      ))}
    </div>
  );
};


