import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import InsideBurger from "@/entities/Burger/ui/Burger";
import './Burger.scss'

interface IBurger {
  onClick: () => void;
}

export default function Burger({ onClick }: IBurger) {
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