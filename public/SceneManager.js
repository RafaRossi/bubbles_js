import * as THREE from 'three';

export const Scene = new THREE.Scene();

const objectsInScene = [];

for (let i= 0; i < objectsInScene.length; i++)
{
    Scene.add(objectsInScene[i]);
}

function AddObjectInScene(object)
{
    objectsInScene.push(object)
}
