import { motion } from "motion/react";
import { PERSONAL_INFO } from "../constants/data";

const ViewResumeButton = () => {
  const handleClick = () => {
    window.open(PERSONAL_INFO.resumeUrl, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm
      text-center rounded-full font-extralight bg-primary
      w-48 cursor-pointer overflow-hidden"
    >
      <motion.p
        className="flex items-center justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        <img
          src="assets/copy.svg"
          className="w-5"
          alt="resume icon"
        />
        Resume
      </motion.p>
    </motion.button>
  );
};

export default ViewResumeButton;
