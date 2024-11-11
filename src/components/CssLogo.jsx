import { Float, useGLTF } from '@react-three/drei';

const CssLogo = (props) => {
  const { nodes, materials } = useGLTF('models/css_logo.gltf');
  console.log(nodes, materials);
  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.5} {...props} dispose={null}>
        <mesh
          geometry={nodes['Material.001'].geometry}
          material={materials['Material.002']}
          position={[-6, -3, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.392, 0.392, 0.527]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload('models/css_logo.gltf');

export default CssLogo;
