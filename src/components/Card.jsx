import { motion } from "motion/react";

const Card = ({ style, text, image, containerRef }) => {
  const floatAnimation = {
    y: [0, -8, 0, 8, 0],
    rotate: [0, 2, -2, 1, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return image && !text ? (
    <motion.img
      className="absolute cursor-grab w-20 md:w-16 sm:w-12"
      src={image}
      style={style}
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
      animate={floatAnimation}
    />
  ) : (
    <motion.div
      className="absolute text-center text-xl md:text-lg sm:text-sm
      font-extralight bg-storm px-2 py-3 md:px-2 md:py-2 sm:px-1 sm:py-1
      rounded-full ring ring-gray-700 cursor-grab w-48 md:w-36 sm:w-28"
      style={style}
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
      animate={floatAnimation}
    >
      {text}
    </motion.div>
  );
};

export default Card;