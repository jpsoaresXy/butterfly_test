import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/ulysses_butterfly_2k.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/ulysses_butterfly_2k.glb"
  );

  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    console.log(materials);

    //@ts-ignore
    actions["fly"].play().paused = true;
  }, []);

  useFrame(
    () =>
      (actions["fly"].time =
        (actions["fly"]?.getClip().duration * scroll.offset) / 1)
  );
  return (
    <group ref={group}>
      <primitive
        object={scene}
        scale={[2, 2, 2]}
        rotation={[0, Math.PI / 2, 0]}
        position={[0, -1, 0]}
      />
    </group>
  );
}
