"use client"
import { Cloud } from '@/app/Models/Cloud'
import { Canvas } from '@react-three/fiber'
import React, { useState } from 'react'
import * as styles from "../css/animation.module.css"
import { Center, Environment, OrbitControls } from '@react-three/drei'


export default function Section1() {
    const [rotate, setRotate] = useState(false);
    const [useBasic, setUseBasic] = useState(false);

    const handlerotation = () => {
        setRotate(prev => !prev); 
    };
    const handlebasic=()=>{
        setUseBasic(prev => !prev);
    }
    
    return (
        <>
            <section className={styles?.section1}>
                <Canvas>
                    <Center>
                        <ambientLight  color="#8FEEFF"/>
                        <directionalLight position={[1, 0, 5]} color="white" />
                        <directionalLight position={[1, 1, 1]} color="white" />
                        <pointLight color="red" intensity={5} />
                        <Cloud rotate={rotate} useBasic={useBasic} />
                        {/* <axesHelper args={[3]}/> */}
                    </Center>
                    <OrbitControls autoRotate={false} enableDamping={false} enableZoom={false}/>
                    <Environment preset='sunset'/>
                </Canvas>
                <div className={styles?.btnDiv}>
                    <button className={styles.btn} onClick={handlerotation}>
                        {rotate ? 'Stop Rotation' : 'Rotate Model'}
                    </button>
                    <button className={styles.btn} onClick={handlebasic}>
                       {useBasic ? "Use Standard Material" :"Use Basic Material"}
                    </button>
                </div>
            </section>
        </>
    )
}
