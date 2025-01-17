"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      container: ref,
      offset: ["start start", "end start"],
    });
  
    // Vérification si content est défini et est un tableau
    const cardLength = Array.isArray(content) ? content.length : 0;
  
    // Si le contenu est vide, on arrête l'exécution
    if (!cardLength) {
      return <div>Le contenu est vide ou non défini.</div>;
    }
  
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      const cardsBreakpoints = content.map((_, index) => index / cardLength);
      const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      }, 0);
      setActiveCard(closestBreakpointIndex);
    });
  
    const backgroundColors = [
      "var(--slate-900)",
      "var(--black)",
      "var(--neutral-900)",
    ];
    const linearGradients = [
      "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
      "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
      "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    ];
  
    const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);
  
    useEffect(() => {
      setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);
  
    return (
        <motion.div
        animate={{
          backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }}
        className="h-[30rem] w-full overflow-y-auto scrollbar-none flex justify-center relative space-x-10  p-10"
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
         <div className="flex items-center justify-center mx-auto">
            <p className="text-white text-center">hdj</p>
         </div>
          <div className="max-w-8xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20 ">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg text-slate-300 max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
      
    );
  };
  