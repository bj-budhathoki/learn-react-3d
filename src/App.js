import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MeshWobbleMaterial } from "@react-three/drei";
import "./App.scss";

const Box = ({ position, color, args }) => {
  //ref to target the mesh
  const mesh = useRef(null);

  //useFrame allows us to re-render/update rotation on each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  console.log("hello");
  return (
    <mesh ref={mesh} position={position}>
      <boxBufferGeometry args={args} />
      <MeshWobbleMaterial attach="material" color={color} speed={0.5} />
    </mesh>
  );
};
function App() {
  return (
    <main id="canvas-container">
      <Canvas camera={{ position: [-5, 2, 10], fov: 50 }} colorManagement>
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <Box position={[0, 1, 0]} args={[3, 2, 1]} color="lightblue" />
        <Box position={[-2, 1, -5]} color="pink" />
        <Box position={[5, 1, -2]} color="pink" />
      </Canvas>
    </main>
  );
}

export default App;
