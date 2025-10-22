import { useRef, useState, useEffect } from "react";
import { blogs } from "../constants/data";
import BlogCard from "../components/BlogCard";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blogs = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <section className="relative c-space section-spacing">
      <h2 className="text-heading">Latest from My Blog</h2>
      <div
        className="bg-linear-to-r from-transparent 
        via-neutral-700 to-transparent mt-12 h-px w-full"
      />

      {/* Scroll buttons */}
      {canScrollLeft && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full 
          bg-neutral-800/70 hover:bg-neutral-700 backdrop-blur-md shadow-lg hidden sm:flex"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </motion.button>
      )}
      {canScrollRight && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full 
          bg-neutral-800/70 hover:bg-neutral-700 backdrop-blur-md shadow-lg hidden sm:flex"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </motion.button>
      )}

      {/* Blog cards container */}
      <div
        ref={scrollRef}
        className="mt-10 flex flex-row gap-8 overflow-x-auto pb-5 
        scrollbar-none scroll-smooth"
      >
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;