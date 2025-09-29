import React, { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Tesseract({ size = 1, rotationSpeed = 0.01 }) {
  const groupRef = useRef();
  const [rotatedVertices, setRotatedVertices] = useState([]);

  // Generate vertices & edges once
  const { vertices4D, edges } = useMemo(() => {
    const vs = [];
    // 16 vertices: each coordinate ±1
    const coords = [-1, +1];
    for (let x of coords) {
      for (let y of coords) {
        for (let z of coords) {
          for (let w of coords) {
            vs.push([x, y, z, w]);
          }
        }
      }
    }

    const es = [];
    // Edges: connect vertices that differ in exactly one coordinate
    for (let i = 0; i < vs.length; i++) {
      for (let j = i + 1; j < vs.length; j++) {
        const a = vs[i];
        const b = vs[j];
        let diffCount = 0;
        for (let k = 0; k < 4; k++) {
          if (a[k] !== b[k]) diffCount++;
        }
        if (diffCount === 1) {
          es.push([i, j]);
        }
      }
    }

    // Optionally scale
    const scaled = vs.map(v => v.map(c => c * size));
    return { vertices4D: scaled, edges: es };
  }, [size]);

  // Rotation function: rotate a 4D point by some angle in a given plane
  function rotate4D(point, angle, i, j) {
    // rotate in plane (i, j) of 4D coords
    const res = [...point];
    const ci = Math.cos(angle),
      si = Math.sin(angle);
    const xi = point[i];
    const xj = point[j];
    res[i] = xi * ci - xj * si;
    res[j] = xi * si + xj * ci;
    return res;
  }

  // Project 4D → 3D
  function project4Dto3D([x, y, z, w]) {
    const distance = 3; // tweak for effect
    const wFactor = 1 / (distance - w);
    return [x * wFactor, y * wFactor, z * wFactor];
  }

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    const rotated = vertices4D.map(v => {
      // apply a few rotations
      let r = rotate4D(v, t * rotationSpeed, 0, 3); // x-w
      r = rotate4D(r, t * rotationSpeed * 0.7, 1, 3); // y-w
      r = rotate4D(r, t * rotationSpeed * 0.5, 2, 3); // z-w
      return r;
    });

    const pts3D = rotated.map(project4Dto3D);
    setRotatedVertices(pts3D);
  });

  return (
    <group ref={groupRef}>
      {edges.map(([i, j], index) => {
        if (!rotatedVertices[i] || !rotatedVertices[j]) return null;

        const [xi, yi, zi] = rotatedVertices[i];
        const [xj, yj, zj] = rotatedVertices[j];

        const points = [
          new THREE.Vector3(xi, yi, zi),
          new THREE.Vector3(xj, yj, zj),
        ];

        return (
          <line key={`edge-${i}-${j}-${index}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={points.length}
                array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color={"black"} />
          </line>
        );
      })}
    </group>
  );
}

export { Tesseract };