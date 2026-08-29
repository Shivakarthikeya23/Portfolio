import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import { PlayerCanvas } from "./canvas";
import { ACTIVITIES } from "./canvas/Player";
import Magnetic from "./Magnetic";
import { useState } from "react";
import useInView from "@/hooks/useInView";

function PlayerContainer({ isMobile }) {
  const [ref, inView] = useInView();
  const [activity, setActivity] = useState("wave");
  const [touchStart, setTouchStart] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setIsRotating(true);
  };

  const handleTouchMove = (e) => {
    if (!touchStart || !isRotating) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;
    const newRotation = Math.max(-180, Math.min(180, rotation + diff * 0.5));
    setRotation(newRotation);
    setTouchStart(currentTouch);
  };

  const handleTouchEnd = () => {
    setIsRotating(false);
    setRotation(0);
  };

  return (
    <motion.div
      ref={ref}
      variants={slideIn("right", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`${
        isMobile ? 'w-full h-[500px]' : 'md:w-1/3 w-full md:h-auto h-[440px]'
      } cursor-pointer relative`}
    >
      {inView && (
        <PlayerCanvas
          className={`${isMobile}? 'bottom-0':''`}
          isMobile={isMobile}
          rotation={rotation}
          activity={activity}
        />
      )}

      {inView && (
        <div className="absolute bottom-3 inset-x-0 flex flex-wrap justify-center gap-2 px-2 z-10">
          {ACTIVITIES.map((item) => (
            <Magnetic key={item.id} strength={0.2}>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActivity(item.id);
                }}
                className={`px-3 py-1 rounded-full text-[12px] font-medium backdrop-filter backdrop-blur-xl transition-all duration-200 ${
                  activity === item.id
                    ? "bg-primary text-white"
                    : "bg-black/30 dark:text-ctnPrimaryDark text-ctnPrimaryLight hover:bg-black/40"
                }`}
              >
                {item.label}
              </button>
            </Magnetic>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default PlayerContainer;
