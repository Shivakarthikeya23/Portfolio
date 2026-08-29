import {
  OrbitControls,
  PerspectiveCamera,
  useAnimations,
  useFBX,
  useGLTF,
} from "@react-three/drei";
import { Component, Suspense, useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import CanvasLoader from "../Loader";

// A bad/unsupported activity clip must not take down the whole avatar scene.
class ActivityErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("Activity clip failed to load:", error);
    this.props.onError?.();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render() {
    return this.state.hasError ? null : this.props.children;
  }
}

export const ACTIVITIES = [
  { id: "wave", label: "Hi" },
  { id: "coding", label: "Code", url: "/animations/activities/typing.fbx" },
  { id: "gaming", label: "Dribble", url: "/animations/activities/dribble.fbx" },
  { id: "running", label: "Run", url: "/animations/activities/running.fbx" },
  { id: "sports", label: "Sports", url: "/animations/activities/baseball-hit.fbx" },
];

// Mounted only while an external clip needs fetching; useFBX suspends and
// caches by url, so re-selecting an activity never re-downloads it.
function ActivityClipLoader({ url, onLoaded }) {
  const fbx = useFBX(url);

  useEffect(() => {
    const clip = fbx.animations?.[0];
    if (clip) onLoaded(clip);
  }, [fbx, onLoaded]);

  return null;
}

function Player({ isMobile, rotation, activity = "wave" }) {
  const group = useRef();
  const currentActionRef = useRef(null);
  const clipCacheRef = useRef(new Map());
  const [modelError, setModelError] = useState(false);
  const [rotationY, setRotationY] = useState(0);
  const [pendingUrl, setPendingUrl] = useState(null);

  useFrame(() => {
    if (isMobile && group.current) {
      group.current.rotation.y = rotationY + rotation * 0.005;
      setRotationY(group.current.rotation.y);
    }
  });

  const { nodes, materials, animations, scene } = useGLTF("models/player/model.glb", undefined, (error) => {
    console.error("Error loading model:", error);
    setModelError(true);
  });

  const { actions, mixer } = useAnimations(animations, group);

  const playClip = (action) => {
    if (!action) return;
    action.reset().fadeIn(0.35).play();
    if (currentActionRef.current && currentActionRef.current !== action) {
      currentActionRef.current.fadeOut(0.35);
    }
    currentActionRef.current = action;
  };

  useEffect(() => {
    const meta = ACTIVITIES.find((a) => a.id === activity);
    if (!meta) return;

    if (!meta.url) {
      playClip(actions?.[Object.keys(actions)[0]]);
      setPendingUrl(null);
      return;
    }

    const cached = clipCacheRef.current.get(meta.url);
    if (cached) {
      playClip(mixer.clipAction(cached, group.current));
    } else {
      setPendingUrl(meta.url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activity, actions]);

  const handleClipLoaded = useCallback(
    (clip) => {
      clipCacheRef.current.set(pendingUrl, clip);
      playClip(mixer.clipAction(clip, group.current));
      setPendingUrl(null);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pendingUrl, mixer]
  );

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
        {pendingUrl && (
          <ActivityErrorBoundary
            resetKey={pendingUrl}
            onError={() => setPendingUrl(null)}
          >
            <ActivityClipLoader url={pendingUrl} onLoaded={handleClipLoaded} />
          </ActivityErrorBoundary>
        )}
      </Suspense>
    </>
  );
}

function PlayerCanvas({ isMobile, rotation, activity }) {  // Add rotation prop
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        alpha: true,
      }}
    >
      <Player isMobile={isMobile} rotation={rotation} activity={activity} />
    </Canvas>
  );
}

export default PlayerCanvas;
