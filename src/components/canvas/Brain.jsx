import React, { Suspense, useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Preload, Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';
import CanvasLoader from '../Loader';

const ParticleField = () => {
  const ref = useRef();
  const particleCount = 5000;
  const [hovered, setHovered] = useState(false);
  const [hoverPoint, setHoverPoint] = useState(new THREE.Vector3());
  const [particleSizes, setParticleSizes] = useState(new Float32Array(particleCount).fill(0.025));
  const [particleOpacities, setParticleOpacities] = useState(new Float32Array(particleCount).fill(0.6));

  const particles = useMemo(() => {
    return new Float32Array(random.inSphere(new Float32Array(particleCount), { radius: 3.5 }));
  }, []);

  useFrame((state) => {
    const { clock } = state;
    const time = clock.getElapsedTime();
    
    // Independent rotation pattern with increased speed
    ref.current.rotation.y = time * 0.15;
    ref.current.rotation.x = Math.sin(time * 0.3) * Math.PI * 0.3;
    ref.current.rotation.z = Math.cos(time * 0.25) * Math.PI * 0.2;
    
    // Enhanced position movement
    ref.current.position.y = Math.sin(time * 0.4) * 0.8;
    ref.current.position.x = Math.cos(time * 0.5) * 0.8;
    ref.current.position.z = Math.sin(time * 0.3) * 0.5;
    
    // More pronounced scale breathing effect
    const scale = 1 + Math.sin(time * 0.8) * 0.25;
    ref.current.scale.set(scale, scale, scale);

    // Update particle sizes and opacities with enhanced effects
    if (hovered) {
      const newSizes = new Float32Array(particleCount);
      const newOpacities = new Float32Array(particleCount);
      
      for (let i = 0; i < particleCount; i++) {
        const x = particles[i * 3];
        const y = particles[i * 3 + 1];
        const z = particles[i * 3 + 2];
        
        const particlePos = new THREE.Vector3(x, y, z);
        const distance = particlePos.distanceTo(hoverPoint);
        const influence = Math.max(0, 1 - distance / 2.5); // Increased influence radius
        
        // Enhanced twinkle effect
        const twinkle = Math.sin(time * 8 + i * 0.2) * 0.5 + 0.5;
        newSizes[i] = 0.035 + (influence * 0.04 * twinkle); // Increased base and max size
        newOpacities[i] = 0.7 + (influence * 0.3 * twinkle); // Increased base opacity
      }
      
      setParticleSizes(newSizes);
      setParticleOpacities(newOpacities);
    } else {
      // Larger default values
      setParticleSizes(new Float32Array(particleCount).fill(0.035));
      setParticleOpacities(new Float32Array(particleCount).fill(0.7));
    }
  });

  const handlePointerMove = (event) => {
    if (event.point) {
      const localPoint = event.point.clone();
      ref.current.worldToLocal(localPoint);
      setHoverPoint(localPoint);
    }
  };

  return (
    <Points 
      ref={ref} 
      positions={particles} 
      stride={3} 
      frustumCulled={false}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerMove={handlePointerMove}
    >
      <PointMaterial
        transparent
        color="#915eff"
        size={particleSizes}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={particleOpacities}
        vertexColors
      />
    </Points>
  );
};

const Brain = () => {
  const brainRef = useRef();
  const materialRef = useRef();
  const velocityRef = useRef({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverPoint, setHoverPoint] = useState(new THREE.Vector3());
  const { viewport } = useThree();
  const [lightPosition, setLightPosition] = useState(0);
  const [trailPoints, setTrailPoints] = useState([]);
  const glowRef = useRef();

  const synapseCount = 500;
  const synapses = useMemo(() => {
    return new Float32Array(random.inSphere(new Float32Array(synapseCount * 3), { radius: 2.5 }));
  }, []);

  const trailCount = 100;
  const trailGeometry = useMemo(() => {
    const points = [];
    for (let i = 0; i < trailCount; i++) {
      const t = i / trailCount;
      const angle = t * Math.PI * 8;
      const radius = 1 + Math.sin(t * Math.PI * 4) * 0.2;
      points.push(
        new THREE.Vector3(
          Math.cos(angle) * radius,
          Math.sin(angle * 2) * 0.5,
          Math.sin(angle) * radius
        )
      );
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const deltaTime = state.clock.getDelta();

    // Update light position with significantly increased speed and more dynamic movement
    const lightSpeed = 2.0;
    const oscillation = Math.sin(time * 0.8) * 0.8 + Math.cos(time * 0.6) * 0.6;
    setLightPosition((prev) => (prev + (lightSpeed + oscillation) * deltaTime) % (Math.PI * 2));
    
    if (materialRef.current && materialRef.current.userData.shader) {
      materialRef.current.userData.shader.uniforms.lightPosition.value = lightPosition;
      materialRef.current.needsUpdate = true;
    }
    
    // Implement velocity-based dampening for smoother rotation
    const springStrength = 0.02; // Increased from 0.01
    const dampening = 0.92; // Adjusted from 0.95
    
    const targetRotationY = (mousePosition.x * Math.PI) / 6; // Increased rotation range
    const targetRotationX = (mousePosition.y * Math.PI) / 6;
    
    // Calculate acceleration based on distance to target
    const accelerationY = (targetRotationY - brainRef.current.rotation.y) * springStrength;
    const accelerationX = (targetRotationX - brainRef.current.rotation.x) * springStrength;
    
    // Update velocity with dampening
    velocityRef.current.x = (velocityRef.current.x + accelerationX * deltaTime) * dampening;
    velocityRef.current.y = (velocityRef.current.y + accelerationY * deltaTime) * dampening;
    
    // Apply velocity to rotation
    brainRef.current.rotation.y += velocityRef.current.x;
    brainRef.current.rotation.x += velocityRef.current.y;
    
    // Implement smooth scale transition with spring physics
    const targetScale = hovered ? 1.25 : 1.0; // Increased scale on hover
    const scaleSpringStrength = 0.12; // Increased from 0.08
    const currentScale = brainRef.current.scale.x;
    const scaleDelta = (targetScale - currentScale) * scaleSpringStrength;
    const newScale = currentScale + scaleDelta * deltaTime * 60;
    brainRef.current.scale.set(newScale, newScale, newScale);
    
    // Gradual color transitions based on hover point
    if (materialRef.current && materialRef.current.userData.vertexColors) {
      const colors = materialRef.current.userData.vertexColors;
      const positions = brainRef.current.children[3].geometry.attributes.position;
      const baseColor = new THREE.Color('#915eff');
      const hoverColor = new THREE.Color('#ff5e91');
      
      for (let i = 0; i < positions.count; i++) {
        const vertex = new THREE.Vector3(positions.getX(i), positions.getY(i), positions.getZ(i));
        const distance = vertex.distanceTo(hoverPoint);
        const influence = Math.max(0, 1 - distance / 1.5);
        
        colors.setXYZ(
          i,
          THREE.MathUtils.lerp(baseColor.r, hoverColor.r, influence * (hovered ? 0.6 : 0)),
          THREE.MathUtils.lerp(baseColor.g, hoverColor.g, influence * (hovered ? 0.6 : 0)),
          THREE.MathUtils.lerp(baseColor.b, hoverColor.b, influence * (hovered ? 0.6 : 0))
        );
      }
      colors.needsUpdate = true;
    }
  });

  const handlePointerMove = (event) => {
    try {
      // Update hover point for color transition with increased intensity
      if (event.point) {
        const localPoint = event.point.clone();
        brainRef.current.worldToLocal(localPoint);
        setHoverPoint(localPoint);
      }
      
      // Enhanced mouse interaction sensitivity
      if (event.uv && typeof event.uv.x === 'number' && typeof event.uv.y === 'number') {
        const mouseDampening = 0.5; // Increased from 0.25
        const x = ((event.uv.x * 2 - 1) * viewport.width / 2) * mouseDampening;
        const y = ((event.uv.y * 2 - 1) * viewport.height / 2) * mouseDampening;
        setMousePosition({ x, y });
        
        velocityRef.current = { x: 0, y: 0 };
      }
    } catch (error) {
      console.warn('Error in handlePointerMove:', error);
    }
  };

  // Define the shader code
  const shaderCode = {
    fragmentShader: `
      uniform float lightPosition;
      uniform vec3 baseColor;
      uniform vec3 lightColor;
      varying vec3 vPosition;
      varying vec3 vNormal;
      
      void main() {
        vec3 normalizedPos = normalize(vPosition);
        vec3 normalizedNormal = normalize(vNormal);
        
        float gradientFactor = dot(normalizedNormal, vec3(0.0, 1.0, 0.0));
        float reverseFactor = 1.0 - abs(gradientFactor);
        
        vec3 colorStart = vec3(0.568, 0.368, 1.0);
        vec3 colorMid = vec3(0.8, 0.4, 1.0);
        vec3 colorEnd = vec3(0.4, 0.2, 0.8);
        
        // Enhanced distance-based glow
        float distanceToHover = length(vPosition - vec3(0.0, 0.0, 0.0));
        float glowIntensity = smoothstep(2.5, 0.0, distanceToHover);
        
        vec3 gradient1 = mix(colorStart, colorMid, gradientFactor * 0.7 + 0.5);
        vec3 gradient2 = mix(colorMid, colorEnd, reverseFactor);
        
        float blendFactor = (normalizedPos.z + 1.0) * 0.5;
        vec3 baseGradient = mix(gradient1, gradient2, blendFactor);
        
        // Enhanced glow effect with more vibrant color
        vec3 glowColor = vec3(1.0, 0.4, 1.0);
        vec3 finalColor = mix(baseGradient, glowColor, glowIntensity * 0.8);
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `
  };

  
  return (
    <group 
      ref={brainRef} 
      onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)}
      onPointerMove={handlePointerMove}
    >
      <hemisphereLight intensity={15} groundColor="#000033" />
      <pointLight intensity={12} position={[10, 10, 10]} color="#915eff" />
      <spotLight
        intensity={10}
        position={[-20, 50, 10]}
        angle={0.2}
        penumbra={0.9}
        castShadow
        shadow-mapSize={1024}
        color="#ffffff"
      />
      
      <mesh scale={1.5} position={[0, -1, 0]}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshPhongMaterial
          ref={materialRef}
          vertexColors
          wireframe
          wireframeLinewidth={1.2}
          roughness={0.3}
          metalness={0.8}
          emissive="#915eff"
          emissiveIntensity={0.4}
          onBeforeCompile={(shader) => {
            shader.uniforms.lightPosition = { value: lightPosition };
            shader.uniforms.baseColor = { value: new THREE.Color('#915eff') };
            shader.uniforms.lightColor = { value: new THREE.Color('#ffffff') };
            materialRef.current.userData.shader = shader;
          }}
          customProgramCacheKey={() => lightPosition}
        />
      </mesh>

      <Points positions={synapses} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#915eff"
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={hovered ? 0.9 : 0.6}
        />
      </Points>

      <line geometry={trailGeometry}>
        <lineBasicMaterial
          ref={glowRef}
          color="#ff5e91"
          transparent
          opacity={0.6}
          linewidth={1}
          vertexColors
          blending={THREE.AdditiveBlending}
        />
      </line>

      <mesh scale={1.6} position={[0, -1, 0]}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshPhongMaterial
          color="#915eff"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
};

const BrainCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 2.5}
        />
        <Brain />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BrainCanvas;