import { Canvas } from "@react-three/fiber";
import Cube from "../components/Cube";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../commons/commonData";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import HeroCamera from "../components/HeroCamera";
import { HackerRoom } from "../components/HackerRoom";
import CanvasLoader from "../components/Loading";
import ReactLogo from "../components/ReactLogo";
import Button from "../components/Button";
import { motion } from "framer-motion";
const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = `https://drive.google.com/file/d/1ckurnotKNGpnKX1UItAy2swfgbjy7Fyk/view?usp=drive_link`;
    link.download = "Aditya_Deshpande_Resume.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
    link.click();
  };
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-34 mt-20 c-space gap-3">
      <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Aditya <span className="waving-hand">👋</span>
        </p>
    
          <p className="hero_tag text-gray_gradient">Full Stack Developer</p>
        </motion.div>
      </div>
      <div className="w-full h-full absolute inset-0 mt-5">
        <Canvas className="w-full h-full mb-0">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>
            <group>
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.targetPosition} />
            </group>
            <ambientLight intensity={3} />
            <directionalLight position={[10, 0, 0]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div
        className={`absolute ${
          isSmall ? "bottom-40" : isMobile ? "bottom-32" : "bottom-14"
        } left-0 right-0 w-full z-10 flex justify-center space-x-4`}
      >
        <a href="#about" className="w-fit">
          <Button
            onClick={handleDownloadResume}
            name="Download Resume"
            isBeam={true}
          />
        </a>
        <a href="#projects" className="w-fit">
          <Button name="My Projects" isBeam={false} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
