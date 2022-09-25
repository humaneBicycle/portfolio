import React from 'react'

export default function Box() {
  return (
    <mesh rotation={[45,45,45]}>
        <boxBufferGeometry attach="geometry" args={[3,3,3]} />
        <meshStandardMaterial attach="material" color="red" />
    </mesh>
  )
}
