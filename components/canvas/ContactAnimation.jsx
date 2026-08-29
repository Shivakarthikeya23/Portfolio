import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ContactModel from "./ContactModel";
import CanvasLoader from "../Loader";
import useInView from "@/hooks/useInView";

function ContactAnimation({ isMobile }) {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
      {inView && (
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 45,
            near: 0.1,
            far: 200
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              autoRotate={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[0, 5, 5]} intensity={1} />
            <ContactModel isMobile={isMobile} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}

export default ContactAnimation;