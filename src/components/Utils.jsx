import * as THREE from "three";

export const GenerateInitMaterials = (colorsMaterial) => {
  const falloutBoyTexture = new THREE.TextureLoader().load("/FalloutBoy.png");
  falloutBoyTexture.flipY = false;

  const cristalMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x8c8c8c,
    metalness: 0.0,
    roughness: 0.2,
    transparent: true,
    opacity: 1,
    envMapIntensity: 1.0,
    transmission: 1,
  });

  const sodaMaterial = new THREE.MeshStandardMaterial({
    color: 0x000,
    roughness: 1,
    opacity: 1,
    metalness: 1,
    transparent: false,
  });

  const brandMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.5,
    metalness: 1,
    envMapIntensity: 1,
    transparent: true,
    map: falloutBoyTexture,
  });

  return { cristalMaterial, sodaMaterial, brandMaterial };
};

export const LoadTextures = (imagePaths) => {
  const textureLoader = new THREE.TextureLoader();
  const textures = {};

  imagePaths.forEach((img) => {
    const path = `/${img}.png`;
    const texture = textureLoader.load(path);
    texture.flipY = false;
    textures[img] = texture;
  });

  return textures;
};

export const LoadAnimations = (scene, colors, cristalMaterial, sodaMaterial, brandMaterial, textures) => {
  const Animations = [
    // Init Animations - Page 0
    {
      target: scene.getObjectByName("BottleGroup").position,
      pointTime: 0,
      animationsProperties: {
        x: 0,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("BottleGroup").rotation,
      pointTime: 0,
      animationsProperties: {
        y: 0,
        onUpdate: () => {},
      },
    },
    {
      target: colors,
      pointTime: 0,
      animationsProperties: {
        cristal: "#8c8c8c",
        soda: "#000",
        onUpdate: () => {
          cristalMaterial.color.set(new THREE.Color(colors.cristal.replace(",1)", ")")));
          cristalMaterial.needsUpdate = true;

          sodaMaterial.color.set(new THREE.Color(colors.soda.replace(",1)", ")")));
          sodaMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: colors,
      pointTime: 0.5,
      animationsProperties: {
        onUpdate: () => {
          brandMaterial.map = textures["FalloutBoy"];
          brandMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: document.getElementById("bg_container"),
      pointTime: 0.1,
      animationsProperties: {
        background: "#000000",
      },
    },

    // Nuka Cola - Page 1
    {
      target: scene.getObjectByName("BottleGroup").position,
      pointTime: 2,
      animationsProperties: {
        x: 1,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("BottleGroup").rotation,
      pointTime: 2,
      animationsProperties: {
        y: Math.PI * 2,
        onUpdate: () => {},
      },
    },
    {
      target: colors,
      pointTime: 2,
      animationsProperties: {
        cristal: "#555555",
        soda: "#000000",
        onUpdate: () => {
          cristalMaterial.color.set(new THREE.Color(colors.cristal.replace(",1)", ")")));
          cristalMaterial.needsUpdate = true;

          sodaMaterial.color.set(new THREE.Color(colors.soda.replace(",1)", ")")));
          sodaMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: colors,
      pointTime: 3,
      animationsProperties: {
        onUpdate: () => {
          brandMaterial.map = textures["Classic"];
          brandMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: document.getElementById("Classic_Card"),
      pointTime: 2.5,
      animationsProperties: {
        opacity: 1,
        left: "25%",
        onUpdate: () => {},
      },
    },
    {
      target: document.getElementById("bg_container"),
      pointTime: 2.1,
      animationsProperties: {
        background: "#F37070",
      },
    },
    //   Quantum Cola - Page 2
    {
      target: scene.getObjectByName("BottleGroup").position,
      pointTime: 4,
      animationsProperties: {
        x: -1,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("BottleGroup").rotation,
      pointTime: 4,
      animationsProperties: {
        y: -Math.PI * 2,
        onUpdate: () => {},
      },
    },
    {
      target: colors,
      pointTime: 4,
      animationsProperties: {
        cristal: "#108587",
        soda: "#D0FFFF",
        onUpdate: () => {
          cristalMaterial.color.set(new THREE.Color(colors.cristal.replace(",1)", ")")));
          cristalMaterial.needsUpdate = true;

          sodaMaterial.color.set(new THREE.Color(colors.soda.replace(",1)", ")")));
          sodaMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: colors,
      pointTime: 5,
      animationsProperties: {
        onUpdate: () => {
          brandMaterial.map = textures["Quantum"];
          brandMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: document.getElementById("Quantum_Card"),
      pointTime: 4.5,
      animationsProperties: {
        opacity: 1,
        left: "65%",
        onUpdate: () => {},
      },
    },
    {
      target: document.getElementById("Classic_Card"),
      pointTime: 4.5,
      animationsProperties: {
        opacity: 0,
        left: "50%",
        duration: 0.5,
        onUpdate: () => {},
      },
    },
    {
      target: document.getElementById("bg_container"),
      pointTime: 4.1,
      animationsProperties: {
        background: "#71C4F4",
      },
    },
    // Sunset Sarsaparrilla - Page 3
    {
      target: scene.getObjectByName("BottleGroup").position,
      pointTime: 6,
      animationsProperties: {
        x: 1,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("BottleGroup").rotation,
      pointTime: 6,
      animationsProperties: {
        y: Math.PI * 2,
        onUpdate: () => {},
      },
    },
    {
      target: colors,
      pointTime: 6.1,
      animationsProperties: {
        cristal: "#7E3810",
        soda: "#602A0C",
        onUpdate: () => {
          cristalMaterial.color.set(new THREE.Color(colors.cristal.replace(",1)", ")")));
          cristalMaterial.needsUpdate = true;

          sodaMaterial.color.set(new THREE.Color(colors.soda.replace(",1)", ")")));
          sodaMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: colors,
      pointTime: 7,
      animationsProperties: {
        onUpdate: () => {
          brandMaterial.map = textures["Sunset"];
          brandMaterial.needsUpdate = true;
        },
      },
    },
    {
      target: document.getElementById("Sunset_Card"),
      pointTime: 6.5,
      animationsProperties: {
        opacity: 1,
        left: "25%",
        onUpdate: () => {},
      },
    },
    {
      target: document.getElementById("Quantum_Card"),
      pointTime: 6.5,
      animationsProperties: {
        opacity: 0,
        left: "50%",
        duration: 0.5,
        onUpdate: () => {},
      },
    },
    {
      target: document.getElementById("bg_container"),
      pointTime: 6.1,
      animationsProperties: {
        background: "#F5C771",
      },
    },
  ];
  return Animations;
};
