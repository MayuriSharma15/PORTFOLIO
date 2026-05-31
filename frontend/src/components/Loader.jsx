import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#080b14]
    flex items-center justify-center z-[999]">

      <motion.div
        animate={{
          rotate:360
        }}
        transition={{
          repeat:Infinity,
          duration:1.2,
          ease:"linear"
        }}
        className="w-16 h-16 border-4
        border-violet-500 border-t-transparent
        rounded-full"
      />
    </div>
  );
}