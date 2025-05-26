
    "use client"
    import { useGLTF } from '@react-three/drei'
    import { invalidate, useFrame } from '@react-three/fiber';
    import { useRef } from 'react';
    export function Cloud({rotate,useBasic,...props}) {
        const cloudRef = useRef();
    const { nodes, materials } = useGLTF('/assets/Cloud.glb')
    useFrame(() => {
        if (rotate && cloudRef.current) {
          cloudRef.current.rotation.y += 0.01;
          invalidate(); // force render
        }
      });
    return (
        <group {...props} dispose={null} ref={cloudRef}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere009.geometry}
            material={materials['Material.001']}
            position={[0, 0, 1]}
            scale={0.556}
        >
            {useBasic?(
                <meshBasicMaterial color="skyblue" metalness={0.4} roughness={0.3} />
            ):
            <meshStandardMaterial color="skyblue" metalness={0.4} roughness={0.3} />
            }
           
        </mesh>
        </group>
    )
    }