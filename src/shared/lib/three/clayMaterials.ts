import { Mesh, MeshStandardMaterial, Object3D, Vector2 } from "three";

type MaterialShader = {
  uniforms: Record<string, { value: unknown }>;
  vertexShader: string;
  fragmentShader: string;
};

export const CLAY_COLORS = {
  sprout: "#8faa68",
  mound: "#6f4228",
} as const;

export function createClayMaterial(color: string) {
  return new MeshStandardMaterial({
    color,
    roughness: 0.95,
    metalness: 0,
  });
}

export function createEdgeFadeClayMaterial(
  color: string,
  {
    fadeStart,
    fadeEnd,
    center = new Vector2(0, 0),
  }: {
    fadeStart: number;
    fadeEnd: number;
    center?: Vector2;
  },
) {
  const material = createClayMaterial(color);

  material.transparent = true;
  material.depthWrite = false;
  material.alphaTest = 0;
  material.onBeforeCompile = (shader: MaterialShader) => {
    shader.uniforms.uFadeStart = { value: fadeStart };
    shader.uniforms.uFadeEnd = { value: fadeEnd };
    shader.uniforms.uFadeCenter = { value: center };

    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      `
      #include <common>
      varying vec3 vWorldPosition;
      `,
    );
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      `
      #include <begin_vertex>
      vWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;
      `,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <common>",
      `
      #include <common>
      uniform float uFadeStart;
      uniform float uFadeEnd;
      uniform vec2 uFadeCenter;
      varying vec3 vWorldPosition;
      `,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <alphamap_fragment>",
      `
      #include <alphamap_fragment>
      float edgeDistance = distance(vWorldPosition.xz, uFadeCenter);
      diffuseColor.a *= 1.0 - smoothstep(uFadeStart, uFadeEnd, edgeDistance);
      `,
    );
  };
  material.customProgramCacheKey = () =>
    `edge-fade-${fadeStart}-${fadeEnd}-${center.x}-${center.y}`;

  return material;
}

export function applyClayMaterial(root: Object3D, color: string) {
  root.traverse((child) => {
    const mesh = child as Mesh;

    if (!mesh.isMesh) return;

    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.material = createClayMaterial(color);
  });
}

export function applyEdgeFadeClayMaterial(
  root: Object3D,
  color: string,
  fade: {
    fadeStart: number;
    fadeEnd: number;
    center?: Vector2;
  },
) {
  root.traverse((child) => {
    const mesh = child as Mesh;

    if (!mesh.isMesh) return;

    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.material = createEdgeFadeClayMaterial(color, fade);
  });
}
