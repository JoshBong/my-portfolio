import React from 'react';
import Head from 'next/head';
import { Canvas } from '@react-three/fiber';
import { useRouter } from 'next/router';

// A simple back button component
function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('/')}
      style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 100,
        padding: '10px 15px',
        background: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      &larr; Back to Cover
    </button>
  );
}

export default function ProjectsPage() {
  return (
    <div className="granite" style={{ width: '100vw', height: '100vh' }}>
      <Head>
        <title>The Code Cookbook | Projects</title>
      </Head>
      <BackButton />

      {/* Basic 3D Scene */}
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={5} />
        
        {/* Simple test cube */}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hsl(180, 100%, 50%)" />
        </mesh>
      </Canvas>
    </div>
  );
}