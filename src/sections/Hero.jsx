import { Canvas } from "@react-three/fiber";
import Cube from "../components/Cube";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../commons/commonData";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import HeroCamera from "../components/HeroCamera";
import { HackerRoom } from "../components/HackerRoom";
import CanvasLoader from "../components/Loading";
import Laptop from "../components/Laptop";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-34 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Aditya <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Full Stack Developer</p>
      </div>
      <div className="w-full h-full absolute inset-0 mt-5">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>
            <ambientLight intensity={3} />
            <directionalLight position={[10, 0, 0]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
