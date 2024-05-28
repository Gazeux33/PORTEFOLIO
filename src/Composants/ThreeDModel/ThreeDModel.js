import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeDModel = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Dimensions
        const WIDTH = 500;
        const HEIGHT = 500;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(WIDTH, HEIGHT);

        // Mounting to our React ref
        mountRef.current.appendChild(renderer.domElement);

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(20, WIDTH / HEIGHT, 0.1, 10000);
        camera.position.set(2, 0, 5.5);

        // Lights
        const addSpotLight = (x, y, z) => {
            const light = new THREE.SpotLight(0xffffff, 100.0);
            light.position.set(x, y, z);
            scene.add(light);
        };

        addSpotLight(0, 0, 5);
        addSpotLight(0, 0, -5);
        addSpotLight(0, 5, 0);
        addSpotLight(0, -5, 0);

        // Add AxesHelper to visualize the axes
        //const axesHelper = new THREE.AxesHelper(5);
        //scene.add(axesHelper);

        // Loader
        const loader = new GLTFLoader();
        loader.load('/models/macintosh/scene.gltf', (model) => {
            // Create a group to center rotation
            const mesh = model.scene;
            mesh.position.set(0.6, -0.3,1.3);
            mesh.scale.set(0.03, 0.03, 0.03);
            //mesh.rotateX(Math.PI/11);
            scene.add(mesh)
        });


        // Control
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} id="threeDModelContainer" />;
};

export default ThreeDModel;