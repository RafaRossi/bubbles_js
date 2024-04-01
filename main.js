import * as THREE from 'three';
import { Color } from "three";
import { Scene } from "./public/SceneManager.js";

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: Color.NAMES.bisque } );

const cube = new THREE.Mesh( geometry, material );
Scene.add( cube );

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    renderer.render( Scene, camera );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
animate();