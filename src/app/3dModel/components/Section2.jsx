"use client"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import * as styles from "../css/animation.module.css"
import { Shoe } from '@/app/Models/Shoe'
import { OrbitControls } from '@react-three/drei'
import { Cloud } from '@/app/Models/Cloud'
export default function Section2() {
  return (
    <section className={styles.section2} id='draco'>
      <Canvas dpr={[1, 1.5]} frameloop='demand'>
        <ambientLight/>
        <Shoe/>
        <OrbitControls enableZoom={false}/>
      </Canvas>
    </section>
  )
}
