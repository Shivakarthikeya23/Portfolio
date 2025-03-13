import {
  OrbitControls,
  PerspectiveCamera,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Loader";

function Player({ isMobile }) {
  const group = useRef();
  const [modelError, setModelError] = useState(false);

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
        position={[0, 0, 15]}  // Moved camera back
        fov={50}              // Increased field of view
        near={0.1}
        far={1000}
        zoom={isMobile ? 0.9 : 1}
      />
      <pointLight intensity={2} position={[1, 1.5, 0]} color={"#804dee"} />
      <pointLight intensity={2} position={[-1, 1.5, 1]} color={"#4b42a7"} />
      {!isMobile && (
        <OrbitControls
          makeDefault
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.05}
          enablePan={false}
        />
      )}
      <Suspense fallback={<CanvasLoader />}>
        <group 
          ref={group} 
          dispose={null}
          position={[0, isMobile ? -1 : -2, 0]}  // Moved up by adjusting y position
        >
          <primitive 
            object={scene} 
            scale={isMobile ? 5 : 4}           // Increased scale
            rotation={[0, 0, 0]}
          />
        </group>
      </Suspense>
    </>
  );
}

function PlayerCanvas({ isMobile }) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        alpha: true,
      }}
    >
      <Player isMobile={isMobile} />
    </Canvas>
  );
}

export default PlayerCanvas;
