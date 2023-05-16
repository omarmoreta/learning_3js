import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

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

// CUBE
const geometry = new THREE.BoxGeometry(7, 7, 7);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// LINES
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });

const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

const bufferGeometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(bufferGeometry, lineMaterial);
scene.add(line);

// needed for the line to be seen
camera.position.set(0, 0, 20);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

// check if WebGL is supported and display a message to the user if it is not
if (WebGL.isWebGLAvailable()) {
  animate();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}
