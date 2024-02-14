"use client"
import { motion } from "framer-motion";
import { routes } from "@/features/Routes";
import './Burger.scss'

interface InsideBurger {
  onClick?: (prev: boolean) => void;
}

export default function InsideBurger({ onClick }: InsideBurger) {
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
              onClick={() => onClick}
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

