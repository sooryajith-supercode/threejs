"use client"
import React, { useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import * as styles from "../css/animation.module.css"
import { Shoe } from '@/app/Models/Shoe'
import { OrbitControls } from '@react-three/drei'

function InvalidateOnMouseMove() {
  const { invalidate } = useThree()

  useEffect(() => {
    const onMoveMouse = () => invalidate()
    window.addEventListener('mousemove', onMoveMouse)
    return () => window.removeEventListener('mousemove', onMoveMouse)
  }, [invalidate])

  return null 
}

export default function Section2() {
  return (
    <section className={styles.section2} id='draco'>
      <Canvas dpr={[1, 1.5]} frameloop='demand'>
        <ambientLight />
        <Shoe />
        <OrbitControls enableZoom={false} enableDamping={false} enablePan={false}/>
        <InvalidateOnMouseMove />
      </Canvas>
    </section>
  )
}
