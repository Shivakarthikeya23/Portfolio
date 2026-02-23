import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function ContactModel({ isMobile }) {
  const modelRef = useRef();
  const { scene, animations } = useGLTF("/models/contact/model.glb");
  const { actions } = useAnimations(animations, modelRef);

  useEffect(() => {
    // Start the animation
    const animationNames = Object.keys(actions);
    if (animationNames.length > 0) {
      const action = actions[animationNames[0]];
      action.reset().play();
      action.setLoop(true);
    }
  }, [actions]);

  useFrame((state) => {
    if (modelRef.current) {
      // Gentle floating motion
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={modelRef}>
      <primitive 
        object={scene}
        scale={isMobile ? 1.8 : 1.5} // Reduced by additional 20%
        position={isMobile ? [0, -1.2, 0] : [0, -1.5, 0]} // Adjusted position to match new scale
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

export default ContactModel;