'use client';

import {Canvas,useThree} from '@react-three/fiber'

export default function Scene(){
    return(
        <Canvas>
            <directionalLight position={[-5,-5,5]} intensity={5}/>
            // add module
        </Canvas>
    )
}