import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="c-space pt-7 pb-3 flex justify-between items-center flex-wrap gap-5"
    >
      <motion.div
        className="flex gap-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ staggerChildren: 0.2 }}
      >
        {[
          "/assets/github.svg",
          "/assets/twitter.svg",
          "/assets/instagram.svg",
        ].map((icon, index) => (
          <motion.div
            key={index}
            className="social-icon"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img src={icon} alt="social-icon" className="w-1/2 h-1/2" />
          </motion.div>
        ))}
      </motion.div>
      <motion.p
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-white-500"
      >
        © 2024 Aditya Deshpande. All rights reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
