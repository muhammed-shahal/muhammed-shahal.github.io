import { motion } from "motion/react";
const BlogCard = ({ title, description, image, href }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="flex flex-col justify-between rounded-2xl border border-white/10 
      bg-gradient-to-b from-storm to-indigo hover:from-royal hover:to-lavender 
      transition-all duration-300 p-5 w-[20rem] sm:w-[22rem] flex-shrink-0 shadow-md"
    >
      <div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-neutral-400 text-sm mb-4 line-clamp-3">
          {description}
        </p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 font-medium text-white hover-animation"
      >
        Read More
        <img src="assets/arrow-up.svg" className="size-4" alt="arrow icon" />
      </a>
    </motion.div>
  );
};

export default BlogCard;