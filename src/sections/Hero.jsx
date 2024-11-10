import { Canvas } from "@react-three/fiber";
import Cube from "../components/Cube";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../commons/commonData";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-18 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Aditya <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Full Stack Developer</p>
      </div>
      <div className="w-full h-full absolute inset-0 mt-5">
        <Canvas className="w-full h-full">
          <Cube position={sizes.cubePosition} />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
