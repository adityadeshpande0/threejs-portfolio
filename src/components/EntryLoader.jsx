import { motion } from "framer-motion";

const LoaderComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center space-y-4 px-6 md:px-12">
        <motion.p
          className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold animate-pulse"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          Aditya's Portfolio
        </motion.p>
        <motion.p
          className="text-white text-lg sm:text-xl lg:text-2xl font-medium"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          For Best Experience, Open it on Laptop/Desktop
        </motion.p>
      </div>
    </div>
  );
};

export default LoaderComponent;
