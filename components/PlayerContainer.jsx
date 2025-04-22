import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import { PlayerCanvas } from "./canvas";
import { useState } from "react";

function PlayerContainer({ isMobile }) {
  const [touchStart, setTouchStart] = useState(null);
  const [rotation, setRotation] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;
    setRotation(rotation + diff * 0.5);
    setTouchStart(currentTouch);
  };

  return (
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className={`${
        isMobile ? 'w-full h-[350px]' : 'md:w-1/3 w-full md:h-auto h-[440px]'
      } cursor-pointer`}
    >
      <PlayerCanvas isMobile={isMobile} rotation={rotation} />
    </motion.div>
  );
}

export default PlayerContainer;
