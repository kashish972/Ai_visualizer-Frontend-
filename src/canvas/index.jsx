import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center, OrbitControls} from '@react-three/drei'

import Shirt from './Shirt'
import Box from './Box'
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'

import { useSnapshot } from 'valtio'
import state from '../store'

const CanvasModel = () => {
  const snap = useSnapshot(state)

  return (
    <Canvas
      shadows
      camera={{position: [0,0,0], fov: 40}}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5}/>
      <Environment preset="city" />
      <pointLight position={[10,10,10]}/>
      <CameraRig>
        { <Backdrop /> }
        <Center>
          {snap.model === 'tshirt' && (<Shirt />)}
          {snap.model === 'box' && (<Box />)}
        </Center>
      </CameraRig>
      { <OrbitControls
        enableZoom={false}   // Disable zooming
        enableRotate={true}  // Enable rotation
        enablePan={false}    // Disable panning
        enableDamping={true} // Enable damping for smoother rotations
        dampingFactor={0.25} // Adjust damping factor as needed
        maxPolarAngle={Math.PI / 2} // Restrict rotation to the upper hemisphere if needed
      /> }
    </Canvas>
  )
}

export default CanvasModel
