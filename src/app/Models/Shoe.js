"use client"
import React from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three-stdlib'

export function Shoe(props) {
  const gltf = useLoader(GLTFLoader, '/assets/Shoe-draco.glb', (loader) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco/') 
    loader.setDRACOLoader(dracoLoader)
  })

  return (
    <group {...props} dispose={null} scale={[15, 15, 15]}>
      <primitive object={gltf.scene} />
    </group>
  )
}
