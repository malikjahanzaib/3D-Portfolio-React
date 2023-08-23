import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#e6e6fa"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal 
          position={[0, 0, 1]}
          rotation={[2* Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return(
    <Canvas
      // frameloop='demand'
      // frameloop='always'
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* removed fallback={<CanvasLoader />} from Suspense from the original */}
      <Suspense fallback={<CanvasLoader />}> 
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

//Above is the OG code where the ball motion rendering issue was fixed by removing "frameloop='demand'" in the BallCanvas Component.
// frameloop='always' should also fix the issue.
// More complex code fix below.






// This Code has the ball motion rendering issue fixed. Original Code is above.

// import React, { Suspense, useState, useEffect } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
// import CanvasLoader from '../Loader';
// import * as THREE from 'three';

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl]);
//   const [rotation, setRotation] = useState([0, 0, 0]);

//   useEffect(() => {
//     let previousTimestamp = null;

//     const animate = (timestamp) => {
//       if (!previousTimestamp) {
//         previousTimestamp = timestamp;
//       }

//       // Calculate the time elapsed since the last frame
//       const deltaTime = timestamp - previousTimestamp;
//       previousTimestamp = timestamp;

//       // Calculate the rotation angles based on time
//       const rotationSpeed = 0.001; // Adjust the rotation speed as needed
//       const newRotation = rotation.map((angle, index) => angle + rotationSpeed * deltaTime);

//       setRotation(newRotation);

//       // Request the next animation frame
//       requestAnimationFrame(animate);
//     };

//     // Start the animation loop
//     requestAnimationFrame(animate);

//     return () => {
//       previousTimestamp = null;
//     };
//   }, []);

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={2.75} rotation={rotation}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial
//           // color="#fff8eb"
//           // color="#D8BFD8" //Light Purple
//           color="#e6e6fa" //Lavender
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[0, 0, 0]}
//           flatShading
//           map={decal}
//         />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas
//       frameloop="demand"
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <OrbitControls enableZoom={false} />
//       <Suspense fallback={<CanvasLoader />}>
//         <Ball imgUrl={icon} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;

// Explanation

// Animation Loop using requestAnimationFrame:
// The core of the animation is handled by the requestAnimationFrame function. This function is like a built-in timer that tells the browser to call a specific function before the next repaint. This is how animations are achieved in JavaScript, creating a smooth and consistent motion.

// Calculating Delta Time:
// One key challenge in animations is making them smooth across various devices and frame rates. The timestamp passed to the animate function indicates the current time in milliseconds. By calculating the time elapsed between each frame (delta time), we can ensure that the rotation is consistent regardless of the device's frame rate.

// Incrementing Rotation:
// Instead of updating the rotation directly by a fixed angle each frame, we're now updating the rotation angles based on the elapsed time and a rotation speed factor. This ensures that the ball rotates smoothly at the same speed on different devices and frame rates.

// Updating State in Animation Loop:
// The setRotation function updates the rotation state, which in turn causes the React component to re-render with the updated rotation angles. This creates the illusion of animation.

// Cleaning Up:
// The useEffect hook returns a cleanup function that resets the previousTimestamp to null when the component is unmounted. This ensures that the animation loop stops and prevents any potential memory leaks.

// The combination of these changes creates a continuous and smooth animation that doesn't rely on user input (like scrolling) but rather operates on its own within the requestAnimationFrame loop.