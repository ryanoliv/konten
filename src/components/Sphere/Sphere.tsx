import { useRef, useEffect } from "react";
import * as THREE from "three";

const Sphere: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Directly assigning the ref to a variable for use in the cleanup function
    const mount = mountRef.current;
    if (!mount) return;

    //Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Sphere geometry and material setup
    const geometry = new THREE.SphereGeometry(20, 32, 32);

    // const material = new THREE.MeshBasicMaterial({
    //   color: 0x00cc45,
    //   wireframe: true,
    // });

    const material = new THREE.MeshStandardMaterial({
      color: 0x00cc45,
      metalness: 0.2,
      roughness: 0.7,
      wireframe: true,
    });

    // const material = new THREE.PointsMaterial({
    //   size: 0.1,
    //   color: 0x00cc45,
    // });

    // const sphere = new THREE.Points(geometry, material);

    // Creating a sphere mesh
    const sphere = new THREE.Mesh(geometry, material);
    // sphere.rotation.z = THREE.MathUtils.degToRad(23.5);
    scene.add(sphere);

    // Spotlight setup for the eclipse effect
    const spotlight = new THREE.SpotLight(0xffffff, 2); // Increased intensity
    spotlight.position.set(15, 0, 0);
    spotlight.target = sphere; // Make sure the spotlight is targeting the sphere
    spotlight.angle = 0.3; // Narrower angle for a more pronounced effect
    spotlight.penumbra = 0.5; // Soft edge for the spotlight
    spotlight.decay = 2; // Optional: if you want the light to decay over distance
    spotlight.distance = 50; // Optional: maximum distance of the light
    scene.add(spotlight);

    // Increase ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.13);
    scene.add(ambientLight);

    // Add a directional light for stronger illumination
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(15, -5, -30);
    scene.add(directionalLight);

    // Scene positioning
    // camera.position.z = 15;

    // Scene positioning
    camera.position.set(30, 10, 20); // Adjust the camera position to see the effect
    camera.lookAt(sphere.position);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Scene rotation
      sphere.rotation.y += 0.001;

      // Render the scene
      renderer.render(scene, camera);
    };

    // Start the animation loop
    animate();

    // Resize Handler
    const onWindowResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", onWindowResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", onWindowResize);
      geometry.dispose();
      material.dispose();
      // Dispose of any other resources (textures, etc.)
      renderer.dispose();
      if (mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
};

export default Sphere;
