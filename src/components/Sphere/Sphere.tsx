import { useRef, useEffect } from "react";
import * as THREE from "three";

const Sphere: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();

    // create sphere
    const loader = new THREE.TextureLoader();
    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: "#00CC45",
      roughness: 0.5,
      // metalness: 0.2,
      map: loader.load("./4k_venus.jpg"),
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Point Light
    const pointLight = new THREE.PointLight(0xffffff, 100, 100);
    pointLight.position.set(0, 4, 14);
    scene.add(pointLight);

    const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
    scene.add(pointLightHelper);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1, // Set a sensible near clipping plane
      100 // Set a sensible far clipping plane
    );
    camera.position.z = 10;
    camera.lookAt(sphere.position);
    // scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Ensure the renderer is sharp on high-res screens
    renderer.outputColorSpace = THREE.SRGBColorSpace; // Set the correct color space
    // renderer.render(scene, camera);
    mount.appendChild(renderer.domElement);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    // Adjust sphere size based on window width
    const updateSphereSize = () => {
      const width = window.innerWidth;
      const sphereScale = width < 768 ? 0.7 : width < 1024 ? 1 : 1; // Example breakpoints
      sphere.scale.set(sphereScale, sphereScale, sphereScale);
    };

    // Call updateSphereSize on mount and when window resizes
    updateSphereSize();
    window.addEventListener("resize", updateSphereSize);

    // Resize Handler
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("resize", updateSphereSize);
      geometry.dispose();
      material.dispose();
      pointLight.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
};

export default Sphere;
