import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  useEffect(() => {
    if (computer.scene) {
      const screen = computer.scene.children.find(
        (child) => child.name === "Screen" || child.children?.find((c) => c.name === "Screen")
      );
  
      if (screen) {
        const screenMesh = screen.material ? screen : screen.children?.find((c) => c.material);
  
        if (screenMesh && screenMesh.material && screenMesh.material.map) {
          const originalTexture = screenMesh.material.map.image;
  
          if (originalTexture) {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
  
            // Set canvas size to match image
            canvas.width = originalTexture.width;
            canvas.height = originalTexture.height;
  
            // Flip the image horizontally
            ctx.translate(canvas.width, 0);
            ctx.scale(-1, 1);
            ctx.drawImage(originalTexture, 0, 0);
  
            // Apply flipped image to texture
            const flippedTexture = new THREE.Texture(canvas);
            flippedTexture.needsUpdate = true;
  
            screenMesh.material.map = flippedTexture;
            screenMesh.material.needsUpdate = true;
          }
        }
      }
    }
  }, [computer]);
  
  
  
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -2, -1.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Don't render 3D model on mobile - it causes performance issues
  if (isMobile) {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center mt-8">
          {/* Improved coding setup illustration */}
          <div className="relative w-64 h-40 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl flex items-center justify-center mb-6 mx-auto shadow-2xl border border-gray-600 overflow-hidden">
            {/* Monitor frame */}
            <div className="absolute inset-2 bg-gradient-to-br from-blue-900 via-purple-900 to-black rounded-lg border border-gray-500">
              {/* Screen content */}
              <div className="w-full h-full flex flex-col justify-center items-center text-green-400 font-mono text-xs p-2">
                <div className="w-full text-left space-y-1">
                  <div className="text-blue-400">const developer = {'{'}</div>
                  <div className="ml-2 text-white">name: <span className="text-yellow-400">"Rasheed"</span>,</div>
                  <div className="ml-2 text-white">role: <span className="text-yellow-400">"Full Stack"</span>,</div>
                  <div className="ml-2 text-white">passion: <span className="text-yellow-400">"Innovation"</span></div>
                  <div className="text-blue-400">{'};'}</div>
                </div>
                {/* Cursor blink animation */}
                <div className="absolute bottom-2 right-2 w-1 h-3 bg-green-400 animate-pulse"></div>
              </div>
            </div>
            {/* Monitor stand */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-gray-700 rounded-b"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-600 rounded"></div>
          </div>
          <div className="text-white/70 text-base font-semibold">Full Stack Developer</div>
          <div className="text-[#9e13ea] text-sm mt-1">Building the Future with Code</div>
        </div>
      </div>
    );
  }

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className={isMobile ? "opacity-80" : ""}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={isMobile ? false : true}
          enableRotate={isMobile ? false : true}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
