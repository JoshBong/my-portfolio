import React from 'react';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

// This is the main component for our 3D book.
export default function Book() {
  // We use a ref to get direct access to the group object in the 3D scene.
  // This is useful for animations.
  const groupRef = useRef();

  // The useFrame hook runs on every single frame, which is perfect for animations.
  // For now, let's make the book slowly rotate to show it's a 3D object.
  useFrame((state, delta) => {
    // We can safely rotate the groupRef.current object.
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1; // Rotate slowly
    }
  });

  return (
    // The <group> is an invisible container that holds all parts of our book.
    // We can position, rotate, and scale this group to affect the entire book.
    <group ref={groupRef}>
      {/* This <mesh> is a placeholder for a single page.
        A mesh is a 3D object composed of a shape (geometry) and a surface (material).
      */}
      <mesh>
        {/* A planeGeometry is a flat rectangle. Perfect for a page. */}
        <planeGeometry args={[1.5, 2]} /> 
        {/* A basic material that is not affected by lights. */}
        <meshBasicMaterial color="white" />
      </mesh>
    </group>
  );
}
