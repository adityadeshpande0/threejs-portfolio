import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { Float, useGLTF, useTexture } from "@react-three/drei";

const Laptop = ({ ...props }) => {
  const { nodes } = useGLTF("models/laptop.glb");
  const texture = useTexture("textures/laptop_0.png");
  const laptopRef = useRef();
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(laptopRef.current.rotation, {
        y: hovered ? "+=2" : `+=${Math.PI * 2}`,
        x: hovered ? "+=2" : `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: {
          each: 0.15,
        },
      });
  });

  return (
    <Float floatIntensity={2}>
      <group position={[9, -4, 0]} rotation={[2.6, 0.8, -1.8]} scale={0.74} dispose={null} {...props}>
        <mesh
          ref={laptopRef}
          castShadow
          receiveShadow
          geometry={nodes.laptop.geometry}
          material={nodes.laptop.material}
          onPointerEnter={() => setHovered(true)}>
          <meshMatcapMaterial toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload("models/laptop.glb");

export default Laptop;