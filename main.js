import * as THREE from "three";

// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
// To actually be able to display anything with three.js, we need three things: scene, camera and renderer, so that we can render the scene with camera.

// CREATING A SCENE
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // field of view in degrees, the extent of the scene that is seen on the display at any given moment.
  window.innerWidth / window.innerHeight, // aspect ratio
  // objects further away from the camera than the value of far or closer than near won't be rendered.
  0.1, // near
  1000 // far
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
