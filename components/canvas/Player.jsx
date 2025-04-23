import {
  OrbitControls,
  PerspectiveCamera,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import CanvasLoader from "../Loader";

function Player({ isMobile, rotation }) {  // Add rotation prop
  const group = useRef();
  const [modelError, setModelError] = useState(false);
  const [rotationY, setRotationY] = useState(0);

  useFrame(() => {
    if (isMobile && group.current) {
      group.current.rotation.y = rotationY + rotation * 0.005;
      setRotationY(group.current.rotation.y);
    }
  });

  // Load GLB model
  const { nodes, materials, animations, scene } = useGLTF("models/player/model.glb", undefined, (error) => {
    console.error("Error loading model:", error);
    setModelError(true);
  });

  // Use animations if available
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const action = actions[Object.keys(actions)[0]]; // Play first available animation
      action.reset().play();
    }
  }, [actions]);

  if (modelError || !nodes || !materials) {
    return null; // Do not render if model fails to load
  }

  return (
    <>
      <ambientLight intensity={1} />
      <PerspectiveCamera
        makeDefault
        position={isMobile?[0, 0, 18] :[0, 0, 15]}
        fov={50}
        near={0.1}
        far={1000}
        zoom={isMobile ? 0.9 : 1}
      />
      <pointLight intensity={2} position={[1, 1.5, 0]} color={"#00bfff"} />
      <pointLight intensity={2} position={[-1, 1.5, 1]} color={"#0088cc"} />
      <OrbitControls
        makeDefault
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableDamping={true}
        dampingFactor={0.05}
        enablePan={false}
        touches={{
          one: true,
          two: false
        }}
      />
      <Suspense fallback={<CanvasLoader />}>
        <group 
          ref={group} 
          dispose={null}
          position={[0, isMobile ? -2 : -2, 0]}
        >
          <primitive 
            object={scene} 
            scale={isMobile ? 5 : 4}
          />
        </group>
      </Suspense>
    </>
  );
}

function PlayerCanvas({ isMobile, rotation }) {  // Add rotation prop
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        alpha: true,
      }}
    >
      <Player isMobile={isMobile} rotation={rotation} />
    </Canvas>
  );
}

export default PlayerCanvas;
