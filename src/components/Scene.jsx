import React, { useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from './Model'

function CameraController() {
  const controlsRef = useRef()
  const { camera, gl } = useThree()

  return (
    <OrbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableZoom={false} // 🔒 disable zoom totally
      enablePan={true}
      enableRotate={true}
    />
  )
}

export default function Scene() {
  return (
    <Canvas className='w-full ' camera={{ position: [0, 1, 3], fov: 50 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 5]} />
      
      <Model />

      {/* Panggil CameraController setelah model */}
      <CameraController />
    </Canvas>
  )
}
