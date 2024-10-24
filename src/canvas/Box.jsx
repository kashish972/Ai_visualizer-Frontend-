import React from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture} from '@react-three/drei'

import state from '../store'

const Box = () => {
    const snap = useSnapshot(state)
    const { nodes, materials } = useGLTF('/table_baked.glb')

    const logoTexture = useTexture(snap.logoDecal)
    const fullTexture = useTexture(snap.fullDecal)

    useFrame((state, delta) => {
        easing.dampC(materials.tabletop.color, snap.color, 0.25, delta)
    })

    const stateString = JSON.stringify(snap)

  return (
    <group key={stateString}>
      <mesh
      castShadow
      geometry={nodes.table_top.geometry}
      material={materials.tabletop}
      material-roughness={1}
      dispose={null}
      scale={[12,12,12]}
      position={[0.1,-0.25,0]}
      rotation={[Math.PI / 0.1, 1.1, 0.6]}
      >
        {snap.isFullTexture && (
            <Decal
                position={[-0.05,-0.05,0]}
                rotation={[0,0.01,0.03]}
                scale={0.4}
                map={fullTexture}
            />
        )}
        {snap.isLogoTexture && (
            <Decal
                position={[0.00,0.03,0.0]}
                rotation={[1.5,0.2,4.75]}
                scale={0.02}
                map={logoTexture}
                anisotropy={16}
                depthTest={false}
                depthWrite={true}
            />
        )}
      </mesh>
    </group>
  )
}

export default Box
