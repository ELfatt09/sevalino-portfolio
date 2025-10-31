import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model() {
  const group = useRef()
  const { scene, animations } = useGLTF('/3d-model/random-block.glb') // taruh di public/models/
  const { actions } = useAnimations(animations, group)

  // Auto play animasi pertama
  React.useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]]
        firstAction.play()
        firstAction.timeScale = 0.1 // Atur kecepatan animasi
    }
  }, [actions])

  return <primitive ref={group} object={scene} scale={0.5} />
}
