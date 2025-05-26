"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three-stdlib'

export function Shoe(props) {
  const groupRef = useRef()

  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -((event.clientY / window.innerHeight) * 2 - 1)
      setMouse({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  const gltf = useLoader(GLTFLoader, '/assets/Shoe-draco.glb', (loader) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco/') 
    loader.setDRACOLoader(dracoLoader)
  })
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = (mouse.x * 0.5 - groupRef.current.rotation.y) * 0.5
      groupRef.current.rotation.x = (-mouse.y * 0.5 - groupRef.current.rotation.x) * 0.5
    }
  }, [mouse])

  return (
    <group ref={groupRef}  {...props} dispose={null} scale={[15, 15, 15]}>
      <primitive object={gltf.scene} />
    </group>
  )
}
