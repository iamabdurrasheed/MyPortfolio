import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

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
  
        if (screenMesh && screenMesh.material) {
          // Create a custom canvas with your code
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          
          // Set canvas size
          canvas.width = 1024;
          canvas.height = 768;
          
          // Dark background
          ctx.fillStyle = '#0a0a1a';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          // Add some binary background pattern
          ctx.fillStyle = '#1a1a2e';
          ctx.font = '12px monospace';
          for (let i = 0; i < 100; i++) {
            ctx.fillText(Math.random() > 0.5 ? '1' : '0', 
              Math.random() * canvas.width, 
              Math.random() * canvas.height);
          }
          
          // Main code content
          ctx.fillStyle = '#00ff41';
          ctx.font = 'bold 24px monospace';
          
          const codeLines = [
            'const mohammedAbdurRasheed = {',
            '    name: "Mohammed Abdur Rasheed",',
            '    location: "🌍 Somewhere awesome",',
            '    currentFocus: "Building cool stuff",',
            '    interests: [',
            '        "Software Development",',
            '        "Web Development", "DSA",',
            '        "Open Source", "Learning New Tech",',
            '        "AI&ML", "Cloud Technologies"',
            '    ],',
            '    funFact: "I turn coffee into code ☕➡️💻"',
            '};',
            '',
            'console.log("Welcome to my PORTFOLIO!");',
            'console.log("Ready to build amazing things!");'
          ];
          
          let y = 80;
          codeLines.forEach((line, index) => {
            if (line.includes('const') || line.includes('console')) {
              ctx.fillStyle = '#66d9ef'; // Blue for keywords
            } else if (line.includes('"')) {
              ctx.fillStyle = '#e6db74'; // Yellow for strings
            } else if (line.includes('{') || line.includes('}') || line.includes('[') || line.includes(']')) {
              ctx.fillStyle = '#f92672'; // Pink for brackets
            } else {
              ctx.fillStyle = '#ffffff'; // White for normal text
            }
            
            ctx.fillText(line, 50, y);
            y += 35;
          });
          
          // Blinking cursor
          ctx.fillStyle = '#00ff41';
          ctx.fillRect(50 + ctx.measureText('console.log("Ready to build amazing things!");').width, y - 35, 15, 25);
          
          // Create texture from canvas
          const customTexture = new THREE.Texture(canvas);
          customTexture.needsUpdate = true;
          
          screenMesh.material.map = customTexture;
          screenMesh.material.needsUpdate = true;
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
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4 pt-8 sm:pt-0">
        <div className="text-center w-full max-w-md mx-auto">
          {/* Larger Desktop-style coding setup for mobile */}
          <div className="relative w-full h-64 sm:h-72 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl flex items-center justify-center shadow-2xl border border-gray-600 overflow-hidden">
            {/* Monitor frame */}
            <div className="absolute inset-2 bg-gradient-to-br from-blue-900 via-purple-900 to-black rounded-lg border border-gray-500">
              {/* Screen content */}
              <div className="w-full h-full flex flex-col justify-start items-start text-green-400 font-mono text-[11px] sm:text-[12px] p-2 sm:p-3 overflow-hidden">
                <div className="w-full text-left space-y-1 leading-tight">
                  <div className="text-blue-400">const mohammedAbdurRasheed = {'{'}</div>
                  <div className="ml-2 text-white">name: <span className="text-yellow-400">"Mohammed Abdur Rasheed"</span>,</div>
                  <div className="ml-2 text-white">location: <span className="text-yellow-400">"🌍 Somewhere awesome"</span>,</div>
                  <div className="ml-2 text-white">currentFocus: <span className="text-yellow-400">"Building cool stuff"</span>,</div>
                  <div className="ml-2 text-white">interests: [</div>
                  <div className="ml-4 text-yellow-400">"Software Development",</div>
                  <div className="ml-4 text-yellow-400">"Web Development", "DSA",</div>
                  <div className="ml-4 text-yellow-400">"Open Source", "Learning New Tech",</div>
                  <div className="ml-4 text-yellow-400">"AI&ML", "Cloud Technologies"</div>
                  <div className="ml-2 text-white">],</div>
                  <div className="ml-2 text-white">funFact: <span className="text-yellow-400">"I turn coffee into code ☕➡️💻"</span></div>
                  <div className="text-blue-400">{'};'}</div>
                  <div className="text-green-400 mt-1">console.log(<span className="text-yellow-400">"Welcome to my PORTFOLIO!"</span>);</div>
                  <div className="text-green-400">console.log(<span className="text-yellow-400">"Ready to build amazing things!"</span>);</div>
                </div>
                {/* Cursor blink animation */}
                <div className="absolute bottom-2 right-2 w-1 h-3 bg-green-400 animate-pulse"></div>
              </div>
            </div>
            {/* Monitor stand */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-gray-700 rounded-b"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-600 rounded"></div>
          </div>
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
