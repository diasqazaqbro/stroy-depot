"use client"
import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "@/features/Routes";
import './Burger.scss'

interface IBurger {
  onClick: () => void;
}

export const Burger:  React.FC<IBurger> = ({ onClick }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div onClick={onClick} ref={ref} className="lg:hidden ">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <InsideBurger onClick={(prev) => setOpen(!prev)} />
        )}
      </AnimatePresence>
    </div>
  );
};

interface InsideBurger {
  onClick?: (prev: boolean) => void;
}

export const InsideBurger: React.FC<InsideBurger> = ({ onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="burger left-0 shadow-4xl right-0 p-5 bg-neutral-950 border-b border-b-white/20"
    >
      <ul className="grid gap-2">
        {routes.map((route, idx) => (
          <motion.li
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1 + idx / 10,
            }}
            key={route.title}
            className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
          >
            <a
              onClick={onClick}
              className={
                "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
              }
              href={route.href}
            >
              <span className="title__text flex gap-1 text-lg">{route.title}</span>
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

